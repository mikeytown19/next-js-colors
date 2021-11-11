/* eslint-disable react/jsx-indent */
import { Text } from '../../Text';
import { Box } from '../../Box';
// replace(/[0-9]/g, '')
export const ThemeColors = ({
  color, name,
}) => (
  <Box>
    <Text as="h2" css={{ mt: '$10', mb: '$6' }}>Colors</Text>

    <Box
      css={{
        display: 'grid',
        margin: '10px',
        alignItems: 'center',

      }}
    >

      <Box css={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', gap: '5px' }}>
        {Object.entries(color).map((item, index) => (
          <> {index % 12 === 0
            && (<Text css={{
              fontSize: '$1',
              mx: '1px',
              p: '$3',
              fontWeight: '$6',
            }}
            >{item[0].replace(/[0-9]/g, '')}

                </Text>)}
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
                  bg: '$slate1',
                },
              }}
              // eslint-disable-next-line no-undef
              onClick={() => navigator.clipboard.writeText(item[1])}
            />
          </>
        ))}
      </Box>
    </Box>
  </Box>
);
