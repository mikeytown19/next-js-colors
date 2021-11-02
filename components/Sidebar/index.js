import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ClipboardCopyIcon } from '@radix-ui/react-icons';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { Colors } from '../Views/Colors';
import { PrimaryColors } from '../Views/Colors/PrimaryColors';
import { Space } from '../Views/Space';
import { styled } from '../../theme/stitches.config';
import ScrollArea from '../ScrollArea';
import {
  Tabs, TabsList, TabsTrigger, TabsContent,
} from '../Tabs';

// Your app...

const StyledHighlighter = styled(SyntaxHighlighter, {
  backgroundColor: 'inherit !important',
});

export const Sidebar = ({
  jsonObject,
  addToJson,
  colors,
  setColors,
  radixColors,
}) => (
  <Box css={{
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderBottomWidth: '0px',
    zIndex: '$0',
    flex: 1,
    maxWidth: '500px',
    overflow: 'auto',
    '.hljs-attr': {
      color: '$hiContrast',
    },
  }}
  >
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="tab1">Colors</TabsTrigger>
        <TabsTrigger value="tab2">Space</TabsTrigger>
        <TabsTrigger value="tab3">Fonts</TabsTrigger>
        <TabsTrigger value="tab4">Sizes</TabsTrigger>
        <TabsTrigger value="tab5">Export</TabsTrigger>

      </TabsList>
      <TabsContent value="tab1">
        <Text css={{ paddingBottom: '$4', fontWeight: '$1' }}>Colors</Text>
        <Tabs defaultValue="sub_tab1">
          <TabsList aria-label="Manage your account">
            <TabsTrigger value="sub_tab1">Main Pallet</TabsTrigger>
            <TabsTrigger value="sub_tab2">Primary Colors</TabsTrigger>
          </TabsList>

          <TabsContent value="sub_tab1">

            <Colors
              addToJson={addToJson}
              colors={colors}
              setColors={setColors}
              radixColors={radixColors}
            />

          </TabsContent>
          <TabsContent value="sub_tab2">
            <PrimaryColors
              addToJson={addToJson}
              colors={colors}
              setColors={setColors}
              radixColors={radixColors}
            />
          </TabsContent>
        </Tabs>

      </TabsContent>
      <TabsContent value="tab2">
        <Text css={{ paddingBottom: '$4', fontWeight: '$1' }}>Space</Text>
        <Space addToJson={addToJson} />

      </TabsContent>

      <TabsContent value="tab3">
        <Text>Make changes to your account here. Click save when you're done.</Text>

      </TabsContent>
      <TabsContent value="tab4">
        <Text>Change your password here. After saving, you'll be logged out.</Text>

      </TabsContent>

      <TabsContent value="tab5">
        <Box>
          <Button
            css={{ marginLeft: '$3' }}
            onClick={() => navigator.clipboard.writeText(JSON.stringify(jsonObject))}
            bg="slate"
            size="small"
            icon={<ClipboardCopyIcon />}
          >Copy to Clipboard
          </Button>

          <StyledHighlighter language="json">
            {JSON.stringify(jsonObject, null, 2)}
          </StyledHighlighter>
        </Box>

      </TabsContent>
    </Tabs>
  </Box>
);
