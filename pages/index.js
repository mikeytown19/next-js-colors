import Head from 'next/head';
import { Text } from '../components/Text';
import { Box } from '../components/Box';

const GridColors = ({ color }) => {
  color = color.toLowerCase();
  return [...Array(12).keys()].map((item, index) => (
    <Box key={index} css={{ bg: `$${color}${index}` }}></Box>
  ));
};

export default function Home() {
  return (
    <Box css={{ bg: 'lightslategray' }}>
      <Box css={{ maxWidth: '1200px', margin: 'auto' }}>
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            width: 'auto',
            justifyContent: 'center',
          }}
        >
          <GridColors color="Gray" />
          <GridColors color="Mauve" />
          <GridColors color="Slate" />
          <GridColors color="Sage" />
          <GridColors color="Olive" />
          <GridColors color="Sand" />
          <GridColors color="Tomato" />
          <GridColors color="Red" />
          <GridColors color="Crimson" />
          <GridColors color="Pink" />
          <GridColors color="Plum" />
          <GridColors color="Purple" />
          <GridColors color="Violet" />
          <GridColors color="Indigo" />
          <GridColors color="Blue" />
          <GridColors color="Cyan" />
          <GridColors color="Teal" />
          <GridColors color="Green" />
          <GridColors color="Grass" />
          <GridColors color="Brown" />
          <GridColors color="Orange" />
          <GridColors color="Sky" />
          <GridColors color="Mint" />
          <GridColors color="Lime" />
          <GridColors color="Yellow" />
          <GridColors color="Amber" />
          <GridColors color="Gold" />
          <GridColors color="Bronze" />
        </Box>
      </Box>
    </Box>
  );
}
