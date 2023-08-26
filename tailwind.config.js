/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			xs: '319px',
			sm: '639px',
			md: '768px',
			lg: '1024px',
			xl: '1248px',
			'2xl': '1536px',
			'3xl': '1920px',
		},

		container: {
			center: true,
			padding: '0px',
		},
		extend: {
			fontFamily: {
				sans: 'Oswald',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		['prettier-plugin-tailwindcss'],
	],
}
