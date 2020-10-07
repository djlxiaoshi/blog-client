<template>
  <div class="timeline-page">
    <AppPlaceholder>
      <div class="page-body">
        <el-timeline>
          <el-timeline-item
            v-for="(item, key) in timelines"
            :key="key"
            :timestamp="formatTime(item.createTime)"
            color="#E6A23C"
            placement="top"
          >
            <div>
              <span @click="goToArticle(item)" class="article-title">{{
                item.title
              }}</span>
              <span
                @click="goAuthorHomePage(item.createUser)"
                class="article-author"
              >
                {{ item.createUser.username }}
              </span>
              <el-tag
                :type="getRandomColor()"
                @click="viewTag(tag)"
                v-for="tag in item.tags"
                :key="tag._id"
                class="article-tag"
                size="small"
                >{{ tag.label }}</el-tag
              >
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </AppPlaceholder>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';
import AppPlaceholder from '~/components/common/app-placeholder/index';
import { randomNum } from '@/assets/js/utils/tools';

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
    AppPlaceholder
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
    goAuthorHomePage(author) {
      if (author) {
        this.$router.push(`/user/${author._id}`);
      }
    },
    resolveData(data) {
      return data.map((item) => {
        item._group = dayjs(item.createTime).format('YYYY-MM-DD');
        return item;
      });
    },
    viewTag(tag) {
      this.$router.push(`/tag/${tag._id}`);
    },
    getRandomColor() {
      const types = ['success', 'info', 'warning', 'danger'];
      return types[randomNum(types.length - 1)];
    }
  }
};
</script>

<style scoped lang="less">
@import '../../assets/css/theme.less';
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
    color: @InfoColor;
    font-size: 14px;
  }
  .article-author {
    cursor: pointer;
    color: @FailedColor;
    font-size: 14px;
    padding-right: 20px;
  }
  .article-tag {
    cursor: pointer;
    margin-right: 10px;
  }
}
</style>
