import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys
);

const baseStyle = defineStyle({
  thumb: {
    bg: 'white',
  },
  track: {
    bg: 'brand.gray',
    _checked: {
      bg: 'linear-gradient(180deg, #3AFFA7 0%, #55E8E2 100%);',
    },
  },
});

const switchTheme = defineMultiStyleConfig({
  baseStyle,
});
export default switchTheme;
