import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | spt-timer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:spt-timer');
    assert.ok(route);
  });
});
