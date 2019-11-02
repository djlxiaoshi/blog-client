<template>
    <div class="djlxs-blog">
      <AppHeader></AppHeader>
      <div class="placeholder hidden-sm-and-down"></div>
      <div class="app-body">
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
  import { XS_WIDTH } from '@/assets/js/global/const';
  import AppHeader from './components/core/Header/Index';
  import AppSideBar from './components/core/SideBar/Index';
  import { mapState, mapMutations } from 'vuex';
  import { SET_ACTIVE_MENU, CHANGE_SIDEBAR_VISIBLE, TOGGLE_IS_MINI_WIDTH } from 'store/mutation-types';

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
    created () {
      // 设置初始页面状态
      this.initWidth();

      // 需优化 节流防抖
      window.addEventListener('resize', () => {
        this.initWidth();
      });
    },
    methods: {
      ...mapMutations({
        'setCurrentMenu': SET_ACTIVE_MENU,
        'changeSidebarVisible': CHANGE_SIDEBAR_VISIBLE,
        'toggleMinWidth': TOGGLE_IS_MINI_WIDTH
      }),
      initWidth () {
        const clientWidth = document.body.clientWidth;
        this.toggleMinWidth(clientWidth < XS_WIDTH);

        // 当窗口大于XS_WIDTH，设置sidebar状态为隐藏状态
        if (clientWidth > XS_WIDTH) {
          this.changeSidebarVisible(false);
        }
      },
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

  .djlxs-blog {
    .app-body {
      margin-top: @AppHeaderHeight;
    }
    .placeholder {
      height: 20px;
    }
  }
</style>
