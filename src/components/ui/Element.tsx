import * as React from "react";
import styled from "styled-components";
import { IElement } from "../../data/items";

const Box = styled.div`
  color: #444;
  box-sizing: border-box;
  max-width: 240px;
  max-height: 240px;
  width: 6em;
  height: 6em;
  min-width: 120px;
  min-height: 120px;
  display: block;
  margin: auto;
  font-size: calc(10px + 1.5vmin);

  & text:first-of-type {
    font-weight: 300;
  }
`;

interface IElementProps {
  element: IElement;
}

export const Element: React.SFC<IElementProps> = ({ element }) => (
  <Box>
    <svg viewBox="0 0 120 120">
      <rect
        x="1"
        y="1"
        rx="1"
        ry="1"
        width="118"
        height="118"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="2"
      />
      <text
        fontSize="60"
        textAnchor="middle"
        dominantBaseline="middle"
        x="60"
        y="60"
        fill="currentColor"
      >
        {element.symbol}
      </text>
      <text
        fontSize="14"
        textAnchor="middle"
        dominantBaseline="middle"
        x="60"
        y="105"
        fill="currentColor"
      >
        {element.name}
      </text>
      <text
        fontSize="12"
        textAnchor="start"
        dominantBaseline="hanging"
        x="5"
        y="5"
        fill="currentColor"
      >
        {element.number}
      </text>
      <text
        fontSize="10"
        textAnchor="end"
        dominantBaseline="hanging"
        x="115"
        y="5"
        fill="currentColor"
      >
        {element.atomic_mass}
      </text>
    </svg>
  </Box>
);

export const SimpleElement: React.SFC<IElementProps> = ({ element }) => (
  <Box>
    <svg viewBox="0 0 120 120">
      <rect
        x="1"
        y="1"
        width="118"
        height="118"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="2"
      />
      <text
        fontSize="60"
        textAnchor="middle"
        dominantBaseline="middle"
        x="60"
        y="60"
        fill="currentColor"
      >
        {element.symbol}
      </text>
    </svg>
  </Box>
);
