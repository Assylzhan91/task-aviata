<template>
  <div class="layout">
		<header class="v-header--wrapper">
			<div class="container">
				<slot name="header"></slot>
			</div>
		</header>
		<div class="container">
			<slot name="search"></slot>
		</div>
		<main class="container">
			<slot name="main"></slot>
		</main>
  </div>
</template>

<script>
export default {
  name: 'VLayout',
}
</script>
