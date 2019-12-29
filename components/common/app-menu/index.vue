<template>
  <el-menu
    v-bind="$attrs"
    v-on="$listeners"
    :router="true"
    :mode="mode"
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
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.app-header-menu {
  border-right: none;
  border-bottom: none;
  height: 100%;
}
</style>
