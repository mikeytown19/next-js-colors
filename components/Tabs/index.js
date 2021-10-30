import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { styled } from '../../theme/stitches.config';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  bg: '$loContrast',

});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $mauve6',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',

  padding: '0 10px',
  height: 35,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  lineHeight: 1,
  color: '$mauve11',
  userSelect: 'none',

  '&:hover': { color: '$violet11', cursor: 'pointer' },
  '&[data-state="active"]': {
    color: '$violet11',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: '0 0 0 2px black' },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,

  outline: 'none',
  '&:focus': { boxShadow: '0 0 0 2px black' },
});

export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
