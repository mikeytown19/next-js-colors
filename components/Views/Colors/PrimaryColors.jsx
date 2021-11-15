import { Text } from '../../Text';
import { Box } from '../../Box';
import { DropdownMenuDemo } from '../../Dropdown';
// replace(/[0-9]/g, '')

export const PrimaryColors = ({

  addToJson,
  colors,
  setColors,
  radixColors,
  setColorTheme,
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
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
          setColorTheme={setColorTheme}
          addToJson={addToJson}
          token="success"
          colors={colors}
          setColors={setColors}
        />
      </Box>

    </Box>
  </Box>
);
