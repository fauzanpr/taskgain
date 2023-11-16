/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heroBg": "url('src/assets/hero/HeroBg.svg')",
        "statsBg": "url('src/assets/homepage/stats/statsBg.svg')",
        "faqBg": "url('src/assets/homepage/faq/faqBg.svg')"
      },
      colors: {
        primary: "#0095FF",
        primaryHover: "#0086fc",
        secondary: "#0095FF"
      }
    },
  },
  plugins: [],
};
