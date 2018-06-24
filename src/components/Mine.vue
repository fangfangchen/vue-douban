<template>
	<div class="history">
		<p class="history-title">近期观影</p>
		<ul>
			<li>
				<img src="" alt="">
				<div>
					<p class="title">复仇者联盟3:无限战争</p>
					<p class="time">2018-05-12</p>
				</div>
			</li>
			<li>
				<img src="" alt="">
				<div>
					<p class="title">复仇者联盟3:无限战争</p>
					<p class="time">2018-05-12</p>
				</div>
			</li>
			<li>
				<img src="" alt="">
				<div>
					<p class="title">复仇者联盟3:无限战争</p>
					<p class="time">2018-05-12</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'mine',
	}
</script>

<style scoped>
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