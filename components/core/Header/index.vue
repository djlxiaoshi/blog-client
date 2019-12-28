<template>
  <header class="app-header">
    <!-- <mini-header class="hidden-md-and-up"></mini-header> -->
    <normal-header class="hidden-sm-and-down"></normal-header>
  </header>
</template>

<script>
// import MiniHeader from './MiniHeader';
import NormalHeader from './NormalHeader';

export default {
  name: 'AppHeader',
  components: {
    // MiniHeader,
    NormalHeader
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
@import '../../../assets/css/theme.less';
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: @pageHeaderBg;
}
</style>
