<template>
    <div class="tags-page">
      <div class="page-header">
        <h1>所有标签</h1>
        <div class="add-btn">
          <el-button type="success" plain size="small" @click="openOperateTagDialog()">添加</el-button>
        </div>
      </div>
      <ul class="tag-list">
        <li class="list-item" v-for="tag in tags" :key="tag.label">
          <i class="el-icon-price-tag"></i>
          <span class="tag-name" @click="goToTagDetails(tag)">{{ tag.label }}</span>
          <!-- 暂时不实现这个功能 -->
          <!--<span class="article-account">10</span>-->
          <span class="operate-wrap">
            <i class="el-icon-edit" @click="openOperateTagDialog(tag)"></i>
            <i class="el-icon-delete" @click="openDeleteTagDialog(tag)"></i>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: '',
    data () {
      return {
        currentTag: {}
      };
    },
    computed: {
      ...mapState([
        'tags'
      ])
    },
    asyncData ({ store, route }) {
      return store.dispatch('getAllTags');
    },
    mounted () {
      this.getAllTags();
    },
    methods: {
      ...mapActions([
        'getAllTags'
      ]),
      goToTagDetails (tag) {
        this.$router.push(`/tag/${tag._id}`);
      },
      openOperateTagDialog (tag) {
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
      openDeleteTagDialog (tag) {
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
      addTag (tagName) {
        const { xhrInstance } = this.$http({
          url: `/tag`,
          method: 'post',
          data: {
            label: tagName
          },
          showSuccessMsg: true,
          showErrorMsg: true
        });

        xhrInstance.then(() => {
          this.getAllTags();
        }, () => {

        });
      },
      updateTag (tagId, tagLabel) {
        const { xhrInstance } = this.$http({
          url: `/tag/${tagId}`,
          method: 'put',
          data: {
            label: tagLabel
          },
          showSuccessMsg: true,
          showErrorMsg: true
        });

        xhrInstance.then(() => {
          this.getAllTags();
        }, () => {

        });
      },
      deleteTag (tagId) {
        const { xhrInstance } = this.$http({
          url: `/tag/${ tagId }`,
          method: 'delete',
          showSuccessMsg: true,
          showErrorMsg: true
        });

        xhrInstance.then(() => {
          this.getAllTags();
        }, () => {

        });
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
      .list-item {
        display: flex;
        align-items: center;
        padding: 15px 5px;
        border-bottom: 1px solid #e5e5e5;
        .tag-name {
          cursor: pointer;
        }
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
</style>
