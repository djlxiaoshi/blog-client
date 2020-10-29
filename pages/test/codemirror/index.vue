<template>
  <div style="height: calc(100vh - 60px)">
    <Editor :defaultValue="value"></Editor>
  </div>
</template>

<script>
import Editor from '@/components/common/Editor/Markdown2.vue';
export default {
  components: {
    Editor
  },
  data() {
    return {
      value: '222'
    };
  },
  mounted() {
    setTimeout(() => {
      this.value = '333';
    }, 2000);
  },
  methods: {
    init() {}
  }
};
</script>

<style></style>
