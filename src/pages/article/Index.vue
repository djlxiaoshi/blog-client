<template>
    <div class="view-article-page">
      <el-row type="flex" justify="space-around">
        <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
          <div class="page-left">
            <h1 class="article-title">{{ title }}</h1>
            <div class="article-details">
              <span>{{ formatTime(article.createTime) }}</span>
              <span>字数 {{ article.wordCount }}</span>
              <span>阅读 {{ article.views }}</span>

              <span
                v-if="user && user._id === article.createUser"
                class="operate-wrap">
                <span
                  class="edit"
                  @click="editArticle"
                >编辑文章</span>

                <span
                  class="delete"
                  @click="userConfirm"
                >删除文章</span>
              </span>

            </div>
            <div class="article-content">
              <VueShowdown
                class="vue-showdown"
                :vueTemplate="true"
                :markdown="article.content || ''"
                flavor="github"
                :extensions="[showdownHighlight]"
                :options="options"> </VueShowdown>
            </div>
          </div>
        </el-col>

        <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
          <div class="page-right"></div>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import { VueShowdown } from 'vue-showdown';
  import showdownHighlight from 'showdown-highlight';

  import { mapState, mapActions } from 'vuex';
  import dayjs from 'dayjs';

  export default {
    components: {
      VueShowdown
    },
    data () {
      return {
        content: '',
        title: '',
        showdownHighlight,
        options: {
          omitExtraWLInCodeBlocks: true,
          ghCodeBlocks: true
        }
      };
    },
    asyncData ({ store, router }) {
      return store.dispatch('getArticle', router.params.id);
    },
    mounted () {
      this.getArticle(this.$route.params.id);
    },
    computed: {
      ...mapState([
        'article',
        'user'
      ])
    },
    methods: {
      ...mapActions([
        'getArticle'
      ]),
      formatTime (time) {
        return time ? dayjs(time).format('YYYY-MM-DD') : '';
      },
      editArticle () {
        this.$router.push(`/post/${this.$route.params.id}`);
      },
      userConfirm () {
        this.$alert({
          title: '警告',
          text: '您确定要删除这篇文章吗？',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        }).then((willDelete) => {
          if (willDelete) {
            this.deleteArticle();
          } else {

          }
        });
      },
      deleteArticle () {
        const { xhrInstance } = this.$http({
          url: `/article/${this.$route.params.id}`,
          method: 'delete',
          showSuccessMsg: true,
          showErrorMsg: true
        });

        xhrInstance.then(() => {
        //  返回用户文章列表页
          this.$router.push('/');
        }, () => {

        });
      }
    }
  };
</script>

<style scoped lang="less">
  .view-article-page {
    .page-left {
      padding: 10px;
      .article-title {
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
      }
      .article-details {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        color: #969696;
        font-size: 13px;
        span {
          margin-right: 8px;
        }
        .operate-wrap {
          margin-left: auto;
          .edit {
            cursor: pointer;
          }
          .delete {
            padding: 2px 5px;
            border-radius: 20px;
            border: 1px solid red;
            cursor: pointer;
            color: red;
          }
        }

      }
      .article-content {
        height: 100%;
      }
    }

    .page-right {
      height: 100px;
      border: 1px solid #dddddd;
    }
  }
</style>
