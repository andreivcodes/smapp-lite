import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    width: '18px',
    height: '18px',
    borderRadius: 'full',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'brand.darkGreen',
    background: 'white',
    _disabled: {
      background: 'brand.gray',
      borderColor: 'brand.darkGray',
      _hover: {
        background: 'brand.gray',
        borderColor: 'brand.darkGray',
      },
    },
    _checked: {
      borderColor: 'brand.darkGreen',
      background: 'white',
      color: 'brand.darkGreen',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        borderColor: 'brand.darkGreen',
        background: 'white',
      },
    },
    _focus: {
      boxShadow: 'none',
    },
  },
});

const radioTheme = defineMultiStyleConfig({
  baseStyle,
});

export default radioTheme;
