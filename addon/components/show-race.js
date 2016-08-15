import Ember from 'ember';
import layout from '../templates/components/show-race';
import C from 'ember-adnd-utils/utils/constants';

export default Ember.Component.extend({
  layout,

  race: null,

  raceName: Ember.computed('race', function() {
    return C.RACE_NAMES[this.get('race')];
  })
});
