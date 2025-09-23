/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			// New Brand Colors: Gamboge, Licorice, Antique White
			'gamboge': {
				'50': '#fef7e6',
				'100': '#fdecc2',
				'200': '#fbd584',
				'300': '#f8c145',
				'400': '#f5a91a',
				'500': '#E49B0F', // Main gamboge
				'600': '#c77d0a',
				'700': '#a55f0b',
				'800': '#864b0f',
				'900': '#6f3e10',
				'950': '#3f1f05'
			},
			'licorice': {
				'50': '#f6f6f6',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#4f4f4f',
				'800': '#454545',
				'900': '#3d3d3d',
				'950': '#1A1A1A' // Main licorice
			},
			'antique-white': {
				'50': '#fefdfb',
				'100': '#fdf9f2',
				'200': '#faf2e6',
				'300': '#f6e8d1',
				'400': '#f0d9b5',
				'500': '#FAEBD7', // Main antique white
				'600': '#e6c49f',
				'700': '#d4a574',
				'800': '#c08a5a',
				'900': '#a06f4a',
				'950': '#5a3d28'
			}
  		},
		fontFamily: {
			'sans': ['Chillax', 'var(--font-inter)', 'system-ui', 'sans-serif'],
			'body': ['Chillax', 'var(--font-inter)', 'system-ui', 'sans-serif'],
			'heading': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

