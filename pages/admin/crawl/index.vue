<template>
  <div class="crawl-article-page">
    <div class="page-header">
      <p class="desc">请输入要提取的文章链接</p>
    </div>
    <div class="page-body">
      <el-form ref="form" :model="ruleForm" :rules="rules">
        <el-row type="flex" class="row" justify="space-between">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
            <el-form-item prop="template">
              <el-select
                v-model="ruleForm.template"
                placeholder="请选择"
                class="template-selector"
              >
                <el-option
                  v-for="item in templateOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
            <el-form-item prop="url">
              <el-input v-model="ruleForm.url" placeholder="请输入文章链接" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-button @click="formValidate" type="primary">提取文章</el-button>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '文章爬取',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '这是DJL箫氏的博客的文章爬取页面，用来爬取掘金、GitHub、简书等平台文章'
      }
    ]
  },
  components: {},
  data() {
    return {
      templateOptions: [
        { label: '掘金', value: 1 },
        { label: 'Github', value: 2 },
        { label: '简书', value: 3 }
      ],
      ruleForm: {
        url: '',
        template: 1
      },
      rules: {
        url: [
          { required: true, message: '请输入待提取文章链接', trigger: 'blur' }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    formValidate() {
      if (this.$refs.form) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.crwalArticle();
          } else {
            return false;
          }
        });
      }
    },
    crwalArticle() {
      const { response } = this.$http({
        url: `/crawl`,
        method: 'get',
        data: {
          template: this.ruleForm.template,
          articleUrl: this.ruleForm.url
        },
        loading: '.app-body',
        showSuccessMsg: false,
        showErrorMsg: true
      });

      return response.then(
        (data) => {
          this.$router.push(`/post/${data._id}`);
        },
        () => {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
.crawl-article-page {
  padding: 0 20px;
  .page-header {
    .desc {
      font-size: 14px;
      color: #999;
    }
  }
  .tempalte-selector {
    width: 100%;
  }
  .page-body {
    .row {
      flex-wrap: wrap;
    }
  }
}
</style>
