<template>
	<div class="home">
		<mt-swipe class="banner" :auto="4000">
		  <mt-swipe-item>
		  	<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<div class="board-list">
			<p class="board-title">豆瓣电影榜单集合</p>
    	<p class="board-tips">最新，最IN的影视收集～</p>
    	<ul>
    		<li>
    			<span>正在上映</span>
    			<img src="../assets/images/enter.png" alt="">
    		</li>
    		<li>
    			<span>即将上映</span>
    			<img src="../assets/images/enter.png" alt="">
    		</li>
    		<li>
    			<span>Top250</span>
    			<img src="../assets/images/enter.png" alt="">
    		</li>
    		<li>
    			<span>北美票房榜</span>
    			<img src="../assets/images/enter.png" alt="">
    		</li>
    	</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
  import {
		Swipe,
		SwipeItem
	} from 'mint-ui';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		name: 'board',
	};
</script>

<style lang="scss" scoped>
	.home {
		.banner {
			width: 100%;
			height: 200px;

			img {
				width: 100%;
				height: 200px;
				object-fit: cover;
			}
		}
		.board-list {
			padding: 0 15px;
		}
		.board-title {
		  font-size: 22px;
		  margin: 20px 0;
		}

		.board-tips {
		  color: #aaa;
		  font-size: 12px;
		  margin-bottom: 30px;
		}
		.board-list li {
			height: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: 1px solid #eee;
			margin-top: 10px;
			padding: 10px 15px;
			border-radius: 4px;

			img {
				width: 20px;
				height: 20px;
			}
		}
	}
</style>