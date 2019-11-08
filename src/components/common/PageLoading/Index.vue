<template>
  <div class="page-loading" :style="{
    display: visible ? 'block' : 'none'
  }">
    <div class="app-loading" v-if="visible"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      };
    },
    methods: {
      show () {
        this.visible = true;
      },
      close () {
        this.visible = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .page-loading {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 2px;
    z-index: 999999;
    background: #e5e5e5;
    opacity: 0.7;
    .app-loading {
      display: block;
      &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        content: '';
        width: 5%;
        height: 100%;
        display: inline-block;
        background: url("../../../assets/img/loading.svg") no-repeat;
        background-size: 100%;
        background-position: center center;
      }
    }
  }
</style>
