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
    border: 'none',
    _dark: {
      background: 'brand.darkGreenSecondary',
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
      background: 'brand.darkGreenSecondary',
      _focus: {
        background: 'brand.darkGreenSecondary',
      },
      _hover: {
        background: 'brand.darkGray',
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
