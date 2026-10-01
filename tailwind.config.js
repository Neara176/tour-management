/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        app: {
          bg: 'var(--bg)',
          panel: 'var(--panel)',
          ink: 'var(--ink)',
          mute: 'var(--mute)',
          line: 'var(--line)',
          acc: 'var(--acc)',
          accfg: 'var(--accfg)',
          gold: 'var(--gold)',
          bad: 'var(--bad)',
          ok: 'var(--ok)',
          side: 'var(--side)',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
