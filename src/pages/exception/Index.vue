<template>
    <div class="exception-page">
      <ServerException v-if="type === 500"></ServerException>
      <NoPermission v-else-if="type === 403"></NoPermission>
      <NotFound v-else></NotFound>
    </div>
</template>

<script>
  import ServerException from '@/components/common/Exception/ServerException';
  import NotFound from '@/components/common/Exception/NotFound';
  import NoPermission from '@/components/common/Exception/NoPermission';
  
  export default {
    name: '',
    props: {
      type: {
        default: 404
      }
    },
    components: {
      ServerException,
      NotFound,
      NoPermission
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
