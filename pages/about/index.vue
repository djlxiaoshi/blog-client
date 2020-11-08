<template>
  <div :style="{ color: $color.defaultColor }" class="about-page">
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主昵称</span
        ><span class="item-value">{{ user.username }}</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主邮箱</span
        ><span class="item-value">{{ user.email }}</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="info-item">
      <el-col>
        <span
          :style="{ 'border-left': `4px solid ${$color.activeColor}` }"
          class="item-label"
          >博主微信</span
        ><span class="item-value">{{ user.wechat }}</span>
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
          :href="user.github"
          class="item-value"
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
          :href="user.juejin"
          class="item-value"
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
          :href="user.jianshu"
          class="item-value"
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
        ><span class="item-value">{{ user.info }}</span></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  meta: {
    isPortalPage: true
  },
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
    return {};
  },
  computed: {
    ...mapState({
      user: (state) => state.system?.portalConfig?.portalUser
    })
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
