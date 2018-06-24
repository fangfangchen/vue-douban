import VueRouter from 'vue-router';
import Splash from './components/Splash.vue';
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import Mine from './components/Mine.vue';

const routes = [
	{ path: '/', component: Splash },
	{ path: '/splash', component: Splash },
	{ path: '/home', component: Home },
	{ path: '/search', component: Search},
	{ path: '/mine', component: Mine}
];

const router = new VueRouter({
	routes
});

export default router;