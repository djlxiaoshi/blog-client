<template>
  <div class="crawl-article-page">
    <div class="page-header">
      <p class="desc">请输入要提取的文章链接，目前仅支持来自掘金的文章</p>
    </div>
    <div class="page-body">
      <el-form :model="ruleForm" :rules="rules" ref="form">
        <el-row type="flex" class="row">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
            <el-form-item prop="template">
              <el-select v-model="ruleForm.template" placeholder="请选择" class="template-selector">
                <el-option
                  v-for="item in templateOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="29" :lg="29" :xl="29">
            <el-form-item prop="url">
              <el-input v-model="ruleForm.url" placeholder="请输入文章链接"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-button type="primary" @click="formValidate" ref="loadingTarget">提取文章</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
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
  mounted () {},
  methods: {
    formValidate () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.crwalArticle();
        } else {
          return false;
        }
      });
    },
    crwalArticle () {
      const { xhrInstance } = this.$http({
        url: `/crawl`,
        method: 'get',
        data: {
          template: this.ruleForm.template,
          articleUrl: this.ruleForm.url
        },
        loading: this.$refs['loadingTarget'].$el,
        showSuccessMsg: false,
        showErrorMsg: true
      });

      return xhrInstance.then(
        data => {
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
  .page-header {
    .desc {
      font-size: 14px;
      color: #999;
    }
  }
  .row {
    // margin-bottom: 20px;
  }
  .tempalte-selector {
    width: 100%;
  }
}
</style>
