<template>
  <div class="markdown-editor">
    <textarea ref="textarea" class="textarea"></textarea>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  components: {},
  props: {
    defaultValue: {
      type: String,
      default: ''
    },
    editorConfig: {
      type: Object,
      default: () => ({
        lineNumbers: true,
        height: '100%',
        width: '100%'
      })
    }
  },
  data() {
    return {
      markdwonText: this.defaultValue,
      editor: null
    };
  },
  watch: {
    defaultValue(value) {
      this.markdwonText = value;
    }
  },
  mounted() {
    if (process.browser) {
      const CodeMirror = require('codemirror/lib/codemirror.js');
      require('codemirror/addon/selection/active-line.js');
      require('codemirror/addon/edit/closebrackets.js');
      require('codemirror/addon/edit/matchbrackets.js');
      require('codemirror/mode/markdown/markdown.js');
      require('codemirror/lib/codemirror.css');

      this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
        value: '222eeeeeee',
        mode: 'markdown',
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        tabSize: 2,
        // autofocus: true,
        theme: 'default',
        showCursorWhenSelecting: true,
        matchBrackets: true,
        styleActiveLine: true,
        autoCloseBrackets: true
      });

      this.editor.setSize(
        this.editorConfig.width || '100%',
        this.editorConfig.height || '100%'
      );

      // 内容变化监听
      this.editor.on(
        'change',
        _.debounce((cm) => {
          const content = cm.getValue();
          this.markdwonText = content;
          this.$emit('input', content);
        }, 300)
      );

      //  同步滚动监听
      //  编辑区滚动
      this.editor.on('scroll', function() {});
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
.markdown-editor {
  height: 100%;
  display: flex;
  /deep/ .CodeMirror {
    margin: 0 5px;
    font-size: 18px;
    background-color: rgb(249, 249, 245);
    font-family: 'Consolas', '微软雅黑';
  }

  /deep/ .CodeMirror-activeline-background {
    background-color: rgb(241, 242, 239);
  }
  @media only screen and (max-width: 991px) {
    .editor-wrap {
      width: 100% !important;
    }
  }
  .textarea {
    display: none;
  }
  .editor-wrap {
    height: 100%;
    box-sizing: border-box;
  }
  .preivew-wrap {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    box-sizing: border-box;
    border: 2px dashed #bbb;
    overflow-y: auto;
  }
}
</style>
