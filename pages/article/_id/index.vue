<template>
  <div :style="{ color: $color.defaultColor }" class="view-article-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="page-left">
          <div class="article-wrap">
            <h1 class="article-title">{{ article.title }}</h1>

            <div class="article-details">
              <span class="details-item">
                {{ formatTime(article.createTime) }}
              </span>
              <span class="details-item">字数 {{ article.wordCount }}</span>
              <span class="details-item">阅读 {{ article.views }}</span>
            </div>

            <div class="tags-wrap">
              <Tag
                :style="{ 'margin-right': '10px' }"
                :key="tag._id"
                v-for="tag in article.tags"
                @click="goToTagDetails(tag)"
                >{{ tag.label }}</Tag
              >
            </div>

            <div class="article-content">
              <VueShowdown
                :vueTemplate="false"
                :markdown="article.content || ''"
                :extensions="[showdownHighlight]"
                :options="options"
                flavor="github"
                class="markdown-preview"
              ></VueShowdown>
            </div>
          </div>

          <div id="comments" style="margin-top: 20px"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';
import { mapState, mapActions, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import Gitalk from 'gitalk';
import Tag from '@/components/common/Tag';

export default {
  head() {
    return {
      title: `${this.article.title || '文章详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '这是DJL箫氏的博客的文章详情页面'
        }
      ]
    };
  },
  components: {
    VueShowdown,
    Tag
  },
  data() {
    return {
      showdownHighlight,
      options: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      openTags: false,
      selectTags: [],
      articleTags: [],
      published: false
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.currentArticle,
      tags: (state) => state.tag.allTags
    }),
    author() {
      return this.article.createUser;
    }
  },
  asyncData({ store, route }) {
    return store
      .dispatch('article/getArticle', route.params.id)
      .catch(() => {});
  },
  mounted() {
    const gitalk = new Gitalk({
      title: this.article.title,
      clientID: this.$globalConfig.gitalk.clientID,
      clientSecret: this.$globalConfig.gitalk.secretId,
      repo: this.$globalConfig.gitalk.repo, // The repository of store comments,
      owner: 'djlxiaoshi',
      admin: ['djlxiaoshi'],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
      // For more available options, check out the documentation below
    });

    gitalk.render('comments');

    this.articleTags = Array.isArray(this.article.tags)
      ? this.article.tags.map((tag) => tag._id)
      : [];
  },
  methods: {
    ...mapActions({
      getArticle: 'article/getArticle',
      getAllTags: 'tag/getAllTags'
    }),
    ...mapMutations({
      setCurrentArticle: 'article/setCurrentArticle'
    }),
    formatTime(time) {
      return time ? dayjs(time).format('YYYY-MM-DD') : '';
    },
    isChecked(tag) {
      const flag = !!this.article.tags.find(
        (articleTag) => articleTag._id === tag._id
      );
      return flag;
    },
    handleTagsParams() {
      this.saveArticleTags(this.articleTags);
    },
    goToTagDetails(tag) {
      if (tag) {
        this.$router.push(`/tag/${tag._id}`);
      }
    }
  }
};
</script>

<style scoped lang="less">
.view-article-page {
  padding: 0 10px;
  .page-left {
    padding: 10px;
    .article-title {
      margin-bottom: 30px;
      text-align: center;
      font-size: 30px;
    }
    .article-details {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      font-size: 13px;
      .details-item {
        margin-right: 8px;
      }
    }

    .tags-wrap {
      /deep/ .el-tag {
        cursor: pointer;
        margin-right: 10px;
      }
    }

    .article-content {
      margin-top: 30px;
      height: 100%;
    }
  }
}
</style>
