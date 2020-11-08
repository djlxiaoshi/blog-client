<template>
  <div :style="{ color: $color.defaultColor }" class="portal-home-page">
    <ArticleList
      :data="articles"
      @onView="viewArticle"
      class="article-list"
    ></ArticleList>

    <div class="paginator">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="current"
        @current-change="getArtilces"
        layout="prev, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import ArticleList from '@/components/common/ArticleList';

export default {
  meta: {
    isPortalPage: true
  },
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
    ArticleList
  },
  data() {
    return {};
  },
  computed: {
    articles() {
      return JSON.parse(
        JSON.stringify(this.$store.state.article.allArticles.list)
      );
    },
    total() {
      return this.$store.state.article.allArticles.total;
    },
    pageSize() {
      return this.$store.state.article.allArticles.pageSize;
    },
    current() {
      return this.$store.state.article.allArticles.current;
    }
  },
  asyncData({ store, route }) {
    return Promise.all([store.dispatch('article/getAllArticles')]);
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
    getArtilces(current) {
      this.getAllArticles({
        pageSize: this.pageSize,
        current
      });
    }
  }
};
</script>

<style scoped lang="less">
.portal-home-page {
  margin-bottom: 20px;
  .paginator {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
