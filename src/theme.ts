export interface ThemeFields {
  [index: string]: string;
}

interface Theme {
  colors: ThemeFields;
  breakpoints: ThemeFields;
}

export const theme: Theme = {
  colors: {
    white: "#ffffff",
    gray: "#808080",
    green: "#0d750d",
    lighterGreen: "#009900",
    lightestGreen: "#00b300",
    red: "#ff0000",
    lighterRed: "#ff4242",
    lightestRed: "#ff6666",
    errorRed: "#f10707",
  },
  breakpoints: {
    small: "480px",
    medium: "776px",
  },
};
