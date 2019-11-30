<template>
    <div class="comment-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div class="edit-wrap">
        <Editor type="richText" :actions="actions" @input="onInputChange" ref='reply-editor'></Editor>
        <div class="operate-wrap">
          <el-button type="danger" round size="mini" @click="postComment()">发布</el-button>
          <el-button round size="mini" @click='clear()'>清空</el-button>
        </div>
      </div>
      <div class="separator">精彩评论</div>
      <ul class="comment-list-wrap">
        <li class="comment-item" v-for="(comment, index) in comments" :key="comment._id">
          <div class="comment-desc">
            <span class="comment-floor">{{ index + 1}}楼</span>
            <span class="comment-user">{{ comment.createUser.username }}</span>
            <span v-if="comment.replyUser">
              <span>回复</span>
              <span>{{ comment.replyUser.username }}</span>
            </span>
            <span class="comment-time">{{ formatTime(comment.createTime) }}</span>
          </div>
          <p class="comment-content" v-html="comment.content"></p>
          <div class="operate-wrap">
            <a @click="toggleReplyVisible(true, true, index)" class="reply-btn">回复</a>
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
  import dayjs from 'dayjs';

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
        comments: [],
        commentsTotal: 10,
        currentPage: 1,
        pageSize: 10,
        busy: false
      };
    },
    methods: {
      formatTime (timestamp) {
        return dayjs(timestamp).format('YYYY-MM-DD');
      },
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
      getComments (currentPage) {
        const articleId = this.$route.params.id;
        if (articleId) {
          const { xhrInstance } = this.$http({
            url: `/comments`,
            method: 'get',
            data: {
              pageSize: this.pageSize,
              currentPage: currentPage,
              articleId
            },
            showSuccessMsg: false,
            showErrorMsg: true
          });

          return xhrInstance.then((data) => {
            this.commentsTotal = data.total;

            this.comments.splice((this.currentPage - 1) * this.pageSize);
            this.comments.push(...data.list);
            // 如果到了下一页，则增加
            if (this.comments.length % this.pageSize === 0) {
              this.currentPage++;
            }
            

          }, () => {

          });
        }
      },
      async loadMore () {
        if (this.comments.length < this.commentsTotal) {
          this.busy = true;
          await this.getComments(this.currentPage);
          this.busy = false;
        }
      },
      postComment (isReplyOthers, index) {
        const articleId = this.$route.params.id;
        if (articleId) {
          // 如果是回复其他评论
          if (isReplyOthers) {
            this.sendRequest({
              articleId,
              replyUser: this.comments[index].createUser._id,
              content: this.comments[index]._replyContent
            });
          } else {
            // 直接评论文章
            this.sendRequest({
              articleId,
              content: this.content
            });
          }
        }
      },
      clear () {
        // TODO 有无更加优雅的方式 获取孙子节点  或者实现清空功能
        this.content = '';
        this.$refs['reply-editor'].$refs['rich-text-editor'].clear();
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

          xhrInstance.then((comment) => {
            this.clrer();
            this.getComments(this.currentPage);
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
      padding: 20px 0;
      border-bottom: 1px solid #e5e5e5;
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
          color: #409eff;
          cursor: pointer;
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
