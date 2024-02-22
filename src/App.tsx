import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";
import { AppRoutes } from "./routes";
import "./App.css";
export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
