import React from 'react';
import { Text } from '../../Text';
import { Button } from '../../Button';
import { styled, createTheme } from '../../../theme/stitches.config';
import { ThemeColors } from '../Colors/ThemeColors';
import { Space } from '../Space';

export const View = ({
  jsonObject, colors,
}) => {
  const customTheme = createTheme('custom-theme', {
    ...jsonObject,
  });

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

  const Main = styled('main');

  return (
    <Main className={customTheme} css={{ flex: '1' }}>

      <Section
        css={{
          bg: `$${colors.container_bg}1`,
          mt: '$8',
        }}

      >
        <Container>
          <Text
            size="sm"
            css={{
              mb: '$8',
              color: `$${colors.tertiary}10`,
            }}
          >A headline for the ages.
          </Text>
          <Text css={{ mb: '$8', color: `$${colors.text}12` }} as="h1">There is no strife, no prejudice, no national conflict in outer space as yet.</Text>
          <Box>
            <Button
              css={{
                p: jsonObject.space[5],
                bg: `$${colors.primary}9`,
                '&:hover': {
                  bg: `$${colors.primary}10`,
                },
              }}
              mr="5"
            > Primary Button
            </Button>
            <Button
              css={{
                p: jsonObject.space[5],
                bg: `$${colors.secondary}9`,
                '&:hover': {
                  bg: `$${colors.secondary}10`,
                },
              }}
            > Secondary
            </Button>
          </Box>
        </Container>
      </Section>

      <ThemeColors color={jsonObject.colors} />
      <Space />
    </Main>

  );
};
