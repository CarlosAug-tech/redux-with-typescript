import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Routes from './routes';

import AppProvider from './hooks';

import { light, dark } from './assets/Themes';
import GlobalStyle from './assets/Styles/global';
import store from './store';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem('delivery-theme');

    if (themeStorage) {
      return JSON.parse(themeStorage);
    }

    return light;
  });

  useEffect(() => {
    localStorage.setItem('delivery-theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light);
  };

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Routes toggleTheme={toggleTheme} />
          </AppProvider>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
