<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import Splash from './pages/Splash';
	import Home from './pages/Home';
	import Search from './pages/Search';
	import Mine from './pages/Mine';

  export default {
    name: 'app',
    components: {
    	Splash,
    	Home,
    	Search,
    	Mine,
    }
  };
</script>

<style>
#app {
  height: 100%;
  background-color: #fff;
}
</style>
