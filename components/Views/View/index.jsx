import React from 'react';

import { Box } from '../../Box';
import { Colors } from '../Colors';
import { Space } from '../Space';
import { FontSizes } from '../FontSizes';
import { LineHeights } from '../LineHeights';

export const View = ({ step, addToJson }) => (
  <Box css={{ py: '$8' }}>

    {step === 0
    && (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Colors addToJson={addToJson} />
    </Box>
    )
    || (step === 1
      && (
      <Box>
        <Space addToJson={addToJson} />
      </Box>
      )
    )
    || (step === 2
      && (
      <Box>
        <FontSizes addToJson={addToJson} />
      </Box>
      )
    )
    || (step === 3
      && (
      <Box>
        <LineHeights addToJson={addToJson} />
      </Box>
      )
    )}
  </Box>
);
