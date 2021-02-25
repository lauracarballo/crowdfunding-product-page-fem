import { linearGradient } from "polished";
import { primaryFont } from "./typography";

export const defaultTheme = {
  backgroundDarkGradient: linearGradient({
    colorStops: [`#000 10%`, `#fff`],
    toDirection: "to bottom",
    fallback: "#FFF",
  }),
  primaryFont: primaryFont,
};
