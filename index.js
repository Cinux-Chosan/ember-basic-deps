'use strict';

module.exports = {
  name: 'chosan-ember-basic-deps',
  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    let target = parentAddon || app;
    let options = target.options || {};
    let basicDepsOptions = options.basicDepsOptions || {};
    try {
      options.fingerprint = options.fingerprint || {};
      options.fingerprint.exclude = options.fingerprint.exclude || [];
      options.fingerprint.exclude.push(`${this.name}/**/*.{js,css}`);
      if (basicDepsOptions.bootstrapOptions.autoImport) {
        target.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
        target.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
      }
    } catch (e) {
      //
    }
  }
}
