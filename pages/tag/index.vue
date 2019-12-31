<template>
  <div class="tags-page">
    <div class="page-header">
      <div class="add-btn">
        <el-button
          @click="openOperateTagDialog()"
          v-if="isAdmin"
          type="success"
          plain
          size="small"
          >添加</el-button
        >
      </div>
    </div>

    <el-row :gutter="20" class="tag-list">
      <el-col
        v-for="(tag, index) in tags"
        :key="index"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        class="list-item"
      >
        <el-card :body-style="{ padding: '0px' }">
          <div @click="goToTagDetails(tag)" class="img-wrap">
            <el-image
              style="width: 100%; height: 100%"
              fit="cover"
              lazy
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            >
              <AppLoading
                slot="placeholder"
                size="large"
                class="image-slot"
              ></AppLoading>
            </el-image>
          </div>
          <div class="card-bottom">
            <span class="tag-name">{{ tag.label }}</span>
            <span v-if="isAdmin" class="operate-wrap">
              <i @click="openOperateTagDialog(tag)" class="el-icon-edit"></i>
              <i @click="openDeleteTagDialog(tag)" class="el-icon-delete"></i>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppLoading from '~/components/common/app-loading';

export default {
  name: 'TagPage',
  header: {
    title: `归档`,
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  components: {
    AppLoading
  },
  data() {
    return {
      currentTag: {}
    };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tag.list,
      userInfo: (state) => state.user.userInfo
    }),
    isAdmin() {
      return this.userInfo && this.userInfo.role === 0;
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
.tags-page {
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .tag-list {
    min-height: calc(100vh - 120px);
    .list-item {
      margin-bottom: 20px;
      .img-wrap {
        height: 150px;
        overflow: hidden;
        cursor: pointer;
        /deep/ .el-image {
          width: 100%;
          transition: 0.4s;
          &:hover {
            transform: scale(1.1);
            transition: 0.4s;
          }
        }
      }
      .card-bottom {
        padding: 15px;
        display: flex;
        border-top: 1px solid #e5e5e5;
        .operate-wrap {
          margin-left: auto;
          i {
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
