import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    width: '18px',
    height: '18px',
    boxSizing: 'border-box',
    borderRadius: '40px',
    borderWidth: '1px',
    bg: 'brand.lightGraySecondary',
    borderColor: 'brand.darkGreen',
    _hover: {
      borderColor: 'brand.darkGreen',
    },
    _checked: {
      bg: 'brand.darkGreen',
      borderColor: 'brand.darkGreen',
      color: 'white',
      _hover: {
        bg: 'brand.darkGreen',
        borderColor: 'brand.darkGreen',
      },
    },
    _disabled: {
      bg: 'brand.gray',
      borderColor: 'brand.darkGray',
      color: 'brand.darkGray',
      _hover: {
        borderColor: 'brand.darkGray',
      },
      _checked: {
        bg: 'brand.gray',
        borderColor: 'brand.darkGray',
        color: 'brand.darkGray',
      },
    },
    _dark: {
      _checked: {
        borderColor: 'brand.gray',
      },
    },
  },

  icon: {
    color: 'inherit',
    height: '8px',
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });
export default checkboxTheme;
