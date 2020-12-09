<template>
	<article class="item">
		<div class="item__header">
			<div class="item__title">{{ title }}</div>
			<div class="item__price">{{ priceDefault }} ₽</div>
		</div>
		<div class="item__content">
			<section class="item__left">
				<p class="item__desc">{{ description }}</p>
			</section>
			<section class="item__right">
				<app-options
					v-if="options.length > 0"
					:options="options"
				></app-options>
				<app-select
					v-if="select.length > 0"
					:select="select"
				></app-select>
				<button class="item__btn">Выбрать</button>
			</section>
		</div>
	</article>
</template>

<script>
import AppSelect from "@/components/appSelect/appSelect";
import AppOptions from "@/components/appOptions/appOptions";
export default {
	components: {AppOptions, AppSelect},
	props: ['title', 'priceDefault', 'description', 'options', 'select']
}
</script>

<style scoped>

</style>