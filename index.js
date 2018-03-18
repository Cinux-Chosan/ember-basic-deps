'use strict';

module.exports = {
  name: 'chosan-ember-basic-deps',
  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    let target = parentAddon || app;
    let basicDepsOptions = target.options.basicDepsOptions;
    
    if (basicDepsOptions.bootstrapOptions.autoImport) {
      target.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
      target.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    }
  }
}