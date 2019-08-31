<template>
  <div class="markdown-editor">
    <div class="operate-bar"></div>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="markdown-wrap">
          <textarea v-model="textValue"></textarea>
        </div>
      </el-col>

      <el-col :md="12" :lg="12" :xl="12" class="hidden-sm-and-down">
        <div class="html-wrap" v-html="htmlValue"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js';

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: (code, lang, callback) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, code, true).value +
                        '</code></pre>';
                } catch (__) {}
            }
        },
        gfm: true,
        breaks: true
    });

    export default {
        name: 'Index',
        data () {
            return {
                textValue: '',
                htmlValue: ''
            };
        },
        mounted () {
            this.highlightCode();
        },
        methods: {
            transform (text) {
                return marked(text);
            },
            highlightCode () {
                this.$nextTick(() => {
                    hljs.initHighlighting();
                });
            }
        },
        watch: {
            textValue (textValue) {
                const html = this.transform(textValue);
                this.htmlValue = html;
                this.highlightCode();
            }
        }
    };
</script>

<style scoped lang="less">
  .markdown-editor {
    height: 100%;
    /deep/ .el-col, /deep/ .el-row {
      height: 100%;
    }
    .operate-bar {
      height: 40px;
      background: #dddddd;
    }
    .markdown-wrap {
      border: 2px solid #dddddd;
      height: 100%;
      overflow: hidden;
      textarea {
        border: none;
        width: 100%;
        height: 100%;
        font-family: '微软雅黑', serif;
        font-size: 14px;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
    .html-wrap {
      border: 2px solid #dddddd;
      height: 100%;
    }
  }
</style>
