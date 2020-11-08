<template>
  <div class="article-config-page">
    <el-form
      ref="form"
      :rules="rules"
      :model="article"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="标题" prop="abstract">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="缩略图" prop="url">
        <el-upload
          ref="upload"
          :data="{
            prevThumbnailKey: article.thumbnailKey || '',
            articleId: $route.params.id
          }"
          :action="$globalConfig.SERVER_ADDRESS + '/api/article/thumbnail'"
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
        <el-input v-model="article.abstract" type="textarea"></el-input>
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
import AppLoading from '@/components/common/app-loading';

export default {
  components: {
    AppLoading
  },
  data() {
    return {
      rules: {},
      article: {
        title: '',
        abstract: '',
        thumbnail: '',
        thumbnailKey: ''
      },
      tags: [],
      articleTags: []
    };
  },
  mounted() {
    this.getArticle();
    this.getAllTags();
  },
  methods: {
    getArticle() {
      const { response } = this.$http({
        url: `/article/getOneByUser`,
        data: {
          id: this.$route.params.id
        },
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      });

      return response.then(
        (article) => {
          this.articleTags = Array.isArray(article.tags)
            ? article.tags.map((tag) => tag._id)
            : [];
          this.article = article;
        },
        (e) => {}
      );
    },
    getAllTags() {
      const { response } = this.$http({
        url: `/tags`,
        method: 'get',
        showSuccessMsg: false,
        showErrorMsg: false
      });

      return response.then(
        (tags) => {
          this.tags = tags;
        },
        (e) => {
          return e;
        }
      );
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
    handleSuccess(res) {
      // 由于七牛云采用的同名覆盖，覆盖上传后，路径不会变化，所以在这里用时间戳进行强制刷新
      this.article.thumbnail = `${res.data.thumbnail}?_time=${Date.now()}`;
      this.article.thumbnailKey = res.data.thumbnailKey;
      this.$notify.success('上传成功');
    },
    save() {
      const { response } = this.$http({
        url: `/article/${this.$route.params.id}`,
        method: 'put',
        data: {
          title: this.article.title,
          abstract: this.article.abstract,
          tags: this.articleTags
        },
        showSuccessMsg: '标签设置成功',
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getArticle(this.$route.params.id);
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
