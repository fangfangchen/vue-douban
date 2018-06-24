<template>
	<div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="board">
        榜单
        <img slot="icon" src="../assets/images/barrage.png">
      </mt-tab-item>
      <mt-tab-item id="search">
        搜索
        <img slot="icon" src="../assets/images/search.png">
      </mt-tab-item>
      <mt-tab-item id="mine">
        我的
        <img slot="icon" src="../assets/images/mine.png">
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="board">
        <Board />
      </mt-tab-container-item>
      <mt-tab-container-item id="search">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
	import Vue from 'vue';
  import { Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell
  } from 'mint-ui';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Cell.name, Cell);

  export default {
    name: 'tabbar',
    data: function() {
      return {
        selected: 'board'
      }
    },
    props: {
    	
    }
  };
</script>