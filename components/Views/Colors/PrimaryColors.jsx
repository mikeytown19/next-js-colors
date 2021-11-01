import React from 'react';
import { PlusCircledIcon } from '@modulz/radix-icons';
import { Text } from '../../Text';
import { Box } from '../../Box';
import DropdownMenuDemo from '../../Dropdown';
// replace(/[0-9]/g, '')
export const PrimaryColors = ({
  color,
  addToJson,
  colors,
  setColors,
}) => console.log(colors) || (
  <Box>
    <Text as="h2" css={{ mt: '$10', mb: '$6' }}>Theme Colors</Text>

    <Box
      css={{
        display: 'grid',
        margin: '10px',
        alignItems: 'center',

      }}
    >

      <Box css={{

        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text>primary</Text>
        <DropdownMenuDemo
          colors={colors}
          setColors={setColors}
        />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text>secondary</Text>
        <DropdownMenuDemo />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text>tertiary</Text>
        <DropdownMenuDemo />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text>error</Text>
        <DropdownMenuDemo />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text>success</Text>
        <DropdownMenuDemo />
      </Box>

    </Box>
  </Box>
);
