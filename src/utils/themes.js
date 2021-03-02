import { linearGradient } from "polished";
import { primary, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryButton: `${primary[100]}`,
  secondaryButton: `${neutral[300]}`,
  primaryHoverColor: `${primary[200]}`,
  secondaryHoverColor: `${neutral[100]}`,
  primaryActiveColor: `${primary[200]}`,
  textColorOnPrimary: `#fff`,
  textColorOnSecondary: `${neutral[200]}`,
  backgroundDarkGradient: linearGradient({
    colorStops: [`#000 10%`, `#fff`],
    toDirection: "to bottom",
    fallback: "#FFF",
  }),
  primaryFont: primaryFont,
  mainFontColor: `${neutral[200]}`,
};
