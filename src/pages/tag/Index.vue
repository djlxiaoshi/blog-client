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
          <span class="tag-name">{{ tag.label }}</span>
          <span class="article-account">10</span>
          <span class="operate-wrap">
            <i class="el-icon-edit" @click="openOperateTagDialog(tag)"></i>
            <i class="el-icon-delete"></i>
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

      };
    },
    computed: {
      ...mapState([
        'tags'
      ])
    },
    mounted () {
      this.getAllTags();
    },
    methods: {
      ...mapActions([
        'getAllTags'
      ]),
      openOperateTagDialog (tag) {
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
              value: tag ? tag.label : ''
            }
          }
        }).then((value) => {
          debugger;
          if (value !== null) {
            if (tag) {
              this.updateTag(tag._id, value);
            } else {
              this.addTag(value);
            }
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
          alertModal.close();
        }, () => {

        });
      },
      updateTag (tagId, tagLabel) {
        const { xhrInstance } = this.$http({
          url: `/tag/${ tagId }`,
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
