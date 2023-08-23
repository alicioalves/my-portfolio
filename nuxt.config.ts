// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'@nuxt/image',
		'@nuxt/content',
		'@nuxtjs/color-mode'
	],

	// Devtools
	devtools: { enabled: true },

	// i18n
	i18n: {
		/* module options */
	},

	// Color Mode
	colorMode: {
		preference: 'system',
		fallback: 'dark',
		classPrefix: ''
	}
})
