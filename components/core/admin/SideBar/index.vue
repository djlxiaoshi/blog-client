<template>
  <div :style="{ color: $color.defaultColor }" class="admin-sidebar">
    <el-menu
      :background-color="$color.borderColor"
      :router="true"
      class="el-menu"
    >
      <el-submenu index="/admin">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item index="/admin/article">文章列表</el-menu-item>
        <el-menu-item index="/admin/crawl">文章提取</el-menu-item>
      </el-submenu>
      <el-menu-item index="/admin/tag">
        <i class="el-icon-document"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/admin">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '../../../../assets/css/theme.less';
.admin-sidebar {
  box-sizing: border-box;
  height: 100vh;
  .el-menu {
    height: 100%;
    width: 100%;
  }
}
</style>
