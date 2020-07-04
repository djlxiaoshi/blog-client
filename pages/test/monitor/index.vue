<!--
 * @Author: your name
 * @Date: 2020-06-23 22:10:26
 * @LastEditTime: 2020-06-23 22:45:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/pages/test/monitor/index.vue
-->
<template>
  <Button @click="test()">js Error</Button>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {},
  methods: {
    test() {
      console.log(this.user.id);
    }
  }
};
</script>

<style></style>
