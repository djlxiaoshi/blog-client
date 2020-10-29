<template>
  <div class="admin-system-page">
    <h1>系统管理</h1>
    <Button @click="logout">登出</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      userLogout: 'user/logout'
    }),
    async logout() {
      try {
        await this.userLogout();
        this.$router.push('/');
      } catch (e) {}
    }
  }
};
</script>

<style></style>
