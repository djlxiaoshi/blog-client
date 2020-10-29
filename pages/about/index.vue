<template>
  <div :style="{ color: $color.defaultColor }" class="about-page">
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主昵称</span
        ><span class="item-value">DJL箫氏</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主邮箱</span
        ><span class="item-value">1281233206@qq.com</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主微信</span
        ><span class="item-value">DJLXS0307</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主Github</span
        ><a
          :style="{ color: $color.defaultColor }"
          class="item-value"
          href="https://github.com/djlxiaoshi/blog/issues"
          >djlxiaoshi</a
        >
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主掘金</span
        ><a
          :style="{ color: $color.defaultColor }"
          class="item-value"
          href="https://juejin.im/user/57183fcac4c9710054bc2fcf"
          >DJL箫氏</a
        >
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col
        ><span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主简书</span
        ><a
          :style="{ color: $color.defaultColor }"
          class="item-value"
          href="https://www.jianshu.com/u/d8657fcf1678"
          >DJL箫氏</a
        ></el-col
      >
    </el-row>
    <el-row :gutter="10" class="info-item desc-info">
      <el-col :xs="24"
        ><span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >作者简介</span
        ></el-col
      >
      <el-col :xs="24"
        ><span class="item-value"
          >大家好，我的网名叫做DJL箫氏，毕业于湖北工业大学，目前为一名前端开发工程师，工作经验3年。现在Shopee从事前端开发工作，有兴趣加入Shopee的朋友可以添加我的微信</span
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
  padding: 0 20px;
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
    padding-right: 15px;
    line-height: 1;
  }
  .author-desc {
    .item-value {
      line-height: 1.5;
    }
  }
}
</style>
