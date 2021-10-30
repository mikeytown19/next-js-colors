import React from 'react';
import {
  gray,
  grayDark,
  mauve,
  mauveDark,
  slate,
  slateDark,
  sage,
  sageDark,
  olive,
  oliveDark,
  sand,
  sandDark,
  tomato,
  tomatoDark,
  red,
  redDark,
  crimson,
  crimsonDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  indigo,
  indigoDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
  teal,
  tealDark,
  green,
  greenDark,
  grass,
  grassDark,
  brown,
  brownDark,
  orange,
  orangeDark,
  sky,
  skyDark,
  mint,
  mintDark,
  lime,
  limeDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
  gold,
  goldDark,
  bronze,
  bronzeDark,
  whiteA,
  whiteADark,
  blackA,
  blackADark,
} from '@radix-ui/colors';
import { Text } from '../../Text';
import { Box } from '../../Box';
import { GridColors } from './GridColors';

export const Colors = ({ addToJson }) => (
  < >
    <GridColors addToJson={addToJson} name="gray" color={gray} darkColor={grayDark} />
    <GridColors addToJson={addToJson} name="mauve" color={mauve} darkColor={mauveDark} />
    <GridColors addToJson={addToJson} name="slate" color={slate} darkColor={slateDark} />
    <GridColors addToJson={addToJson} name="sage" color={sage} darkColor={sageDark} />
    <GridColors addToJson={addToJson} name="olive" color={olive} darkColor={oliveDark} />
    <GridColors addToJson={addToJson} name="sand" color={sand} darkColor={sandDark} />
    <GridColors addToJson={addToJson} name="tomato" color={tomato} darkColor={tomatoDark} />
    <GridColors addToJson={addToJson} name="red" color={red} darkColor={redDark} />
    <GridColors addToJson={addToJson} name="crimson" color={crimson} darkColor={crimsonDark} />
    <GridColors addToJson={addToJson} name="pink" color={pink} darkColor={pinkDark} />
    <GridColors addToJson={addToJson} name="plum" color={plum} darkColor={plumDark} />
    <GridColors addToJson={addToJson} name="purple" color={purple} darkColor={purpleDark} />
    <GridColors addToJson={addToJson} name="violet" color={violet} darkColor={violetDark} />
    <GridColors addToJson={addToJson} name="indigo" color={indigo} darkColor={indigoDark} />
    <GridColors addToJson={addToJson} name="blue" color={blue} darkColor={blueDark} />
    <GridColors addToJson={addToJson} name="cyan" color={cyan} darkColor={cyanDark} />
    <GridColors addToJson={addToJson} name="teal" color={teal} darkColor={tealDark} />
    <GridColors addToJson={addToJson} name="green" color={green} darkColor={greenDark} />
    <GridColors addToJson={addToJson} name="grass" color={grass} darkColor={grassDark} />
    <GridColors addToJson={addToJson} name="brown" color={brown} darkColor={brownDark} />
    <GridColors addToJson={addToJson} name="orange" color={orange} darkColor={orangeDark} />
    <GridColors addToJson={addToJson} name="sky" color={sky} darkColor={skyDark} />
    <GridColors addToJson={addToJson} name="mint" color={mint} darkColor={mintDark} />
    <GridColors addToJson={addToJson} name="lime" color={lime} darkColor={limeDark} />
    <GridColors addToJson={addToJson} name="yellow" color={yellow} darkColor={yellowDark} />
    <GridColors addToJson={addToJson} name="amber" color={amber} darkColor={amberDark} />
    <GridColors addToJson={addToJson} name="gold" color={gold} darkColor={goldDark} />
    <GridColors addToJson={addToJson} name="bronze" color={bronze} darkColor={bronzeDark} />
    <GridColors addToJson={addToJson} name="whiteA" color={whiteA} darkColor={whiteADark} />
    <GridColors addToJson={addToJson} name="blackA" color={blackA} darkColor={blackADark} />
  </>);
