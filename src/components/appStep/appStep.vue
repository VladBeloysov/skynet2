<template>
	<div class="step">
		<div class="step__title">{{ title }}</div>
		<div class="step__content">
			<app-variant
				v-for="variant in variants"
				:key="variant.title"
				:title="variant.title"
				:description="variant.description"
				:color="variant.color"
				:priceDefault="variant.price_default"
				:options="variant.options"
				:select="variant.select"
			></app-variant>
		</div>
	</div>
</template>

<script>
import './appStep.css';
import appVariant from "@/components/appVariant/appVariant";
export default {
	props: ['title', 'variants'],
	components: {appVariant}
}
</script>

