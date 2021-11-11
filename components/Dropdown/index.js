/* eslint-disable no-param-reassign */
import { radixColors } from '../../theme/variants/colors';
import ScrollArea from '../ScrollArea';
import { styled } from '../../theme/stitches.config';

import * as Styled from './Dropdown.styles';
// Your app...
const Box = styled('div', {
});

const IconButton = styled('button', {
  padding: '$2',
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
  },

});

export const DropdownMenuDemo = ({
  setColors, colors, token, addToJson,
}) => (
  <Styled.DropdownMenu>
    <Styled.DropdownMenuTrigger asChild>
      <IconButton
        css={{
          bg: `$${colors[token] ? colors[token] : 'olive'}9`,
        }}
        aria-label="Customise options"
      >
        {colors[token] ? colors[token] : 'Select Color'}
      </IconButton>
    </Styled.DropdownMenuTrigger>

    <Styled.DropdownMenuContent sideOffset={5}>
      <ScrollArea height="400px">

        <Styled.DropdownMenuRadioGroup
          value={colors[token]}
          onValueChange={(e) => {
            setColors(colors[token] = e.name);
            // addToJson(e.light, 'colors');
            addToJson({ [token]: `$${e.name}9`, ...e.light }, 'colors');
          }}
        >

          {radixColors.map((color) => (
            <Styled.DropdownMenuRadioItem
              value={color}
              css={{
                color: `$${color.name}8`,
                '&:hover': {
                  bg: `$${color.name}6`,
                },
              }}
            >
              <Styled.DropdownMenuItemIndicator>

                <Box css={{
                  borderRadius: '2em', mr: '$1', p: '$1', bg: `$${color}7`,
                }}
                />
              </Styled.DropdownMenuItemIndicator>
              {color.name}
            </Styled.DropdownMenuRadioItem>))}

        </Styled.DropdownMenuRadioGroup>
      </ScrollArea>
    </Styled.DropdownMenuContent>
  </Styled.DropdownMenu>

);

export default DropdownMenuDemo;
