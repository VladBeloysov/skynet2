<template>
	<div class="step">
		<div class="step__title">Тип подключения</div>
		<div class="step__content">
			<article class="item">
				<div class="item__header">
					<div class="item__title">Стандартное подключение</div>
					<div class="item__price">400 ₽</div>
				</div>
				<div class="item__content">
					<section class="item__left">
						<p class="item__desc">Техник сделает аккуратное техническое отверстие при необходимости (бесплатно)\n
							Бесплатная настройка оборудования (роутер, приставка)\nДемонстрация работы ЛК пользователю, помощь при оплате банковской картой</p>
					</section>
					<section class="item__right">
						<div class="item__wrap-checkbox">
							<input class="item__checkbox" type="checkbox" name="option1" value="Протяжка кабеля">
						</div>
						<div class="item__wrap-checkbox">
							<input class="item__checkbox" type="checkbox" name="option2" value="8 жил">
						</div>
						<button class="item__btn">Выбрано</button>
					</section>
				</div>
			</article>
			<article class="item">
				<div class="item__header">
					<div class="item__title">LUX подключение</div>
					<div class="item__price">5 000 ₽</div>
				</div>
				<div class="item__content">
					<section class="item__left">
						<p class="item__desc">Техник аккуратно, сохранив текущий ремонт, проложит и спрячет кабель в плинтусах, потолке и т.д.\n
							Подключение розеток, разводка кабеля по квартире, предоставление необходимого количества патч кордов.</p>
					</section>
					<section class="item__right">
						<div class="item__wrap-checkbox">
							<input class="item__checkbox" type="checkbox" name="option1" value="Протяжка кабеля">
						</div>
						<div class="item__wrap-checkbox">
							<input class="item__checkbox" type="checkbox" name="option2" value="8 жил">
						</div>
						<button class="item__btn">Выбрано</button>
					</section>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import './Step.css';
export default {
}
</script>

