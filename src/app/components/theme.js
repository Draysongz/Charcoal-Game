"use client"

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "380px",
    md: "475px",
    lg: "1024px",
    xl: "1440px",
  },
});

export default theme;
