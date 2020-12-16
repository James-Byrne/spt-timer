import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import { action } from '@ember/object';

import { statechart, matchesState } from 'ember-statecharts/computed';

function wait(n = 1000) {
  return new Promise(resolve => setTimeout(() => resolve(), n));
}

function timerConfig(currentState, nextState, durationParam) {
  return {
    invoke: {
      src: c => c.isPaused ? wait(200) : wait(1000),
      onDone: [
        {
          target: nextState,
          cond: c => c.elapsed >= c[durationParam],
          actions: c => c.elapsed = 0
        },
        {
          target: currentState,
          cond: c => !c.isPaused,
          actions: c => c.elapsed = c.isPaused ? c.elapsed : c.elapsed + 1
        },
        { target: currentState }
      ]
    },
    on: {
      PAUSE: {
        actions: c => c.isPaused = true
      },
      RESUME: {
        actions: c => c.isPaused = false
      },
      STOP: 'idle'
    }
  }
}

const timerMachine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'setup'
      }
    },
    setup: timerConfig('setup', 'work', 'setupDuration'),
    work: timerConfig('work', 'rest', 'workDuration'),
    rest: timerConfig('rest', 'done', 'restDuration'),
    done: {
      on: {
        '': [
          {
            target: 'work',
            cond: c => c.repeat
          },
          { target: 'idle' }
        ]
      }
    },
  }
}

export default class ApplicationController extends Controller {
  @statechart(timerMachine) statechart;

  @tracked elapsed = 0;
  @tracked setupDuration = 5;
  @tracked workDuration = 20;
  @tracked restDuration = 40;
  @tracked repeat = true;
  @tracked isPaused = false;

  @matchesState('idle') isIdle;
  @matchesState('setup') gettingReady;
  @matchesState('work') exercising;
  @matchesState('rest') resting;

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

  @action
  send(msg) {
    this.statechart.send(msg);
  }
}
