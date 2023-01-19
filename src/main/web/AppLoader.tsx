import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";

import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

function AppLoader(): JSX.Element {
  const [mode, setMode] = useState("development");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8AE9C1",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {mode == "production" ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : (
        <HashRouter>
          <App />
        </HashRouter>
      )}
    </ThemeProvider>
  );
}

export default AppLoader;
