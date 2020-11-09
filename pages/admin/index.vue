<template>
  <div class="admin-system-page">
    <h1>系统管理</h1>
    <!-- <el-form-item label="系统颜色"> </el-form-item> -->
    <el-form :model="systemConfig" label-position="left" label-width="80px">
      <el-form-item label="用户信息">
        <el-radio-group
          v-model="systemConfig.portalUser"
          @change="changeSystemConfig($event, 'portalUser')"
        >
          <el-radio
            :label="user._id"
            v-for="user in userList"
            :key="user._id"
            >{{ user.username }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="登出">
        <el-button @click="logout">登出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      systemConfig: {
        portalUser: ''
      },
      userList: []
    };
  },
  async mounted() {
    try {
      const systemConfig = await this.getSystemConfig();
      this.systemConfig = systemConfig;
      const { list } = await this.getAllUsers({
        filter: { disabled: false }
      });
      this.userList = list;
    } catch (e) {}
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout',
      getAllUsers: 'user/getAllUsers',
      getSystemConfig: 'system/getAdminSystemConfig'
    }),
    changeSystemConfig(value, changeField) {
      const { response } = this.$http({
        url: '/system',
        data: {
          [changeField]: value
        },
        method: 'put',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then((data) => {});
    },
    async logout() {
      try {
        await this.userLogout();
        this.$router.push('/');
      } catch (e) {}
    }
  }
};
</script>

<style></style>
