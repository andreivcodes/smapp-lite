import { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.400',
  },
  closeButton: {
    borderRadius: 'full',
  },
  dialog: {
    borderRadius: 'none',
    pt: 10,
    px: 4,
    bg: `brand.lightGraySecondary`,
    _dark: {
      bg: `brand.darkGreenSecondary`,
    },
  },
  body: {
    overflowY: 'auto',
  },
});

const drawerTheme = defineMultiStyleConfig({
  baseStyle,
});

export default drawerTheme;
