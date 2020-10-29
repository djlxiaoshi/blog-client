<template>
  <div class="tags-page">
    <div class="tag-list">
      <div v-for="(tag, index) in tags" :key="index" class="tag-item">
        <i class="tag-icon el-icon-discount"></i>
        <span @click="goToTagDetails(tag)" class="tag-name">{{
          tag.label
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ADMIN_ROLE } from '@/assets/js/global/const';

export default {
  layout: 'portal',
  name: 'TagPage',
  head: {
    title: '归档',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客的归档页面'
      }
    ]
  },
  components: {},
  data() {
    return {
      currentTag: {}
    };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tag.allTags,
      userInfo: (state) => state.user.userInfo
    }),
    isAdmin() {
      return this.userInfo && this.userInfo.role === ADMIN_ROLE;
    }
  },
  asyncData({ store }) {
    return store.dispatch('tag/getAllTags');
  },
  methods: {
    ...mapActions({
      getAllTags: 'tag/getAllTags'
    }),
    goToTagDetails(tag) {
      this.$router.push(`/tag/${tag._id}`);
    }
  }
};
</script>

<style scoped lang="less">
.tags-page {
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .tag-list {
    display: flex;
    align-items: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .tag-item {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
      border-radius: 5px;
      .tag-icon {
      }
      .tag-name {
        margin-right: 10px;
        cursor: pointer;
      }
      .operate-wrap {
        cursor: pointer;
        .el-icon-edit {
        }
        .el-icon-delete {
        }
      }
    }
  }
}
</style>
