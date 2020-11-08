<template>
  <div class="user-list-page">
    <div class="operation-wrap">
      <el-button @click="openDialog" type="primary" size="mini"
        >添加用户</el-button
      >
    </div>
    <el-table :data="users" style="width: 100%">
      <el-table-column
        :key="column.prop"
        v-for="column in columns"
        :prop="column.field"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">
          <div v-if="column['slot'] === 'role'">
            <span>{{
              scope.row[column['field']] ? '普通用户' : '管理员'
            }}</span>
          </div>
          <div v-else-if="column['slot'] === 'disabled'">
            <el-switch
              :value="scope.row[column['field']]"
              @change="toggle($event, scope.row['_id'])"
              active-color="#13ce66"
            >
            </el-switch>
          </div>
          <div v-else-if="column['slot'] === 'createTime'">
            <span v-time="scope.row[column['field']]"></span>
          </div>
          <div v-else-if="column['slot'] === 'operate'">
            <!-- <el-button
              @click="edit(scope.row)"
              type="primary"
              plain
              size="mini"
              icon="el-icon-edit"
            ></el-button> -->
          </div>
          <div v-else>
            {{ scope.row[column['field']] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginator">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="current"
        @current-change="changeCurrentPage"
        layout="prev, pager, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      columns: [
        { label: '用户名', width: 180, field: 'username' },
        { label: '组别', width: 180, field: 'role', slot: 'role' },
        {
          label: '创建时间',
          width: 180,
          field: 'createTime',
          slot: 'createTime'
        },
        {
          label: '封号',
          width: 150,
          field: 'disabled',
          slot: 'disabled'
        },
        { label: '操作', slot: 'operate' }
      ],
      total: 0,
      pageSize: 2,
      users: [],
      current: 1
    };
  },
  mounted() {
    this.getAllUsers(this.current);
  },
  methods: {
    changeCurrentPage(current) {
      this.current = current;
      this.getAllUsers(current);
    },
    getAllUsers(current) {
      const { response } = this.$http({
        url: `/allUsers/`,
        data: {
          pageSize: this.pageSize,
          currentPage: current
        },
        showSuccessMsg: false,
        showErrorMsg: true,
        jumpLogin: true
      });

      return response.then(
        (data) => {
          this.users = data.list;
          this.total = data.total;
        },
        (e) => {}
      );
    },
    addArticle() {
      this.$router.push('/admin/post');
    },
    viewArticle(article) {
      this.$router.push(`/admin/article/${article._id}`);
    },
    toggle(status, id) {
      const { response } = this.$http({
        url: `/updateUserByAdmin/${id}`,
        method: 'put',
        data: {
          disabled: status
        },
        showSuccessMsg: '操作成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getAllUsers(this.current);
        },
        () => {}
      );
    },
    edit(user) {
      this.$router.push(`/admin/user/${user._id}`);
    },
    config(article) {
      this.$router.push(`/admin/article/config/${article._id}`);
    },
    openDialog() {
      this.$alert('输入用户名', {
        buttons: {
          cancel: {
            text: '取消',
            value: null,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: '保存',
            value: null,
            visible: true,
            closeModal: true
          }
        },
        content: {
          element: 'input',
          attributes: {
            placeholder: '输入用户名'
          }
        }
      }).then((value) => {
        // 点击取消
        if (value !== null) {
          if (value !== '') {
            this.addUser(value);
          } else {
            // 标签名输入为空
            this.$notify.warning('用户名不能为空');
          }
        }
      });
    },
    addUser(username) {
      const { response } = this.$http({
        url: `/addUserByAdmin`,
        method: 'post',
        data: {
          username
        },
        showSuccessMsg: '操作成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getAllUsers(this.current);
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
  .paginator {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
