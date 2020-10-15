<template>
  <div :style="{ color: $color.defaultColor }" class="portal-home-page">
    <AppContainer :showEmpty="articles.length === 0" style="height: 100%">
      <ArticleList
        :data="articles"
        @onView="viewArticle"
        v-infinite-scroll="loadMore"
        class="article-list"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      ></ArticleList>
      <AppLoading v-if="busy" size="mini" class="loading-more"></AppLoading>
    </AppContainer>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import ArticleList from './components/ArticleList';
import AppContainer from '~/components/common/app-container';
import AppLoading from '~/components/common/app-loading';

const PAGE_SIZE = 10;

export default {
  name: 'Explore',
  head: {
    title: '主页',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的主页'
      }
    ]
  },
  components: {
    ArticleList,
    AppContainer,
    AppLoading
  },
  data() {
    return {
      currentPage: 2, // asyncData中已经加载过一夜，所以当前页为2
      pageSize: PAGE_SIZE,
      artilceTotals: Infinity,
      busy: false
    };
  },
  computed: {
    articles() {
      return JSON.parse(JSON.stringify(this.$store.state.article.allArticles));
    }
  },
  asyncData({ store, route }) {
    return Promise.all([
      store.dispatch('article/getAllArticles', {
        currentPage: 1,
        pageSize: PAGE_SIZE
      })
    ]);
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setAllArticle: 'article/setAllArticle'
    }),
    ...mapActions({
      getAllArticles: 'article/getAllArticles'
    }),
    viewArticle(article) {
      this.$router.push(`/article/${article._id}`);
    },
    getMoreArtilces() {
      const { response } = this.$http({
        url: '/articles',
        data: {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        },
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      });

      return response.then(
        (articles) => {
          return articles;
        },
        (e) => {
          return e;
        }
      );
    },
    async loadMore() {
      // if (this.articles.length < this.artilceTotals) {
      //   this.busy = true;
      //   const data = await this.getMoreArtilces({
      //     currentPage: this.currentPage,
      //     pageSize: this.pageSize
      //   });
      //   this.artilceTotals = data.total;
      //   this.articles.splice((this.currentPage - 1) * this.pageSize);
      //   this.articles.push(...data.list);
      //   this.setAllArticle(this.articles);
      //   // 如果到了下一页，则增加
      //   if (this.articles.length % this.pageSize === 0) {
      //     this.currentPage++;
      //   }
      //   this.busy = false;
      // }
    }
  }
};
</script>

<style scoped lang="less">
.explore-page {
  margin-bottom: 20px;
  .page-left {
    height: 100%;
    border: 1px solid #dddddd;
    .article-list {
      padding-bottom: 0;
    }
  }
  .page-right {
    border: 1px solid #dddddd;
  }
  .loading-more {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
