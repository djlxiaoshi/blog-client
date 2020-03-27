<template>
  <div class="timeline-page">
    <div class="page-header">
      <h1 class="page-title">时光轴</h1>
    </div>
    <div class="page-body">
      <el-steps direction="vertical" space="100px">
        <el-step :title="key" v-for="(value, key) in timelines" :key="key">
          <template slot="description">
            <p v-for="(item, index) in value" :key="index">
              <span class="dot"></span>
              <a @click="goToArticle(item)" class="article-link">
                <span>{{ item.title }}</span>
                <span>{{ formatTime(item.createTime) }}</span>
                <span> {{ item.createUser.username }} </span>
              </a>
            </p>
          </template>
        </el-step>
      </el-steps>
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
  .dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #999;
    margin-left: 10px;
    vertical-align: middle;
  }
  .article-link {
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
