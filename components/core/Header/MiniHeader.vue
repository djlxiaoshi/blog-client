<template>
  <div class="mini-header">
    <el-row type="flex" align="middle" justify="center" class="header-content">
      <el-col :span="4">
        <div class="menu-col">
          <i :class="menuClass" @click="toggleSideMenu" class="common-icon"></i>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="app-name">
          简藏
        </div>
      </el-col>
      <el-col :span="6">
        <div class="header-login">
          <a v-if="userInfo" class="user-avatar">
            <el-image
              ref="avatar"
              :src="avatar"
              @error="setDefaultAvatar"
              :style="{ height: '100%' }"
            >
              <AppLoading slot="placeholder" size="large"></AppLoading>
            </el-image>
          </a>
          <a v-else @click="goToLoginPage" class="user-avatar"></a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import defaultAvatar from '~/assets/img/avatar.jpg';
import AppLoading from '~/components/common/app-loading';

export default {
  components: {
    AppLoading
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
      sidebarVisible: (state) => state.sidebarVisible
    }),
    avatar() {
      if (!this.userInfo) return defaultAvatar;
      return `${this.$globalConfig.IMAGE_ADDRESS}/${
        this.userInfo.avatarKey
      }?v=${new Date().getTime()}`;
    },
    menuClass() {
      return this.sidebarVisible ? 'el-icon-close' : 'el-icon-menu';
    }
  },
  methods: {
    ...mapMutations({
      changeSidebarVisible: 'changeSidebarVisible'
    }),
    setDefaultAvatar() {
      if (this.$refs.avatar) {
        this.$refs.avatar.src = defaultAvatar;
      }
    },
    toggleSideMenu() {
      this.changeSidebarVisible(!this.sidebarVisible);
    },
    goToLoginPage() {
      this.$router.push('/login');
    },
    goToRegisterPage() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped lang="less">
@import '../../../assets/css/theme.less';

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
