<template>
  <div class="user-home-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
        <div class="page-left">
          <AppEmpty :isEmpty="user.articles.length === 0">
            <ArticleList
              :data="user.articles"
              @onView="viewArticle"
            ></ArticleList>
          </AppEmpty>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
        <div class="page-right"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ArticleList from '@/components/common/ArticleList/Index';
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
        'user'
      ])
    },
    asyncData ({ store, router }) {
      return store.dispatch('getArticlesByUser');
    },
    mounted () {
      this.getArticlesByUser();
    },
    methods: {
      ...mapActions([
        'getArticlesByUser'
      ]),
      viewArticle (article) {
        this.$router.push(`/article/${article._id}`);
      }
    }
  };
</script>

<style scoped lang="less">
  .user-home-page {
    .page-left {
      border: 1px solid #dddddd;
    }

    .page-right {
      height: 100px;
      border: 1px solid #dddddd;
    }
  }
</style>
