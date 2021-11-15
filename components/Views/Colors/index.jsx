import { GridColors } from './GridColors';

export const Colors = ({
  addToJson,
  radixColors,
  colorTheme,
  setColorTheme,
}) => (
  <>
    {radixColors.map((color) => (<GridColors
      addToJson={addToJson}
      color={color.light}
      darkColor={color.dark}
      name={color.name}
      colorTheme={colorTheme}
      setColorTheme={setColorTheme}
    />))}

  </>);
