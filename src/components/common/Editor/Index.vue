<template>
  <div class="app-editor">
    <RichTextEditor v-if="type === 'richText'" v-bind="$attrs" v-on="listeners"></RichTextEditor>
    <MarkdownEditor v-else v-bind="$attrs"></MarkdownEditor>
  </div>
</template>

<script>
  import RichTextEditor from './RichText';
  import MarkdownEditor from './Markdown';
    export default {
        name: 'AppEditor',
        props: {
          type: {
            default: 'markdown'
          }
        },
        components: {
            RichTextEditor,
            MarkdownEditor
        },
        data () {
            return {
                textValue: '',
                htmlValue: ''
            };
        },
        mounted () {

        },
        methods: {

        },
      computed: {
        listeners () {
          return {
            ...this.$listeners
          };
        }
      }
    };
</script>

<style scoped lang="less">
  .app-editor {
    height: 100%;
  }
</style>
