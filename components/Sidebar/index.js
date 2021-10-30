import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ClipboardCopyIcon } from '@radix-ui/react-icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { styled } from '../../theme/stitches.config';

const StyledHighlighter = styled(SyntaxHighlighter, {
  backgroundColor: 'inherit !important',
});
export const Sidebar = ({ jsonObject }) => (
  <Box css={{
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    width: '300px',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderBottomWidth: '0px',
    zIndex: '$0',
    overflow: 'auto',
  }}
  >
    <Box css={{
      marginTop: '78px',
    }}
    >
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
  </Box>
);
