<template>
  <div class="exception-page">
    <ServerException v-if="type === 500"></ServerException>
    <NoPermission v-else-if="type === 403"></NoPermission>
    <NotFound v-else></NotFound>
  </div>
</template>

<script>
import ServerException from './ServerException';
import NotFound from './NotFound';
import NoPermission from './NoPermission';

export default {
  name: 'AppException',
  components: {
    ServerException,
    NotFound,
    NoPermission
  },
  props: {
    type: {
      type: Number,
      default: 404
    }
  }
};
</script>

<style scoped lang="less">
.exception-page {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2000;
  background: #ffffff;
}
</style>
