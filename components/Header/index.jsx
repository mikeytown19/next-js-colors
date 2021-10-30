import React from 'react';
import { styled } from '../../theme/stitches.config';

const Wrapper = styled('nav');
const Header = () => (
  <Wrapper
    css={{
      bg: '$tomato5',
      p: '30px',
      zIndex: '$1',
    }}
  >
    Stiches Theme Creator
  </Wrapper>
);

export default Header;
