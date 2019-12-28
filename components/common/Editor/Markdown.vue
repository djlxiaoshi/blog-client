<template>
  <div class="markdown-editor">
    <el-row>
      <el-col
        v-if="mode !== 2"
        :xs="24"
        :sm="24"
        :md="mode === 3 ? 24 : 12"
        :lg="mode === 3 ? 24 : 12"
        :xl="mode === 3 ? 24 : 12"
      >
        <div class="markdown-wrap">
          <!-- 默认情况下 textarea的高度是不会随着内容增加的 -->
          <!-- 这里使用v-model双向绑定，当传入的value值是vue模板时，会进行编译从而报错 -->
          <textarea
            ref="textarea"
            @input="textareaChange"
            class="common-scroll"
          ></textarea>
        </div>
      </el-col>

      <el-col
        v-if="mode !== 3"
        :md="mode === 2 ? 24 : 12"
        :lg="mode === 2 ? 24 : 12"
        :xl="mode === 2 ? 24 : 12"
        class="hidden-sm-and-down"
      >
        <div class="html-wrap common-scroll">
          <VueShowdown
            id="vue-showdown"
            :markdown="markdownContent"
            :extensions="[showdownHighlight]"
            :options="options"
            class="markdown-preview"
            flavor="github"
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
  components: {
    VueShowdown
  },
  props: {
    mode: {
      type: Number,
      default: 1
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textValue: '',
      showdownHighlight,
      options: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      markdownContent: this.content
    };
  },
  computed: {},
  watch: {
    content(value) {
      this.markdownContent = value;
    }
  },
  mounted() {
    if (this.$refs.textarea) {
      this.$refs.textarea.value = this.markdownContent;
    }
  },
  methods: {
    textareaChange(e) {
      const value = e.target.value;
      this.markdownContent = value;
      this.$emit('change', value);
    }
  }
};
</script>

<style scoped lang="less">
.markdown-editor {
  height: 100%;
  /deep/ .el-col,
  /deep/ .el-row {
    height: 100%;
  }
  .markdown-wrap {
    border: 2px solid #dddddd;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    textarea {
      border: none;
      width: 100%;
      height: 100%;
      line-height: 1.8;
      font-size: 16px;
      font-family: '微软雅黑', serif;
      resize: none;
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
  }
}
</style>
