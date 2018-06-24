<template>
	<mt-search
	  v-model="value"
	  cancel-text="取消"
	  placeholder="搜索">
	</mt-search>
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
		}
	}
</script>