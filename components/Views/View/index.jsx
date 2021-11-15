import { Text } from '../../Text';
import { Button } from '../../Button';
import { styled, createTheme } from '../../../theme/stitches.config';
import { ThemeColors } from '../Colors/ThemeColors';
import { Space } from '../Space';
import { Section } from '../../Section';
import { Container } from '../../Container';

import { Box } from '../../Box';
import { Flex } from '../../Flex';

export const View = ({
  jsonObject, colors, radixColors, colorTheme,
}) => {
  const customTheme = createTheme('custom-theme', {
    ...jsonObject,
  });
  const Main = styled('main');

  return (
    <Main className={customTheme} css={{ flex: '1' }}>
      <ThemeColors radixColors={radixColors} colorTheme={colorTheme} color={jsonObject.colors} colors={colors} />

      {/* <Section css={{
        bg: `$${colors.background}1`,
        mt: '$8',
      }}
      >
        <Container flex>
          <Flex flex>
            <Box flex jc="center" ai="center" pr="5">
              <Blob fill={colors.accent} />
            </Box>
            <Box pl="5">
              <Text css={{ mb: '$8', color: `$${colors.tertiary}11` }} size="md">Tools for Developers & Designers</Text>
              <Text css={{ mb: '$8', color: `$${colors.text}12` }} as="h1">Subscribe to be aware of new releases updates & free templates!</Text>
              <Box>
                <Button
                  css={{
                    mt: '$7',
                    p: jsonObject.space[4],
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
                    mt: '$7',
                    p: jsonObject.space[4],
                    bg: `$${colors.secondary}9`,
                    '&:hover': {
                      bg: `$${colors.secondary}10`,
                    },
                  }}
                  mr="5"
                > Primary Button
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Section>

      <Section
        css={{
          bg: `$${colors.background}1`,
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
                p: jsonObject.space[4],
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
                p: jsonObject.space[4],
                bg: `$${colors.secondary}9`,
                '&:hover': {
                  bg: `$${colors.secondary}10`,
                },
              }}
            > Secondary
            </Button>
          </Box>
        </Container>
      </Section> */}

      {/* <Space /> */}
    </Main>

  );
};

const Blob = ({ fill }) => {
  const StyledStop = styled('stop');
  const StyledSVG = styled('svg', {
    maxWidth: '300px',

  });

  return (
    <StyledSVG viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <StyledStop css={{ stopColor: `var(--colors-${fill}8)` }} offset="stop2" />
        </linearGradient>
      </defs>
      <path id="blob" d="M486.5,288Q485,326,467,360.5Q449,395,420.5,420.5Q392,446,357,458.5Q322,471,286,476.5Q250,482,214.5,475.5Q179,469,145,455Q111,441,83,416.5Q55,392,40,357.5Q25,323,21.5,286.5Q18,250,24,214.5Q30,179,43,144Q56,109,86.5,88Q117,67,147,45.5Q177,24,213.5,17Q250,10,287,16.5Q324,23,359.5,36.5Q395,50,421.5,78Q448,106,463,141Q478,176,483,213Q488,250,486.5,288Z" fill="url(#gradient)" />
    </StyledSVG>
  );
};
