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
                v-if="user._id === article.createUser"
                class="edit"
                @click="editArticle"
              >编辑文章</span>
            </div>
            <div class="article-content" v-html="content"></div>
          </div>
        </el-col>

        <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
          <div class="page-right"></div>
        </el-col>
      </el-row>

    </div>
</template>

<script>
  import marked from 'marked';
  import { mapState, mapActions } from 'vuex';
  import dayjs from 'dayjs';

  export default {
    components: {},

    data () {
      return {
        content: '',
        title: ''
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
        this.$router.push('/edit/:id');
      }
    },
    watch: {
      article (article) {
        this.title = article.title;
        this.content = marked(article.content);
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
        .edit {
          margin-left: auto;
          cursor: pointer;
        }
      }
      .article-content {

      }
    }

    .page-right {
      height: 100px;
      border: 1px solid #dddddd;
    }
  }
</style>
