<template>
  <div class="rich-text-editor">
    <div id="pell" class="pell" ref="pell"/>
  </div>
</template>

<script>
  import pell from 'pell';
  import 'pell/dist/pell.min.css';

    export default {
      name: 'RichText',
      placeholder: '请输入',
      props: {
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
      data () {
        return {
          editor: null
        };
      },
      mounted () {
        const element = this.$refs.pell;

        this.editor = pell.init({
          element: element,
          onChange: html => {
            this.$emit('input', html);
          },
          actions: this.actions
        });
      },
      methods: {
        ensureHTTP: str => /^https?:\/\//.test(str) && str || `http://${str}`,
        clear () {
            if (this.editor) {
              this.editor.content.innerHTML = '';
            }
        }
      }
    };
</script>

<style scoped lang="less">
  .rich-text-editor {
    height: 100%;
    .pell {
      height: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>
