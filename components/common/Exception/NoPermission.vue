<template>
  <div class="app-no-permission">
    <img src="../../../assets/img/no-permission.svg" />
    <div class="exception-desc">抱歉，您没有权限访问</div>
  </div>
</template>

<script>
export default {
  name: ''
};
</script>

<style scoped lang="less">
.app-no-permission {
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
