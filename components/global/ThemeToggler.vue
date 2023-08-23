<template>
	<button
		title="Toggle Theme"
		class="btn btn-circle btn-ghost dark:text-white"
		@click="toggleTheme(colorMode.preference === 'dark' ? 'light' : 'dark')"
	>
		<Icon
			:name="colorMode.preference === 'light' ? 'ph:moon-fill' : 'ph:sun-fill'"
			class="h-4 w-4 text-accent dark:text-orange-400 md:h-6 md:w-6 xl:h-8 xl:w-8"
		/>
	</button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

type Theme = 'light' | 'dark'

const toggleTheme = (newTheme: Theme) => {
	colorMode.preference = newTheme
}
</script>
