import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import App from './App.vue';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

VueOnsen.platform.select('Chrome');

Vue.use(VueOnsen);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
