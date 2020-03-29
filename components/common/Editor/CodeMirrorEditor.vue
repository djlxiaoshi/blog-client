<template>
  <div class="markdown-editor">
    <div
      ref="editor"
      @scroll="editorScroll"
      v-if="editMode || editPreivewMode"
      :style="{ width: editMode ? '100%' : '50%' }"
      class="editor-wrap"
    >
      <textarea ref="textarea" v-model="markdownContent"></textarea>
    </div>

    <div
      ref="preview"
      @scroll="previewerScroll"
      v-if="previewMode || editPreivewMode"
      :style="{ width: previewMode ? '100%' : '50%' }"
      class="preivew-wrap hidden-sm-and-down"
    >
      <VueShowdown
        :markdown="markdownContent"
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
      markdownContent: this.content,
      // syncScroll options
      enableSyncScroll: true, // 开启同步滚动
      editorScrolling: false,
      previewerScrolling: false
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
    content(value) {
      this.markdownContent = value;
    }
  },
  mounted() {
    if (process.browser) {
      const CodeMirror = require('codemirror/lib/codemirror.js');
      require('codemirror/addon/selection/active-line.js');
      require('codemirror/addon/edit/closebrackets.js');
      require('codemirror/addon/edit/matchbrackets.js');
      require('codemirror/addon/edit/continuelist.js');
      require('codemirror/mode/markdown/markdown.js');
      require('codemirror/lib/codemirror.css');

      this.cm = CodeMirror.fromTextArea(this.$refs.textarea, {
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

      // 内容变化监听
      this.cm.on(
        'change',
        _.debounce((cm) => {
          this.markdownContent = cm.getValue();
        }, 300)
      );

      //  同步滚动监听
      //  编辑区滚动
      this.cm.on('scroll', this.editorScroll);
    }
  },
  methods: {
    editorScroll(cm) {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }
        this.previewerScrolling = true;
        const scrollObj = this.cm.getScrollInfo();
        const percent = scrollObj.top / scrollObj.height;
        const previewer = this.$refs.preview;
        previewer.scrollTop = percent * previewer.scrollHeight;
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

        const percent = scrollElement.scrollTop / scrollElement.scrollHeight;
        const scrollObj = this.cm.getScrollInfo();

        const editorTop = percent * scrollObj.height;
        this.cm.scrollTo(null, editorTop);
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
