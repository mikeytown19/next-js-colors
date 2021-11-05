import { styled } from '../../theme/stitches.config';
import {
  flexVariants, paddingVariants, marginVariants,
} from '../../theme/variants';

export const Box = styled('div', {
  boxSizing: 'border-box',
  '.dummyImage': {
    width: '100%',
    maxWidth: '500px',
  },
  '@bp2': {
    '.dummyImage': {
      width: '100%',
      maxWidth: 'initial',

    },
  },
}, flexVariants,
paddingVariants,
marginVariants);
