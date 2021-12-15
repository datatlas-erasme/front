import { ThemeProvider } from 'styled-components';
import './styles/themes';
import { theme } from './styles/index';
import instanceConf from './static/instanceConf.json';
import Map from './components/Map';

console.log(instanceConf);

export default function Front() {
  return (
    <ThemeProvider theme={theme}>
        <Map />
    </ThemeProvider>
  );
}
