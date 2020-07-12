<template>
  <div>
    <JsErrorTest></JsErrorTest>
  </div>
</template>

<script>
import JsErrorTest from './monitor';
export default {
  meta: {
    needLogin: true,
    permission: []
  },
  components: {
    JsErrorTest
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style></style>
