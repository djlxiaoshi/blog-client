<template>
  <div></div>
</template>

<script>
import TurndownService from 'turndown';
const { turndown } = new TurndownService({ headingStyle: 'atx' });
console.log('TurndownService', turndown('<div>vddav</div>'));

export default {
  head: {
    // script: [
    //   {
    //     src: 'https://unpkg.com/turndown@5.0.3/dist/turndown.js'
    //   }
    // ]
  },
  mounted() {
    // const turndownService = new window.TurndownService();
    // const md = turndown('<div>vddav</div>');
    // console.log(md);
  }
};
</script>

<style></style>
