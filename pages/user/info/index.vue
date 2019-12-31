<template>
  <div class="author-info-page">
    <div class="user-info-panel">
      <el-form
        ref="form"
        :rules="rules"
        :model="userInfo"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="头像" prop="url">
          <el-image :src="avatar" class="avatar-left">
            <AppLoading
              slot="placeholder"
              size="large"
              class="image-slot"
            ></AppLoading>
          </el-image>
          <div class="avatar-right">
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
              <p class="support-desc">支持 jpg、png 格式大小 5M 以内的图片</p>
              <el-button class="upload-avatar-btn" size="small">
                点击上传
              </el-button>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item
          label="用户名"
          prop="username"
          class="username-input-item"
        >
          <el-input v-model="baseInfo.username" v-if="isEditStatus"></el-input>
          <span v-else>{{ userInfo.username }}</span>
        </el-form-item>

        <el-form-item label="用户邮箱" prop="email" class="username-input-item">
          <el-input v-model="baseInfo.email" v-if="isEditStatus"></el-input>
          <span v-else>{{ userInfo.email }}</span>
        </el-form-item>

        <el-form-item label="个人介绍" class="user-info-input-item">
          <el-input
            v-if="isEditStatus"
            :rows="6"
            v-model="baseInfo.info"
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import defaultAvatar from '~/assets/img/avatar.jpg';
import AppLoading from '~/components/common/app-loading';

export default {
  header: {
    title: `用户信息`,
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
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
      baseInfo: {}
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo
    }),
    avatar() {
      if (!this.userInfo) return defaultAvatar;
      return `${this.$globalConfig.IMAGE_ADDRESS}/${
        this.userInfo.avatarKey
      }?v=${new Date().getTime()}`;
    }
  },
  asyncData({ store, route }) {
    return store.dispatch('user/getUserInfo');
  },
  mounted() {
    this.baseInfo = JSON.parse(JSON.stringify(this.userInfo));
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'user/setUserInfo'
    }),
    ...mapActions({
      getUserInfo: 'user/getUserInfo'
    }),
    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.$set(this.userInfo, 'avatarKey', res.data.avatarKey);
      // 更新vuex 中用户信息  这里必须要传入一个新的对象，触发更新
      this.setUserInfo(JSON.parse(JSON.stringify(this.userInfo)));
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
            // 更新vuex store中用户信息
            this.setUserInfo(Object.assign({}, this.userInfo, user));
            // 重置状态
            this.resetStatus();
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
          info: this.baseInfo.info,
          username: this.baseInfo.username,
          email: this.baseInfo.email
        },
        showErrorMsg: true,
        showSuccessMsg: true
      });

      return response;
    },
    resetStatus() {
      this.isEditStatus = false;
    }
  }
};
</script>

<style scoped lang="less">
.author-info-page {
  .user-info-panel {
    padding: 20px;
    /deep/ .el-upload {
      text-align: left;
    }
    .avatar-left,
    .avatar-right {
      vertical-align: middle;
    }
    .avatar-left {
      text-align: left;
      margin-right: 20px;
      width: 100px;
      height: 100px;
      border: 1px solid #e5e5e5;
    }
    .user-avatar {
      display: inline-block;
      width: 80px;
      height: 80px;
      border: 1px solid #e5e5e5;
    }
    .avatar-right {
      .support-desc {
        line-height: 1.5;
        color: #909090;
        font-size: 12px;
      }
    }
    .username-input-item {
      /deep/ .el-input {
        width: 80%;
      }
    }
    .user-info-input-item {
      /deep/ .el-textarea {
        width: 80%;
        textarea {
          font-family: 'Arial';
        }
      }
    }
  }
}
</style>
