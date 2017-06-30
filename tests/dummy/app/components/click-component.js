import Ember from 'ember';
import layout from '../templates/components/click-component';

export default Ember.Component.extend({
  layout,
  classNames: ['click-component'],
  text: 'click me',
  didClick: false,

  actions: {
    doClick() {
      this.toggleProperty('didClick');
    }
  }
});
