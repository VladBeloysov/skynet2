<template>
  <div id="app">
	<div class="wrapper">
		<app-step
			v-for="(step, index) in jsonData"
			:key="index"
			:stepIndex="index"
			:title="step.title"
			:variants="step.variants"
			@updateApp="onUpdatePrice"
		>
		</app-step>
		<app-res
			:sum="sum"
		></app-res>
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
            jsonData: json,
            masPrice: [],
            sum: 0,
        }
	},
	methods: {
		onUpdatePrice(someData) {
			this.masPrice[someData.index] = someData.price;
			this.onUpdateSum();
		},
		onUpdateSum() {
			this.sum = 0;
			for (var i=0; i<this.masPrice.length; i++) {
				if(this.masPrice[i]) {
					this.sum += this.masPrice[i];
				} else {
					this.sum += 0
				}
			}
		}
	},
	components: {appStep, appRes}
}
</script>
