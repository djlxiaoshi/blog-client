<template>
  <div class="app-empty">
    <div class="empty-img">
      <img src="./empty.png" alt="" />
    </div>
    <p class="empty-desc">空空如也</p>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    isEmpty: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="less">
.app-empty {
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  .empty-img {
    text-align: center;
  }
  .empty-desc {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #dddddd;
  }
}
</style>
