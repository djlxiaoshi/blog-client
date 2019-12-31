<template>
  <div class="create-article-page">
    <div class="article-title">
      <el-input
        :value="article.title"
        @input="setTitle"
        placeholder="请输入文章标题"
      ></el-input>
    </div>

    <div class="operate-bar">
      <el-tooltip class="item" effect="dark" content="编辑模式" placement="top">
        <i
          @click="changeViewMode(3)"
          class="operate-icon iconfont icon-bianji"
        ></i>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" content="预览模式" placement="top">
        <i
          @click="changeViewMode(2)"
          class="operate-icon iconfont icon-yulan"
        ></i>
      </el-tooltip>

      <el-tooltip
        class="item"
        effect="dark"
        content="预览编辑模式"
        placement="top"
      >
        <i
          @click="changeViewMode(1)"
          class="operate-icon iconfont icon-fenlan"
        ></i>
      </el-tooltip>

      <el-tooltip
        class="item"
        effect="dark"
        content="保存为草稿"
        placement="top"
      >
        <i
          @click="handleParams(true)"
          class="operate-icon iconfont icon-baocun"
        ></i>
      </el-tooltip>

      <el-tooltip
        :content="mode === 1 ? '发布' : '重新发布'"
        class="item"
        effect="dark"
        placement="top"
      >
        <i
          @click="handleParams(false)"
          class="operate-icon iconfont icon-fabu"
        ></i>
      </el-tooltip>
    </div>

    <div class="article-content">
      <Editor
        ref="editor"
        :content="article.content || ''"
        :mode="viewMode"
      ></Editor>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Editor from '@/components/common/Editor/Index';

const CREATE_MODE = 1;
const EDIT_MODE = 2;

export default {
  header: {
    title: `写文章`,
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  components: {
    Editor
  },
  data() {
    return {
      viewMode: 1,
      title: ''
    };
  },
  computed: {
    ...mapState(['article']),
    articleId() {
      return this.$route.params.id;
    },
    mode() {
      return this.$route.params.id ? EDIT_MODE : CREATE_MODE;
    }
  },
  async asyncData({ store, route, error }) {
    if (route.params.id) {
      // error({
      //   statusCode: 500,
      //   message: 'test'
      // });
      const data = await store.dispatch(
        'article/getArticleByUser',
        route.params.id
      );
      return data;
    } else {
      store.commit('article/setCurrentArticle', {});
    }
  },
  mounted() {
    this.title = this.article.title;
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const result = confirm(
      '该操作不会对您的更改进行保存，请在离开之前进行保存操作！'
    );
    if (result) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    ...mapActions({
      getArticle: 'article/getArticleByUser'
    }),
    ...mapMutations({
      setCurrentArticle: 'article/setCurrentArticle'
    }),
    changeViewMode(mode) {
      this.viewMode = mode;
    },
    setTitle(value) {
      this.title = value;
    },
    handleParams(justSave) {
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
        status: justSave ? 0 : 1
      };
      const message = justSave ? '文章保存成功' : '文章发布成功';
      if (this.mode === CREATE_MODE) {
        this.createArticle(params);
      } else {
        this.updateArticle(params, message);
      }
    },
    /**
     * 获取文章内容
     * @returns {*|string}
     */
    getContent() {
      const editorDom = this.$refs.editor.$el;
      const textAreaDom = editorDom.querySelector('textarea');
      if (textAreaDom) {
        return textAreaDom.value;
      }
    },
    /**
     * 获取文章缩略图
     * @returns {string}
     */
    getThumbnail() {
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
    getAbstract() {
      const editorDom = this.$refs.editor.$el;
      const contentDom = editorDom.querySelector('#vue-showdown');
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
    createArticle(params) {
      const { response } = this.$http({
        url: '/article',
        data: params,
        method: 'post',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        (article) => {
          this.$router.push(`/post/${article._id}`);
        },
        () => {}
      );
    },
    /**
     * 更新文章
     * @param params
     */
    updateArticle(params, message) {
      const { response } = this.$http({
        url: `/article/${this.articleId}`,
        data: params,
        method: 'put',
        showSuccessMsg: message,
        showErrorMsg: true
      });

      response.then(
        () => {},
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
