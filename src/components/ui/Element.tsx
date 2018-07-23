import * as React from "react";
import styled from "styled-components";
import { IElement } from "../../data/items";

const AtomicSymbol = styled.h1`
  font-size: 4em;
  font-weight: 300;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ElementName = styled.h4`
  font-size: 0.6em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.25em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AtomicNumber = styled.h3`
  font-size: 0.8em;
  position: absolute;
  top: 0.25em;
  left: 0.35em;
  margin: 0;
`;
const AtomicMass = styled.h5`
  font-size: 0.5em;
  position: absolute;
  top: 0.75em;
  right: 0.5em;
  margin: 0;
`;

const Box = styled.div`
  border-radius: 3px;
  color: #444;
  position: relative;
  border: 0.15em solid currentColor;
  position: relative;
  flex-basis: 100%;
  box-sizing: border-box;
  max-width: 120px;
  height: 120px;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

interface IElementProps {
  element: IElement;
  style?: {};
}

export const Element: React.SFC<IElementProps> = ({ element, style }) => {
  return (
    <Box style={style}>
      <AtomicNumber>{element.number}</AtomicNumber>
      <AtomicSymbol>{element.symbol}</AtomicSymbol>
      <ElementName>{element.name}</ElementName>
      <AtomicMass>{element.atomic_mass}</AtomicMass>
    </Box>
  );
};

const SimpleBox = Box.extend`
  max-width: unset;
  height: unset;
`;
export const SimpleElement: React.SFC<IElementProps> = ({ element }) => {
  return (
    <SimpleBox>
      <AtomicSymbol>{element.symbol}</AtomicSymbol>
    </SimpleBox>
  );
};
