<template>
	<div class="res">
		<div class="res__title">Итого к оплате</div>
		<div class="res__sum">{{ sum }} ₽</div>
	</div>
</template>

<script>
import './appRes.css';
export default {
	props: ['sum'],
}
</script>