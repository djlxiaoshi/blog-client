<template>
  <transition name="page-move">
    <div class="side-menu-wrap">
      <SidebarMenu
        :menuList="menuList"
        :default-active="activeMenu"
        @select="menuSelect"
        text-color="#545c64"
        background-color="#fff"
        active-text-color="#ffd04b"
      >
      </SidebarMenu>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SidebarMenu from '~/components/common/app-menu';

export default {
  components: {
    SidebarMenu
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      activeMenu: (state) => state.menu.activeMenu,
      menuList: (state) => state.menu.list
    })
  },
  methods: {
    ...mapMutations({
      setActiveMenu: 'menu/setActiveMenu',
      changeSidebarVisible: 'changeSidebarVisible'
    }),
    menuSelect(menuName) {
      this.setActiveMenu(menuName);
      this.changeSidebarVisible(false);
    }
  }
};
</script>

<style scoped lang="less">
.page-move-enter {
  transform: translate(-100%, 0);
}
.page-move-leave-active {
  transform: translate(-100%, 0);
}
.page-move-enter-active,
.page-move-leave-active {
  transition: transform 0.4s;
}

.side-menu-wrap {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  box-sizing: border-box;
}
</style>
