<template>
    <div class="djlxs-blog">
      <AppHeader></AppHeader>
      <router-view></router-view>
      <AppSideBar></AppSideBar>
    </div>
</template>

<script>
  import AppHeader from './components/core/Header';
  import AppSideBar from './components/core/SideBar';

  export default {
    name: '',
    components: {
      AppHeader,
      AppSideBar
    }
  };
</script>

<style scoped>

</style>
