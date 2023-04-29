<template lang="pug">
q-card.column.justify-around.fit
  q-card-section.text-center
    #timeText {{ TimeString }} #[small.text-subtitle2#meridiem(v-if="showMeridiem") {{ meridiem }}]
    #dateText {{ DateString }}
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { DateTime } from 'luxon';
//TODO: Look up settings
const showMeridiem = ref(true);
const DateString = computed(() => {
  return DateTime.now().toFormat('EEEE MMMM dd, yyyy');
});
const TimeString = computed(() => {
  return DateTime.now().toFormat('hh:mm');
});
const meridiem = computed(() => {
  return DateTime.now().toFormat('a');
});
</script>
<style lang="sass">
#timeText
  font-size: 6vw
  font-weight: 300
  line-height: 6rem
  letter-spacing: -0.01562em
#dateText
  margin-top: 1vh
  font-size: 1.5vw
  font-weight: 400
  line-height: 1.75rem
  letter-spacing: 0.00937em
#meridiem
  margin-left: -1.25vw
  font-size: 1vw
  font-weight: 500
  line-height: 1.375rem
  letter-spacing: 0.00714em
</style>
