<template>
	<div class="v-filter">
		<div class="v-filter--wrapper">
			<div class="v-filter__block">
				<h4 class="v-filter__title">{{ title }}</h4>
				<div class="v-filter__options">
					<ul class="v-filter__list">
						<li class="v-filter__item" @click="checkAllAction">
							<span
								class="v-filter__checkbox"
								:class="{active: getCheckedAllAirlines}"
							></span>
							<strong class="v-filter__label">Все</strong>
						</li>
						<li
							class="v-filter__item"
							v-for="airline of setFilteredFlights"
							:key="airline.id"
							@click="checkedHandler(airline.validating_carrier)"
						>
							<span
								class="v-filter__checkbox"
								:class="{active: airline.isChecked}"
							></span>
							<strong class="v-filter__label">{{ airline.titleAirline }}</strong>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script src="./VFilter.js"></script>
