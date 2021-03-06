import { styled } from '../../theme/stitches.config';
import {
  flexVariants, paddingVariants, marginVariants,
} from '../../theme/variants';

export const Flex = styled('div', {
  // flexWrap: 'wrap',

  display: 'flex',
  flexWrap: 'wrap',
  '>div': {
    pt: '$8',
  },

  '@bp2': {
    display: 'flex',
    flexWrap: 'nowrap',
    '>div': {
      pt: '0',
      minWidth: '400px',
    },
  },

},
flexVariants,
paddingVariants,
marginVariants);
