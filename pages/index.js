/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

import { SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Box } from '../components/Box';
import { View } from '../components/Views/View';
import { Sidebar } from '../components/Sidebar';

import { radixColors } from '../theme/variants/colors';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [colorTheme, updateColorTheme] = useState([]);

  useEffect(() => {
    if (!theme || theme === 'system') {
      setTheme('dark');
    }
  }, []);

  const setColorTheme = (c) => {
    if (!colorTheme.includes(c)) {
      updateColorTheme([...colorTheme, c]);
    }
  };

  const [colors, updateColors] = useState({
    primary: '',
    secondary: '',
    tertiary: '',
    accent: '',
    muted: '',
    error: '',
    success: '',
    text: '',
    background: '',
    border: '',
  });

  const setColors = (newColor, property) => {
    updateColors({
      ...colors,
      [property]: newColor,
    });
  };

  const [jsonObject, setJsonObject] = useState({

    space: { },
    fontSizes: {
      0: 0,
      1: '12px',
      2: '15px',
      3: '18px',
      4: '21px',
      5: '25px',
      6: '30px',
      7: '36px',
      8: '43px',
      9: '52px',
      10: '62px',
    },
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
    lineHeights: {
      0: 0,
      1: '12px',
      2: '15px',
      3: '18px',
      4: '21px',
      5: '25px',
      6: '30px',
      7: '36px',
      8: '43px',
      9: '52px',
      10: '62px',
    },
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
      round: '50%',
      pill: '9999px',
    },
    shadows: {
      1: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
      2: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      3: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
      4: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
    },
    zIndices: {
      0: 0,
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    transitions: {},
    colors: {

    },

  });

  // is kich theme in local storage, override json object state
  useEffect(() => {
    if (localStorage.getItem('kickColorTheme')) {
      updateColorTheme(JSON.parse(localStorage.getItem('kickColorTheme')));
      setJsonObject(JSON.parse(localStorage.getItem('kichTheme')));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(jsonObject.colors).length && jsonObject.colors.constructor === Object) {
      localStorage.setItem('kichTheme', JSON.stringify(jsonObject));
      localStorage.setItem('kickColorTheme', JSON.stringify(colorTheme));
      setJsonObject(jsonObject);
    }
  }, [jsonObject, colorTheme]);

  const addToJson = (data, key, noMerge) => (noMerge ? setJsonObject({
    ...jsonObject,
    [key]: {
      ...data,
    },
  }) : setJsonObject({
    ...jsonObject,
    [key]: {
      ...jsonObject[key],
      ...data,
    },
  }));

  return (
    <Box css={{ bg: '$sage3', display: 'flex' }}>

      {/* <Header /> */}

      <Sidebar
        setColorTheme={setColorTheme}
        jsonObject={jsonObject}
        addToJson={addToJson}
        colors={colors}
        setColors={setColors}
        radixColors={radixColors}
      />
      <Box css={{
        p: '$9',
        flex: 2,
      }}
      >
        <Box>

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
              colorTheme={colorTheme}
              setColorTheme={setColorTheme}
              radixColors={radixColors}
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
