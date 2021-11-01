import React from 'react';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { styled, createTheme } from '../../../theme/stitches.config';
import { ThemeColors } from '../Colors/ThemeColors';
import { Space } from '../Space';

export const View = ({
  step, addToJson, jsonObject, colors,
}) => {
  const customTheme = createTheme('custom-theme', {
    ...jsonObject,
  });

  console.log(customTheme);
  const Section = styled('section', {
    padding: '$9 0',
    bg: '$loContrast',
  });

  const Container = styled('div', {
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1450px',
    padding: '$6 $10',

    '@bp1': {
      px: '$8',
      py: '$10',
    },
    '@bp2': {
      px: '$10',
      py: '$10',
    },
    '@bp3': {
      px: '$12',
      py: '$10',
    },

    variants: {
      size: {
        none: {
          maxWidth: 'none',
        },
        1: {
          maxWidth: '520px',
        },
        2: {
          maxWidth: '800px',
        },
        3: {
          maxWidth: '1200px',
        },

      },
    },
  });

  const Box = styled('div', {
    padding: '30px',
    color: '$tomato9',
  });

  return (
    <main className={customTheme}>
      <Section css={{ mt: '$8' }}>
        <Container>
          <Text size="sm" color="green">Tools for Developers & Designers</Text>
          <Text as="h1">Subscribe to be aware and almost before people knew it, we had left the ground.</Text>
          <Box>
            <Button wide css={{ bg: `$${colors.primary}9` }} mr="5"> Primary Button</Button>
            <Button wide css={{ bg: `$${colors.secondary}9` }}> Secondary</Button>
          </Box>
        </Container>
      </Section>
      <ThemeColors color={jsonObject.colors} />
      <Space />
    </main>

  );
};
