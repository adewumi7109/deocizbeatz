import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        // primaryColor: "#ffc106",
        primaryColor: "#0059ff",
        black: "#000",
        textColor: "#e3e3e3",
      
       }
    },
  },
  plugins: [],
};
export default config;
