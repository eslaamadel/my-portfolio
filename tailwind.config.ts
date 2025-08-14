import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: {
          max: "590px",
        },
        tb: {
          min: "591px",
          max: "744px",
        },
        sdk: {
          min: "745px",
          max: "1024px",
        },
        dk: {
          min: "1025px",
          max: "1280px",
        },
        edk: {
          min: "1281px",
        },
      },
      colors: {
        "netu-500": "#B0B0B0",
        "netu-50": "#F2F2F2",
        "netu-100": "#E6E6E6",
        "netu-200": "#CCCCCC",
        "netu-300": "#B3B3B3",
        "netu-400": "#CCC9C9",
        "netu-600": "#666666",
        "netu-700": "#4D4D4D",
        "netu-800": "#333333",
        "netu-900": "#1A1A1A",
        "netu-950": "#0D0D0D",
        accent: {
          default: "#1c63ab",
          Hover: "#004C99",
        },
        "Primary-50": "#E5F2FF",
        "Primary-100": "#CCE5FF",
        "Primary-200": "#99CCFF",
        "Primary-300": "#66B2FF",
        "Primary-400": "#3399FF",
        "Primary-800": "#003366",
        "Primary-900": "#001933",
        "Primary-950": "#000D1A",
        "bg-dark-color": "#000B1A",
        "bg-white-color": "#F5F5F5",
      },
      fontSize: {
        "h-1": "61px",
        "h-2": "49px",
        "h-3": "39px",
        "h-4": "25px",
        p: "19px",
        "sm-cap": "17px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
