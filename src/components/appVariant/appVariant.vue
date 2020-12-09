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
					v-for="(option, index) in options"
					:option="option"
					:key="index"
					:index="index"
				></app-options>
				<app-select
					v-for="sel in select"
					:select="sel"
					:key="sel.title"
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