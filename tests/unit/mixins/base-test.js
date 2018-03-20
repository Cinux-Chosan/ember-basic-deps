import EmberObject from '@ember/object';
import BaseMixin from 'chosan-ember-basic-deps/mixins/base';
import { module, test } from 'qunit';

module('Unit | Mixin | base', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let BaseObject = EmberObject.extend(BaseMixin);
    let subject = BaseObject.create();
    assert.ok(subject);
  });
});
