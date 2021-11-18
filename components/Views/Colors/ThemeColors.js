/* eslint-disable react/jsx-indent */
import { useTheme } from 'next-themes';
import { Cross1Icon } from '@modulz/radix-icons';
import { Text } from '../../Text';
import { Box } from '../../Box';

export const ThemeColors = ({
  colorTheme, radixColors, colors, removeFromJson,
}) => {
  const { theme } = useTheme();
  const primaryColors = Object.entries(colors);

  return (
  <Box>
    <Text as="h2" css={{ mt: '$10', mb: '$6' }}>Colors</Text>
    <Box css={{
      display: 'grid', alignItems: 'center', gridTemplateColumns: 'repeat(10, 1fr)', gap: '15px',
    }}
    >

      {primaryColors && primaryColors.map((item) => item[1] && (
        <Box css={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <Text css={{ fs: '$2', mt: '$2' }}>{item[0]}</Text>
            <Box>
              <Box css={{
                width: '100%',
                backgroundColor: `$${item[1]}9`,
                padding: '$3',
                fs: '$2',
                color: '$hiContrast',
              }}
              > {item[1]}
              </Box>
            </Box>
        </Box>
      ))}
    </Box>

    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      {colorTheme.map((color) => {
        const colorValues = Object.values(radixColors).find(({ name }) => name === color)[theme];
        return (
          <Box css={{
            display: 'flex',
            flexDirection: 'column',
            mb: '$3',
          }}
          >
            <Box css={{
              paddingBottom: '$3',
              borderBottom: `solid $${color}7 2px`,
            }}
            >
              {color}
            </Box>

            <Box css={{
              display: 'grid', alignItems: 'center', gridTemplateColumns: 'repeat(13, 1fr)', gap: '5px', width: '100%', my: '$1',
            }}
            >
                { colorValues && Object.keys(colorValues).map((colorValue, index, arr) => (
                  <Box
                    css={{

                      p: '$7',
                      mx: '1px',
                      bg: `$${colorValue}`,
                      transition: 'background-color .2s',
                      '&:hover': {
                        cursor: 'pointer',
                        bg: `$${arr[index - 1]}`,
                      },
                    }}
                  />))}
                  <Box
                    css={{
                      p: '$6',
                      mx: '1px',
                      '&:hover': { cursor: 'pointer' },
                    }}
                    onClick={() => {
                      removeFromJson(colorValues, color);
                    }}
                  >
                    <Cross1Icon />
                  </Box>

            </Box>
          </Box>
        );
      })}
    </Box>
  </Box>
  );
};
