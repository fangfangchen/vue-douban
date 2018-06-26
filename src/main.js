import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import MintUI from 'mint-ui';
import VueLazyload from 'vue-lazyload';
import 'mint-ui/lib/style.css';
import './assets/css/reset.css';
import './assets/css/common.scss';
import App from './App.vue';

// Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueLazyload, {
	preLoad: 1.3
});

new Vue({
	router,
	template: '<App />',
	components: {
		App
	},
}).$mount('#app');
