import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  shadows: {
    brand: '0 0 10px 5px rgba(138, 212, 214, 0.4)'
  },
  colors: {
    brand: {
      50: "#9adadc",
      100: "#8ad4d6",
      200: "#79ced0",
      300: "#68c8ca",
      400: "#58c2c5",
      500: "#4faeb1",
      600: "#469b9d",
      700: "#3d8789",
      800: "#347476",
      900: "#015A75",
      bg: "#015A75"
    },
    accent: {
      50: "#eff3fc",
      100: "#d7dae2",
      200: "#bfc2c9",
      300: "#a7aab0",
      400: "#8f9197",
      500: "#77797e",
      700: "#5f6164",
      800: "#47484b",
      900: "#171819",

    },

  },
})