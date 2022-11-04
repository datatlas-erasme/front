import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import useInstanceConfiguration from '../hooks/useInstanceConfiguration';
import { datalimentaire, industries, GlobalStyle } from './index';

type ThemeProviderProps = {
  children: ReactNode;
};

const Theme: React.FC<ThemeProviderProps> = ({ children }) => {
  const instanceConfiguration = useInstanceConfiguration();
  const theme = instanceConfiguration?.theme?.name === 'industries' ? industries : datalimentaire;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
