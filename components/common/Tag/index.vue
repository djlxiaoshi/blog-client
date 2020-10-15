<template>
  <span
    :style="{ border: `1px solid ${$color.borderColor}` }"
    @click="emitClick"
    class="app-tag"
  >
    <i
      :style="{
        color: $color.activeColor
      }"
      class="el-icon-discount tag-icon"
    ></i>
    <el-tag
      :style="{
        color: $color.defaultColor,
        border: 'none'
      }"
      size="mini"
    >
      <slot></slot>
    </el-tag>
  </span>
</template>

<script>
export default {
  props: {},
  methods: {
    emitClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="less" scoped>
.app-tag {
  padding: 1px 5px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  .tag-icon {
    vertical-align: middle;
  }
  /deep/ .el-tag {
    background: #fff;
    margin-right: 0;
    padding: 0;
    vertical-align: middle;
  }
}
</style>
