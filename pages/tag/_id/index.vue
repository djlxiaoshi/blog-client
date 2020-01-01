<template>
  <div class="tag-details-page">
    <h2 class="tag-name">{{ tag.label }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  head() {
    return {
      title: `${this.tag.label || '标签详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '这是DJL箫氏的博客的归档页面'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      tag: (state) => state.tag.currentTag
    })
  },
  asyncData({ store, route }) {
    return store.dispatch('tag/getTag', route.params.id);
  },
  methods: {
    ...mapActions({
      getTag: 'tag/getTag'
    })
  }
};
</script>

<style scoped lang="less"></style>
