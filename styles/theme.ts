import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};
const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.700', 'whiteAlpha.900')(props),
      bg: mode('gray.50', 'gray.900')(props),
      fontSize: '1.2em',
      '.deleted': {
        color: '#ff8383 !important',
        fontStyle: 'normal !important'
      },
      '.inserted': {
        color: '#b5f4a5 !important',
        fontStyle: 'normal !important'
      }
    },
    a: {
      fontWeight: '500'
    }
  })
};
const theme = extendTheme({ config, styles });
export default theme;
