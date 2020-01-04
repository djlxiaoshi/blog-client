<template>
  <div class="djlxs-blog">
    <AppHeader></AppHeader>
    <div class="app-body">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <nuxt />
        </el-col>
      </el-row>
    </div>
    <AppSideBar v-if="sidebarVisible"></AppSideBar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from '~/components/core/Header';
import AppSideBar from '~/components/core/SideBar';

export default {
  components: {
    AppHeader,
    AppSideBar
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      sidebarVisible: (state) => state.sidebarVisible
    })
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import '../assets/css/theme';
@bodyMarginBottom: 20px;
.djlxs-blog {
  .app-body {
    position: relative;
    margin-top: calc(@AppHeaderHeight);
    min-height: calc(100vh - @AppHeaderHeight - @bodyMarginBottom);
    margin-bottom: 20px;
    /deep/ .el-row {
      min-height: inherit;
    }
  }
}
</style>
