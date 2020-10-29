<template>
  <div class="tags-admin-page">
    <el-button @click="openOperateTagDialog()" size="mini" type="primary"
      >添加</el-button
    >
    <el-table
      :data="tagList"
      @expand-change="expandChange"
      :row-key="(row) => row._id"
      style="width: 100%"
    >
      <el-table-column
        :key="column.field"
        v-for="column in columns"
        :prop="column.field"
        :label="column.label"
        :width="column.width"
        :type="column.type"
      >
        <template slot-scope="scope">
          <ul v-if="column['slot'] === 'expand'" class="articles-wrap">
            <li
              v-for="article in scope.row['articles']"
              :key="article._id"
              class="article-item"
            >
              <span class="article-title">{{ article.title }}</span>
              <!-- <el-button
                :style="{ color: $color.failedColor }"
                type="text"
                size="mini"
                >删除</el-button
              > -->
            </li>
          </ul>

          <div v-else-if="column['slot'] === 'createUser'">
            {{ scope.row[column['field']].username }}
          </div>
          <div v-else-if="column['slot'] === 'createTime'">
            <span v-time="scope.row[column['field']]"></span>
          </div>
          <div v-else-if="column['slot'] === 'operate'">
            <el-button
              @click="openOperateTagDialog(scope.row)"
              type="primary"
              plain
              size="mini"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              @click="openDeleteTagDialog(scope.row)"
              type="danger"
              plain
              size="mini"
              icon="el-icon-delete"
            ></el-button>
          </div>
          <div v-else>{{ scope.row[column['field']] }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'TagPage',
  head: {
    title: '标签管理',
    titleTemplate: '%s - DJL箫氏的博客!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '这是DJL箫氏的博客-标签设置页面'
      }
    ]
  },
  components: {},
  data() {
    return {
      currentTag: {},
      expandRowKeys: [],
      columns: [
        { type: 'expand', slot: 'expand' },
        { label: '名称', field: 'label' },
        {
          label: '创建时间',
          width: 180,
          field: 'createTime',
          slot: 'createTime'
        },
        { label: '创建者', field: 'createUser', slot: 'createUser' },
        { label: '操作', width: 200, slot: 'operate' }
      ],
      tagList: []
    };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tag.allTags
    })
  },
  watch: {
    tags(values) {
      this.tagList = values;
    }
  },
  asyncData({ store }) {
    return store.dispatch('tag/getAllTags');
  },
  mounted() {
    this.tagList = JSON.parse(JSON.stringify(this.tags));
  },
  methods: {
    ...mapActions({
      getAllTags: 'tag/getAllTags',
      getArticleByTagId: 'article/getArticlesByTagId'
    }),
    ...mapMutations({
      setAllTags: 'tag/setAllTags'
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
        () => {},
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
          this.$set(this.currentTag, 'label', tagLabel);
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
          const index = this.tagList.indexOf(this.currentTag);
          this.tagList.splice(index, 1);
        },
        () => {}
      );
    },
    async expandChange(row, expandRows) {
      row._expanded = !row._expanded;
      if (row._expanded) {
        // 展开状态
        const articles = await this.getArticleByTagId(row._id);
        this.$set(row, 'articles', articles);
      }
    }
  }
};
</script>

<style scoped lang="less">
.tags-admin-page {
  /deep/ .el-table__expanded-cell {
    padding: 0px 40px;
  }
  .articles-wrap {
    list-style: none;
    .article-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .article-title {
        margin-right: 20px;
      }
    }
  }
}
</style>
