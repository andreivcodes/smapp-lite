import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tablist: {
    color: 'brand.darkGray',
    _selected: {
      color: 'brand.darkGreen',
    },
    _dark: {
      color: 'brand.lightGraySecondary',
      _selected: {
        color: 'brand.green',
      },
    },
  },
  tab: {
    fontFamily: 'Univers65',

    fontSize: '18px',
    borderBottom: '2px solid',

    color: 'brand.darkGray',
    borderColor: 'brand.darkGray',
    _selected: {
      color: 'brand.darkGreen',
      borderColor: 'brand.darkGreen',
    },

    _dark: {
      color: 'brand.lightGraySecondary',
      borderColor: 'brand.lightGraySecondary',
      _selected: {
        color: 'brand.green',
        borderColor: 'brand.green',
      },
    },
  },
});

const tabsTheme = defineMultiStyleConfig({ baseStyle });
export default tabsTheme;
