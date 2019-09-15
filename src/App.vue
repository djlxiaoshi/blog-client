<template>
    <div class="djlxs-blog">
      <AppHeader></AppHeader>
      <div class="app-body" :style="{ paddingTop: isMiniWidth ? 0 : '20px' }">
        <el-row type="flex" align="middle" justify="center">
          <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
            <router-view></router-view>
          </el-col>
        </el-row>
      </div>
      <AppSideBar v-if="sidebarVisible" @onSelect="menuSelect" ></AppSideBar>

    </div>
</template>

<script>
  import AppHeader from './components/core/Header';
  import AppSideBar from './components/core/SideBar';
  import { mapState, mapMutations } from 'vuex';
  import { SET_ACTIVE_MENU, CHANGE_SIDEBAR_VISIBLE } from 'store/mutation-types';

  export default {
    name: '',
    components: {
      AppHeader,
      AppSideBar
    },
    computed: {
      ...mapState([
        'sidebarVisible',
        'isMiniWidth'
      ])
    },
    methods: {
      ...mapMutations({
        'setCurrentMenu': SET_ACTIVE_MENU,
        'changeSidebarVisible': CHANGE_SIDEBAR_VISIBLE
      }),
      menuSelect (menu) {
        // 设置当前激活菜单
        this.setCurrentMenu(menu);
        // 隐藏sidebar
        this.changeSidebarVisible(false);
      }
    }
  };
</script>

<style scoped lang="less">
  @import "./assets/css/theme";

  .app-body {
    margin-top: @AppHeaderHeight;
  }

</style>
