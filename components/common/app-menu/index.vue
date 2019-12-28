<template>
  <el-menu
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :router="true"
    :default-active="activeMenu"
    :mode="mode"
    @select="handleSelect"
    class="app-header-menu"
  >
    <template v-for="menu in menuList">
      <el-menu-item
        v-if="!menu.hidden"
        :index="menu.path"
        :route="menu"
        :key="menu.path"
        >{{ menu.label }}</el-menu-item
      >
    </template>
  </el-menu>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    menuList: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    activeTextColor: {
      type: String,
      default: ''
    },
    activeMenu: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleSelect(key) {
      this.$emit('menuSelect', key);
    }
  }
};
</script>

<style scoped lang="less">
.app-header-menu {
  border-right: none;
  border-bottom: none;
  height: 100%;
}
</style>
