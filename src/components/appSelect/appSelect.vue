<template>
	<div>
		<p class="item__text">{{ select.title }}</p>
		<select class="item__select">
			<option
				v-for="item in select.items"
				:key="item.title"
				:price="item.price"
			>{{ item.title }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['select']
}
</script>