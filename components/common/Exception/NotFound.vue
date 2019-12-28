<template>
  <div class="app-not-found">
    <img src="../../../assets/img/no-page.svg" />
    <div class="exception-desc">您访问的页面不存在</div>
  </div>
</template>

<script>
export default {
  name: ''
};
</script>

<style scoped lang="less">
.app-not-found {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .exception-desc {
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #dddddd;
  }
}
</style>
