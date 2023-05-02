import { defineStore } from 'pinia';

export const userSettings = defineStore('useSettings', {
  state: () => ({
    layout: 'default',
    clockSettings: {
      timeFormat: 'hh:mm',
      dateFormat: 'EEEE MMMM dd, yyyy',
      showMeridiem: true,
    },
    weatherSettings: {
      key: 'put-key-here',
      locationName: 'Puerto Rico',
      units: 'imperial',
    },
  }),
  getters: {},
});
