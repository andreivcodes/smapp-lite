import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    background: 'brand.lightGraySecondary',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(33, 37, 41, 0.2)',
    padding: 0,
    overflow: 'hidden',
    _dark: {
      background: 'brand.darkGreen',
    },
  },
  item: {
    padding: '10px 16px',
    background: 'brand.lightGraySecondary',
    _focus: {
      background: 'brand.gray',
    },
    _hover: {
      background: 'brand.gray',
    },
    _dark: {
      background: 'brand.darkGreen',
      _focus: {
        background: 'brand.darkGreenSecondary',
      },
      _hover: {
        background: 'brand.darkGreenSecondary',
      },
    },
  },
  divider: {
    mx: '20px',
    borderColor: 'brand.darkGreen',
    _dark: {
      borderColor: 'brand.lightGraySecondary',
    },
  },
});

const menuTheme = defineMultiStyleConfig({ baseStyle });

export default menuTheme;
