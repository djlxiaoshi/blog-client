<template>
  <div class="markdown-editor">
    <div
      ref="editor"
      @scroll="editorScroll"
      v-show="editMode || editPreivewMode"
      :style="{ width: editMode ? '100%' : '50%' }"
      class="editor-wrap"
    >
      <textarea ref="textarea" v-model="content"></textarea>
    </div>

    <div
      ref="preview"
      @scroll="previewerScroll"
      v-show="previewMode || editPreivewMode"
      :style="{ width: previewMode ? '100%' : '50%' }"
      class="preivew-wrap hidden-sm-and-down"
    >
      <VueShowdown
        :markdown="content"
        :options="showdownOptions"
        :extensions="[showdownHighlight]"
        class="markdown-preview"
        flavor="github"
      ></VueShowdown>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';
import _ from 'lodash';

const EDIT_PREVIEW_MODE = 1;
const EDIT_MODE = 2;
const PREVIEW_MODE = 3;

export default {
  components: {
    VueShowdown
  },
  props: {
    viewMode: {
      type: Number,
      default: EDIT_PREVIEW_MODE
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showdownHighlight,
      showdownOptions: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      // syncScroll options
      enableSyncScroll: true, // 开启同步滚动
      editorScrolling: false,
      previewerScrolling: false,
      editor: null
    };
  },
  computed: {
    editMode() {
      return this.viewMode === EDIT_MODE;
    },
    previewMode() {
      return this.viewMode === PREVIEW_MODE;
    },
    editPreivewMode() {
      return this.viewMode === EDIT_PREVIEW_MODE;
    }
  },
  watch: {
    viewMode(value) {
      if (value === EDIT_PREVIEW_MODE || value === EDIT_MODE) {
        // this.editor.refresh();
      }
    }
  },
  mounted() {
    if (process.browser) {
      const CodeMirror = require('codemirror/lib/codemirror.js');
      require('codemirror/addon/selection/active-line.js');
      require('codemirror/addon/edit/closebrackets.js');
      require('codemirror/addon/edit/matchbrackets.js');
      require('codemirror/lib/codemirror.css');
      require('codemirror/mode/markdown/markdown.js');
      require('codemirror/lib/codemirror.css');

      this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
        mode: 'markdown',
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        tabSize: 2,
        autofocus: true,
        theme: 'default',
        showCursorWhenSelecting: true,
        matchBrackets: true,
        styleActiveLine: true,
        autoCloseBrackets: true
      });

      this.editor.on('ready', () => {
        console.log('初始化完成');
      });

      // 内容变化监听
      this.editor.on(
        'change',
        _.debounce((cm) => {
          const content = cm.getValue();
          this.$emit('input', content);
        }, 300)
      );

      //  同步滚动监听
      //  编辑区滚动
      this.editor.on('scroll', this.editorScroll);
    }
  },
  methods: {
    init() {},
    editorScroll(cm) {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }
        this.previewerScrolling = true;
        const scrollObj = cm.getScrollInfo();
        const percent =
          scrollObj.top / (scrollObj.height - scrollObj.clientHeight);
        const previewer = this.$refs.preview;
        previewer.scrollTop =
          percent * (previewer.scrollHeight - previewer.clientHeight);
      }
    },
    previewerScroll(e) {
      if (this.enableSyncScroll) {
        if (this.previewerScrolling) {
          this.previewerScrolling = false;
          return;
        }
        this.editorScrolling = true;
        const scrollElement = e.target;

        const percent =
          scrollElement.scrollTop /
          (scrollElement.scrollHeight - scrollElement.clientHeight);
        const scrollObj = this.editor.getScrollInfo();

        const editorTop = percent * (scrollObj.height - scrollObj.clientHeight);
        this.editor.scrollTo(null, editorTop);
      }
    }
  }
};
</script>

<style scoped lang="less">
.markdown-editor {
  height: 100%;
  display: flex;
  /deep/ .CodeMirror {
    height: 100%;
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
    overflow-x: hidden;
    background: #e5e5e5;
  }
}
</style>
