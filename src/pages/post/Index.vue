<template>
    <div class="create-article-page">
      <div class="article-title">
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
      </div>

      <div class="operate-bar">
        <i class="operate-icon el-icon-view" @click="changeViewMode(2)"></i>
        <i class="operate-icon el-icon-edit-outline" @click="changeViewMode(3)"></i>
        <i class="operate-icon el-icon-menu" @click="changeViewMode(1)"></i>
        <i class="operate-icon el-icon-check" @click="handleParams"></i>
      </div>

      <div class="article-content">
        <Editor :content="content" :mode="viewMode" ref="editor"></Editor>
      </div>

    </div>
</template>

<script>
  import Editor from '@/components/common/Editor/Index';
  import { mapState, mapActions } from 'vuex';
  const CREATE_MODE = 1;
  const EDIT_MODE = 2;

    export default {
        name: 'Index',
        components: {
            Editor
        },
      data () {
          return {
            title: '',
            content: '',
            viewMode: 1
          };
      },
      asyncData ({ store, route }) {
          if (route.params.id) {
            return store.dispatch('getArticle', route.params.id);
          }
      },
      // mounted () {
      //   this.getArticle(this.$route.params.id);
      // },
      computed: {
        ...mapState([
          'article'
        ]),
        articleId () {
          return this.$route.params.id;
        },
        mode () {
          return this.$route.params.id ? EDIT_MODE : CREATE_MODE;
        }
      },
      methods: {
        ...mapActions([
          'getArticle'
        ]),
        changeViewMode (mode) {
          this.viewMode = mode;
        },
        handleParams () {
          if (!this.title.trim()) {
            this.$notify.warning('文章标题不能为空');
            return;
          }

          const params = {
            title: this.title,
            thumbnail: this.getThumbnail(),
            abstract: this.getAbstract(),
            content: this.getContent()
          };

          if (this.mode === CREATE_MODE) {
            this.createArticle(params);
          } else {
            this.updateArticle(params);
          }

        },
        /**
         * 获取文章内容
         * @returns {*|string}
         */
        getContent () {
          const editorDom = this.$refs.editor.$el;
          const textAreaDom = editorDom.querySelector('#markdown-textarea');
          if (textAreaDom) {
            return textAreaDom.value;
          }
        },
        /**
         * 获取文章缩略图
         * @returns {string}
         */
        getThumbnail () {
          let imgSrc = '';
          const editorDom = this.$refs.editor.$el;
          const contentDom = editorDom.querySelector('#vue-showdown');
          if (contentDom) {
            const firstImageDom = contentDom.getElementsByTagName('img')[0];
            if (firstImageDom) {
              imgSrc = firstImageDom.src;
            }
          }
          return imgSrc;
        },
        /**
         * 获取文章摘要
         * @returns {string}
         */
        getAbstract () {
          const editorDom = this.$refs.editor.$el;
          const contentDom = editorDom.querySelector('#vue-showdown');
          if (contentDom) {
            let abstract = '';
            const paragraphList = contentDom.getElementsByTagName('p');
            const paragraphArr = Array.from(paragraphList);
            for (let item of paragraphArr) {
              abstract += item.innerText.replace(/[\r\n]/g, ''); // 去除回车换行
              if (abstract.length >= 100) {
                return abstract.substr(0, 100);
              }
            }
            return abstract;
          }
        },
        /**
         * 新增文章
         * @param params
         */
        createArticle (params) {
          const { xhrInstance } = this.$http({
            url: '/article',
            data: params,
            method: 'post',
            showSuccessMsg: true,
            showErrorMsg: true
          });

          xhrInstance.then(() => {

          }, () => {

          });
        },
        /**
         * 更新文章
         * @param params
         */
        updateArticle (params) {
          const { xhrInstance } = this.$http({
            url: `/article/${ this.articleId }`,
            data: params,
            method: 'put',
            showSuccessMsg: true,
            showErrorMsg: true
          });

          xhrInstance.then(() => {

          }, () => {

          });
        }
      },
      watch: {
        article (article) {
          this.title = article.title;
          this.content = article.content;
        }
      }
    };
</script>

<style scoped lang="less">
  .create-article-page {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1001;
    background: #ffffff;
    .article-title {

    }
    .operate-bar {
      display: flex;
      align-items: center;
      height: 40px;
      background: #dddddd;
      .operate-icon {
        padding: 0 8px;
        cursor: pointer;
        &:hover {
          color: #5cb6ff;
        }
      }
    }
    .article-content {
      height: calc(100vh - 120px);
    }
    /deep/ .el-input{
      .el-input__inner {
        height: 60px;
        line-height: 60px;
        border-radius: 0;
        border: none;
        font-weight: 700;
        font-size: 18px;
        &:focus {
          outline: none;
          border-color: #dddddd;
        }
      }
    }
  }
</style>
