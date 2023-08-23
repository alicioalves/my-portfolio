<template>
	<div
		class="flex h-full min-h-screen w-full flex-col bg-white px-32 text-black dark:bg-[#041F31] dark:text-white"
	>
		<Header />

		<main class="mx-auto w-full">
			<slot />
		</main>

		<ScrollToTop />
		<Footer />
	</div>
</template>
