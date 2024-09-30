import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.600',
  },
  header: {
    paddingTop: '0px',
    paddingBottom: '8px',
    paddingRight: '0px',
    paddingLeft: '0px',
    textAlign: 'center',
  },
  footer: {
    paddingTop: '8px',
    paddingBottom: '0px',
    paddingRight: '0px',
    paddingLeft: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    WebkitPaddingStart: '0px',
    WebkitPaddingEnd: '0px',
    justifyContent: 'center',
  },
  body: {
    paddingTop: '0px',
    paddingBottom: '8px',
    paddingRight: '0px',
    paddingLeft: '0px',
    textAlign: 'center',
  },
  dialog: {
    paddingX: '30px',
    paddingTop: '50px',
    paddingBottom: '54px',
    borderRadius: '20px',
    boxShadow: '0px 4px 6px 0px #21252940',
    color: 'brand.darkGreen',
    bg: 'brand.lightGraySecondary',
    _dark: {
      boxShadow: '0px 4px 6px 0px #21252940',
      color: 'brand.lightGraySecondary',
      bg: 'brand.darkGreenSecondary',
    },
  },
  dialogContainer: {
    overflow: 'auto',
    pt: 16,
    pb: [6, 16],
  },
  closeButton: {
    borderRadius: 'full',
  },
});

const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

export default modalTheme;
