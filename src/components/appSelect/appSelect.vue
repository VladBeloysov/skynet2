<template>
	<div>
		<p class="item__text">{{ select.title }}</p>
		<select
			class="item__select"
			v-model="model"
		>
			<option
				v-for="item in select.items"
				:key="item.title"
				:price="item.price"
				:value="item.price"
			>{{ item.title }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['select', 'checked'],
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