/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                480: "480px",
                620: "620px",
                840: "840px",
                1024: "1024px",
                1280: "1280px",
                1440: "1440px",
                1920: "1920px",
            },
            fontSize: {
                xxs: "0.625rem",
                xs: "0.75rem",
                sm: "0.875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
            },
            colors: {
                "brand-dark": "#1775b9",
                "brand-light": "#a2ceed",
                primary: "#e9eaeb",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
