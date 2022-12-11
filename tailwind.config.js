/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#95A8DF",
                    50: "#E3E8F7",
                    100: "#D4DBF2",
                    200: "#B4C2E8",
                    300: "#95A8DF",
                    400: "#6A85D2",
                    500: "#3F61C5",
                    600: "#2F4B9C",
                    700: "#223771",
                    800: "#152246",
                    900: "#080D1B"
                },
                secondary: {
                    DEFAULT: "#0E0C38",
                    50: "#938FE7",
                    100: "#837EE3",
                    200: "#625DDC",
                    300: "#423BD5",
                    400: "#3029BE",
                    500: "#27229D",
                    600: "#1F1A7B",
                    700: "#16135A",
                    800: "#0E0C38",
                    900: "#02020A"
                },

                transparent: "transparent",
                current: "currentColor",
                black: colors.black,
                white: colors.white,
                gray: colors.gray,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow
            }
        }
    },
    plugins: []
};
