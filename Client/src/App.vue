<template>
  <v-ons-page>
    <v-ons-toolbar>
      Paragon
    </v-ons-toolbar>
    <v-ons-tabbar swipeable
      :tabs="tabs"
      :visible="false"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from './views/Home.vue';
import Summary from './views/Summary.vue';

export default {
  name: 'app',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: 'Home',
          page: Home,
        },
        {
          label: 'Summary',
          page: Summary,
        },
      ],
    };
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
