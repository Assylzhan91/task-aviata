<template>
  <div class="layout">
		<div class="v-header--wrapper">
			<div class="container">
				<slot name="header"></slot>
			</div>
		</div>
		<div class="container">
			<slot name="search"></slot>
		</div>
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
