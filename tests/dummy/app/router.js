import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('another');
  this.route('two-components');
  this.route('click-component');
  this.route('compound-component');
  this.route('contains');
  this.route('compound-route-outer', function() {
    this.route('compound-route-inner');
  });
});

export default Router;
