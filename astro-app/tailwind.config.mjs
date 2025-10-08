/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        'brand-gold': '#f6c567',
        'brand-orange': '#ff8c2a',
        'brand-orange-dark': '#c46a0a',
        'brand-bg': '#0c0f12',
        'brand-panel': '#1a1f25',
        'brand-text': '#e5e7eb',
        'brand-muted': '#9ca3af',

        // System colors
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.3) 0px 2px 10px',
        strong: 'rgba(0, 0, 0, 0.5) 0px 4px 20px',
      },
      borderRadius: {
        base: '8px',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};