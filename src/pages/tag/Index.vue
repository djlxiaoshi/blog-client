<template>
    <div class="tags-page">
      <div class="page-header">
        <!-- <h1>所有标签</h1> -->
        <div class="add-btn">
          <el-button type="success" plain size="small" @click="openOperateTagDialog()" v-if="isAdmin()">添加</el-button>
        </div>
      </div>

      <el-row :gutter="20" class="tag-list">
        <el-col
          class="list-item"
          v-for="(tag, index) in tags"
          :key="index"
          :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
          <el-card :body-style="{ padding: '0px' }">
            <div class="img-wrap" @click="goToTagDetails(tag)">
              <LoadImage src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></LoadImage>
            </div>
            <div class="card-bottom">
              <span class="tag-name">{{ tag.label }}</span>
              <span class="operate-wrap" v-if="isAdmin()">
                <i class="el-icon-edit" @click="openOperateTagDialog(tag)"></i>
                <i class="el-icon-delete" @click="openDeleteTagDialog(tag)"></i>
              </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import LoadImage from 'components/common/LoadImg/Index';

  export default {
    name: '',
    components: {
      LoadImage
    },
    data () {
      return {
        currentTag: {}
      };
    },
    computed: {
      ...mapState([
        'tags',
        'userInfo'
      ])
    },
    asyncData ({ store }) {
      return store.dispatch('getAllTags');
    },
    methods: {
      ...mapActions([
        'getAllTags'
      ]),
      isAdmin () {
        return this.userInfo && this.userInfo.role === 0;
      },
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
          url: `/tag/${tagId}`,
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
      min-height: calc(100vh - 120px);
      .list-item {
        margin-bottom: 20px;
        .img-wrap {
          height: 150px;
          overflow: hidden;
          cursor: pointer;
          .image {
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
          .tag-name {
          }
          display: flex;
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
