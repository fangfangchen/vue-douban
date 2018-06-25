<template>
	<div class="splash">
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="(item, index) in items" :key="index">
		  	<img :src="item.images.medium" alt="">
		  	<button v-if="index === items.length - 1" class="join" @click="jumpToHome">立即体验</button>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { InfiniteScroll, Swipe, SwipeItem } from 'mint-ui';
	import douban from '../utils/douban';

	Vue.use(InfiniteScroll);
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		name: 'splash',
		data() {
			return {
				loading: false,
				items: []
			}
		},
		beforeCreate() {
			
		},
		mounted() {
			this.loading = true;
			douban
				.find('coming_soon', 1, 5)
				.then(res => {
					console.log(res);
					const subjects = res.data.subjects;
					this.items = subjects;
				})
				.catch(error => {
					console.log(error);
				});
		},
		methods: {
			jumpToHome() {
				this.$router.push({ path: '/home' });
			}
		}
	};
</script>

<style scoped lang="scss">
	.splash {
		height: 100%;
		
		img {
			width: 100%;
			height: 100%;
		}

		.join {
			position: absolute;
			bottom: 20%;
			left: 50%;
			transform: translateX(-50%);
			background-color: transparent;
			color: #fff;
			border: 2px solid #fff;
			border-radius: 6px;
			padding: 10px 20px;
		}
	}
</style>