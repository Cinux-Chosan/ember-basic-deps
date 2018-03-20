import Mixin from '@ember/object/mixin';
import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';

export default Mixin.create({
  _uid: computed(function() {
    return guidFor(this);
  })
});
