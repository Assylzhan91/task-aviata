<template>
	<div class="v-schedule">
		<div class="v-schedule__title">
			<span
				class="v-schedule__icon"
				:style="{
        	backgroundImage: `url('https://aviata.kz/static/airline-logos/80x80/${validatingCarrier}.png')`
      }">
			</span>
			<strong class="text">{{ titleAirline }}</strong>
		</div>
		<div class="v-schedule__time">
			<span class="v-schedule__time-small">25 ноя, вс</span>
			<strong class="v-schedule__time-large">23:25</strong>
		</div>
		<div class="duration-flight--wrapper">
			<div class="duration-flight">
				<div class="duration-flight__top">
					<span class="text">ALA</span>
					<span class="time">4 ч 20 м</span>
					<span class="text">TSE</span>
					<div class="duration-flight__line">
						<span class="circle"></span>
						<span class="circle"></span>
						<span class="circle"></span>
					</div>
				</div>
				<div class="duration-flight__bottom">
					через Шымкент, 1 ч 50 м
				</div>
			</div>
		</div>
		<div class="v-schedule__time">
			<span class="v-schedule__time-small">25 ноя, вс</span>
			<strong class="v-schedule__time-large">23:25</strong>
		</div>

	</div>
</template>

<script>
export default {
  name: "Schedule",
	props: {
    validatingCarrier: {
      type: String
		},
    titleAirline: {
      type: String
		}
	}
}
</script>
