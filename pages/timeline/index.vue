<template>
  <div :style="{ color: $color.defaultColor }" class="timeline-page">
    <div class="page-body">
      <el-timeline>
        <el-timeline-item
          v-for="(item, key) in list"
          :key="key"
          :timestamp="formatTime(item.createTime)"
          :color="$color.activeColor"
          placement="top"
        >
          <div>
            <span @click="goToArticle(item)" class="article-title">{{
              item.title
            }}</span>
            <span
              :style="{ color: $color.activeColor }"
              @click="goAuthorHomePage(item.createUser)"
              class="article-author"
            >
              {{ item.createUser.username }}
            </span>
            <Tag
              :style="{ 'margin-right': '10px' }"
              :key="tag._id"
              v-for="tag in item.tags"
              @click="viewTag(tag)"
              >{{ tag.label }}</Tag
            >
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div class="paginator">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="current"
        @current-change="loadMore"
        layout="prev, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';
import Tag from '@/components/common/Tag';

export default {
  name: 'Timeline',
  head: {
    title: '时光轴',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的时光轴页面，用来记录我的往事时光轴'
      }
    ]
  },
  components: {
    Tag
  },
  computed: {
    ...mapState({
      list: (state) => state.timeline.list,
      // total: (state) => state.timeline.total,
      current: (state) => state.timeline.current,
      pageSize: (state) => state.timeline.pageSize
    })
  },
  asyncData({ store, route }) {
    return store.dispatch('timeline/getTimelines');
  },
  methods: {
    ...mapActions({
      getTimelines: 'timeline/getTimelines'
    }),
    formatTime(timestamp) {
      return dayjs(timestamp).format('YYYY-MM-DD');
    },
    goToArticle(article) {
      this.$router.push(`/article/${article._id}`);
    },
    goAuthorHomePage(author) {
      if (author) {
        this.$router.push(`/user/${author._id}`);
      }
    },
    viewTag(tag) {
      this.$router.push(`/tag/${tag._id}`);
    },
    loadMore(current) {
      this.getTimelines({ current });
    }
  }
};
</script>

<style scoped lang="less">
.timeline-page {
  padding: 10px 20px;
  .page-header {
    margin-bottom: 20px;
    .page-title {
      font-size: 16px;
    }
  }
  .article-title {
    cursor: pointer;
    font-size: 14px;
    margin-right: 10px;
  }
  .article-author {
    cursor: pointer;
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>
