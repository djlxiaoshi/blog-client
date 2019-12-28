<template>
  <ul class="article-list">
    <li v-for="(article, index) in data" :key="index" class="list-item">
      <el-row type="flex" align="center" justify="space-around">
        <el-col :xs="0" :sm="5" :md="5" :lg="4" :xl="3">
          <div class="item-thumbnail">
            <el-image
              :src="getThumbnail(article)"
              lazy
              fit="contain"
              style="width: 100%; height: 100px"
            >
              <AppLoading
                slot="placeholder"
                size="large"
                class="image-slot"
              ></AppLoading>
            </el-image>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" :md="18" :lg="19" :xl="20">
          <div class="details-wrap">
            <div class="details-top">
              <h2 class="item-title">
                <a @click="view(article, index)">{{ article.title }}</a>
              </h2>
              <p class="item-abstract">{{ article.abstract }}</p>
            </div>
            <div class="details-bottom">
              <span class="item-time">{{
                formateTime(article.createTime)
              }}</span>
              <span class="item-author">{{ article.createUser.username }}</span>
              <span class="item-status">{{ getStatus(article.status) }}</span>
              <i
                @click="view(article, index)"
                class="el-icon-view operate-icon"
              ></i>
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
import dayjs from 'dayjs';
import defaultThumbnail from './thumbnail.jpg';
import AppLoading from '~/components/common/app-loading';

export default {
  components: {
    AppLoading
  },
  props: {
    data: Array
  },
  methods: {
    getStatus(status) {
      switch (status) {
        case 0:
          return '未发布';
        case 1:
          return '已发布';
        case 2:
          return '待删除';
        default:
          return '未知';
      }
    },
    formateTime(time) {
      return dayjs(time).format('YYYY-MM-DD');
    },
    view(article, index) {
      this.$emit('onView', article, index);
    },
    getThumbnail(article) {
      return article.thumbnail || defaultThumbnail;
    }
  }
};
</script>

<style scoped lang="less">
.article-list {
  list-style: none;
  margin-top: 0;
  padding: 10px;
  .list-item {
    /deep/ .el-row {
      flex-wrap: wrap;
      width: 100%;
      padding-bottom: 10px;
      margin: 10px auto;
      border-bottom: 1px solid #dddddd;
    }
    .item-title {
      line-height: 25px;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      a {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .item-abstract {
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .item-thumbnail {
      margin-top: 15px;
      .image-slot {
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
      }
    }
    .details-wrap {
      .details-top {
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
