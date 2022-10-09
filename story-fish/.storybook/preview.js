import * as NextImage from "next/image";
import { ThemeProvider } from "@emotion/react";

import { Themes } from "../styles/themes";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      loading="eager"
      decoding="async"
    />
  ),
});

const withThemeProvider = (Story, context) => {
  console.log("context.globals.background", context.globals.backgrounds);

  const background =
    context.globals.backgrounds?.value || parameters.backgrounds.defaultColor;
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#e4ebf5",
      },
      {
        name: "dark",
        value: "#5e5c64",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
