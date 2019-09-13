<template>
  <div class="markdown-editor">

    <div class="operate-bar">
      <i class="operate-icon el-icon-view" @click="changeViewMode(2)"></i>
      <i class="operate-icon el-icon-edit-outline" @click="changeViewMode(3)"></i>
      <i class="operate-icon el-icon-menu" @click="changeViewMode(1)"></i>
      <i class="operate-icon el-icon-check" @click="save"></i>
    </div>

    <el-row>

      <el-col
        v-if="mode !== 2"
        :xs="24" :sm="24"
        :md="mode === 3 ? 24: 12"
        :lg="mode === 3 ? 24: 12"
        :xl="mode === 3 ? 24: 12">
        <div class="markdown-wrap">
          <textarea v-model="textValue"></textarea>
        </div>
      </el-col>

      <el-col
        v-if="mode !== 3"
        :md="mode === 2 ? 24: 12"
        :lg="mode === 2 ? 24: 12"
        :xl="mode === 2 ? 24: 12"
        class="hidden-sm-and-down">
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
              htmlValue: '',
              mode: 1 // 1 编辑预览模式 2 预览模式 3 编辑模式
            };
        },
        mounted () {
            this.highlightCode();
        },
        methods: {
          changeViewMode (mode) {
            this.mode = mode;
          },
          save () {
            this.$emit('save', this.textValue);
          },
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
    .markdown-wrap {
      border: 2px solid #dddddd;
      height: 100%;
      overflow: hidden;
      padding: 10px;
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
      padding: 10px;
    }
  }
</style>
