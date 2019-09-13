<template>
    <div class="create-article-page">
      <div class="article-title">
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
      </div>
      <Editor @save="postArticle"></Editor>
    </div>
</template>

<script>
  import Editor from '@/components/common/Editor/Index';

    export default {
        name: 'Index',
        components: {
            Editor
        },
      data () {
          return {
            title: '',
            content: ''
          };
      },
      methods: {
        postArticle (text) {

        }
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

    /deep/ .el-input{
      .el-input__inner {
        height: 60px;
        line-height: 60px;
        border-radius: 0;
        border: none;
        font-weight: 700;
        font-size: 18px;
        &:focus {
          outline: none;
          border-color: #dddddd;
        }
      }
    }
  }
</style>
