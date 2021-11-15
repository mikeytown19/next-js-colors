/* eslint-disable react/jsx-indent */
import { useTheme } from 'next-themes';
import { Text } from '../../Text';
import { Box } from '../../Box';

export const ThemeColors = ({
  colorTheme, radixColors, colors,
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
                padding: '$space$5',
              }}
              />
            </Box>
        </Box>
      ))}
    </Box>

    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      {colorTheme.map((color) => {
        const colorValues = Object.values(radixColors).find(({ name }) => name === color)[theme];
        return (
          <Box css={{
            display: 'grid', alignItems: 'center', gridTemplateColumns: 'repeat(13, 1fr)', gap: '5px', width: '100%', my: '$1',
          }}
          >
          <Box>
            {color}
          </Box>
              { colorValues && Object.keys(colorValues).map((colorValue) => (
                <Box
                  css={{
                    p: '$6',
                    mx: '1px',
                    border: `solid 1px $${colorValue}5`,
                    bg: `$${colorValue}`,
                    transition: 'background-color .2s',
                    '&:hover': {
                      cursor: 'pointer',
                      bg: '$slate1',
                    },
                  }}
                />))}

          </Box>
        );
      })}
    </Box>
  </Box>
  );
};
