<template>
  <div class="explore-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
        <div class="page-left">
          <AppEmpty :isEmpty="articles.length === 0">
            <ArticleList
              :data="articles"
              @onView="viewArticle"
            ></ArticleList>
          </AppEmpty>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
        <div class="page-right">
          <SideBar></SideBar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ArticleList from '@/components/common/ArticleList/Index';
  import SideBar from './SideBar';
  import AppEmpty from '@/components/common/Empty/Index';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: '',
    components: {
      ArticleList,
      AppEmpty,
      SideBar
    },
    computed: {
      ...mapState([
        'articles'
      ])
    },
    asyncData ({ store, route }) {
      return store.dispatch('getArticles');
    },
    mounted () {
      this.getArticles();
    },
    methods: {
      ...mapActions([
        'getArticles'
      ]),
      viewArticle (article) {
        this.$router.push(`/article/${article._id}`);
      }
    }
  };
</script>

<style scoped lang="less">
  .explore-page {
    .page-left {
      border: 1px solid #dddddd;
    }

    .page-right {

    }
  }
</style>
