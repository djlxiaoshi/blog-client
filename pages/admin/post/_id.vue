<template>
  <div class="create-article-page">
    <div class="article-title">
      <el-input v-model="title" placeholder="请输入文章标题"></el-input>
    </div>

    <OperateBar :config="operateConfig" @onClick="operateAction"></OperateBar>

    <div class="article-content">
      <Editor
        ref="editor"
        :defaultValue="initContent"
        @input="getEditorValue"
        :viewMode="viewMode"
      ></Editor>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import OperateBar from './components/OperateBar';
import Editor from '@/components/common/Editor/Markdown';

const EDIT_PREVIEW_MODE = 1;
const EDIT_MODE = 2;
const PREVIEW_MODE = 3;

export default {
  head: {
    title: '写文章',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的文章编辑页面'
      }
    ]
  },
  components: {
    Editor,
    OperateBar
  },
  data() {
    return {
      viewMode: EDIT_PREVIEW_MODE,
      operateConfig: [
        { actionType: 'edit', icon: 'icon-bianji', tips: '编辑模式' },
        { actionType: 'preview', icon: 'icon-yulan', tips: '预览模式' },
        { actionType: 'edit-preview', icon: 'icon-fenlan', tips: '编辑/预览' },
        { actionType: 'publish', icon: 'icon-fabu', tips: '发布' }
      ],
      title: '',
      initContent: '',
      content: ''
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.currentArticle
    }),
    articleId() {
      return this.$route.params.id;
    },
    isEditMode() {
      return this.$route.params.id;
    }
  },
  watch: {
    article(value) {
      this.title = value.title || '';
      this.initContent = value.content || '';
    }
  },
  mounted() {
    if (this.articleId) {
      this.getArticle(this.articleId);
    } else {
      this.setCurrentArticle({});
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // TODO 直接保存
    next();
  },
  methods: {
    ...mapActions({
      getArticle: 'article/getArticleByUser'
    }),
    ...mapMutations({
      setCurrentArticle: 'article/setCurrentArticle'
    }),
    operateAction(actionType) {
      switch (actionType) {
        case 'edit': {
          this.viewMode = EDIT_MODE;
          break;
        }
        case 'preview': {
          this.viewMode = PREVIEW_MODE;
          break;
        }
        case 'edit-preview': {
          this.viewMode = EDIT_PREVIEW_MODE;
          break;
        }
        case 'save': {
          this.handleParams(true);
          break;
        }
        case 'publish': {
          this.handleParams(false);
        }
      }
    },
    getEditorValue(content) {
      this.content = content;
    },
    handleParams(isPublish) {
      const title = this.title;
      if (!title.trim()) {
        this.$notify.warning('文章标题不能为空');
        return;
      }

      const params = {
        title: title.trim(),
        thumbnail: this.getThumbnail(),
        abstract: this.getAbstract(),
        content: this.getContent(),
        status: isPublish ? 1 : 0
      };
      const message = isPublish ? '文章发布成功' : '文章保存成功';
      if (this.isEditMode) {
        this.updateArticle(params, message, isPublish);
      } else {
        this.createArticle(params, isPublish);
      }
    },
    /**
     * 获取文章内容
     * @returns {*|string}
     */
    getContent() {
      return this.content;
    },
    /**
     * 获取文章缩略图
     * @returns {string}
     */
    getThumbnail() {
      let imgSrc = '';
      const editorDom = this.$refs.editor.$el;
      const contentDom = editorDom.querySelector('.markdown-preview');
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
    getAbstract() {
      const editorDom = this.$refs.editor.$el;
      const contentDom = editorDom.querySelector('.markdown-preview');
      if (contentDom) {
        let abstract = '';
        const paragraphList = contentDom.getElementsByTagName('p');
        const paragraphArr = Array.from(paragraphList);
        for (const item of paragraphArr) {
          abstract += item.textContent.replace(/[\r\n]/g, ''); // 去除回车换行
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
    createArticle(params, isPublish) {
      const { response } = this.$http({
        url: '/article',
        data: params,
        method: 'post',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        (article) => {
          if (isPublish) {
            this.$router.push('/admin/article');
          } else {
            this.$router.replace(`/post/${article._id}`);
          }
        },
        () => {}
      );
    },
    /**
     * 更新文章
     * @param params
     */
    updateArticle(params, message, isPublish) {
      const { response } = this.$http({
        url: `/article/${this.articleId}`,
        data: params,
        method: 'put',
        showSuccessMsg: message,
        showErrorMsg: true
      });

      response.then(
        () => {
          if (isPublish) {
            this.$router.push('/admin/article');
          }
        },
        () => {}
      );
    }
  }
};
</script>

<style scoped lang="less">
.create-article-page {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  right: 0;
  bottom: 0px;
  top: 0;
  z-index: 1001;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  .article-title {
    flex: 0 0 60px;
  }
  .operate-bar {
    display: flex;
    align-items: center;
    flex: 0 0 40px;
    background: #dddddd;
    .operate-icon {
      padding: 0 15px;
      cursor: pointer;
      &:hover {
        color: #5cb6ff;
      }
    }
  }
  .article-content {
    flex: 1;
    height: calc(100vh - 100px);
  }
  /deep/ .CodeMirror {
    height: 100% !important;
  }
  /deep/ .el-input {
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
