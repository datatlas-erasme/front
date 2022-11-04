import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import useInstanceConfiguration from '../hooks/useInstanceConfiguration';
import { datalimentaire, industries } from './themes';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProviderDisplay: React.FC<ThemeProviderProps> = ({ children }) => {
  const instanceConfiguration = useInstanceConfiguration();
  const theme = instanceConfiguration?.theme?.name === 'industries' ? industries : datalimentaire;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderDisplay;
