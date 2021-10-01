<template>
	<v-layout>
		<template #header>
			<v-header/>
		</template>
		<template #search>
			<v-search/>
		</template>
		<template #main>
			<v-main/>
		</template>
	</v-layout>
</template>

<script>
import VLayout from "@/components/VLayout";
import VHeader from "@/components/VHeader";
import VSearch from "@/components/VSearch";
import VMain from "@/components/VMain";

export default {
  name: 'App',
	components: {
    VLayout,
    VHeader,
    VSearch,
    VMain
	},
  props: {
    msg: String
  }
}
</script>
