<template>
  <section class="app-login">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="page-header">
          <div class="page-logo">
            <img src="@/assets/img/avatar.jpg" alt />
          </div>
          <h1 class="page-title">欢迎登陆</h1>
        </div>

        <div class="box-card">
          <div class="card-header"></div>
          <div class="card-body">
            <el-form ref="form" :rules="rules" :model="form" label-width="0px">
              <el-form-item prop="username">
                <el-input
                  @keyup.enter.native="formValidate"
                  v-model="form.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  @keyup.enter.native="formValidate"
                  v-model="form.password"
                  placeholder="请输入密码"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="formValidate"
                  type="primary"
                  class="login-btn"
                  size="medium"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer">
            <span @click="goToRegisterPage" class="go-register">注册账户</span>
            <span class="forget-password">忘记密码</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { urlToJson } from '~/assets/js/utils/tools';
import { sha256 } from 'js-sha256';

export default {
  layout: 'global',
  name: 'AppLogin',
  meta: {
    isLoginPage: true
  },
  head: {
    title: '登录',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的登录页'
      }
    ]
  },
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    };
  },
  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations({
      setUserMsg: 'user/setUserInfo'
    }),
    login() {
      const { response } = this.$http({
        url: '/login',
        data: {
          username: this.form.username,
          password: sha256(this.form.password)
        },
        method: 'post',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        (user) => {
          this.setUserMsg({
            username: user.username,
            info: user.info,
            avatarKey: user.avatarKey,
            role: user.role,
            email: user.email,
            _id: user._id
          });
          this.goToNextPage();
        },
        () => {}
      );
    },
    formValidate() {
      if (this.$refs.form) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.login();
          }
        });
      }
    },
    goToNextPage() {
      // 返回登录前的页面
      const urlParams = urlToJson();
      const nextPage =
        urlParams && urlParams._redirectUrl ? urlParams._redirectUrl : '/';
      this.$router.push(nextPage);
    },
    goToRegisterPage() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped lang="less">
.app-login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1001;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  /deep/ .el-row {
    height: 100%;
    .el-col {
      max-width: 350px;
    }
  }
  .page-header {
    .page-logo {
      text-align: center;
      margin-bottom: 40px;
      img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }
    }
    .page-title {
      font-size: 20px;
    }
  }
  .box-card {
    .login-btn {
      width: 100%;
      border-radius: 20px;
    }
    .card-footer {
      display: flex;
      justify-content: space-around;
      .forget-password,
      .go-register {
        font-size: 14px;
        cursor: pointer;
        color: #999;
      }
    }
  }
  /deep/ .el-form-item {
    .el-input__inner {
      border-radius: 50px;
    }
  }
}
</style>
