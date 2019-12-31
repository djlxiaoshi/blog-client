<template>
  <div>
    <button @click="test">点击</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  middleware: 'router',
  asyncData({ app }) {
    const { response } = app.$http({
      url: `/user`,
      method: 'get',
      showErrorMsg: true
    });

    return response.then(
      (data) => {
        console.log('data', data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  mounted() {
    // this.getTags();
  },
  methods: {
    ...mapActions({
      getTags: 'test/getAllTags'
    }),
    test() {
      this.$http({
        url: '/user',
        showErrorMsg: true,
        jumpLogin: true
      });
    }
  }
};
</script>

<style></style>
