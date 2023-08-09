/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#343A40",
                secondary: "#ffffff00",
                myGray500: "#6C757D",
                myGray200:"#D6D6D6",
                myYellow500: "#B69121",
                myYellow400: "#edc531",
                myYellow300: "#FFE169",
            },
        },
    },
    plugins: [],
};
