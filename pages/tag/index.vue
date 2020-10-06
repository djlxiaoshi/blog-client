<template>
  <div class="tags-page">
    <AppPlaceholder>
      <div class="tag-list">
        <div v-for="(tag, index) in tags" :key="index" class="tag-item">
          <i class="tag-icon el-icon-discount"></i>
          <span @click="goToTagDetails(tag)" class="tag-name">{{
            tag.label
          }}</span>
          <span v-if="isAdmin" class="operate-wrap">
            <i @click="openOperateTagDialog(tag)" class="el-icon-edit"></i>
            <i @click="openDeleteTagDialog(tag)" class="el-icon-delete"></i>
          </span>
        </div>
        <el-button
          @click="openOperateTagDialog()"
          v-if="isAdmin"
          type="success"
          plain
          icon="el-icon-plus"
          size="small"
          circle
        ></el-button>
      </div>
    </AppPlaceholder>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ADMIN_ROLE } from '@/assets/js/global/const';
import AppPlaceholder from '~/components/common/app-placeholder/index';

export default {
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
  components: {
    AppPlaceholder
  },
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
    },
    openOperateTagDialog(tag) {
      this.currentTag = tag;
      this.$alert('输入标签名', {
        buttons: {
          cancel: {
            text: '取消',
            value: null,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: '保存',
            value: null,
            visible: true,
            closeModal: true
          }
        },
        content: {
          element: 'input',
          attributes: {
            placeholder: '输入标签名',
            defaultValue: tag ? tag.label : ''
          }
        }
      }).then((value) => {
        // 点击取消
        if (value !== null) {
          if (value !== '') {
            tag ? this.updateTag(tag._id, value) : this.addTag(value);
          } else {
            // 标签名输入为空
            this.$notify.warning('标签名不能为空');
          }
        }
      });
    },
    openDeleteTagDialog(tag) {
      this.$alert({
        title: '确定要删除此标签吗？',
        text: '一旦删除，您将不能撤销此操作',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then((value) => {
        if (value) {
          this.deleteTag(tag._id);
        }
      });
    },
    addTag(tagName) {
      const { response } = this.$http({
        url: `/tag`,
        method: 'post',
        data: {
          label: tagName
        },
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getAllTags();
        },
        () => {}
      );
    },
    updateTag(tagId, tagLabel) {
      const { response } = this.$http({
        url: `/tag/${tagId}`,
        method: 'put',
        data: {
          label: tagLabel
        },
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getAllTags();
        },
        () => {}
      );
    },
    deleteTag(tagId) {
      const { response } = this.$http({
        url: `/tag/${tagId}`,
        method: 'delete',
        showSuccessMsg: true,
        showErrorMsg: true
      });

      response.then(
        () => {
          this.getAllTags();
        },
        () => {}
      );
    }
  }
};
</script>

<style scoped lang="less">
@import '../../assets/css/theme.less';
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
      border: 1px solid @DefaultColor;
      border-radius: 5px;
      color: @DefaultColor;
      .tag-icon {
        color: @SuccessColor;
      }
      .tag-name {
        margin-right: 10px;
        cursor: pointer;
        color: @WarningColor;
      }
      .operate-wrap {
        cursor: pointer;
        .el-icon-edit {
          color: @InfoColor;
        }
        .el-icon-delete {
          color: @FailedColor;
        }
      }
    }
  }
}
</style>
