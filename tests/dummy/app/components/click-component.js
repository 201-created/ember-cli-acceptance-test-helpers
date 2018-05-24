import Component from '@ember/component';
import layout from '../templates/components/click-component';

export default Component.extend({
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
