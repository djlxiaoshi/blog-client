<!--
 * @Author: your name
 * @Date: 2020-08-02 18:41:20
 * @LastEditTime: 2020-11-07 00:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/components/common/app-container/index.vue
-->

<template>
  <div class="app-container">
    <slot></slot>
    <AppEmpty v-if="showEmpty"></AppEmpty>
    <AppLoading v-if="showLoading"></AppLoading>
  </div>
</template>

<script>
import AppEmpty from '@/components/common/Empty/index.vue';
import AppLoading from '@/components/common/app-loading';
export default {
  components: {
    AppEmpty,
    AppLoading
  },
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less">
.app-container {
  position: relative;
  /deep/ .app-loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
  }
}
</style>
