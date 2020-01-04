<template>
  <div class="normal-header">
    <el-row type="flex" align="middle" justify="center">
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="header-content">
          <div class="header-left">
            <header-menu
              :default-active="activeMenu"
              :menuList="menuList"
              @select="menuSelect"
              text-color="#fff"
              background-color="#545c64"
              active-text-color="#ffd04b"
              mode="horizontal"
            ></header-menu>
          </div>

          <div class="header-right">
            <div v-if="userInfo" class="avatar-wrap">
              <el-dropdown @command="eventHandler" trigger="click">
                <a class="user-avatar">
                  <el-image ref="avatar" :src="avatar" width="100%">
                    >
                    <AppLoading
                      slot="placeholder"
                      size="large"
                      class="image-slot"
                    ></AppLoading>
                  </el-image>
                </a>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="post">写文章</el-dropdown-item>
                  <el-dropdown-item command="center">用户主页</el-dropdown-item>
                  <el-dropdown-item command="userInfo">设置</el-dropdown-item>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div v-else class="login-or-register">
              <a
                @click="goToLoginPage"
                class="login-btn"
                href="javascript:void(0)"
                >登录</a
              >
              <!-- <a
                @click="goToRegisterPage"
                class="register-btn"
                href="javascript:void(0)"
                >注册</a
              > -->
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import HeaderMenu from '~/components/common/app-menu';
import defaultAvatar from '~/assets/img/avatar.jpg';
import AppLoading from '~/components/common/app-loading';

export default {
  components: {
    HeaderMenu,
    AppLoading
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      activeMenu: (state) => state.menu.activeMenu,
      menuList: (state) => state.menu.list,
      userInfo: (state) => state.user.userInfo
    }),
    avatar() {
      if (!this.userInfo) return defaultAvatar;
      return `${this.$globalConfig.IMAGE_ADDRESS}/${
        this.userInfo.avatarKey
      }?v=${new Date().getTime()}`;
    }
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setActiveMenu: 'menu/setActiveMenu',
      setUserInfo: 'user/setUserInfo'
    }),
    menuSelect(menuName) {
      this.setActiveMenu(menuName);
    },
    eventHandler(event) {
      const userId = this.userInfo._id;

      if (event === 'logout') {
        this.logout();
      } else if (event === 'userInfo') {
        this.$router.push('/user/info');
        this.setActiveMenu('');
      } else if (event === 'post') {
        this.$router.push('/post');
      } else if (event === 'center') {
        this.$router.push(`/user/${userId}`);
      }
    },
    setDefaultAvatar() {
      if (this.$refs.avatar) {
        this.$refs.avatar.src = defaultAvatar;
      }
    },
    logout() {
      if (this.userInfo) {
        const { response } = this.$http({
          url: '/logout',
          data: {
            id: this.userInfo._id
          },
          showSuccessMsg: true
        });

        response.then(() => {
          this.clearUserMsg();
          this.goToHomePage();
        });
      }
    },
    clearUserMsg() {
      this.setUserInfo(null);
    },
    goToHomePage() {
      this.$router.push('/');
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
.normal-header {
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: @AppHeaderHeight;
  }
  .header-right {
    display: flex;
    .avatar-wrap {
      .user-avatar {
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid #e5e5e5;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        /deep/ .el-image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .login-or-register {
      .register-btn,
      .login-btn {
        color: #ffffff;
        padding: 0 5px 5px 5px;
        &:hover {
          color: rgb(255, 208, 75);
        }
      }
    }
  }
}
</style>
