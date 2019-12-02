<template>
  <div class="markdown-editor">
    <el-row>
      <el-col
        v-if="mode !== 2"
        :xs="24" :sm="24"
        :md="mode === 3 ? 24: 12"
        :lg="mode === 3 ? 24: 12"
        :xl="mode === 3 ? 24: 12">
        <div class="markdown-wrap">
          <!-- 默认情况下 textarea的高度是不会随着内容增加的 -->
          <textarea v-model="articleContent" id="markdown-textarea" class="common-scroll"></textarea>
        </div>
      </el-col>

      <el-col
        v-if="mode !== 3"
        :md="mode === 2 ? 24: 12"
        :lg="mode === 2 ? 24: 12"
        :xl="mode === 2 ? 24: 12"
        class="hidden-sm-and-down">
        <div class="html-wrap common-scroll">
          <VueShowdown
              class="markdown-preview"
              id="vue-showdown"
              :vueTemplate="true"
              :markdown="articleContent"
              flavor="github"
              :extensions="[showdownHighlight]"
              :options="options"
          ></VueShowdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { VueShowdown } from 'vue-showdown';
  import showdownHighlight from 'showdown-highlight';

    export default {
      data () {
          return {
            textValue: '',
            showdownHighlight,
            options: {
              omitExtraWLInCodeBlocks: true,
              ghCodeBlocks: true
            },
            articleContent: this.content
          };
      },
      props: {
        mode: {
          default: 1
        },
        content: {
          type: String,
          default: ''
        }
      },
      components: {
        VueShowdown
      },
      computed: {
        
      },
      methods: {

      }
    };
</script>

<style scoped lang="less">
  .markdown-editor {
    height: 100%;
    /deep/ .el-col, /deep/ .el-row {
      height: 100%;
    }
    .markdown-wrap {
      border: 2px solid #dddddd;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      overflow: auto;
      textarea {
        border: none;
        width: 100%;
        height: 100%;
        line-height: 1.8;
        font-size: 16px;
        font-family: '微软雅黑', serif;
        resize:none;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
    .html-wrap {
      border: 2px solid #dddddd;
      height: 100%;
      padding: 10px;
      overflow: auto;
      height: 100%;
      box-sizing: border-box;
      #vue-showdown {
      }
    }
  }
</style>
