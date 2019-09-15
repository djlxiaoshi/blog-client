<template>
    <div class="edit-page">
      <div class="article-title">
        <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
      </div>

      <div class="operate-bar">
        <i class="operate-icon el-icon-view" @click="changeViewMode(2)"></i>
        <i class="operate-icon el-icon-edit-outline" @click="changeViewMode(3)"></i>
        <i class="operate-icon el-icon-menu" @click="changeViewMode(1)"></i>
        <i class="operate-icon el-icon-check" @click="save"></i>
      </div>

      <div class="article-content">
        <Editor mode="mode"></Editor>
      </div>
    </div>
</template>

<script>
  import Editor from '@/components/common/Editor/Index';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: '',
    components: {
      Editor
    },
    data () {
      return {
        mode: 1 // 1 编辑预览模式 2 预览模式 3 编辑模式
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
        'article'
      ])
    },
    methods: {
      ...mapActions([
        'getArticle'
      ]),
      changeViewMode (mode) {
        this.mode = mode;
      },
      save () {

      }
    }
  };
</script>

<style scoped lang="less">
  .edit-page {
    .article-title {
      margin-bottom: 30px;
      text-align: center;
      font-size: 20px;
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
  }
</style>
