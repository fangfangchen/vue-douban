<template>
	<div class="board-detail" v-if="data">
		<div class="info">
			<img :src="data.images.large" alt="">
			<p class="title">{{data.title}}</p>
		</div>
		<p class="average">评分：{{data.rating.average}}</p>
		<p class="director">导演：
			<span v-for="(director, index) in data.directors" :key="index">{{director.name}}<span v-if="index !== data.directors.length - 1"> / </span></span>
		</p>
		<p class="cast">主演：
			<span v-for="(cast, index) in data.casts" :key="index">{{cast.name}}<span v-if="index !== data.casts.length - 1"> / </span></span>
		</p>
		<div class="summary">
			<p>摘要：</p>
			<p>{{ data.summary }}</p>
		</div>
	</div>
</template>

<script>
	import douban from '../utils/douban';

	export default {
		name: 'board-detail',
		data() {
			return {
				data: null
			}
		},
		mounted() {
			const id = this.$route.query.id;
			douban
				.findOne(id)
				.then(res => {
					console.log(res.data);
					this.data = { ...res.data };
				})
				.catch(error => {
					console.log(error);
				});
		},
	};
</script>

	<style scoped lang="scss">
	.board-detail {
		color: #aaa;
	  font-size: 16px;
	  padding: 15px 25px;

	  p {
	  	margin-bottom: 10px;
	  }

	  .info {
	  	text-align: center;

	  	img {
	  		width: 150px;
	  	}

	  	.title {
	  		margin-top: 10px;
	  	}
	  }

		.summary {

			p:nth-child(1) {
				margin-top: 30px;
			  font-size: 18px;
			  font-weight: bold;
			  color: #323232;
			}
		}
	}
</style>