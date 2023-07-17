/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      SupplyLMedium :["SupplyLMedium","Courier New"],
      SupplyLRegular :["SupplyLRegular","Courier New"],
      SupplyUltra :["SupplyUltra","Courier New"],
      LufgaLight: ["LufgaLight","sans"],
      Maglite: ["Maglite","sans"]
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
    },
    extend: {
      backgroundImage: {
        swirl: `url(/textures/swirl.jpg)`,
        wall: `url(/textures/wall.jpg)`,
        whiteplaster: `url(/textures/whiteplaster.jpg)`,
        roots: `url(/textures/roots.jpg)`,
        dots: `url(/textures/dots.jpg)`,
        paper: `url(/textures/paper.jpg)`,
        dirt: `url(/textures/dirt.jpg)`,
        grain: `url(/textures/grain.png)`
      },
    },
  },
  plugins: [],
}
