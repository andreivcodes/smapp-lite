import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontFamily: 'Univers65',
    fontSize: '18px',
    color: 'brand.darkGray',
    borderBottomWidth: '2px',
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
  tablist: {
    color: 'brand.darkGray',
    borderColor: 'transparent',

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
});

const tabsTheme = defineMultiStyleConfig({ variants: { line: baseStyle } });
export default tabsTheme;
