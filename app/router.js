import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('biography');
  this.route('gallery');
  this.route('resume');
  this.route('contact');
  this.route('home');
});

export default Router;
