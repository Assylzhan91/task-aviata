<template>
  <div class="layout">
		<header class="v-header--wrapper">
			<div class="container">
				<slot name="header"></slot>
			</div>
		</header>
		<main class="container">
			<slot name="search"></slot>
		</main>
		<div class="container">
			<slot name="main"></slot>
		</div>
  </div>
</template>

<script>
export default {
  name: 'VLayout',
  props: {
    msg: String
  }
}
</script>
