import { useState, useEffect, useRef } from "react";

import StringConstants from "../constants/StringConstants";

function useTheme(): ThemeType {
  const [theme, _setTheme] = useState<string>(getTheme());
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    updateDOM(theme);
  }, [theme]);

  window.localStorage.setItem(StringConstants.THEME, theme);

  updateDOM(theme);

  const updateTheme = () => {
    _setTheme(
      theme === StringConstants.DARK
        ? StringConstants.LIGHT
        : StringConstants.DARK
    );
  };

  return { theme, updateTheme };
}

function updateDOM(theme: string): void {
  if (!document.documentElement.classList.contains(theme)) {
    document.documentElement.classList.remove(
      StringConstants.LIGHT,
      StringConstants.DARK
    );
    document.documentElement.classList.add(theme);
  }
}

function getTheme(): string {
  let theme: string | null = window.localStorage.getItem(StringConstants.THEME);
  return theme === StringConstants.DARK
    ? StringConstants.DARK
    : StringConstants.LIGHT;
}

export default useTheme;
