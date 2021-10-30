import { useState } from 'react';
import { Text } from '../../Text';
import { Box } from '../../Box';
import { Button } from '../../Button';

export const Space = ({ addToJson }) => {
  const [sizes, setSizes] = useState({});
  const handleClick = () => {
    console.log('click');
  };

  function fontSizes(num) {
    const obj = {};
    for (let i = 0; i <= 7; i++) {
      if (i === 0) {
        obj[i] = 0;
      } else {
        num *= 2;
        obj[i] = `${num}px`;
      }
    }

    return obj;
  }

  const spacing = () => {
    const sum = {};
    for (let i = 0; i < 12; i++) {
      sum[i] = i * i;
    }
    return sum;
  };

  const data = spacing(1);
  const fucc = fontSizes(1);

  return (
    <Box>

      <Box css={{
        marginTop: '40px',
      }}
      >
        <Button bg="slate" onClick={() => addToJson(data, 'space')}>Kich Spacing</Button>
        <Box css={{
          display: 'flex',
          flexWrap: 'wrap',

        }}
        >

          {Object.values(data).map((item) => (
            <Box css={{
              bg: '$slate10',
              px: item,
              margin: '10px',
              display: 'inline-block',

            }}
            >
              {item}
            </Box>))}

        </Box>

      </Box>
      <Box css={{
        marginTop: '40px',
      }}
      >
        <Button bg="indigo" onClick={() => addToJson(fucc, 'space')}>Fibonacci Spacing</Button>

        <Box css={{
          display: 'flex',
          flexWrap: 'wrap',

        }}
        >

          {Object.values(fucc).map((item) => (
            <Box css={{
              bg: '$blue7',
              px: item,
              margin: '10px',
              display: 'inline-block',

            }}
            >
              {item}
            </Box>))}

        </Box>

      </Box>
    </Box>
  );
};
