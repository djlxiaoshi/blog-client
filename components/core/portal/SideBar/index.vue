<template>
  <div
    :style="{ background: $color.borderColor, color: $color.defaultColor }"
    class="app-side-bar"
  >
    <div class="avatar-wrap">
      <img
        :src="avatarImage"
        :style="{ border: `2px solid ${$color.borderColor}` }"
        class="author-avatar"
      />
    </div>

    <div class="contact-me sidebar-module">
      <h5 :style="{ color: $color.activeColor }" class="module-title">
        菜单
      </h5>
      <ul class="module-content menu-module">
        <li>
          <nuxt-link
            :style="{ color: $color.defaultColor }"
            to="/"
            class="hvr-underline-from-center"
            >首页</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :style="{ color: $color.defaultColor }"
            to="/timeline"
            class="hvr-underline-from-center"
            >时光轴</nuxt-link
          >
        </li>
        <!-- <li>
          <nuxt-link
            :style="{ color: $color.defaultColor }"
            to="/portal/tag"
            class="hvr-underline-from-center"
            >归档</nuxt-link
          >
        </li> -->
        <li>
          <nuxt-link
            :style="{ color: $color.defaultColor }"
            to="/about"
            class="hvr-underline-from-center"
            >关于我</nuxt-link
          >
        </li>
      </ul>
    </div>

    <div class="contact-me sidebar-module">
      <h5 :style="{ color: $color.activeColor }" class="module-title">
        所有标签
      </h5>
      <div class="module-content">
        <span
          v-for="tag in tags"
          @click="viewTag(tag)"
          :key="tag._id"
          class="tag-item hvr-underline-from-center"
        >
          {{ tag.label }}
        </span>
      </div>
    </div>

    <div class="contact-me sidebar-module">
      <h5 :style="{ color: $color.activeColor }" class="module-title">
        关注博主
      </h5>
      <div class="module-content">
        <a
          :style="{ color: $color.defaultColor }"
          class="hvr-underline-from-center"
          href="https://github.com/djlxiaoshi/blog/issues"
          target="_blank"
          >Github</a
        >
        <a
          :style="{ color: $color.defaultColor }"
          class="hvr-underline-from-center"
          href="https://www.jianshu.com/u/d8657fcf1678"
          target="_blank"
          >简书</a
        >
        <a
          :style="{ color: $color.defaultColor }"
          class="hvr-underline-from-center"
          href="https://juejin.im/user/57183fcac4c9710054bc2fcf"
          target="_blank"
          >掘金</a
        >
        <span :style="{ color: $color.defaultColor }">微信：DJLXS0307</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import avatarImage from '~/assets/img/avatar.jpg';

export default {
  data() {
    return { avatarImage };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tag.allTags
    })
  },
  methods: {
    viewTag(tag) {
      this.$router.push(`/tag/${tag._id}`);
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../../../assets/css/theme.less';
.app-side-bar {
  box-sizing: border-box;
  padding: 20px 40px;
  height: 100vh;
  .avatar-wrap {
    text-align: center;
    .author-avatar {
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .contact-me {
    a {
      text-decoration: none;
    }
  }
  .menu-module {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    li {
      list-style: none;
      padding: 10px 0;
      cursor: pointer;
    }
  }
  .module-title {
    font-size: 16px;
  }
  .module-content {
    font-size: 14px;
  }
  .tag-item {
    cursor: pointer;
    margin: 5px 10px;
    &:first-of-type {
      margin-left: 0;
    }
  }
}
</style>
