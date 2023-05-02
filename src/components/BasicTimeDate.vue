<template lang="pug">
q-card.column.justify-around.fit
  q-card-section.text-center
    #timeText {{ TimeString }} #[small.text-subtitle2#meridiem(v-if="settings.clockSettings.showMeridiem") {{ meridiem }}]
    #dateText {{ DateString }}
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { DateTime } from 'luxon';
import { userSettings } from '../stores/userSettings';
const settings = userSettings();

// const showMeridiem = ref(true);
const DateString = computed(() => {
  return DateTime.now().toFormat(settings.clockSettings.dateFormat);
});
const TimeString = computed(() => {
  return DateTime.now().toFormat(settings.clockSettings.timeFormat);
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
