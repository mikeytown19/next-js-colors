import { Text } from '../Text';
import { Box } from '../Box';
import { Button } from '../Button';

export const LineHeights = ({ addToJson }) => {
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
      <Text as="h1">Line Heights</Text>
      <Button
        bg="indigo"
        as="button"
        onClick={() => addToJson(data, 'lineHeights')}
      >
        Add LineHeights
      </Button>
      <Box>

        {Object.values(data).map((item, index) => (
          <Text css={{
            fontWeight: `$${index}`,
            color: '$slate10',
            fontSize: item,
            margin: '10px',
            display: 'inline-block',
          }}
          >
            {item}
          </Text>))}
      </Box>

    </Box>
  );
};
