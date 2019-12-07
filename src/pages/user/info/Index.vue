<template>
    <div class="author-info-page">
      <div class="user-info-panel">
        <el-form
          ref="form"
          :rules="rules"
          :model="userInfo"
          label-width="80px"
          label-position="left">
          <el-form-item label="头像" prop="url">
            <LoadImage
              :src="avatar"
              class="avatar-left"
              :imgStyle="{ 
                display: 'inline-block',
                width: '80px',
                height: '80px',
                border: '2px solid #dddddd',
                'border-radius': '50%'
              }"></LoadImage>

            <div class="avatar-right">
              <el-upload
                ref="upload"
                class="upload-avatar-input"
                :action="$globalConfig.SERVER_ADDRESS + '/api/user/avatar/test'"
                list-type="text"
                :with-credentials="true"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleSuccess">
                <p class="support-desc">支持 jpg、png 格式大小 5M 以内的图片</p>
                <el-button class="upload-avatar-btn" size="small">点击上传</el-button>
              </el-upload>
            </div>
          </el-form-item>

          <el-form-item label="用户名" prop="username" class="username-input-item">
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
              type="textarea"
              :rows="6"
              v-model="baseInfo.info"
            >
            </el-input>
            <span v-else>{{ userInfo.info }}</span>
          </el-form-item>

          <el-form-item label="">
            <el-button @click="toggleEditStatus" type="default" size="small" plain>{{ isEditStatus ? '取消' : '编辑' }}</el-button>
            <el-button @click="save" type="success" size="small" plain v-if='isEditStatus'>保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';
  import { SET_USER_INFO } from 'store/mutation-types';
  import defaultAvatar from '@/assets/img/avatar.jpg';
  import LoadImage from 'components/common/LoadImg/Index';

    export default {
      components: {
        LoadImage
      },
      data () {
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
          }
        };
      },
      computed: {
        ...mapState([
          'isMiniWidth',
          'userInfo'
        ]),
        baseInfo () {
          return JSON.parse(JSON.stringify(this.userInfo));
        },
        avatar () {
          if (!this.userInfo) return defaultAvatar;
          return `${this.$globalConfig.IMAGE_ADDRESS}/${this.userInfo.avatarKey}?v=${new Date().getTime()}`;
        }
      },
      asyncData ({ store, route }) {
        return store.dispatch('getUserInfo');
      },
      mounted () {
        // this.userInfo = Object.assign({}, this.$store.getters['getUserInfo'].baseInfo || {});
      },
      methods: {
        ...mapMutations({
          'setUserInfo': SET_USER_INFO
        }),
        ...mapActions([
          'getUserInfo'
        ]),
        handleSuccess (res) {
          // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
          this.$set(this.userInfo, 'avatarKey', res.data.avatarKey);
          // 更新vuex 中用户信息  这里必须要传入一个新的对象，触发更新
          this.setUserInfo(JSON.parse(JSON.stringify(this.userInfo)));
          this.$notify.success('上传成功');
        },
        beforeAvatarUpload (file) {
          const isJPG = file.type === 'image/jpeg';
          const isPNG = file.type === 'image/png';
          const isLt2M = file.size / 1024 < 300;

          if (!(isJPG || isPNG)) {
            this.$message.error('上传头像图片只能是 JPG或者PNG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 300KB!');
          }
          return (isJPG || isPNG) && isLt2M;
        },
        toggleEditStatus () {
          this.isEditStatus = !this.isEditStatus;
        },
        save () {
          this.$refs['form'].validate((valid) => {
            if (valid) {
              this.updateUserInfo().then(user => {

                // 更新vuex store中用户信息
                this.setUserInfo(Object.assign(this.userInfo, user));
                // 重置状态
                this.resetStatus();
              });
            }
          });
        },
        // 更新用户信息
        updateUserInfo () {

          const { xhrInstance } = this.$http({
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

          return xhrInstance;
        },
        resetStatus () {
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
      .avatar-left, .avatar-right{
        vertical-align: middle;
      }
      .avatar-left {
        text-align: left;
        margin-right: 20px;
        width: auto;
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
        .upload-avatar-btn {

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
