import { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.400',
  },
  dialog: {
    borderRadius: 'none',
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
