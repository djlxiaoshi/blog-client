<template>
  <div class="markdown-editor">
    <div
      ref="editor"
      v-show="editMode || editPreivewMode"
      :style="{ width: editMode ? '100%' : '50%' }"
      class="editor-wrap"
    >
      <textarea ref="textarea" class="textarea"></textarea>
    </div>

    <div
      ref="preview"
      @scroll="syncEditorScroll"
      v-show="previewMode || editPreivewMode"
      :style="{ width: previewMode ? '100%' : '50%' }"
      class="preivew-wrap hidden-sm-and-down"
    >
      <VueShowdown
        :markdown="markdwonText"
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
    defaultValue: {
      type: String,
      default: ''
    },
    editorConfig: {
      type: Object,
      default: () => ({
        lineNumbers: true,
        height: 100,
        width: '100%'
      })
    }
  },
  data() {
    return {
      markdwonText: this.defaultValue,
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
    defaultValue(value) {
      this.markdwonText = value;
      this.editor.setValue(value);
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
        value: this.defaultValue,
        mode: 'markdown',
        lineNumbers: this.editorConfig.lineNumbers,
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
        this.editorConfig.height || 100
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
      this.editor.on('scroll', this.syncPreviewerScroll);
    }
  },
  methods: {
    init() {},
    syncPreviewerScroll() {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }
        this.previewerScrolling = true;
        const scrollObj = this.editor.getScrollInfo();
        const percent =
          scrollObj.top / (scrollObj.height - scrollObj.clientHeight);
        const previewer = this.$refs.preview;
        if (previewer) {
          previewer.scrollTop =
            percent * (previewer.scrollHeight - previewer.clientHeight);
        }
      }
    },
    syncEditorScroll() {
      if (this.enableSyncScroll) {
        if (this.previewerScrolling) {
          this.previewerScrolling = false;
          return;
        }
        this.editorScrolling = true;
        const scrollElement = this.$refs.preview;

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
    overflow-x: hidden;
    background: #e5e5e5;
  }
}
</style>
