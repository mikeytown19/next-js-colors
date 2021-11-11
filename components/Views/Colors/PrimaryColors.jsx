import { Text } from '../../Text';
import { Box } from '../../Box';
import { DropdownMenuDemo } from '../../Dropdown';
// replace(/[0-9]/g, '')

export const PrimaryColors = ({

  addToJson,
  colors,
  setColors,
}) => (
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
        <Text css={{ fs: '$1' }}>primary</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="primary"
          colors={colors}
          setColors={setColors}
        />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>secondary</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="secondary"
          colors={colors}
          setColors={setColors}
        />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>tertiary</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="tertiary"
          colors={colors}
          setColors={setColors}
        />
      </Box>

      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>text</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="text"
          colors={colors}
          setColors={setColors}
        />
      </Box>

      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>background</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="background"
          colors={colors}
          setColors={setColors}
        />
      </Box>

      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>muted</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="muted"
          colors={colors}
          setColors={setColors}
        />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>accent</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="accent"
          colors={colors}
          setColors={setColors}
        />
      </Box>

      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>error</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="error"
          colors={colors}
          setColors={setColors}
        />
      </Box>
      <Box css={{
        display: 'flex', alignItems: 'center', mb: '$4', jc: 'space-between',
      }}
      >
        <Text css={{ fs: '$1' }}>success</Text>
        <DropdownMenuDemo
          addToJson={addToJson}
          token="success"
          colors={colors}
          setColors={setColors}
        />
      </Box>

    </Box>
  </Box>
);
