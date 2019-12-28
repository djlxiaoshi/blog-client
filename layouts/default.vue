<template>
  <div class="djlxs-blog">
    <AppHeader></AppHeader>
    <div class="app-body">
      <div class="placeholder hidden-sm-and-down"></div>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <nuxt />
        </el-col>
      </el-row>
    </div>
    <!-- <AppSideBar v-if="sidebarVisible" @onSelect="menuSelect"></AppSideBar> -->
  </div>
</template>

<script>
import AppHeader from '~/components/core/Header/index';

export default {
  components: {
    AppHeader
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
@import '../assets/css/theme';

.djlxs-blog {
  .app-body {
    min-height: calc(100vh - @AppHeaderHeight);
    margin-top: @AppHeaderHeight;
    /deep/ .el-row {
      min-height: inherit;
    }
  }
  .placeholder {
    height: 20px;
  }
}
</style>
