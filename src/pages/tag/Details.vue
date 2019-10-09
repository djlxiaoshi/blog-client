<template>
    <div class="tag-details-page">
      <h2 class="tag-name">{{ tag.label }}</h2>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: '',
    computed: {
      ...mapState([
        'tag'
      ])
    },
    asyncData ({ store, route }) {
      return store.dispatch('getTag', route.params.id);
    },
    mounted () {
      this.getTag(this.$route.params.id);
    },
    methods: {
      ...mapActions([
        'getTag'
      ])
    }
  };
</script>

<style scoped lang="less">
  .tag-details-page {

  }
</style>
