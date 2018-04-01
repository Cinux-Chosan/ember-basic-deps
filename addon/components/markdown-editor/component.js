import Component from '@ember/component';
import layout from './template';
import base from '../../mixins/base';
import { load, check, moduleName } from '../../utils/util';
import { later } from '@ember/runloop';
import styles from './styles';    // or './styles' in pod format

export default Component.extend(base, {
  layout,
  styles,
  localClassNames: 'root',
  width: '100%',
  height: 550,
  content: '',
  editor: '',
  imageUpload : true,
  imageFormats : ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
  imageUploadURL: '/upload',
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
    load(`${baseDir}plugins/image-dialog/image-dialog.js`);
    later(() => {
      let { imageUpload, imageFormats, imageUploadURL } = this.getProperties(['imageUpload', 'imageFormats', 'imageUploadURL']);
      editor = window.editormd(this.get('elementId'), {
        width, height, path : `${baseDir}lib/`,
        imageUpload,
        imageFormats,
        imageUploadURL
      });
      editor.getContent = editor.getMarkdown;
      this.set('editor', editor);
    });
  }
});
