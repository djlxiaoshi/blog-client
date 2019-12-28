<template>
  <div class="app-sever-exception">
    <img src="../../../assets/img/server-error.svg" />
    <div class="exception-desc">服务器异常</div>
  </div>
</template>

<script>
export default {
  name: ''
};
</script>

<style scoped lang="less">
.app-sever-exception {
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
