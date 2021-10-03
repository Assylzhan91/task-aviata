<template>
	<div class="v-filter">
		<div class="v-filter--wrapper">
			<div class="v-filter__block">
				<h4 class="v-filter__title">{{ title }}</h4>
				<div class="v-filter__options">
					<ul class="v-filter__list">
						<li class="v-filter__item" >
							<span class="v-filter__checkbox"></span>
							<strong class="v-filter__label">Все</strong>
						</li>
						<li
							class="v-filter__item"
							v-for="(airline, key) of getListAirlines"
							@click="checkedHandler(key)"
						>
							<span class="v-filter__checkbox"></span>
							<strong class="v-filter__label">{{ airline }}</strong>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script src="./VFilter.js"></script>
