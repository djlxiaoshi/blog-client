<template>
    <div class="app-empty">
      <div v-if="isEmpty" class="empty-content">
        <div class="empty-img">
          <img src="./empty.png" alt="">
        </div>
        <p class="empty-desc">空空如也</p>
      </div>
      <slot v-else></slot>
    </div>
</template>

<script>
  export default {
    name: '',
    props: {
      isEmpty: {
        default: false
      }
    }
  };
</script>

<style scoped lang="less">
  .app-empty {
    .empty-content {
      padding: 20px;
      height: 100%;
      min-height: 200px;
      display: flex;
      flex-direction: column;
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
  }
</style>
