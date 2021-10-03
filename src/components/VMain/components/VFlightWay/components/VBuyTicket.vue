<template>
	<div class="v-buy-ticket">
		<h3 class="v-buy-ticket__price">
			<span class="price">{{ price }}</span>
			<span class="v-buy-ticket__currency">₸</span></h3>
		<v-button
			class="v-buy-ticket__button"
		>
			Выбрать
		</v-button>
		<p class="v-buy-ticket__desc">Цена за всех пассажиров</p>
		<div class="v-buy-ticket__baggage">
			<span class="text">Нет багажа</span>
			<v-button
				class="v-buy-ticket__add-baggage"
			>
				+ Добавить багаж
			</v-button>
		</div>
	</div>
</template>

<script>
import VButton from '@/components/VButton'
export default {
  name: "VBuyTicket",
	components: {
    VButton
	},
	props: {
    price: {
      type: String
		}
	}
}
</script>
