import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  addon: {
    borderRadius: 'full',
    borderColor: 'brand.darkGreen',
    bg: 'brand.lightGraySecondary',
    _dark: {
      borderColor: 'brand.lightGraySecondary',
      color: 'brand.lightGraySecondary',
      bg: 'transparent',
    },
  },
  element: {
    pr: 4,
    w: 8,
  },
  field: {
    borderRadius: 'full',
    px: 4,
    borderColor: 'brand.darkGreen',
    color: 'brand.darkGreen',
    bg: 'brand.lightGraySecondary',
    transition: 'all 0.2s',
    _placeholder: { color: 'brand.darkGray' },
    _disabled: {
      opacity: 1,
      color: 'brand.darkGray',
      borderColor: 'brand.darkGray',
      _dark: {
        color: 'brand.darkGray',
        borderColor: 'brand.darkGray',
      },
    },
    _dark: {
      borderColor: 'brand.lightGraySecondary',
      color: 'brand.lightGraySecondary',
      bg: 'transparent',
    },
    _hover: {
      borderColor: 'brand.darkGreen',
      _disabled: {
        opacity: 1,
        color: 'brand.darkGray',
        borderColor: 'brand.darkGray',
        _dark: {
          color: 'brand.darkGray',
          borderColor: 'brand.darkGray',
        },
      },
    },
    _focusVisible: {
      borderColor: 'brand.darkGreen',
      boxShadow: 'none',
    },
    _invalid: {
      boxShadow: 'none',
      borderColor: 'brand.red',
      color: 'brand.red',
      _focusVisible: {
        borderColor: 'brand.red',
      },
      _placeholder: { color: 'brand.red', opacity: 0.5 },
      _dark: {
        borderColor: 'brand.red',
        color: 'brand.red',
      },
    },
  },
});

const inputTheme = defineMultiStyleConfig({
  variants: { outline: baseStyle },
});

export default inputTheme;
