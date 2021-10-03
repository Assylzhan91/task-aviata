<template>
	<div class="v-main">
		<div class="v-main__left">
			<v-filter
				title="Авиакомпании"
			/>
			<button class="v-main__reset-btn" @click="resetHandlerAction">Сбросить все фильтры</button>
		</div>
		<div class="v-main__right">
			<div
				class="v-flight-way--wrapper" v-for="flight of getAllAirlinesDates"
				:key="flight.id"
			>
				<v-flight-way>
					<template #schedule>
						<v-schedule
							:validating-carrier="flight.validating_carrier"
							:title-airline="flight.titleAirline"
						/>
					</template>
					<template #details-travel>
						<v-details-travel
							:refundable="flight.refundable"
						/>
					</template>
					<template #buy-ticket>
						<v-buy-ticket
							:price="flight.price"
						/>
					</template>
				</v-flight-way>
			</div>
		</div>
	</div>
</template>

<script src="./VMain.js"></script>
