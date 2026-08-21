import type { Config } from "tailwindcss";

/**
 * Paleta — Portafolio Jaime Andrés Castaño.
 * Tema claro. Naranja y azul/aqua heredados del sistema NOKTA como acentos,
 * aplicados aquí sobre fondos claros en vez de oscuros.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondos claros
        paper: "#F7F5F1", // fondo principal, off-white cálido
        card: "#FFFFFF", // superficie de tarjetas/paneles
        cream: "#EFEBE2", // superficie secundaria (hairlines, bloques alternos)

        // Texto
        ink: "#15181C", // texto principal, casi negro
        graphite: "#4B505A", // texto secundario
        slate: "#7A7F87", // texto terciario / labels

        // Bordes
        hairline: "#E4E0D6",

        // Acento aqua/azul (heredado de NOKTA)
        petrol: {
          DEFAULT: "#0E6B76",
          deep: "#0A4C54",
          glow: "#1EB3C3",
        },

        // Acento naranja (heredado de NOKTA)
        amber: {
          DEFAULT: "#FF4D2D",
          deep: "#CC3A1F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
