import * as React from "react";
import { observer, inject } from "mobx-react";
import { Link as RawLink } from "@reach/router";
import { List, AutoSizer } from "react-virtualized";
import styled from "styled-components";

import { Flag } from "./ui/Flag";
import { Search } from "./ui/Search";
import { ICountry } from "../data/countries";
import { FlagQuizStore } from "../store/FlagQuizStore";

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
const FlagList = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ListItem = styled.div`
  height: 120px;
`;
const ListItemText = styled.div`
  text-align: center;
  margin-bottom: 0.5em;
`;

interface IFlagListIndex {
  term?: string;
  filteredCountries?: ICountry[];
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

@inject((allStores: { flagQuizStore: FlagQuizStore }) => ({
  term: allStores.flagQuizStore.search.term,
  filteredCountries: allStores.flagQuizStore.search.filteredCountries,
  setSearchTerm: allStores.flagQuizStore.search.setSearchTerm
}))
@observer
export class FlagListIndex extends React.Component<IFlagListIndex>
  implements IVirtulizedList {
  public rowRenderer = ({ key, index, style }) => {
    const { filteredCountries = [] } = this.props;
    const country = filteredCountries[index];

    if (!country) {
      return null;
    }

    return (
      <ListItem key={key} style={style}>
        <Link to={`/countries/${country.iso}`}>
          <ListItemText>
            {country.name}, {country.capital}
          </ListItemText>
          <Flag flag={country.flag} />
        </Link>
      </ListItem>
    );
  };

  public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setSearchTerm(event.target.value);
  };

  public render() {
    const { term, filteredCountries } = this.props;
    return (
      <FlagList>
        <Search
          value={term}
          onChange={this.onChange}
          placeholder="search by country or capital"
        />
        <ScrollArea>
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                overscanRowCount={10}
                rowCount={filteredCountries.length}
                rowHeight={120}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </ScrollArea>
      </FlagList>
    );
  }
}
