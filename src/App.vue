<template>
  <div id="app">
	<div class="wrapper">
		<app-step
			v-for="step in jsonData"
			:key="step.title"
			:title="step.title"
			:variants="step.variants"
		>
		</app-step>
		<app-res></app-res>
	</div>
  </div>
</template>

<script>
import appStep from './components/appStep/appStep'
import appRes from './components/appRes/appRes'
import './main.css'
import json from './data.json'
export default {
	data() {
        return {
            jsonData: json
        }
	},
	components: {appStep, appRes}
}
</script>
<style>

</style>
