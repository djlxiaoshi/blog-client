<template>
  <div class="tag-details-page">
    <h2 class="tag-name">{{ tag.label }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
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
