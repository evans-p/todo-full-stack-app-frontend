import { PropsWithChildren } from "react";
import ThemeContext from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const { theme, updateTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
