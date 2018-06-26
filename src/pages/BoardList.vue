<template>
	<div class="board-list">
		<p class="board-title">{{ title }}</p>
		<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px'}">
			<ul
				v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10"
			>
				<li v-for="(list, index) in lists" :key="index" :data-id="list.id">
					<div class="list-left">
						<img v-lazy="list.images.small" alt="">
						<div class="list-info">
							<span class="title">{{ list.title }}</span>
							<span class="time" v-if="list.mainland_pubdate">上映时间：{{ list.mainland_pubdate }}</span>
							<span class="director" v-if="list.directors[0]">导演：{{ list.directors[0].name }}</span>
						</div>
					</div>
					<span class="average">{{ list.rating.average }}</span>
				</li>
			</ul>
			<p class="page-infinite-loading">
				<span v-if="hasMore">
		      <mt-spinner type="fading-circle"></mt-spinner>
		      加载中...
		    </span>
		    <span v-if="!hasMore">
		      加载完毕
		    </span>
	    </p>
	   </div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { InfiniteScroll, Spinner } from 'mint-ui';
	import douban from '../utils/douban';

	Vue.use(InfiniteScroll);
	Vue.component(Spinner.name, Spinner);

	export default {
		name: 'board-list',
		data() {
			return {
				title: '',
				type: '',
				query: '',
				loading: false,
				page: 1,
				count: 20,
				wrapperHeight: 0,
				lists: [],
				hasMore: true,
			};
		},
		mounted() {
			this.getTitle();

			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		},
		methods: {
			getTitle() {
				const type = this.$route.params.type;
				let title = '';
				this.query = decodeURIComponent(this.$route.query.q);
				switch(type) {
					case 'in_theaters':
						title = '正在热映';
						break;
					case 'coming_soon':
						title = '即将上映';
						break;
					case 'top250':
						title = 'Top250';
						break;
					case 'us_box':
						title = '北美票房榜';
						break;
					case 'search':
						title = `“${this.query}”的搜索结果`;
						break;
				}
				this.type = type;
				this.title = title;
			},
			loadMore() {
				this.loading = true;
				douban
					.find(this.type, this.page, this.count, this.query)
					.then(res => {
						let subjects = res.data.subjects;
						const len = subjects.length;
						if (len > 0) {
							if (this.type === 'us_box') {
								subjects = subjects.map(subject => {
									return subject.subject;
								});
							}
							this.lists = this.lists.concat(subjects);
							if (len >= 20) {
								this.page += 1;
								this.loading = false;
								this.hasMore = true;
							} else {
								this.hasMore = false;
							}
						} else {
							this.hasMore = false;
						}
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
	};
</script>

<style lang="scss" scoped>
	.board-list {
		.board-title {
			text-align: center;
			font-size: 16px;
			color: #aaa;
			height: 60px;
			line-height: 60px;
			border-bottom: 1px solid #ddd;
			font-weight: 500;
		}

		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 15px;
			border-bottom: 1px solid #ddd;

			.list-left {
				display: flex;
				align-items: center;

				img {
					width: 60px;
					height: 60px;
					margin-right: 10px;
					background-color: #eee;
				}

				.list-info {
					display: flex;
					flex-direction: column;

					.title {
						word-break: break-word;
					}
				}
			}

			.average {
				color: red;
				font-weight: 500;
				font-size: 18px;
			}

			.time {
				font-size: 12px;
			}

			.director {
				font-size: 14px;
			}

			.time,
			.director {
				color: #aaa;
			}
		}
	}
</style>