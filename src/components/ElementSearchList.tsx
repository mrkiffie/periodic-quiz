import * as React from "react";
import { observer, inject } from "mobx-react";
import { Link as RawLink } from "@reach/router";
import { List, AutoSizer } from "react-virtualized";
import styled from "styled-components";

import { Element } from "./ui/Element";
import { Search } from "./ui/Search";
import { IElement } from "../data/items";
import { MainStore } from "../store/MainStore";

const Link = styled(RawLink)`
  text-decoration: none;
  color: inherit;
`;

const ScrollArea = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ElementList = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ListItem = styled.div`
  height: 120px;
  margin: 0 auto;
  width: 120px;
`;

interface IList<T> {
  term?: string;
  elements?: T[];
  setSearchTerm?: (term: string) => void;
  path?: string;
}

interface IRowRenderer {
  key: string;
  index: number;
  style: any;
}

interface IVirtulizedList {
  rowRenderer: (props: IRowRenderer) => JSX.Element;
}

@inject((allStores: { mainStore: MainStore }) => ({
  term: allStores.mainStore.search.term,
  elements: allStores.mainStore.search.items,
  setSearchTerm: allStores.mainStore.search.setSearchTerm
}))
@observer
export class ElementSearchList extends React.Component<IList<IElement>>
  implements IVirtulizedList {
  public rowRenderer = ({ key, index, style }) => {
    const { elements = [] } = this.props;
    const element = elements[index];

    if (!element) {
      return null;
    }

    return (
      <ListItem key={key} style={style}>
        <Link to={`/elements/${element.symbol}`}>
          <Element
            element={element}
            style={{
              height: 120,
              width: 120,
              margin: "30px auto"
            }}
          />
        </Link>
      </ListItem>
    );
  };

  public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setSearchTerm(event.target.value);
  };

  public render() {
    const { term, elements } = this.props;
    return (
      <ElementList>
        <Search
          value={term}
          onChange={this.onChange}
          placeholder="search by symbol or name"
        />
        <ScrollArea>
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                overscanRowCount={10}
                rowCount={elements.length}
                rowHeight={150}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </ScrollArea>
      </ElementList>
    );
  }
}
