import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  xs: defineStyle({
    h: '24px',
    fontSize: '14px',
    px: '8px',
  }),
  sm: defineStyle({
    h: '32px',
    fontSize: '14px',
    px: '12px',
  }),
  md: defineStyle({
    h: '40px',
    fontSize: '18px',
    px: '16px',
  }),
  lg: defineStyle({
    h: '54px',
    fontSize: '20px',
    px: '24px',
  }),
};

const baseStyle = defineStyle({
  fontFamily: 'Univers55',
  fontWeight: '400',
  borderRadius: 'full',
  transition: 'all 0.2s',
});

const primary = defineStyle({
  ...baseStyle,
  bgGradient: 'linear(87.93deg, #3AFFA7 2.84%, #55E8E2 97.16%)',
  color: 'brand.darkGreen',
  border: '1.2px solid transparent',
  _disabled: {
    border: '1.2px solid transparent',
    color: 'brand.gray',
    bg: 'brand.darkGray',
    opacity: 1,
  },
  _hover: {
    bg: 'brand.darkGreen',
    color: 'brand.green',
    borderWidth: '1.2px',
    borderColor: 'brand.green',
    _disabled: {
      border: '1.2px solid transparent',
      color: 'brand.gray',
      bg: 'brand.darkGray',
    },
  },
});

const secondary = defineStyle({
  ...baseStyle,
  bg: 'brand.darkGreen',
  color: 'brand.lightGraySecondary',
  border: '1.2px solid transparent',
  _disabled: {
    border: '1.2px solid transparent',
    color: 'brand.gray',
    bg: 'brand.darkGray',
    opacity: 1,
  },
  _hover: {
    bg: 'brand.lightGraySecondary',
    color: 'brand.darkGreen',
    borderWidth: '1.2px',
    borderColor: 'brand.darkGreen',
    _disabled: {
      bg: 'brand.darkGray',
      color: 'brand.gray',
      border: '1.2px solid transparent',
    },
  },
  _dark: {
    bg: 'brand.lightGraySecondary',
    color: 'brand.darkGreen',
    border: '1.2px solid transparent',
    _disabled: {
      border: '1.2px solid transparent',
      color: 'brand.gray',
      bg: 'brand.darkGray',
    },
    _hover: {
      bg: 'brand.darkGreen',
      color: 'brand.lightGraySecondary',
      borderWidth: '1.2px',
      borderColor: 'brand.lightGraySecondary',
      _disabled: {
        bg: 'brand.darkGray',
        color: 'brand.gray',
        border: '1.2px solid transparent',
      },
    },
  },
});

const ghost = defineStyle({
  ...baseStyle,
  color: 'brand.darkGreen',
  _disabled: {
    color: 'brand.darkGreen',
  },
  _hover: {
    bg: 'brand.gray',
    _disabled: {
      bg: 'transparent',
    },
  },
  _dark: {
    _disabled: {
      color: 'brand.lightGraySecondary',
    },
    color: 'brand.lightGraySecondary',
    _hover: {
      bg: 'brand.darkGreenSecondary',
      color: 'brand.lightGraySecondary',
      _disabled: {
        bg: 'transparent',
      },
    },
  },
});

const destructive = defineStyle({
  ...baseStyle,
  bg: 'brand.red',
  color: 'brand.lightGraySecondary',
  border: '1.2px solid transparent',
  _hover: {
    bg: 'brand.lightGraySecondary',
    color: 'brand.red',
    borderWidth: '1.2px',
    borderColor: 'brand.red',
    _disabled: {
      bg: 'brand.red',
      color: 'brand.lightGraySecondary',
    },
  },
});

const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    primary,
    secondary,
    ghost,
    destructive,
  },
  defaultProps: {
    size: 'md',
    variant: 'secondary',
  },
});

export default buttonTheme;
