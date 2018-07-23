import * as React from "react";
import styled from "styled-components";
import { Link as RawLink } from "@reach/router";

import { IElement } from "../../data/items";
import { Element } from "./Element";
import { List } from "./List";

const ListItem = styled.div`
  display: flex;
`;

const Link = styled(RawLink)`
  padding: 10px;
`;

interface IElementListProps<T> {
  elements: T[];
}

export const ElementList: React.SFC<IElementListProps<IElement>> = ({
  elements = []
}) => (
  <List>
    {elements.map(element => (
      <ListItem key={element.symbol}>
        <Link to={`/elements/${element.symbol}`}>
          <Element element={element} />
        </Link>
      </ListItem>
    ))}
  </List>
);
