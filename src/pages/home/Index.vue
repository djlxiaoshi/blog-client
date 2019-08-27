<template>
    <div class="home-page">
      <ArticleList :data="articles"></ArticleList>
    </div>

</template>

<script>
  import ArticleList from './components/List';

  export default {
    name: '',
    components: {
      ArticleList
    },
    data () {
      return {
        articles: [
          {
            title: '像MAC一样使用win10的Terminal',
            desc: 'Windows Terminal（Preview）实用、优化技巧（含第三方Terminal工具介绍）注意：Windows Terminal（Pr...',
            time: '2019/08/27',
            author: 'djlxs'
          }
        ]
      };
    }
  };
</script>

<style scoped lang="less">
 h1 {
     background: red;
 }
</style>
