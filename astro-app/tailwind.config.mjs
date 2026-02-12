/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      /* -------------------------
         COLOR SYSTEM
      ------------------------- */
      colors: {
        // Brand accents
        'brand-gold': '#f6c567',
        'brand-orange': '#ff8c2a',
        'brand-orange-dark': '#c46a0a',

        // Background / surfaces (navy-black premium)
        'brand-bg': '#070d18',
        'brand-bg-soft': '#0b1220',
        'brand-panel': '#141c2b',

        // Text
        'brand-text': '#e5e7eb',
        'brand-muted': '#9ca3af',

        // System
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },

      /* -------------------------
         SHADOWS
      ------------------------- */
      boxShadow: {
        soft: '0 4px 14px rgba(0,0,0,0.35)',
        strong: '0 12px 40px rgba(0,0,0,0.55)',
        glow: '0 0 18px rgba(255,140,42,0.35)',
        glowSoft: '0 0 10px rgba(255,140,42,0.22)',
      },

      /* -------------------------
         RADIUS
      ------------------------- */
      borderRadius: {
        base: '8px',
        pill: '9999px',
      },

      /* -------------------------
         FONT SYSTEM
      ------------------------- */
      fontFamily: {
        // Main body + headings
        body: ['"General Sans"', 'ui-sans-serif', 'system-ui'],
        heading: ['"General Sans"', 'ui-sans-serif', 'system-ui'],

        // Cards / accent titles
        accent: ['Outfit', 'ui-sans-serif', 'system-ui'],

        // Navbar + buttons
        ui: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },

      /* -------------------------
         SPACING / MAX WIDTH
      ------------------------- */
      maxWidth: {
        'app': '1200px',
        'content': '1100px',
      },

      /* -------------------------
         LETTER SPACING
      ------------------------- */
      letterSpacing: {
        tightest: '-0.02em',
        widePlus: '0.08em',
      },

      /* -------------------------
         BACKGROUND GRADIENTS
      ------------------------- */
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at 50% 0%, rgba(255,140,42,0.08), transparent 60%)',

        'navy-depth':
          'linear-gradient(180deg, #070d18 0%, #0b1220 100%)',
      },
    },
  },

  plugins: [],
};
