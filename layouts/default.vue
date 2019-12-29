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

.djlxs-blog {
  .app-body {
    margin-top: calc(@AppHeaderHeight + @marginToHeader);
    min-height: calc(100vh - @AppHeaderHeight - @marginToHeader);
    /deep/ .el-row {
      min-height: inherit;
    }
  }
  .placeholder {
    height: 20px;
  }
}
</style>
