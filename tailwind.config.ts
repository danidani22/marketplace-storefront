import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xl': '',
      },
      colors: {
        kenya: '#2C2A26',
        cookie: '#423F38',
        tea: '#514D45',
        coffee: '#6E695E',
        frappe: '#847E71',
        cream: '#F8F8E6',
        milky: '#FBFBF2',
        paper: '#FFFFFD',
      },
      borderWidth: {
        px: '1px',
      },
      aspectRatio: {
        poster: '4/3',
      },
    },
  },
  plugins: [],
}
export default config
