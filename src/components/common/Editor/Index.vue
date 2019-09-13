<template>
  <div class="app-editor">
    <RichTextEditor v-if="type === 'richText'"></RichTextEditor>
    <MarkdownEditor v-else @save="onSave"></MarkdownEditor>
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
          onSave (text) {
            this.$emit('save', text);
          }
        }
    };
</script>

<style scoped lang="less">
  .app-editor {
    height: 100%;
  }
</style>
