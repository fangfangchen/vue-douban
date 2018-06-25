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
        <Search />
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <Mine />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell
  } from 'mint-ui';
  import Board from './Board';
  import Search from './Search';
  import Mine from './Mine';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Cell.name, Cell);
  Vue.component('Board', Board);
  Vue.component('Search', Search);
  Vue.component('Mine', Mine);

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