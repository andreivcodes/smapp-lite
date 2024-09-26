import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  sm: defineStyle({
    fontSize: '24px',
    lineHeight: '32px',
    fontFamily: 'Univers65',
    fontWeight: '700',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
  md: defineStyle({
    fontSize: '32px',
    lineHeight: '36px',
    fontFamily: 'Univers63',
    fontWeight: '700',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
  lg: defineStyle({
    fontSize: '48px',
    lineHeight: '56px',
    fontFamily: 'Univers93',
    fontWeight: '950',
    color: 'brand.darkGreen',
    _dark: {
      color: 'brand.lightGraySecondary',
    },
  }),
};

export const headingTheme = defineStyleConfig({
  sizes,
  defaultProps: {
    size: 'lg',
  },
});

export default headingTheme;
