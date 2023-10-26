/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{css,xml,html,vue,svelte,ts,tsx}'
  ],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      colors: {
        'grey': '#1F1F1F',
        'green': '#64EC82',
        'red': '#FF000B',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // disables browser-specific resets
  }
}