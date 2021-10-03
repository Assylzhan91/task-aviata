<template>
	<div class="v-details-travel">
		<div class="v-details-travel__btn v-details-travel__btn--detail">
			<strong class="text">Детали перелета</strong>
		</div>
		<div class="v-details-travel__btn">
			<strong class="text">Условия тарифа</strong>
		</div>
		<template>
			<div class="v-details-travel__type" v-if="refundable">
				<span class="icon"></span>
				<span class="text">невозвратный</span>
			</div>
			<div class="v-details-travel__type" v-else>
				<span class="text">возвратный</span>
			</div>
		</template>

	</div>
</template>

<script>
export default {
  name: "VDetailsTravel",
	props: {
    refundable: {
      type: Boolean
		}
	}
}
</script>
