module.exports = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}', './pages/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#1abc9c',
        accent: '#3498db',
        dark: '#0a0e27',
        light: '#f8f9fa',
        indigo: '#4f46e5'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2c3e50 0%, #1abc9c 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1abc9c 50%, #3498db 100%)'
      }
    }
  },
  plugins: []
};
