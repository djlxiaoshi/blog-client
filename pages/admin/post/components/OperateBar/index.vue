<template>
  <div class="operate-bar">
    <el-button
      :style="{ color: $color.defaultColor }"
      @click="emitEvent('edit')"
      type="text"
      >编辑</el-button
    >
    <el-button
      :style="{ color: $color.defaultColor }"
      @click="emitEvent('preview')"
      type="text"
      >预览</el-button
    >
    <el-button
      :style="{ color: $color.defaultColor }"
      @click="emitEvent('edit-preview')"
      type="text"
      >分栏</el-button
    >
    <el-button
      :style="{ color: $color.failedColor }"
      @click="emitEvent('save')"
      type="text"
      >保存</el-button
    >
    <el-button
      :style="{ color: $color.successColor }"
      @click="emitEvent('publish')"
      type="text"
      >发布</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitEvent(actionType) {
      this.$emit('onClick', actionType);
    }
  }
};
</script>

<style lang="less">
.operate-bar {
  display: flex;
  align-items: center;
  flex: 0 0 40px;
  padding-left: 40px;
  background: #dddddd;
  .operate-icon {
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      color: #5cb6ff;
    }
  }
}
</style>
