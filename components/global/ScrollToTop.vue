<template>
	<button
		title="Scroll to top"
		class="btn btn-circle btn-ghost fixed bottom-4 right-2 z-50 md:right-6"
		:class="scroll > 300 ? 'opacity-50' : 'pointer-events-none !opacity-0'"
		@click="toTop()"
	>
		<Icon
			name="ep:arrow-up-bold"
			class="h-4 w-4 text-black dark:text-white md:h-6 md:w-6 xl:h-8 xl:w-8"
		/>
	</button>
</template>

<script setup lang="ts">
function toTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const { y: scroll } = useWindowScroll()
</script>
