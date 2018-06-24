import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
	router,
  template: '<App />',
  components: {
    App
  },
}).$mount('#app');
