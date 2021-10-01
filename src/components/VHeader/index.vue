<template>
	<div class="v-header__main">
		<v-header-left #v-header-left>
			<img src="@/assets/images/main-logo.svg" alt="">
		</v-header-left>
		<v-header-middle #v-header-middle>
			<h3 class="v-header-middle__title">
				Поиск и бронирование авиабилетов
			</h3>
		</v-header-middle>
		<v-header-right #v-header-right>
			<a href="tel:77272255055">+7(727) <strong>22-55-055</strong></a>
			<a href="tel:0123456789">+7(701)065-33-33</a>
			<a href="tel:0123456789">help@aviata.kz</a>
		</v-header-right>
	</div>

</template>

<script src="./VHeader.js"></script>
