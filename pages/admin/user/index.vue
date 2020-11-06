<template>
  <div class="author-info-page">
    <el-row type="flex">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-form
          ref="form"
          :rules="rules"
          :model="copyUserInfo"
          label-width="80px"
          label-position="left"
        >
          <el-form-item label="头像" prop="url">
            <el-upload
              ref="upload"
              :action="$globalConfig.SERVER_ADDRESS + '/api/user/avatar/test'"
              :with-credentials="true"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :on-success="handleSuccess"
              list-type="text"
              class="upload-avatar-input"
            >
              <el-image :src="userInfo.avatar" class="avatar-image">
                <AppLoading
                  slot="placeholder"
                  size="large"
                  class="image-slot"
                ></AppLoading>
                <div slot="error" class="error-slot">
                  <span>点击上传</span>
                </div>
              </el-image>
            </el-upload>
          </el-form-item>

          <el-form-item
            label="用户名"
            prop="username"
            class="username-input-item"
          >
            <el-input
              v-model="copyUserInfo.username"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.username }}</span>
          </el-form-item>

          <el-form-item
            label="用户邮箱"
            prop="email"
            class="username-input-item"
          >
            <el-input
              v-model="copyUserInfo.email"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.email }}</span>
          </el-form-item>

          <el-form-item label="微信" prop="wechat" class="username-input-item">
            <el-input
              v-model="copyUserInfo.wechat"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.wechat }}</span>
          </el-form-item>

          <el-form-item
            label="Github"
            prop="github"
            class="username-input-item"
          >
            <el-input
              v-model="copyUserInfo.github"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.github }}</span>
          </el-form-item>

          <el-form-item label="掘金" prop="juejin" class="username-input-item">
            <el-input
              v-model="copyUserInfo.juejin"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.juejin }}</span>
          </el-form-item>

          <el-form-item label="简书" prop="jianshu" class="username-input-item">
            <el-input
              v-model="copyUserInfo.jianshu"
              v-if="isEditStatus"
            ></el-input>
            <span v-else>{{ userInfo.jianshu }}</span>
          </el-form-item>

          <el-form-item label="个人介绍" class="user-info-input-item">
            <el-input
              v-if="isEditStatus"
              :rows="6"
              v-model="copyUserInfo.info"
              type="textarea"
            ></el-input>
            <span v-else>{{ userInfo.info }}</span>
          </el-form-item>

          <el-form-item label>
            <el-button
              @click="toggleEditStatus"
              type="default"
              size="small"
              plain
            >
              {{ isEditStatus ? '取消' : '编辑' }}
            </el-button>
            <el-button
              v-if="isEditStatus"
              @click="save"
              type="success"
              size="small"
              plain
            >
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppLoading from '~/components/common/app-loading';

export default {
  head: {
    title: '用户信息',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '用户信息页面'
      }
    ]
  },
  components: {
    AppLoading
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

    return {
      isEditStatus: false,
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        email: [
          { required: true, trigger: 'blur', message: '请输入邮箱' },
          { trigger: 'blur', validator: checkEmail }
        ]
      },
      inputStatus: {
        usernameDisabled: true,
        infoDisabled: true
      },
      userInfo: {
        avatar: ''
      },
      copyUserInfo: {}
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const { response } = this.$http({
        url: `/user`,
        data: {}
      });

      return response.then(
        (user) => {
          this.userInfo = user;
          this.copyUserInfo = JSON.parse(JSON.stringify(user));
        },
        (e) => {
          throw e;
        }
      );
    },
    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.userInfo.avatar = `${res.data.avatar}?v=${new Date().getTime()}`;
      this.$notify.success('上传成功');
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 < 300;

      if (!(isJPG || isPNG)) {
        this.$notify.error('上传头像图片只能是 JPG或者PNG 格式!');
      }
      if (!isLt2M) {
        this.$notify.error('上传头像图片大小不能超过 300KB!');
      }
      return (isJPG || isPNG) && isLt2M;
    },
    toggleEditStatus() {
      this.isEditStatus = !this.isEditStatus;
    },
    save() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.updateUserInfo().then((user) => {
            this.userInfo = user;
            // 重置状态
            this.isEditStatus = false;
          });
        }
      });
    },
    // 更新用户信息
    updateUserInfo() {
      const { response } = this.$http({
        url: '/user',
        method: 'put',
        data: {
          info: this.copyUserInfo.info,
          username: this.copyUserInfo.username,
          email: this.copyUserInfo.email,
          github: this.copyUserInfo.github,
          juejin: this.copyUserInfo.juejin,
          jianshu: this.copyUserInfo.jianshu,
          wechat: this.copyUserInfo.wechat
        },
        showErrorMsg: true,
        showSuccessMsg: true
      });

      return response;
    }
  }
};
</script>

<style scoped lang="less">
.author-info-page {
  padding: 20px;
  /deep/ .el-upload {
    text-align: left;
  }
  .avatar-image {
    width: 100px;
    height: 100px;
    border: 1px solid #e5e5e5;
  }
  .error-slot {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /deep/ .el-form-item {
    margin-bottom: 15px;
  }
  /deep/ .el-form-item__label {
    padding-bottom: 0;
    font-weight: 700;
  }
}
</style>
