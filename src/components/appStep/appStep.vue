<template>
	<div class="step">
		<div class="step__title">{{ title }}</div>
		<div class="step__content">
			<div
				class="step__variant"
				v-for="(variant, index) in variants"
				:key="index"
			>
				<input
					class="item__variantRadio"
					@click="clickVariant(variant.price_default, stepIndex)"
					type="radio"
					:name="'variant'+stepIndex"
					:id="'step'+stepIndex+'var'+index"
					:value="variant.price_default">
				<label :for="'step'+stepIndex+'var'+index" class="item">
					<div class="item__header">
						<div class="item__title">{{ variant.title }}</div>
						<div class="item__price">
							{{
								(variants[index].options.length > 0) ?
									sumChecked :
								(variants[index].select.length > 0) ?
									select :
									variant.price_default
							}} ₽
						</div>
					</div>
					<div class="item__content">
						<section class="item__left">
							<p class="item__desc">{{ variant.description }}</p>
						</section>
						<section class="item__right">
							<app-options
								v-for="(option, index2) in variant.options"
								:option="option"
								:key="index2"
								:index="index2"
								:value="option.price"
								:variantKey="index"
								v-model="checked"
							></app-options>
							<app-select
								v-for="(sel, index3) in variant.select"
								:select="sel"
								:key="index3"
								v-model="select"
							></app-select>
							<div class="item__btn">Выбрать</div>
						</section>
					</div>
				</label>
			</div>
		</div>
	</div>
</template>

<script>
import './appStep.css';
import AppSelect from "@/components/appSelect/appSelect";
import AppOptions from "@/components/appOptions/appOptions";
export default {
	components: { AppOptions, AppSelect },
	props: ['title', 'variants', 'stepIndex', 'price'],
	data() {
		return {
			checked: [],
			select: 0,
			sumChecked: 0
		}
	},
	methods: {
		clickVariant(currentPrice, stepIndex) {
			this.$emit('updateApp', { index: stepIndex, price: currentPrice})
		}
	},
	watch: {
		checked() {
			this.sumChecked=0;
			for (var i=0; i<this.checked.length; i++) {
				this.sumChecked+=this.checked[i];
			}
			return this.sumChecked;
		}
	}
}
</script>

