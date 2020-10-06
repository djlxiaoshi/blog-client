<template>
  <div class="timeline-page">
    <div class="page-header"></div>
    <div class="page-body">
      <el-timeline>
        <el-timeline-item v-for="(item, key) in timelines" :key="key">
          <div @click="goToArticle(item)" class="article-link">
            <span>{{ item.title }}</span>
            <span>{{ formatTime(item.createTime) }}</span>
            <span> {{ item.createUser.username }} </span>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';
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
  data() {
    return {
      timeGroups: {}
    };
  },
  computed: {
    ...mapState({
      timelines: (state) => state.timeline.list
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
    resolveData(data) {
      return data.map((item) => {
        item._group = dayjs(item.createTime).format('YYYY-MM-DD');
        return item;
      });
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
  .article-link {
    display: inline-block;
    cursor: pointer;
    color: lightcoral;
    font-size: 14px;
    vertical-align: middle;
    span {
      padding-right: 10px;
    }
    &:hover {
      border-bottom: 1px solid lightcoral;
    }
  }
}
</style>
