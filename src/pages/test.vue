<template>
  <VueShowdown
    class="markdown-preview"
    id="vue-showdown"
    :markdown="articleContent"
    flavor="github"
    :vueTemplate="true"
    :options="options"
  ></VueShowdown>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  components: {
    VueShowdown
  },
  data() {
    return {
      options: {
        omitExtraWLInCodeBlocks: true,
        ghCodeBlocks: true
      },
      articleContent: `<div><p>FullName: {{fullName}}p><p>FirstName: <inputtype="text"v-model="firstName">p>div>

new Vue({
  el: '#root',
  data: {
    firstName: 'Dawei',
    lastName: 'Lou',
    fullName: ''
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    }
  } 
})`
    };
  }
};
</script>

<style>
</style>