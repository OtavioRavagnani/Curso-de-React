import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { DarkTheme, LitghtTheme } from "../themes";

import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";

interface IThemeContextData {
  themeName: "light" | "dark" | "contrast";
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}: IAppThemeProviderProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark" | any>(
    localStorage.getItem("appTheme"),
  );

  const toggleTheme = useCallback(() => {
    if (themeName == "light") {
      localStorage.setItem("appTheme", "dark");
      setThemeName("dark");
    } else {
      localStorage.setItem("appTheme", "light");
      setThemeName("light");
    }
  }, []);

  const theme = useMemo(() => {
    if (themeName == "light") return LitghtTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vw"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
