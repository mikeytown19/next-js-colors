import React from 'react';
import { Text } from '../../Text';
import { Box } from '../../Box';

export const GridColors = ({ color, darkColor, addToJson }) => (
  <Box
    css={{
      display: 'flex', margin: '10px',
    }}

  >
    <Box
      onClick={() => addToJson(color, 'colors')}
      css={{
        p: '10px',
        bg: `$${Object.entries(color)[7][0]}`,
        transition: 'background-color .3s',
        '&:hover': {
          bg: `$${Object.entries(color)[8][0]}`,
          cursor: 'pointer',
        },
      }}
    >
      <Text css={{
        fontWeight: '700',
        color: `$${Object.entries(color)[11][0]}`,
      }}
      >

        {Object.entries(color)[7][0]}
      </Text>
    </Box>
    <Box css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(50px, 250px))',
    }}
    >

      {Object.entries(color).map((item) => (
        <Box key={item[1]} css={{ p: '10px', bg: `$${item[0]}`, width: '100%' }}>
          <Text
            onClick={() => navigator.clipboard.writeText(item[1])}
            css={{
              fs: '13px',
              '&:hover': {

                cursor: 'pointer',
              },
            }}
          >
            {item[0]}
          </Text>
        </Box>
      ))}
    </Box>
  </Box>
);
