<template>
  <div class="operate-bar">
    <el-tooltip
      v-for="(item, index) in config"
      :key="index"
      :content="item.tips"
      effect="dark"
      placement="top"
    >
      <i
        @click="() => emitEvent(item)"
        :class="item.icon"
        class="operate-icon iconfont"
      ></i>
    </el-tooltip>
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
    emitEvent(item) {
      this.$emit('onClick', item.actionType);
    }
  }
};
</script>

<style lang="less">
.operate-bar {
  display: flex;
  align-items: center;
  flex: 0 0 40px;
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
