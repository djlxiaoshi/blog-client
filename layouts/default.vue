<template>
  <div class="djlxs-blog-portal-view">
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <SideBar></SideBar>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="app-main-container">
          <nuxt-child />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from '@/components/core/portal/SideBar';
export default {
  components: {
    SideBar
  },
  data() {
    return {
      tags: []
    };
  },
  fetch() {
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    return Promise.all([this.$store.dispatch('tag/getAllTags')]);
  },
  methods: {
    refresh() {
      this.$fetch();
    }
  }
};
</script>

<style lang="less" scoped>
.djlxs-blog-portal-view {
  .app-main-container {
    box-sizing: border-box;
    height: 100vh;
    padding: 20px;
    overflow: auto;
  }
}
</style>
