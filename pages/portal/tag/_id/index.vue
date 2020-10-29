<template>
  <div :style="{ color: $color.defaultColor }" class="tag-details-page">
    <h2 class="tag-name">{{ tag.label }}</h2>
    <ul class="article-list">
      <li v-for="article in articles" :key="article._id" class="article-item">
        <span
          @click="goToArticleDetailsPage(article)"
          class="article-name hvr-underline-from-center"
          >{{ article.title }}</span
        >
        <span
          @click="goAuthorHomePage(article.createUser)"
          class="article-author hvr-underline-from-center"
          >{{ article.createUser.username }}</span
        >
        <span class="article-create-time">{{
          formatTime(article.createTime)
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { formatTime } from '@/assets/js/utils/tools';

export default {
  head() {
    return {
      title: `${this.tag.label || '标签详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '这是DJL箫氏的博客的归档页面'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.tagArticles,
      tag: (state) => state.tag.currentTag
    })
  },
  asyncData({ store, route }) {
    return Promise.all([
      store.dispatch('tag/getTag', route.params.id),
      store.dispatch('article/getArticlesByTagId', route.params.id)
    ]);
  },
  methods: {
    formatTime(time) {
      return formatTime(time);
    },
    goAuthorHomePage(author) {
      if (author) {
        this.$router.push(`/portal/about`);
      }
    },
    goToArticleDetailsPage(article) {
      if (article._id) {
        this.$router.push(`/portal/article/${article._id}`);
      }
    }
  }
};
</script>

<style scoped lang="less">
.tag-details-page {
  padding: 0 10px;
  .article-item {
    padding-left: 5px;
    list-style: none;
    padding: 10px 0;
  }
  .article-name {
    margin: 0 5px;
    cursor: pointer;
  }
  .article-author {
    margin: 0 5px;
    cursor: pointer;
  }
  .article-create-time {
    margin: 0 5px;
  }
}
</style>
