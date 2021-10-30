import { styled } from '../../theme/stitches.config';
import { fontVariants } from '../../theme/variants';

export const Text = styled('p', {
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
}, fontVariants);
