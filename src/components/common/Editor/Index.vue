<template>
  <div class="app-editor">
    <RichTextEditor v-if="type === 'richText'"></RichTextEditor>
    <MarkdownEditor v-else></MarkdownEditor>
  </div>
</template>

<script>
  import RichTextEditor from './RichText';
  import MarkdownEditor from './Markdown';
    export default {
        name: 'AppEditor',
        props: ['type'],
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

        }
    };
</script>

<style scoped lang="less">
  .app-editor {
    height: 100%;
  }
</style>
