import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  sm: defineStyle({
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: 'Univers55',
    fontWeight: '400',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
  md: defineStyle({
    fontSize: '16px',
    lineHeight: '22px',
    fontFamily: 'Univers55',
    fontWeight: '400',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
  lg: defineStyle({
    fontSize: '24px',
    lineHeight: '32px',
    fontFamily: 'Univers55',
    fontWeight: '400',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
};

export const textTheme = defineStyleConfig({
  sizes,
  defaultProps: {
    size: 'md',
  },
});

export default textTheme;
