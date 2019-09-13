<template>
  <div class="home-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
        <div class="home-left">
          <AppEmpty isEmpty="articles.length === 0">
            <ArticleList :data="articles"></ArticleList>
          </AppEmpty>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
        <div class="home-right"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ArticleList from './components/List';
  import AppEmpty from '@/components/common/Empty/Index';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: '',
    components: {
      ArticleList,
      AppEmpty
    },
    computed: {
      ...mapState([
        'articles'
      ])
    },
    asyncData ({ store, router }) {
      return store.dispatch('getArticles');
    },
    mounted () {
      this.getArticles();
    },
    methods: {
      ...mapActions([
        'getArticles'
      ])
    }
  };
</script>

<style scoped lang="less">
  .home-page {
    .home-left {
      border: 1px solid #dddddd;
    }

    .home-right {
      height: 100px;
      border: 1px solid #dddddd;
    }
  }
</style>
