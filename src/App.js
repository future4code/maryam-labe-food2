import React from 'react';
import RouterPage from './routes/RouterPage';
import { ThemeProvider } from "@material-ui/core";
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterPage />
    </ThemeProvider>
  );
}

export default App;
