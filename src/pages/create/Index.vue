<template>
    <div class="create-article-page">
      <Editor></Editor>
    </div>
</template>

<script>
  import Editor from '@/components/common/Editor/Index';

    export default {
        name: 'Index',
        components: {
            Editor
        }
    };
</script>

<style scoped lang="less">
  .create-article-page {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1001;
    background: #ffffff;
  }
</style>
