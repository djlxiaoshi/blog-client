<template>
  <div class="explore-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
        <div class="page-left" ref="loadingTarget">
          <AppEmpty :isEmpty="allArticles.length === 0">
            <ArticleList
              v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
              :data="allArticles"
              @onView="viewArticle"
            ></ArticleList>
          </AppEmpty>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
        <div class="page-right">
          <SideBar></SideBar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ArticleList from '@/components/common/ArticleList/Index';
  import SideBar from './SideBar';
  import AppEmpty from '@/components/common/Empty/Index';
  import { mapState, mapActions, mapMutations } from 'vuex';
  import { SET_ALL_ARTICLES } from 'store/mutation-types';

  export default {
    name: '',
    components: {
      ArticleList,
      AppEmpty,
      SideBar
    },
    data () {
      return {
        currentPage: 2, // asyncData中已经加载过一夜，所以当前页为2
        pageSize: 2,
        artilceTotals: Infinity,
        busy: false
      };
    },
    computed: {
      ...mapState([
        'allArticles'
      ])
    },
    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('getAllArticles', {
          currentPage: 1,
          pageSize: 2
        }),
        store.dispatch('getAllTags')
      ]);
    },
    mounted () {
      
    },
    methods: {
      ...mapMutations({
        'setAllArticle': SET_ALL_ARTICLES
      }),
      ...mapActions([
        'getAllArticles'
      ]),
      viewArticle (article) {
        this.$router.push(`/article/${article._id}`);
      },
      getMoreArtilces () {
        const { xhrInstance } = this.$http({
          url: '/articles',
          data: {
            pageSize: this.pageSize,
            currentPage: this.currentPage
          },
          method: 'get',
          showSuccessMsg: false,
          showErrorMsg: false
        });

        return xhrInstance.then((articles) => {
          return articles;
        }, (e) => {
          return e;
        });
      },
      async loadMore () {
        if (this.allArticles.length < this.artilceTotals) {
          
          this.busy = true;
          const data = await this.getMoreArtilces({
            currentPage: this.currentPage,
            pageSize: this.pageSize
          });

          this.artilceTotals = data.total;
          
          this.allArticles.splice((this.currentPage - 1) * this.pageSize);
          this.allArticles.push(...data.list);

          this.setAllArticle(this.allArticles);

          // 如果到了下一页，则增加
          if (this.allArticles.length % this.pageSize === 0) {
            this.currentPage++;
          }
          this.busy = false;
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .explore-page {
    margin-bottom: 20px;
    .page-left {
      border: 1px solid #dddddd;
    }

    .page-right {

    }
  }
</style>
