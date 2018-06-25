import VueRouter from 'vue-router';
import App from './App';

const routes = [
	{ path: '/', component: App.components.Splash },
	{ path: '/splash', component: App.components.Splash },
	{ path: '/home', component: App.components.Home },
	{ path: '/search', component: App.components.Search},
	{ path: '/mine', component: App.components.Mine}
];

const router = new VueRouter({
	routes
});

export default router;