<template>
	<div>
		<input class="item__checkbox" type="checkbox" :name="'option'+index" :id="'option'+index" :value="option.title">
		<label :for="'option'+index" class="item__checkbox-label">
			<div class="item__checkbox-text">{{ option.title }}</div>
		</label>
	</div>
</template>

<script>
export default {
	props: ['option', 'index']
}
</script>