<template>
    <div class="explore-sidebar">
      <div class="tags-wrap module">
        <h5 class="module-title">标签</h5>
        <div class="module-content">
          <el-tag size="small">我的名字叫做李晓龙</el-tag>
          <el-tag size="small">标签一</el-tag>
          <el-tag size="small">标签一</el-tag>
          <el-tag size="small">标签一</el-tag>
        </div>
      </div>
      <div class="donate-me module">
        <h5 class="module-title">支持博主</h5>
        <div class="module-content">
          <img src="//blog.djl.pub/avatar_677ea207-ad72-4a72-af4f-d482df1d49da.jpg" alt="">
        </div>
      </div>
      <div class="contact-me module">
        <h5 class="module-title">关注博主</h5>
        <div class="module-content">
          <p><a href="https://github.com/djlxiaoshi/blog/issues" target="_blank">Github</a></p>
          <p><a href="https://www.jianshu.com/u/d8657fcf1678" target="_blank">简书</a></p>
          <p><a href="https://juejin.im/user/57183fcac4c9710054bc2fcf" target="_blank">掘金</a></p>
          <p>微信：DJLXS0307</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: ''
  };
</script>

<style scoped lang="less">
  .explore-sidebar {
    padding: 10px;
    border: 1px solid #dddddd;
    .module {
      margin: 20px auto;
      padding-bottom: 5px;
      border-bottom: 2px solid #999999;
    }
    .module-title {
      margin-bottom: 5px;
      color: lightgreen;
      font-size: 14px;
    }
    .tags-wrap {
      max-height: 200px;
      overflow: auto;
      .module-content {
        display: flex;
        flex-flow: wrap;
        /deep/ .el-tag {
          margin: 5px 6px;
        }
      }
    }
    .donate-me {
      .module-content {
        text-align: center;
        img {
          width: 120px;
          height: 120px;
          border: 1px solid #e5e5e5;
        }
      }
    }

    .contact-me {
      p {
        margin: 8px auto;
        color: #999999;
        a {
          &:hover {
            color: lightsalmon;
          }
        }
      }
    }
  }
</style>
