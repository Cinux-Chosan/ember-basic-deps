'use strict';
const { join, resolve } = require('path');

module.exports = {
  name: 'ember-basic-deps',
  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    let target = parentAddon || app;
    // target.import( 'node_modules/bootstrap/dist/css/bootstrap.min.css');
    // target.import( 'node_modules/bootstrap/dist/js/bootstrap.min.js');
    // importBower(target, 'normalize.css/normalize.css', true);
    // importBower(target, 'bootstrap/dist/css/bootstrap.min.css');
    // importBower(target, 'bootstrap/dist/js/bootstrap.min.js');
  }
};

function importBower(target, path, type, prepend) {
  console.log(target.bowerDirectory + '/' + path);
  
  target.import(target.bowerDirectory + '/' + path, {
    type,
    prepend
  });
}