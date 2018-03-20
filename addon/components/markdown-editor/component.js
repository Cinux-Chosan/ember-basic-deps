import Component from '@ember/component';
import layout from './template';
import base from '../../mixins/base';
import { load, check, moduleName } from '../../utils/util';
import { later } from '@ember/runloop';


export default Component.extend(base, {
  layout,
  width: '100%',
  height: 550,
  content: '',
  editor: '',
  async init() {
    this._super(...arguments);
    let editor,
      baseDir = `${moduleName}/libs/editor.md/`,
      { width, height } = this.getProperties(['width', 'height']);
    if (!window.editormd) {
      load(`${baseDir}css/editormd.min.css`);
      load(`${baseDir}editormd.js`);
    }
    await check(() => window.editormd);
    later(() => {
      editor = window.editormd(this.get('elementId'), { width, height, path : `${baseDir}lib/` });
      this.set('editor', editor);
    });
  }
});
