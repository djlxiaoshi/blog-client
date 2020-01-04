<template>
  <div class="app-placeholder">
    <div class="placeholder hidden-xs-only"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.app-placeholder {
  .placeholder {
    height: 20px;
  }
}
</style>
