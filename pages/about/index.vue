<template>
  <div class="about-page">
    <ul class="info-list">
      <li class="info-item">
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
      </li>
      <li class="info-item">
        <span class="item-label">博主昵称</span>
        <span class="item-value">DJL箫氏</span>
      </li>
      <li class="info-item">
        <span class="item-label">博主邮箱</span>
        <span class="item-value">1281233206@qq.com</span>
      </li>
      <li class="info-item">
        <span class="item-label">博主微信</span>
        <span class="item-value">DJLXS0307</span>
      </li>
      <li class="info-item">
        <span class="item-label">博主掘金</span>
        <a
          class="item-value"
          href="https://juejin.im/user/57183fcac4c9710054bc2fcf"
          >DJL箫氏</a
        >
      </li>
      <li class="info-item">
        <span class="item-label">博主简书</span>
        <a class="item-value" href="https://www.jianshu.com/u/d8657fcf1678"
          >DJL箫氏</a
        >
      </li>
      <li class="info-item">
        <span class="item-label">博主GitHub</span>
        <a class="item-value" href="https://github.com/djlxiaoshi/blog/issues"
          >djlxiaoshi</a
        >
      </li>
      <li class="info-item">
        <span class="item-label">作者简介</span>
        <span class="item-value"
          >李晓龙李晓龙李晓龙李晓龙李晓龙李晓龙李晓龙</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import avatarImage from '~/assets/img/avatar.jpg';

export default {
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
  .info-list {
    padding: 20px;
    margin-top: 0;
    overflow: hidden;
    list-style: none;
  }
  .info-item {
    margin: 25px 10px;
    display: flex;
    .item-label {
      flex: 0 0 100px;
      padding-right: 5px;
      margin-right: 5px;
      border-right: 5px solid lightcoral;
    }
  }
  .author-desc {
    .item-value {
      margin-top: 20px;
      line-height: 1.5;
      text-indent: 2rem;
    }
  }
}
</style>
