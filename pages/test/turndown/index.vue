<template>
  <div></div>
</template>

<script>
import TurndownService from 'turndown';
const turndownService = new TurndownService({ headingStyle: 'atx' });

export default {
  mounted() {
    const md = turndownService.turndown('<div>vddav</div>');
    // eslint-disable-next-line no-console
    console.log(md);
  }
};
</script>

<style></style>
