/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metro Sans", "sans-serif"],
        mono: ["Tronica Mono", "monospace"],
        title: ["Metro Sans Bold", "sans-serif"]
      },
      colors: {
        "cta-gradient-1": "#FF0049",
        "cta-gradient-2": "#E205FF",
        inactive: "#818181",
        misc: "#0072FF",
        visual: "#FD0000",
        travel: "#5B00FF",
        audio: "#31FF00",
        health: "#FFFF00",
        tech: "#FF7700",
        cta: "#FF0072",
      },
      rotate: {
        270: "270deg",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
