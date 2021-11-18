import { styled } from '../../theme/stitches.config';
import {
  fontVariants, widthVariants, marginVariants, paddingVariants,
} from '../../theme/variants';

export const Text = styled('p', {
  pb: '$5',
  color: '$hiContrast',
  variants: {
    size: {
      sm: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      md: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      lg: {
        fontSize: '$6',
        lineHeight: '$6',
      },
    },
  },

}, fontVariants, widthVariants, marginVariants, paddingVariants);
