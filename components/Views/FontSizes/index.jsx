import { Text } from '../../Text';
import { Box } from '../../Box';
import { Button } from '../../Button';

export const FontSizes = ({ addToJson }) => {
  function fontSizes(num) {
    const obj = { 0: 0 };
    for (let i = 0; i <= 9; i++) {
      if (i === 0) {
        obj[i + 1] = `${Math.ceil(num)}px`;
      } else {
        num *= 1.2;
        obj[i + 1] = `${Math.ceil(num)}px`;
      }
    }

    return obj;
  }

  const data = fontSizes(12);

  return (
    <Box>
      <Text as="h1">Font Sizes</Text>
      <Button
        bg="indigo"
        as="button"
        onClick={() => {
          addToJson(data, 'fontSizes');
        }}
      >
        Add fontSizes
      </Button>
      <Box>

        {Object.values(data).map((item, index) => (
          <Box>

            <Text css={{
              fontWeight: `$${index}`,
              lineHeight: item,
              color: '$slate10',
              fontSize: item,
              marginTop: '10px',
              display: 'inline-block',
            }}
            >
              Almost before we knew it, we had left the ground. {item}
            </Text>
          </Box>
        ))}
      </Box>

    </Box>
  );
};
