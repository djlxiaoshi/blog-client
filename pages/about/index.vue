<template>
  <div class="about-page">
    <el-row :gutter="10" class="info-item">
      <el-col>
        <div class="author-avatar">
          <img
            :src="avatarImage"
            :style="{
              display: 'inline-block',
              width: '100px',
              height: '100px',
              border: '2px solid #dddddd',
              'border-radius': '50%'
            }"
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主昵称</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><span class="item-value">DJL箫氏</span></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主邮箱</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><span class="item-value">1281233206@qq.com</span></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主微信</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><span class="item-value">DJLXS0307</span></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主掘金</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><a
          class="item-value"
          href="https://juejin.im/user/57183fcac4c9710054bc2fcf"
          >DJL箫氏</a
        ></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主简书</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><a class="item-value" href="https://www.jianshu.com/u/d8657fcf1678"
          >DJL箫氏</a
        ></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col :xs="8" :sm="4" :md="4" :lg="4"
        ><span class="item-label">博主GitHub</span></el-col
      >
      <el-col :xs="16" :sm="20" :md="20" :lg="20"
        ><a class="item-value" href="https://github.com/djlxiaoshi/blog/issues"
          >djlxiaoshi</a
        ></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item desc-info">
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4"
        ><span class="item-label">作者简介</span></el-col
      >
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20"
        ><span class="item-value"
          >大家好，我的网名叫做DJL箫氏，毕业于湖北工业大学，目前为一名前端开发工程师，工作经验2.5年。毕业校招进入博雅互动，现在平安城科从事前端开发工作</span
        ></el-col
      >
    </el-row>
  </div>
</template>

<script>
import avatarImage from '~/assets/img/avatar.jpg';

export default {
  head: {
    title: '关于本站',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DJL箫氏的博客网站用于博主记录点点滴滴，包括技术、生活等等'
      }
    ]
  },
  components: {},
  data() {
    return {
      avatarImage
    };
  }
};
</script>

<style scoped lang="less">
.about-page {
  padding: 20px;
  .info-item {
    margin: 20px 0;
  }
  .desc-info {
    .item-label {
      display: inline-block;
      margin-bottom: 20px;
    }
  }
  .item-label {
    padding-left: 5px;
    margin-right: 5px;
    border-left: 5px solid lightcoral;
  }
  .author-desc {
    .item-value {
      line-height: 1.5;
    }
  }
}
</style>
