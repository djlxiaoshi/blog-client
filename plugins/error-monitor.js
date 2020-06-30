import Vue from 'vue';

Vue.config.errorHandler = (error, vm, info) => {
  this.$sentry.captureException(error);
};
