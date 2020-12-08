<template>
  <div id="app">
	<div class="wrapper">
		<Step></Step>
		<Res></Res>
	</div>
  </div>
</template>

<script>
import Step from './components/Step/Step'
import Res from './components/Res/Res'
import './main.css'
export default {
    name: 'App',
    components: {Step, Res},
}
</script>
<style>

</style>
