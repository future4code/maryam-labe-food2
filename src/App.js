import React from "react";
import RouterPage from "./routes/RouterPage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import GlobalState from "./GlobalState/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <RouterPage />
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
