import Controller from '@ember/controller';

import { action } from '@ember/object';

import { assign, Machine } from 'xstate';
import { interpreterFor, matchesState, useMachine } from 'ember-statecharts';

import { use } from 'ember-usable';

import NoSleep from 'nosleep.js';
import { BEEP } from '../lib/beep';

function wait(n = 1000) {
  return new Promise(resolve => setTimeout(() => resolve(), n));
}

const timerMachine = Machine({
  initial: 'idle',
  context: {
    elapsed: 0,
    setupDuration: 5,
    workDuration: 20,
    restDuration: 40,
    cycles: 0,
    isPaused: false
  },
  on: {
    PAUSE: { actions: assign({ isPaused: true }) },
    RESUME: { actions: assign({ isPaused: false }) },
    STOP: 'idle'
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'setup',
          actions: assign({ elapsed: 0, cycles: 0 })
        }
      }
    },
    setup: {
      invoke: {
        src: 'tick',
        onDone: [
          {
            target: 'work',
            cond: c => c.elapsed >= c.setupDuration,
            actions: ['resetElapsed', 'playBeep']
          },
          {
            target: 'setup',
            cond: 'isNotPaused',
            actions: 'incrementElapsed'
          },
          'setup'
        ]
      }
    },
    work: {
      invoke: {
        src: 'tick',
        onDone: [
          {
            target: 'rest',
            cond: c => c.elapsed >= c.workDuration,
            actions: ['resetElapsed', 'playBeep', 'incrementCycles']
          },
          {
            target: 'work',
            cond: 'isNotPaused',
            actions: 'incrementElapsed'
          },
          'work'
        ]
      }
    },
    rest: {
      on: {
        SKIP: {
          target: 'setup',
          actions: ['resetElapsed', 'playBeep']
        }
      },
      invoke: {
        src: 'tick',
        onDone: [
          {
            target: 'work',
            cond: c => c.elapsed >= c.restDuration,
            actions: ['resetElapsed', 'playBeep']
          },
          {
            target: 'rest',
            cond: 'isNotPaused',
            actions: 'incrementElapsed'
          },
          'rest'
        ]
      }
    },
  }
}, {
  guards: {
    isNotPaused({ isPaused }) {
      return !isPaused;
    }
  },
  services: {
    async tick({ isPaused }) {
       return isPaused ? wait(200) : wait(1000)
    }
  },
  actions: {
    resetElapsed: assign({ elapsed: 0 }),
    incrementElapsed: assign({ elapsed: c => c.elapsed + 1 }),
    incrementCycles: assign({ cycles: c => c.cycles + 1 }),
  }
});

export default class ApplicationController extends Controller {
  beep = new Audio(BEEP);
  noSleep = new NoSleep();

  @matchesState('idle') isIdle;
  @matchesState('setup') gettingReady;
  @matchesState('work') exercising;
  @matchesState('rest') resting;

  @use statechart = useMachine(timerMachine)
    .withConfig({
      actions: {
        playBeep: async () => {
          // on mobile devices we can only play one audio source at a time
          // so we need to disable no-sleep briefly in order to pay a sound
          this.noSleep.disable();
          await this.beep.play();
          this.noSleep.enable();
        }
      }
    });

  get machine() {
    return interpreterFor(this.statechart);
  }

  get cycles() {
    return this.machine.state.context.cycles;
  }

  get elapsed() {
    return this.machine.state.context.elapsed;
  }

  get setupDuration() {
    return this.machine.state.context.setupDuration;
  }

  get workDuration() {
    return this.machine.state.context.workDuration;
  }

  get restDuration() {
    return this.machine.state.context.restDuration;
  }

  get isPaused() {
    return this.machine.state.context.isPaused;
  }

  get timer() {
    if (this.gettingReady) return this.setupDuration - this.elapsed;
    if (this.exercising) return this.workDuration - this.elapsed;
    if (this.resting) return this.restDuration - this.elapsed;
    return 0;
  }

  get stateText() {
    if (this.gettingReady) return 'Get ready';
    if (this.exercising) return 'Hold!';
    if (this.resting) return 'Rest';
    return 'Idle';
  }

  get isRunning() {
    return !this.isIdle;
  }

  get canPause() {
    return !(this.isPaused || this.isIdle);
  }

  async setupBeep() {
    await this.beep.play();
    this.beep.src = BEEP;
  }

  @action
  send(msg) {
    // Setup the audio as part of a user interaction so
    // it will work on iOS devices
    this.setupBeep();
    if (msg === 'START') this.noSleep.enable();
    if (msg === 'STOP') this.noSleep.disable();
    this.statechart.send(msg);
  }
}
