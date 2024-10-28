module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust this based on your project structure
    "./admin/**/*.{html,js,jsx,ts,tsx}", // Include subfolders if necessary
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5F6FFF"
      }
    },
  },
  plugins: [],
}
