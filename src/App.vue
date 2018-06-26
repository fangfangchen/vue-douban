<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import Splash from './pages/Splash';
	import Home from './pages/Home';
	import BoardList from './pages/BoardList';

  export default {
    name: 'app',
    components: {
    	Splash,
    	Home,
    	BoardList,
    }
  };
</script>

<style>
#app {
  height: 100%;
  background-color: #fff;
}
</style>
