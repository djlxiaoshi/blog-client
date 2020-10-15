<template>
  <div class="djlxs-blog-portal">
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
import SideBar from '@/pages/portal/components/SideBar';
export default {
  layout: 'portal',
  components: {
    SideBar
  },
  asyncData({ store, route }) {
    return Promise.all([store.dispatch('tag/getAllTags')]);
  }
};
</script>

<style lang="less" scoped>
.djlxs-blog-portal {
  .app-main-container {
    box-sizing: border-box;
    height: 100vh;
    padding: 20px;
    overflow: auto;
  }
}
</style>
