/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {

      /* -------------------------
         COLOR SYSTEM (Tokens)
      ------------------------- */
      colors: {
        accent: '#FF8D3A',
        'accent-hover': '#FFCF23',

        bg: '#070d18',
        'bg-soft': '#0b1220',
        panel: '#141c2b',

        text: '#e5e7eb',
        muted: '#9ca3af',

        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },

      /* -------------------------
         SHADOW SYSTEM
      ------------------------- */
      boxShadow: {
        soft: '0 4px 14px rgba(0,0,0,0.35)',
        strong: '0 12px 40px rgba(0,0,0,0.55)',

        glow: '0 0 18px rgba(255,141,58,0.35)',
        glowSoft: '0 0 10px rgba(255,141,58,0.22)',
      },

      /* -------------------------
         RADIUS
      ------------------------- */
      borderRadius: {
        base: '8px',
        pill: '9999px',
        card: '20px',
      },

      /* -------------------------
         FONT SYSTEM
      ------------------------- */
      fontFamily: {
        body: ['"General Sans"', 'ui-sans-serif', 'system-ui'],
        heading: ['"General Sans"', 'ui-sans-serif', 'system-ui'],
        ui: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },

      /* -------------------------
         LAYOUT
      ------------------------- */
      maxWidth: {
        app: '1200px',
        content: '1100px',
      },

      letterSpacing: {
        tightest: '-0.02em',
        widePlus: '0.08em',
      },

      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at 50% 0%, rgba(255,141,58,0.08), transparent 60%)',

        'navy-depth':
          'linear-gradient(180deg, #070d18 0%, #0b1220 100%)',
      },
    },
  },

  plugins: [],
};
