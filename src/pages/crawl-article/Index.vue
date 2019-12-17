<template>
  <div class="crawl-article-page">
    <el-input v-model="url" placeholder="请输入文章链接"></el-input>
    <el-button type="primary" @click="crwalArticle">提取文章</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      url: ''
    };
  },
  mounted () {},
  methods: {
    crwalArticle () {
      const { xhrInstance } = this.$http({
        url: `/crawl`,
        method: 'get',
        data: {
          articleUrl: this.url
        },
        showSuccessMsg: false,
        showErrorMsg: true
      });

      return xhrInstance.then(
        data => {
          this.$router.push(`/post/${data._id}`);
        },
        () => {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
.crawl-article-page {
}
</style>
