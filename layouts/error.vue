<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1>哈哈哈</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String
    }
  },
  layout: 'default' // 你可以为错误页面指定自定义的布局
};
</script>
