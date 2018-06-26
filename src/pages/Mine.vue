<template>
	<div class="history">
		<p class="history-title">近期观影</p>
		<ul>
			<li v-for="(history, index) in historys" :key="index">
				<img :src="history.url" alt="">
				<div>
					<p class="title">{{ history.name }}</p>
					<p class="time">{{ history.time }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'mine',
		data() {
			return {
				historys: [
		      {
		        id: 1,
		        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg',
		        name: '复仇者联盟3：无限战争',
		        time: '2018-05-12',
		        link: ''
		      }, {
		        id: 2,
		        url: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
		        name: '头号玩家',
		        time: '2018-03-31',
		        link: ''
		      }, {
		        id: 3,
		        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521118750.jpg',
		        name: '巴霍巴利王2：终结',
		        time: '2018-05-12',
		        link: ''
		      }, {
		        id: 4,
		        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.jpg',
		        name: '小萝莉的神猴大叔',
		        time: '2018-03-07',
		        link: 'https://zhuanlan.zhihu.com/p/34327169'
		      }
		    ]
			}
		}
	};
</script>

<style lang="scss" scoped>
	.history-title {
		border-left: 5px solid #eee;
		padding-left: 10px;
		margin: 15px;
	}
	.history li {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: calc(100% - 15px);
		margin-left: 15px;
		padding: 10px 15px;
		border-bottom: 1px solid #eee;
	}
	.history li img {
		width: 60px;
	  height: 60px;
	  margin-right: 10px;
	  background-color: #eee;
	}
	.history li .title {
		font-size: 18px;
	}
	.history li .time {
		font-size: 16px;
  	color: #ddd;
  	margin-top: 6px;
	}
</style>