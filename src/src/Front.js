import { ThemeProvider } from 'styled-components';
import './styles/themes';
import { theme } from './styles/index';
import { MapContainer } from './components';
import { PanelControl } from './components';

export default function Front() {

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
        <MapContainer />
        <PanelControl/>
    </ThemeProvider>
  );
}
