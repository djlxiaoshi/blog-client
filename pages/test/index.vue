<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$store.state.user.name;
    }
  }
};
</script>

<style></style>
