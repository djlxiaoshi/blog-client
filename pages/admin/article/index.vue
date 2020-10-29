<template>
  <div class="article-management-page">
    <div class="operation-wrap">
      <el-button @click="addArticle" type="primary" size="mini"
        >写文章</el-button
      >
    </div>
    <el-table :data="userArticles" style="width: 100%">
      <el-table-column
        :key="column.prop"
        v-for="column in columns"
        :prop="column.field"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">
          <div v-if="column['slot'] === 'thumbnail'">
            <div
              :style="{ border: `4px solid ${$color.borderColor}` }"
              class="item-thumbnail"
            >
              <el-image
                :src="scope.row[column['field']]"
                lazy
                fit="cover"
                style="width: 100%; height: 80px"
              >
                <AppLoading
                  slot="placeholder"
                  size="large"
                  class="image-slot"
                ></AppLoading>
              </el-image>
            </div>
          </div>
          <div v-else-if="column['slot'] === 'title'">
            <el-button @click="viewArticle(scope.row)" type="text">{{
              scope.row[column['field']]
            }}</el-button>
          </div>
          <div v-else-if="column['slot'] === 'author'">
            {{ scope.row[column['field']]['username'] }}
          </div>
          <div v-else-if="column['slot'] === 'visible'">
            <el-switch
              :value="scope.row[column['field']]"
              @change="togglePublish($event, scope.row['_id'])"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
            >
            </el-switch>
          </div>
          <div v-else-if="column['slot'] === 'createTime'">
            <span v-time="scope.row[column['field']]"></span>
          </div>
          <div v-else-if="column['slot'] === 'updateTime'">
            <span v-time="scope.row[column['field']]"></span>
          </div>
          <div v-else-if="column['slot'] === 'operate'">
            <el-button
              @click="edit(scope.row)"
              type="primary"
              plain
              size="mini"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              @click="config(scope.row)"
              type="warning"
              plain
              size="mini"
              icon="el-icon-setting"
            ></el-button>
            <el-button
              @click="del(scope.row)"
              type="danger"
              plain
              size="mini"
              icon="el-icon-delete"
            ></el-button>
          </div>
          <div v-else>
            {{ scope.row[column['field']] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import AppLoading from '@/components/common/app-loading';

const PAGE_SIZE = 10;

export default {
  components: {
    AppLoading
  },
  data() {
    return {
      columns: [
        { label: '缩略图', width: 180, field: 'thumbnail', slot: 'thumbnail' },
        { label: '标题', width: 180, field: 'title', slot: 'title' },
        { label: '作者', width: 100, field: 'createUser', slot: 'author' },
        { label: '简介', field: 'abstract' },
        {
          label: '创建时间',
          width: 180,
          field: 'createTime',
          slot: 'createTime'
        },
        {
          label: '更新时间',
          width: 180,
          field: 'updateTime',
          slot: 'updateTime'
        },
        { label: '公开', width: 80, field: 'status', slot: 'visible' },
        { label: '操作', width: 200, slot: 'operate' }
      ]
    };
  },
  computed: {
    ...mapState({
      userArticles: (state) => state.user.userArticles
    })
  },
  asyncData({ store, router }) {
    return store.dispatch('user/getUserArticles', {
      currentPage: 1,
      pageSize: PAGE_SIZE
    });
  },
  methods: {
    ...mapMutations({
      setUserArticle: 'user/setUserArticles'
    }),
    ...mapActions({
      getUserArticles: 'user/getUserArticles'
    }),
    addArticle() {
      this.$router.push('/admin/post');
    },
    viewArticle(article) {
      this.$router.push(`/article/${article._id}`);
    },
    togglePublish(status, id) {
      const { response } = this.$http({
        url: `/article/${id}`,
        method: 'put',
        data: {
          status
        },
        showSuccessMsg: '操作成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getUserArticles(id);
        },
        () => {}
      );
    },
    edit(article) {
      this.$router.push(`/admin/post/${article._id}`);
    },
    del(article) {
      this.$alert({
        title: '警告',
        text: '您确定要删除这篇文章吗？',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          this.deleteArticle(article._id);
        } else {
        }
      });
    },
    config(article) {
      this.$router.push(`/admin/article/${article._id}`);
    },
    deleteArticle(id) {
      const { response } = this.$http({
        url: `/article/${id}`,
        method: 'delete',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getUserArticles({
            currentPage: 1,
            pageSize: PAGE_SIZE
          });
        },
        () => {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
.article-management-page {
  .item-thumbnail {
    padding: 5px;
  }
}
</style>
