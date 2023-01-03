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
                    DEFAULT: "#38E0CB",
                    50: "#D7F9F5",
                    100: "#C5F6F0",
                    200: "#A2F0E7",
                    300: "#7FEBDD",
                    400: "#5BE5D4",
                    500: "#38E0CB",
                    600: "#1EC2AD",
                    700: "#179182",
                    800: "#0F6156",
                    900: "#07302B"
                },
                secondary: {
                    DEFAULT: "#050504",
                    50: "#6B6B56",
                    100: "#60604D",
                    200: "#49493A",
                    300: "#323228",
                    400: "#1C1C16",
                    500: "#050504",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
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
