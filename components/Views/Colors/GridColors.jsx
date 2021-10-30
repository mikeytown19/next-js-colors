import React from 'react';
import { PlusCircledIcon } from '@modulz/radix-icons';
import { Text } from '../../Text';
import { Box } from '../../Box';

export const GridColors = ({
  color, name, addToJson,
}) => (
  <Box>
    <Text css={{ paddingBottom: '$3', fs: '$2', borderBottom: `solid 4px $${name}3` }}>{name}</Text>

    <Box
      css={{
        display: 'flex', margin: '10px', alignItems: 'center',
      }}
    >

      {Object.entries(color).map((item, index) => (

        <Box
          key={item[1]}
          css={{
            mx: '1px',
            p: '$3',
            border: `solid 1px $${name}5`,
            bg: `$${item[0]}`,
            transition: 'background-color .2s',
            '&:hover': {
              cursor: 'pointer',
              bg: `$${name}${index}`,
            },
          }}
          onClick={() => navigator.clipboard.writeText(item[1])}
        />

      ))}
      <Text
        css={{
          fs: '$1',
          marginLeft: '$5',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() => addToJson(color, 'colors')}
      >
        <PlusCircledIcon />

      </Text>
    </Box>
  </Box>
);
