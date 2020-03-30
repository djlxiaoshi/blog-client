<template>
  <div class="rich-text-editor">
    <div
      v-if="editMode || editPreivewMode"
      :style="{ width: editMode ? '100%' : '50%' }"
      class="editor-wrap"
    >
      <div ref="editor" class="pell-editor" />
    </div>
    <div
      ref="preview"
      @scroll="previewerScroll"
      v-if="previewMode || editPreivewMode"
      :style="{ width: previewMode ? '100%' : '50%' }"
      class="preivew-wrap hidden-sm-and-down"
    >
      <VueShowdown
        :markdown="content"
        :options="showdownOptions"
        :extensions="[showdownHighlight, trim]"
        class="markdown-preview"
        flavor="github"
      ></VueShowdown>
    </div>
  </div>
</template>

<script>
import pell from 'pell';
import { VueShowdown } from 'vue-showdown';
import 'pell/dist/pell.min.css';
import TurndownService from 'turndown';
import _ from 'lodash';
import showdownHighlight from 'showdown-highlight';

const turndownService = new TurndownService();
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
    },
    outputType: {
      type: String,
      default: 'richText'
    },
    inputType: {
      type: String,
      default: 'richText'
    },
    actions: {
      type: Array,
      default: () => [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'heading1',
        'heading2',
        'paragraph',
        'quote',
        'olist',
        'ulist',
        'code',
        'line',
        {
          name: 'image',
          result: () => {
            const url = window.prompt('Enter the image URL');
            if (url) pell.exec('insertImage', this.ensureHTTP(url));
          }
        },
        {
          name: 'link',
          result: () => {
            const url = window.prompt('Enter the link URL');
            if (url) pell.exec('createLink', this.ensureHTTP(url));
          }
        }
      ]
    }
  },
  data() {
    return {
      editor: null,
      showdownHighlight,
      showdownOptions: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      // syncScroll options
      enableSyncScroll: true, // 开启同步滚动
      editorScrolling: false,
      previewerScrolling: false,
      trim: () => [
        {
          type: 'lang',
          regex: '&nbsp;',
          replace: ' '
        }
      ]
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
  mounted() {
    // 如果输入的是Markdown 则不进行字符转义
    if (this.inputType === 'markdown') {
      TurndownService.prototype.escape = function(string) {
        return string;
      };
    }

    this.$nextTick(() => {
      document
        .querySelector('.pell-content')
        .addEventListener('scroll', this.editorScroll);
    });
    this.init(this.$refs.editor);
  },
  methods: {
    init(element) {
      this.editor = pell.init({
        element,
        onChange: _.debounce(
          (html) => {
            if (this.outputType === 'markdown') {
              turndownService.turndown(html);
              this.$emit('input', turndownService.turndown(html));
            } else {
              this.$emit('input', html);
            }
          },
          300,
          { leading: true }
        ),
        actions: this.actions,
        // <string>, optional, default = 'div'
        // Instructs the editor which element to inject via the return key
        defaultParagraphSeparator: 'div',

        // <boolean>, optional, default = false
        // Outputs <span style="font-weight: bold;"></span> instead of <b></b>
        styleWithCSS: false
      });
      this.editor.content.innerHTML = `<div>${this.content}</div>`;
    },
    editorScroll(e) {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }
        this.previewerScrolling = true;
        const scrollElement = e.target;
        const clinetHeight = scrollElement.clientHeight; // 可视区域高度
        const scrollTop = scrollElement.scrollTop; // 滚动条高度
        const scrollHeight = scrollElement.scrollHeight; // 内容高度
        const percent = scrollTop / (scrollHeight - clinetHeight);

        if (this.$refs.preview) {
          const previewer = this.$refs.preview;
          previewer.scrollTop =
            percent * (previewer.scrollHeight - previewer.clientHeight);
        }
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
        const clinetHeight = scrollElement.clientHeight; // 可视区域高度
        const scrollTop = scrollElement.scrollTop; // 滚动条高度
        const scrollHeight = scrollElement.scrollHeight; // 内容高度

        const percent = scrollTop / (scrollHeight - clinetHeight);

        const editorElement = document.querySelector('.pell-content');
        if (editorElement) {
          editorElement.scrollTop =
            percent * (editorElement.scrollHeight - editorElement.clientHeight);
        }
      }
    },
    ensureHTTP: (str) => (/^https?:\/\//.test(str) && str) || `http://${str}`,
    clear() {
      if (this.editor) {
        this.editor.content.innerHTML = '';
      }
    }
  }
};
</script>

<style scoped lang="less">
.pell-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  /deep/ .pell-content {
    flex: 1;
  }
  /deep/ .pell-actionbar {
    border-bottom: none;
  }
}

.rich-text-editor {
  flex: 1;
  height: calc(100vh - 100px);
  display: flex;
  align-content: stretch;
  .editor-wrap {
    height: 100%;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 991px) {
    .editor-wrap {
      width: 100% !important;
    }
  }
  .preivew-wrap {
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    border: 2px dashed #bbb;
    background: #e5e5e5;
  }
}
</style>
