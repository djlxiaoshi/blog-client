<template>
    <ul class="article-list">
      <li class="list-item" v-for="(article, index) in data" :key="index">
        <el-row
          type="flex"
          justify="space-around">
          <el-col :xs="24" :sm="5" :md="5" :lg="4" :xl="3">
            <div class="picture-wrap"></div>
          </el-col>
          <el-col :xs="24" :sm="18" :md="18" :lg="19" :xl="20">
            <div class="details-wrap">
              <div class="details-top">
                <h2 class="item-title">{{ article.title }}</h2>
                <p class="item-desc">{{  article.desc }}</p>
              </div>
              <div class="details-bottom">
                <span class="item-time">{{ article.time }}</span>
                <span class="item-author">{{ article.author }}</span>
                <i class="el-icon-view operate-icon"></i>
                <i class="el-icon-s-comment operate-icon"></i>
                <i class="el-icon-star-off operate-icon"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </li>
    </ul>
</template>

<script>
  export default {
    name: '',
    props: ['data']
  };
</script>

<style scoped lang="less">
  .article-list {
    padding: 10px;
    .list-item {
      /deep/ .el-row {
        flex-wrap: wrap;
        width: 100%;
      }
      .item-title {
        line-height: 25px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }
      .item-desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
      }
      .details-wrap {
        .details-top {
          height: 65px;
          margin-bottom: 15px;
        }
        .details-bottom {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #b4b4b4;
          .operate-icon {
            cursor: pointer;
            margin-right: 10px;
            &:first-of-type {
              margin-left: auto;
            }
          }
          .item-time {
            margin-right: 10px;
          }
          .item-author {
            margin-right: 10px;
          }
        }
      }
      .picture-wrap {
        width: 100%;
        height: 120px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
      }
    }
  }
</style>
