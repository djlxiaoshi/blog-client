<template>
  <div class="app-img">
    <div
      v-if="type === 'background'"
      :class="{
        'app-loading': loading
      }"
      :style="{
        'background-image': 'url(' + src + ')'
      }"
      class="image-wrap"
    ></div>

    <template v-else>
      <img :src="src" :alt="alt" :style="imgStyle" @load="imgLoaded" />
      <div v-if="loading" class="loading-wrap app-loading"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    src: String,
    alt: String,
    imgStyle: String,
    type: String
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    imgLoaded() {
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="less">
.app-img {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
  .image-wrap {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .app-loading:before {
    z-index: -1;
    width: 20%;
  }
  .loading-wrap:before {
    z-index: 0;
  }
}
</style>
