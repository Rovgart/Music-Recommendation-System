/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#C2410C",
				secondary: "#92400E",
				accent: "#CA8A04",
				background: "#0a0a0a",
				text: "#ffffff",
			},
		},
	},
	plugins: [],
};
