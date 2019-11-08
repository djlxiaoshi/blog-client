<template>
  <div class="mini-header">
    <el-row type="flex" align="middle" justify="center" class="header-content">
      <el-col :span="4">
        <div class="menu-col">
          <i class="common-icon" :class="menuClass" @click="toggleSideMenu"></i>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="app-name">
          简藏
        </div>
      </el-col>
      <el-col :span="6">
        <div class="header-login">
          <a class="user-avatar" v-if="user.baseInfo">
            <img :src="userInfo.avatar" width="100%">
          </a>
          <div v-else>
            <a class="login-btn" href="javascript:void(0)" @click="goToLoginPage">登录</a>
            <a class="register-btn" href="javascript:void(0)" @click="goToRegisterPage">注册</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { CHANGE_SIDEBAR_VISIBLE } from 'store/mutation-types';

  export default {
    components: {
    },
    computed: {
      ...mapState([
        'user',
        'sidebarVisible'
      ]),
      userInfo () {
        const user = this.$store.getters['getUserInfo'].baseInfo;
        return {
          ...user,
          avatar: `${this.$globalConfig.IMAGE_ADDRESS}/${user.avatarKey}?v=${new Date().getTime()}`
        };
      },
      menuClass () {
        return this.sidebarVisible ? 'el-icon-close' : 'el-icon-menu';
      }
    },
    methods: {
      ...mapMutations({
        'changeSidebarVisible': CHANGE_SIDEBAR_VISIBLE
      }),
      toggleSideMenu () {
        this.changeSidebarVisible(!this.sidebarVisible);
      },
      goToLoginPage () {
        this.$router.push('/login');
      },
      goToRegisterPage () {
        this.$router.push('/register');
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../../assets/css/theme";

  .mini-header {
    color: #ffffff;
    padding: 0 20px;
    .header-content {
      height: @AppHeaderHeight;
    }
    .app-name {
      text-align: center;
    }
    .header-login {
      text-align: right;
      .user-avatar {
        display: inline-block;
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #e5e5e5;
        cursor: pointer;
      }
    }
  }
</style>
