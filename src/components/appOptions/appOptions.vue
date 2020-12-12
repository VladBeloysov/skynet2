<template>
	<div>
		<input
			class="item__checkbox"
			type="checkbox"
			:name="'option'+index"
			:id="'option'+index"
			:value="option.price"
			v-model="model">
		<label :for="'option'+index" class="item__checkbox-label">
			<div class="item__checkbox-text">{{ option.title }}</div>
		</label>
	</div>
</template>

<script>
export default {
	props: ['option', 'index', 'variantKey', 'checked'],
	model: {
		prop: 'checked',
		event: 'change',
	},
	computed: {
		model: {
			get() {
				return this.checked;
			},
			set(val) {
				this.$emit('change', val );
			},
		},
	},
}
</script>