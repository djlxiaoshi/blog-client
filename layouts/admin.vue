<template>
  <div class="djlxs-blog-admin">
    <el-row>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
        <SideBar></SideBar>
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
        <div class="app-main-container">
          <nuxt-child />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from '@/pages/admin/components/SideBar';

export default {
  layout: 'portal',
  components: {
    SideBar
  }
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
