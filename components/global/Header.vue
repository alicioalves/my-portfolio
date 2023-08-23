<template>
	<header
		class="fixed left-0 top-0 z-50 w-full bg-white px-20 py-4 shadow-md dark:bg-[#041F31]"
	>
		<div class="flex w-full items-center justify-between">
			<NuxtLink to="/">Home</NuxtLink>

			<div class="flex w-1/4 items-center justify-between">
				<NuxtLink to="/">Projects</NuxtLink>

				<NuxtLink to="/">
					<button class="btn btn-primary">Contact</button>
				</NuxtLink>

				<div>
					<ThemeToggler />
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts"></script>
