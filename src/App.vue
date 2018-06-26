<template>
  <div id="root">
    <router-view></router-view>
  </div>
</template>

<script>
	import Splash from './pages/Splash';
	import Home from './pages/Home';
	import BoardList from './pages/BoardList';
  import BoardDetail from './pages/BoardDetail';

  export default {
    name: 'app',
    components: {
    	Splash,
    	Home,
    	BoardList,
      BoardDetail,
    }
  };
</script>

<style>
#root {
  height: 100%;
  background-color: #fff;
}
</style>
