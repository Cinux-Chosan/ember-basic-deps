import Component from '@ember/component';
import layout from './template';
import { load, check, moduleName } from '../../utils/util';
import { later } from  '@ember/runloop';
import base from '../../mixins/base';

export default Component.extend(base, {
  layout,
  tagName: 'textarea',
  content: '',
  width: '100%',
  height: '550px',
  editor: '',
  uploadJson: '/upload',
  fileManagerJson: '/fileManager',
  allowFileManager: false,
  async init() {
    this._super(...arguments);
    let editor,
      basePath = `${moduleName}/libs/kindeditor/`,
      { width, height } = this.getProperties(['width', 'height']);
    if (!window.KindEditor) {
      load(`${basePath}kindeditor-all-min.js`);
      await check(() => window.KindEditor);
      load(`${basePath}lang/zh-CN.js`);
    }
    later(() => {
      let { uploadJson, fileManagerJson, allowFileManager } = this.getProperties(['uploadJson', 'fileManagerJson', 'allowFileManager']);
      editor = window.KindEditor.create('#' + this.get('elementId'), {
        width, height, basePath, uploadJson, fileManagerJson, allowFileManager
      });
      editor.html(this.content);
      editor.getContent = editor.html;
      this.set('editor', editor);

    });
  }
});
