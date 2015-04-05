import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('another');
  this.route('two-components');
  this.route('compound-component');
  this.route('contains');
  this.resource('compound-route-outer', function() {
  	this.resource('compound-route-inner');
  })
});

export default Router;
