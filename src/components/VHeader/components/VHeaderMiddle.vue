<template>
	<div class="v-header-middle">
		<slot name="v-header-middle"></slot>
		<ul class="v-header-middle__search-list">
			<li
				v-for="item of listSearch"
				:key="item.key"
				class="v-header-middle__wrapper"
			>
				<div
					class="v-header-middle__item"
				 	:class="{'active': item.active}"
				>
					{{ item.text }}
				</div>
				<span class="v-header-middle__icon" v-if="item.hasIcon"></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: "VHeaderMiddle",
	data: ()=>({
		listSearch: [
      {
        id: 1,
				text: 'выбор варианта',
				active: true,
				hasIcon: true,
			},
      {
        id: 2,
        text: 'пассажиры',
        active: false,
        hasIcon: true,
      },
      {
        id: 3,
        text: 'способ оплаты',
        active: false,
        hasIcon: true,
      },
      {
        id: 4,
        text: 'потверждение',
        active: false,
        hasIcon: false,
      },
		],
	})
}
</script>
