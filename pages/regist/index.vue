<template>
  <section class="app-register">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8">
        <div class="page-header">
          <div class="page-logo">
            <img src="@/assets/img/avatar.jpg" alt />
          </div>
          <h1 class="page-title">欢迎注册</h1>
        </div>

        <div class="box-card">
          <div class="card-header"></div>
          <div class="card-body">
            <el-form ref="form" :rules="rules" :model="form">
              <el-form-item prop="username">
                <el-input
                  v-model="form.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="formValidate"
                  type="primary"
                  class="register-btn"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="card-footer">
            <span class="login-text">
              已有账户，直接
              <span @click="goToLogin" class="go-login">登录</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { sha256 } from 'js-sha256';

export default {
  layout: 'global',
  name: 'Register',
  meta: {
    isRegistrationPage: true,
    isClosed: true
  },
  head: {
    title: '注册',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的注册页'
      }
    ]
  },
  data() {
    const checkEmail = (rule, value, callback) => {
      value = value.trim();
      const regexp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!regexp.test(value)) {
        callback(new Error('请输入正确的邮箱地址'));
      } else {
        callback();
      }
    };

    // const checkEmailExsit = (rule, value, callback) => {
    //   value = value.trim();
    //   const { xhrInstance } = this.$http({
    //     url: '/getUserBy',
    //     data: {
    //       userMsg: value,
    //       getUserMethod: 'USER_EMAIL'
    //     }
    //   });

    //   xhrInstance.then((res) => {
    //     if (res) {
    //       callback(new Error('邮箱已存在'));
    //     } else {
    //       callback();
    //     }
    //   });
    // };

    return {
      form: {
        username: '',
        password: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
        email: [
          { required: true, trigger: 'blur', message: '请输入邮箱' },
          { trigger: 'blur', validator: checkEmail }
          // { trigger: 'blur', validator: checkEmailExsit }
        ]
      }
    };
  },
  methods: {
    register() {
      const { response } = this.$http({
        method: 'post',
        url: '/user',
        data: {
          username: this.form.username,
          password: sha256(this.form.password),
          email: this.form.email
        },
        showErrorMsg: true,
        showSuccessMsg: true
      });

      response.then(
        () => {
          this.goToLogin();
        },
        () => {}
      );
    },
    formValidate() {
      if (this.$refs.form) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.register();
          }
        });
      }
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToHomePage() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped lang="less">
.app-register {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 20px;
  z-index: 1001;
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
    /deep/ .el-form-item {
      .el-input__inner {
        border-radius: 50px;
      }
    }
    .register-btn {
      width: 100%;
      border-radius: 20px;
    }

    .card-footer {
      display: flex;

      .login-text {
        font-size: 14px;
        margin-left: auto;
        color: #999;
      }
      .go-login {
        cursor: pointer;
        color: #66b1ff;
      }
    }
  }
}
</style>
