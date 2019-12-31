<template>
  <div class="view-article-page">
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

              <span v-if="hasOperateAuth" class="operate-wrap">
                <span @click="editArticle" class="edit">编辑文章</span>

                <span @click="userConfirm" class="delete">删除文章</span>
              </span>
            </div>
            <div class="article-tags">
              <div class="selected-tags">
                <el-tag
                  :key="tag._id"
                  v-for="tag in article.tags"
                  size="mini"
                  >{{ tag.label }}</el-tag
                >
                <span
                  v-if="hasOperateAuth"
                  @click="toggleTags"
                  class="tags-setting"
                  >标签设置</span
                >
              </div>
              <div v-if="openTags" class="all-tags">
                <div class="selector-body">
                  <el-checkbox-group v-model="articleTags">
                    <el-checkbox-button
                      :key="tag._id"
                      :label="tag._id"
                      v-for="tag in tags"
                      >{{ tag.label }}</el-checkbox-button
                    >
                  </el-checkbox-group>
                </div>

                <div class="selector-footer">
                  <el-button @click="toggleTags" size="mini" round
                    >取消</el-button
                  >
                  <el-button @click="handleTagsParams" size="mini" round
                    >保存</el-button
                  >
                </div>
              </div>
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

          <div style="margin-top: 20px">
            <Comment></Comment>
          </div>
        </div>
      </el-col>

      <!--<el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">-->
      <!--<div class="page-right"></div>-->
      <!--</el-col>-->
    </el-row>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';
import { mapState, mapActions, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import Comment from './Comment';

export default {
  header() {
    return {
      title: `${'文章详情'}`,
      titleTemplate: '%s - DJL箫氏的博客!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    };
  },
  components: {
    VueShowdown,
    Comment
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
      articleTags: []
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.currentArticle,
      userInfo: (state) => state.userInfo,
      tags: (state) => state.tags
    }),
    author() {
      return this.article.createUser;
    },
    hasOperateAuth() {
      return (
        this.userInfo &&
        this.article &&
        this.article.createUser &&
        this.userInfo._id === this.article.createUser._id
      );
    }
  },
  asyncData({ store, route }) {
    return store.dispatch('article/getArticle', route.params.id);
  },
  mounted() {
    this.articleTags = Array.isArray(this.article.tags)
      ? this.article.tags.map((tag) => tag._id)
      : [];
  },
  methods: {
    ...mapActions({
      getArticle: 'article/getArticle',
      getAllTags: 'tag/getAllTag'
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
    toggleTags() {
      this.openTags = !this.openTags;
      if (!this.tags || this.tags.length === 0) {
        this.getAllTags();
      }
    },
    editArticle() {
      this.$router.push(`/post/${this.$route.params.id}`);
    },
    userConfirm() {
      this.$alert({
        title: '警告',
        text: '您确定要删除这篇文章吗？',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          this.deleteArticle();
        } else {
        }
      });
    },
    handleTagsParams() {
      this.saveArticleTags(this.articleTags);
    },
    saveArticleTags(tags) {
      const { response } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'put',
        data: {
          tags
        },
        showSuccessMsg: '标签设置成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getArticle(this.$route.params.id);
          this.openTags = false;
        },
        () => {}
      );
    },
    deleteArticle() {
      const { response } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'delete',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        () => {
          //  返回用户文章列表页
          this.$router.push('/');
        },
        () => {}
      );
    }
  }
};
</script>

<style scoped lang="less">
.view-article-page {
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
      color: #969696;
      font-size: 13px;
      .details-item {
        margin-right: 8px;
      }
      .operate-wrap {
        margin-left: auto;
        .edit {
          cursor: pointer;
          margin-right: 8px;
        }
        .delete {
          cursor: pointer;
          color: red;
        }
      }
    }
    .selected-tags {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .tags-setting {
        margin-left: auto;
        font-size: 12px;
        cursor: pointer;
        text-decoration: underline;
      }
      /deep/ .el-tag {
        margin: 2px;
      }
    }
    .all-tags {
      padding: 10px;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      .selector-body {
        margin-bottom: 5px;
        /deep/ .el-checkbox-button {
          margin: 2px 4px;
          .el-checkbox-button__inner {
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            padding: 5px 8px;
            font-size: 12px;
          }
          &.is-checked {
            .el-checkbox-button__inner {
              box-shadow: none !important;
            }
          }
        }
      }
      .selector-footer {
        text-align: right;
        /deep/ .el-button {
          padding: 3px 8px;
        }
      }
    }
    .article-content {
      margin-top: 30px;
      height: 100%;
    }
  }

  .page-right {
    height: 100px;
    border: 1px solid #dddddd;
  }
}
</style>
