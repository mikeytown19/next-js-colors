import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Half2Icon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Header from '../components/Header';
import { Text } from '../components/Text';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { View } from '../components/Views/View';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  const [step, setStep] = useState(0);
  const { theme, setTheme } = useTheme();
  const [colors, updateColors] = useState({
    primary: '',
    secondary: '',
    tertiary: '',
    error: '',
    success: '',
  });

  const setColors = (newColor, property) => {
    updateColors({
      ...colors,
      [property]: newColor,
    });
  };
  const [jsonObject, setJsonObject] = useState({

    space: { },
    fontSizes: { },
    fonts: {
      body: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      0: 0,
      1: '480px',
      2: '768px',
      3: '1024px',
      4: ' 1200px',
      5: '1600px',
    },
    borderWidths: {
      0: 0,
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    borderStyles: {},
    radii: {
      0: 0,
      1: '2px',
      2: '4px',
      3: '8px',
      4: '2em',
    },
    shadows: {},
    zIndices: {
      0: 0,
      1: '1',
      2: '200',
    },
    transitions: {},
    colors: {
    },

  });

  const addToJson = (data, key) => {
    setJsonObject({
      ...jsonObject,
      [key]: {
        ...jsonObject[key],
        ...data,
      },
    });
  };

  return (
    <Box css={{ bg: '$sage3' }}>

      {/* <Header /> */}

      <Sidebar jsonObject={jsonObject} addToJson={addToJson} colors={colors} setColors={setColors} />
      <Box css={{
        margin: 'auto', p: '$9', marginLeft: '500px',
      }}
      >
        <Box css={{ display: 'flex' }}>

          <Box>
            <Box css={{
              display: 'flex',
              alignItems: 'center',
              'svg:hover': {
                cursor: 'pointer',
              },
            }}
            >
              <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />

            </Box>

            <View
              step={step}
              addToJson={addToJson}
              jsonObject={jsonObject}
              colors={colors}
            />

          </Box>
        </Box>
      </Box>

    </Box>
  );
}
