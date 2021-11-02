import { GridColors } from './GridColors';

export const Colors = ({ addToJson, radixColors }) => (
  <>
    {radixColors.map((color) => (<GridColors
      addToJson={addToJson}
      color={color.light}
      darkColor={color.dark}
      name={color.name}
    />))}

  </>);
