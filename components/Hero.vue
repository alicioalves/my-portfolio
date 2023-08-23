<template>
	<section class="hero flex min-h-screen justify-center">
		<div class="hero-content relative flex flex-col gap-10">
			<div class="flex flex-col gap-2 text-center">
				<h2 class="text-5xl">Alício Alves</h2>
				<p>Full Stack Web Developer | Mobile Developer</p>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, officia
				similique illo ipsum quia magni incidunt, veritatis fugit optio numquam,
				autem tenetur totam sint rerum vel. Ut eos deleniti dolore.
			</p>
			<NuxtLink to="/">
				<button class="btn btn-primary">Contact Me</button>
			</NuxtLink>
		</div>

		<NuxtImg
			src="https://avatars.githubusercontent.com/u/45337388"
			alt="Profile Picture"
			class="h-80 w-auto rounded-full"
		/>

		<a class="absolute bottom-0" href="#about-me">
			<Icon
				name="heroicons:chevron-down-solid"
				class="h-12 w-12 animate-bounce text-black dark:text-white"
			/>
		</a>
	</section>
</template>
