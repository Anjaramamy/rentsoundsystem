/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (dark mode first)
        "background": "#131313",
        "surface": "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1b",
        "surface-container": "#1f1f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "surface-variant": "#353535",
        "surface-tint": "#FC036D",

        // Primary (Vivid Pink - signature RentSoundSystem)
        "primary": "#FC036D",
        "on-primary": "#ffffff",
        "primary-container": "#ff4d80",
        "on-primary-container": "#5a0022",
        "primary-fixed": "#ffd9de",
        "primary-fixed-dim": "#FC036D",
        "on-primary-fixed": "#3f0016",
        "on-primary-fixed-variant": "#90003b",
        "inverse-primary": "#bc004f",

        // Secondary
        "secondary": "#c6c6c7",
        "on-secondary": "#2f3131",
        "secondary-container": "#454747",
        "on-secondary-container": "#b4b5b5",
        "secondary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#c6c6c7",
        "on-secondary-fixed": "#1a1c1c",
        "on-secondary-fixed-variant": "#454747",

        // Tertiary
        "tertiary": "#c8c6c5",
        "on-tertiary": "#313030",
        "tertiary-container": "#929090",
        "on-tertiary-container": "#2a2a2a",
        "tertiary-fixed": "#e5e2e1",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed": "#1c1b1b",
        "on-tertiary-fixed-variant": "#474746",

        // Text & outlines
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#a8a8a8",
        "on-background": "#e2e2e2",
        "inverse-surface": "#e2e2e2",
        "inverse-on-surface": "#303030",
        "outline": "#ac878d",
        "outline-variant": "#5d3f44",

        // Error / states
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        // Success (pour indicateurs "Disponible")
        "success": "#4ade80",
        "on-success": "#052e10"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope", "system-ui", "sans-serif"],
        "display": ["Manrope", "system-ui", "sans-serif"],
        "body": ["Inter", "system-ui", "sans-serif"],
        "label": ["Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(252, 3, 109, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(252, 3, 109, 0.6)" }
        }
      },
      animation: {
        "glow-pulse": "glow-pulse 2s infinite"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
