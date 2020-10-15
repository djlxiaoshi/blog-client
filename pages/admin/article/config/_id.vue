<template>
  <div class="article-config-page">
    <el-form
      ref="form"
      :rules="rules"
      :model="articleConfig"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="标题" prop="abstract">
        <el-input v-model="articleConfig.title"></el-input>
      </el-form-item>
      <el-form-item label="缩略图" prop="url">
        <el-upload
          ref="upload"
          :action="$globalConfig.SERVER_ADDRESS + '/api/upload'"
          :with-credentials="true"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :on-success="handleSuccess"
          list-type="text"
          class="upload-avatar-input"
        >
          <el-image :src="article.thumbnail" class="avatar-image">
            <AppLoading slot="placeholder" size="large"></AppLoading>
            <div slot="error" class="error-slot">
              <span>点击上传</span>
            </div>
          </el-image>
        </el-upload>
      </el-form-item>
      <el-form-item label="简介" prop="abstract">
        <el-input v-model="articleConfig.abstract" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-checkbox-group v-model="articleTags">
          <el-checkbox v-for="tag in tags" :label="tag._id" :key="tag._id">{{
            tag.label
          }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label>
        <el-button @click="save" type="success" size="small" plain>
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppLoading from '@/components/common/app-loading';

export default {
  components: {
    AppLoading
  },
  data() {
    return {
      articleConfig: {
        abstract: ''
      },
      rules: {},
      articleTags: []
    };
  },
  computed: {
    ...mapState({
      article: (state) => state.article.currentArticle,
      tags: (state) => state.tag.allTags
    })
  },
  asyncData({ store, route }) {
    return Promise.all([
      store.dispatch('article/getArticle', route.params.id),
      store.dispatch('tag/getAllTags')
    ]);
  },
  mounted() {
    this.articleConfig = JSON.parse(JSON.stringify(this.article));
    this.articleTags = Array.isArray(this.article.tags)
      ? this.article.tags.map((tag) => tag._id)
      : [];
  },
  methods: {
    ...mapActions({
      getArticle: 'article/getArticle'
    }),
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
    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.$notify.success('上传成功');
    },
    save() {
      const { response } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'put',
        data: {
          title: this.articleConfig.title,
          abstract: this.articleConfig.abstract,
          tags: this.articleTags
        },
        showSuccessMsg: '标签设置成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getArticle(this.$route.params.id);
          this.openTags = false;
        },
        () => {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
.article-title {
  font-weight: 600;
}
</style>
