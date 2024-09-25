import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.600',
  },
  dialogContainer: {
    overflow: 'auto',
    pt: 16,
    pb: [6, 16],
  },
  closeButton: {
    borderRadius: 'full',
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
});

const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

export default modalTheme;
