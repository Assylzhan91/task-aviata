<template>
	<div class="button" @click="$emit('handler')">
		<button class="button__item">
			<slot></slot>
		</button>
	</div>
</template>

<script>
export default {
  name: "VButton"
}
</script>
