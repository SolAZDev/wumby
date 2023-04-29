<template lang="pug">
q-page(padding)
  .row.justify-around.window-height
    .col-4
      BasicTimeDate

</template>
<script setup lang="ts">
import BasicTimeDate from 'src/components/BasicTimeDate.vue';
</script>
<style lang="sass">
.col-4
  height: 43vh !important
  padding: 15px
</style>
