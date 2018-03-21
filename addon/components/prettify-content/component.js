import Component from '@ember/component';
import layout from './template';
import styles from './styles';    // or './styles' in pod format
import { load, check, moduleName } from 'chosan-ember-basic-deps/utils/util';

export default Component.extend({
  layout,
  styles,
  localClassNames: 'root',
  prettySelectors: 'pre',
  async init() {
    this._super(...arguments);
    if (!window.window.prettyPrint) {
      let baseDir = `${moduleName}/libs/google-code-prettify/`;
      load(`${baseDir}prettify.css`);
      load(`${baseDir}prettify.js`);
    }
    await check(() => window.prettyPrint);
    let prettySelectors = this.get('prettySelectors');
    let selectors = Array.isArray(prettySelectors) ? prettySelectors.join(',') : prettySelectors;
    this.$(selectors).addClass("prettyprint linenums");
    window.prettyPrint();
  }
});
