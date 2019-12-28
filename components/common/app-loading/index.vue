<template>
  <div class="app-loading">
    <img :class="[size]" src="./loading.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        const sizeArray = ['mini', 'small', 'normal', 'large'];
        if (!sizeArray.includes(value)) {
          // eslint-disable-next-line no-console
          console.warn('size 属性只能为mini|small|normal|large');
          return 'normal';
        }
        return value;
      }
    }
  }
};
</script>

<style lang="less" scope>
.app-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  img {
    width: 15%;
    &.mini {
      width: 5%;
    }
    &.small {
      width: 10%;
    }
    &.normal {
      width: 15%;
    }
    &.large {
      width: 20%;
    }
  }
}
</style>
