<template>
    <div class="about-page">
      <ul class="info-list">
        <li class="info-item">
          <div class="author-avatar">
            <img src="" alt="">
          </div>
        </li>
        <li class="info-item">
          <div class="author-name">
            <span class="item-label">作者姓名</span>
            <span class="item-value">李晓龙</span>
          </div>
        </li>
        <li class="info-item">
          <div class="author-email">
            <span class="item-label">作者邮箱</span>
            <span class="item-value">1281233206@qq.com</span>
          </div>
        </li>
        <li class="info-item">
          <div class="author-desc">
            <span class="item-label">作者简介</span>
            <p class="item-value">李晓龙李晓龙李晓龙李晓龙李晓龙李晓龙李晓龙</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: ''
  };
</script>

<style scoped lang="less">
  .about-page {
    .info-list {
      padding: 20px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .info-item {
      margin: 30px 10px;
      .item-label {
        padding-right: 5px;
        margin-right: 5px;
        border-right: 5px solid lightcoral;
      }
    }
    .author-avatar {
      img {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 2px solid #dddddd;
        border-radius: 50%;
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
