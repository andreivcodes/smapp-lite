import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import buttonTheme from './theme/button';
import cardTheme from './theme/card';
import checkboxTheme from './theme/checkbox';
import drawerTheme from './theme/drawer';
import inputTheme from './theme/input';
import menuTheme from './theme/menu';
import modalTheme from './theme/modal';
import radioTheme from './theme/radio';
import selectTheme from './theme/select';
import tabsTheme from './theme/tabs';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};
const colors = {
  brand: {
    darkGreen: '#061A14',
    darkGreenSecondary: '#25322F',
    green: '#3AFFA7',
    greenGradient: 'linear-gradient(77.53deg, #3AFFA7 2.73%, #55E8E2 98.19%)',
    lightGray: '#FDFDFD',
    lightGraySecondary: '#F5F5F5',
    gray: '#E0E2E1',
    darkGray: '#7D7B7B',
    red: '#F54E4E',
    turquoise: '#55E8E2',
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#FFFFFF', 'brand.darkGreen')(props),
    },
  }),
};

const components = {
  Menu: menuTheme,
  Button: buttonTheme,
  Card: cardTheme,
  Tabs: tabsTheme,
  Modal: modalTheme,
  Drawer: drawerTheme,
  Checkbox: checkboxTheme,
  Radio: radioTheme,
  Input: inputTheme,
  Select: selectTheme,
};
const theme = extendTheme({ config, colors, components, styles });

export default theme;
