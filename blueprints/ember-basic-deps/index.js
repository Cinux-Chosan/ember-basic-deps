/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName(entityName) {
    // Normalize and validate entity name here.
    return entityName;
  },

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
