import { createContext } from "react";
import StringConstants from "../constants/StringConstants";

const t = {
  theme: StringConstants.LIGHT,
  updateTheme: () => {},
};

const ThemeContext = createContext<ThemeType>(t);

export default ThemeContext;
