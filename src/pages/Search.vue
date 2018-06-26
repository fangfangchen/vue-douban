<template>
	<div class="search">
		<input
			type="text"
			v-model="value"
			placeholder="请输入要搜索的影片名称"
		>
		<button @click="jumpToList">搜索</button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Search } from 'mint-ui';

	Vue.component(Search.name, Search);

	export default {
		name: 'search',
		data: function() {
			return {
				value: ''
			}
		},
		methods: {
			jumpToList() {
				this.value = this.value.trim();
				if (!this.value) return;
				this.$router.push({ path: `/board-list/search`, query: { q: encodeURIComponent(this.value) } });
			}
		}
	}
</script>

<style scoped lang="scss">
	.search {
		display: flex;
    justify-content: space-between;
    padding: 15px;

    input {
    	border: 1px solid #eee;
    	border-radius: 6px;
    	padding: 6px 12px;
    	flex: 1;
    }

    button {
    	width: 60px;
    	padding: 10px 15px;
    	margin-left: 10px;
    	border: 1px solid #eee;
    	border-radius: 6px;
    	background-color: #fff;
    }
	}
</style>