<template>
  <div ref="editor" class="pell-editor" />
</template>

<script>
import pell from 'pell';
import 'pell/dist/pell.min.css';
import TurndownService from 'turndown';
import _ from 'lodash';
import dayjs from 'dayjs';

const turndownService = new TurndownService();

export default {
  props: {
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
      editor: null
    };
  },
  mounted() {
    // 如果输入的是Markdown 则不进行字符转义
    if (this.inputType === 'markdown') {
      TurndownService.prototype.escape = function(string) {
        return string;
      };
    }
    this.init(this.$refs.editor);
  },
  methods: {
    init(element) {
      this.editor = pell.init({
        element,
        onChange: _.debounce(
          (html) => {
            if (this.outputType === 'markdown') {
              const prev = Date.now();
              turndownService.turndown(html);
              console.log(dayjs().diff(prev, 'millisecond', true));
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
      this.editor.content.innerHTML = '<div>请输入</div>';
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
</style>
