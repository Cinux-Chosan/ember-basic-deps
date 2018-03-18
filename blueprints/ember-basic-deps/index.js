/* eslint-env node */
module.exports = {
  description: '',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  beforeInstall() {
    return this.addPackagesToProject([
      {name: 'bootstrap'},
      {name: 'normalize.css'}
    ])
  }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
