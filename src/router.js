import VueRouter from 'vue-router';
import App from './App';

const routes = [
	{ path: '/', component: App.components.Splash },
	{ path: '/splash', component: App.components.Splash },
	{ path: '/home/:tab', component: App.components.Home },
	{ path: '/board-list/:type', component: App.components.BoardList },
	{ path: '/board-detail', component: App.components.BoardDetail },
];

const router = new VueRouter({
	routes
});

export default router;