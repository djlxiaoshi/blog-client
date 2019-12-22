<template>
  <div class="user-home-page">
    <el-row type="flex" justify="space-around">
      <el-col :xs="24" :sm="23" :md="17" :lg="18" :xl="19">
        <div class="page-left">
          <AppEmpty :isEmpty="userArticles.length === 0">
            <ArticleList
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="busy"
              infinite-scroll-distance="10"
              :data="userArticles"
              @onView="viewArticle"
            ></ArticleList>
          </AppEmpty>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="6" :lg="5" :xl="4">
        <div class="page-right"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from '@/components/common/ArticleList/Index'
import AppEmpty from '@/components/common/Empty/Index'
import { mapState, mapActions, mapMutations } from 'vuex'
import { SET_USER_ARTICLES } from 'store/mutation-types'

const PAGE_SIZE = 10
export default {
  name: '',
  components: {
    ArticleList,
    AppEmpty
  },
  data () {
    return {
      currentPage: 2, // asyncData中已经加载过一夜，所以当前页为2
      pageSize: PAGE_SIZE,
      artilceTotals: Infinity, 
      busy: false
    }
  },
  computed: {
    ...mapState(['userArticles'])
  },
  asyncData({ store, router }) {
    return store.dispatch('getUserArticles', {
      currentPage: 1,
      pageSize: PAGE_SIZE
    })
  },
  methods: {
    ...mapMutations({
      setUserArticle: SET_USER_ARTICLES
    }),
    ...mapActions(['getUserArticles']),
    viewArticle(article) {
      this.$router.push(`/article/${article._id}`)
    },
    getMoreArtilces() {
      const { xhrInstance } = this.$http({
        url: '/user/articles/',
        data: {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        },
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      })

      return xhrInstance.then(
        articles => {
          return articles
        },
        e => {
          return e
        }
      )
    },
    async loadMore() {
      if (this.userArticles.length < this.artilceTotals) {
        this.busy = true
        const data = await this.getMoreArtilces({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        })

        this.artilceTotals = data.total

        this.userArticles.splice((this.currentPage - 1) * this.pageSize)
        this.userArticles.push(...data.list)

        this.setUserArticle(this.userArticles)

        // 如果到了下一页，则增加
        if (this.userArticles.length % this.pageSize === 0) {
          this.currentPage++
        }
        this.busy = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.user-home-page {
  .page-left {
    border: 1px solid #dddddd;
  }

  .page-right {
    height: 100px;
    border: 1px solid #dddddd;
  }
}
</style>
