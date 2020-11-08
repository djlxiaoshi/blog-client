<template>
  <div class="djlxs-blog-admin">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  meta: {
    isAdminPage: true
  },
  components: {}
};
</script>

<style lang="less" scoped>
.djlxs-blog-admin {
  .app-main-container {
    box-sizing: border-box;
    height: 100vh;
    padding: 20px;
    overflow: auto;
  }
}
</style>
