/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
            // ### Primary

            strongCyan: "hsl(171, 66%, 44%)",
            lightBlue: "hsl(233, 100%, 69%)",
            
            // ### Neutral

            darkGrayishBlue: "hsl(210, 10%, 33%)",
            grayishBlue: "hsl(201, 11%, 66%)",

            white: "#fff",
            black: "#000",
        },
        fontFamily: {
            baiJamjuree: "'Bai Jamjuree', sans-serif",
        },
		extend: {},
	},
	plugins: [],
};
