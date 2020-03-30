<template>
  <div class="app-editor">
    <RichTextEditor
      ref="rich-text-editor"
      v-if="type === 'richText'"
      v-bind="$attrs"
      v-on="listeners"
    ></RichTextEditor>
    <MarkdownEditor v-else v-bind="$attrs"></MarkdownEditor>
  </div>
</template>

<script>
import RichTextEditor from './RichText.vue';
import MarkdownEditor from './Markdown.vue';
export default {
  components: {
    RichTextEditor,
    MarkdownEditor
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'markdown'
    }
  },
  data() {
    return {
      textValue: '',
      htmlValue: ''
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      };
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.app-editor {
  height: 100%;
}
</style>
