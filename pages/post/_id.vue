<template>
  <div class="create-article-page">
    <div class="article-title">
      <el-input
        v-model="tempArticle.title"
        placeholder="请输入文章标题"
      ></el-input>
    </div>

    <OperateBar :config="operateConfig" @onClick="operateAction"></OperateBar>
    <!-- <div class="operate-bar">
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
    </div> -->

    <div class="article-content">
      <div
        v-if="editMode || editPreivewMode"
        :style="{ width: editMode ? '100%' : '50%' }"
        class="editor-wrap"
      >
        <Editor
          ref="editor"
          :actions="[]"
          @input="getTextareaValue"
          output-type="markdown"
          input-type="markdown"
        ></Editor>
      </div>
      <div
        ref="preview"
        @scroll="previewerScroll"
        v-if="previewMode || editPreivewMode"
        :style="{ width: previewMode ? '100%' : '50%' }"
        class="preivew-wrap"
      >
        <VueShowdown
          :markdown="markdownContent"
          :options="showdownOptions"
          :extensions="[trim]"
          class="markdown-preview"
          flavor="github"
        ></VueShowdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { VueShowdown } from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';
import OperateBar from './components/OperateBar';
import Editor from '@/components/common/Editor/RichText';

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
    OperateBar,
    VueShowdown
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
      showdownHighlight,
      showdownOptions: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      tempArticle: {
        title: '',
        content: ''
      },
      markdownContent: '',
      // syncScroll options
      enableSyncScroll: true, // 开启同步滚动
      editorScrolling: false,
      previewerScrolling: false,
      trim: () => [
        {
          type: 'lang',
          regex: /&nbsp;/g,
          replace: ' '
        }
      ]
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.currentArticle
    }),
    articleId() {
      return this.$route.params.id;
    },
    editMode() {
      return this.viewMode === EDIT_MODE;
    },
    previewMode() {
      return this.viewMode === PREVIEW_MODE;
    },
    editPreivewMode() {
      return this.viewMode === EDIT_PREVIEW_MODE;
    },
    isEditMode() {
      return this.$route.params.id;
    }
  },
  watch: {
    article(value) {
      this.tempArticle = JSON.parse(JSON.stringify(value));
    }
  },
  mounted() {
    document
      .querySelector('.pell-content')
      .addEventListener('scroll', this.editorScroll);

    if (this.articleId) {
      this.getArticle(this.articleId);
    } else {
      this.setCurrentArticle({});
    }
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
      }
    },
    changeViewMode(mode) {
      this.viewMode = mode;
    },
    getTextareaValue(content) {
      this.markdownContent = content;
    },
    editorScroll(e) {
      if (this.enableSyncScroll) {
        if (this.editorScrolling) {
          this.editorScrolling = false;
          return;
        }
        this.previewerScrolling = true;
        const scrollElement = e.target;
        const clinetHeight = scrollElement.clientHeight; // 可视区域高度
        const scrollTop = scrollElement.scrollTop; // 滚动条高度
        const scrollHeight = scrollElement.scrollHeight; // 内容高度
        const percent = scrollTop / (scrollHeight - clinetHeight);
        if (this.$refs.preview) {
          const previewer = this.$refs.preview;
          previewer.scrollTop = percent * previewer.scrollHeight;
        }
      }
    },
    previewerScroll(e) {
      if (this.enableSyncScroll) {
        if (this.previewerScrolling) {
          this.previewerScrolling = false;
          return;
        }
        this.editorScrolling = true;
        const scrollElement = e.target;
        const clinetHeight = scrollElement.clientHeight; // 可视区域高度
        const scrollTop = scrollElement.scrollTop; // 滚动条高度
        const scrollHeight = scrollElement.scrollHeight; // 内容高度
        const percent = scrollTop / (scrollHeight - clinetHeight);
        const editorElement = document.querySelector('.pell-content');
        if (editorElement) {
          editorElement.scrollTop = percent * editorElement.scrollHeight;
        }
      }
    },
    handleParams(justSave) {
      const title = this.tempArticle.title;
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
      if (this.isEditMode) {
        this.updateArticle(params, message);
      } else {
        this.createArticle(params);
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
    display: flex;
    align-content: stretch;
    .editor-wrap {
      height: 100%;
      box-sizing: border-box;
      border: 2px solid #e5e5e5;
      border-top: none;
    }
    .preivew-wrap {
      height: 100%;
      box-sizing: border-box;
      overflow-y: auto;
      border: 2px solid #e5e5e5;
      border-top: none;
      background: #e5e5e5;
    }
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
