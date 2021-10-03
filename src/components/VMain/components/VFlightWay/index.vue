<template>
	<div class="v-flight-way">
		<div class="v-flight-way__left">
			<div class="v-schedule--wrapper">
				<slot name="schedule"></slot>
			</div>
			<slot name="details-travel"></slot>
		</div>
		<div class="v-flight-way__right">
			<div class="v-buy-ticket--wrapper">
				<slot name="buy-ticket"></slot>
			</div>
		</div>
	</div>
</template>

<script src="./VFlightWay.js"></script>
