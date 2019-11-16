<template>
    <div class="comment-wrap">
      <div class="edit-wrap">
        <Editor type="richText" :actions="actions" @input="onInputChange"></Editor>
        <div class="operate-wrap">
          <el-button type="danger" round size="mini" @click="postComment()">发布</el-button>
          <el-button round size="mini">清空</el-button>
        </div>
      </div>
      <div class="separator">精彩评论</div>
      <ul class="comment-list-wrap">
        <li class="comment-item" v-for="(comment, index) in comments" :key="comment._id">
          <div class="comment-desc">
            <span class="comment-floor">{{ index }}楼</span>
            <span class="comment-user">{{ comment.createUser.username }}</span>
            <span v-if="comment.replyUser">
              <span>回复</span>
              <span>{{ comment.replyUser.username }}</span>
            </span>
            <span class="comment-time">{{ comment.createTime }}</span>
          </div>
          <p class="comment-content" v-html="comment.content"></p>
          <div class="operate-wrap">
            <el-button type="text" @click="toggleReplyVisible(true, true, index)" class="reply-btn">回复</el-button>
          </div>
          <div class="reply-wrap" v-if="comment._visible">
            <Editor type="richText" @input="onInputChange($event, true, index)" :actions="actions"></Editor>
            <div class="btn-wrap">
              <el-button type="danger" round size="mini" ref="loadingTarget" @click="postComment(true, index)">回复</el-button>
              <el-button round size="mini" @click="toggleReplyVisible(false, true, index)">取消</el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import Editor from 'components/common/Editor/Index.vue';
  export default {
    name: '',
    components: {
      Editor
    },
    data () {
      return {
        visible: false,
        actions: [],
        content: '',
        comments: []
      };
    },
    mounted () {
      this.getComments();
    },
    methods: {
      onInputChange (html, isReplyOthers, index) {
        if (isReplyOthers) {
          this.comments[index]._replyContent = html;
        } else {
          this.content = html;
        }
      },
      toggleReplyVisible (status, isReplyOthers, index) {
        if (isReplyOthers) {
          this.$set(this.comments[index], '_visible', status);
        } else {
          this.visible = status;
        }
      },
      getComments () {
        const articleId = this.$route.params.id;
        if (articleId) {
          const { xhrInstance } = this.$http({
            url: `/comments`,
            method: 'get',
            data: {
              pageSize: 10,
              currentPage: 1,
              articleId
            },
            showSuccessMsg: false,
            showErrorMsg: true
          });

          xhrInstance.then((data) => {
            this.comments = data.list;
          }, () => {

          });
        }
      },
      postComment (isReplyOthers, index) {
        debugger;
        const articleId = this.$route.params.id;
        if (articleId) {
          if (isReplyOthers) {
            this.sendRequest({
              articleId,
              replyUser: this.comments[index].createUser._id,
              content: this.comments[index]._replyContent
            });
          } else {
            this.sendRequest({
              articleId,
              content: this.content
            });
          }
        }
      },
      sendRequest (params) {
        const articleId = this.$route.params.id;
        if (articleId) {
          const { xhrInstance } = this.$http({
            url: `/comment`,
            method: 'post',
            data: params,
            showSuccessMsg: true,
            showErrorMsg: true
          });

          xhrInstance.then(() => {
            this.content = '';
            this.getComments();
          }, () => {

          });
        }
      }
    }
  };
</script>

<style scoped lang="less">
.comment-wrap {
  /deep/ .pell-content {
    max-height: 300px;
    min-height: 100px;
    height: auto;
  }
  .edit-wrap {
    .operate-wrap {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
    }
  }
  .separator {
    border-left: 5px solid #ec7259;
    padding-left: 5px;
    margin: 20px auto;
    font-weight: 700;
  }
  .comment-list-wrap {
    padding-left: 20px;
    .comment-item {
      list-style: none;
     .comment-desc {
       font-size: 12px;
       span {
         margin-right: 10px;
       }
     }
      .comment-content {
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.5;
        word-break: break-word;
      }
      .operate-wrap {
        .reply-btn {
          font-size: 12px;
        }
      }
      .reply-wrap {
        .btn-wrap {
          display: flex;
          margin-top: 10px;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
