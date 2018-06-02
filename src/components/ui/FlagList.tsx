import * as React from "react";
import styled from "styled-components";
import { Link as RawLink } from "@reach/router";

import { ICountry } from "../../data/countries";
import { Flag } from "./Flag";
import { List } from "./List";

const ListItem = styled.div`
  display: flex;
`;

const Link = styled(RawLink)`
  padding: 10px;
`;

interface IFlagListProps {
  countries: ICountry[];
}

export const FlagList: React.SFC<IFlagListProps> = ({ countries = [] }) => (
  <List>
    {countries.map(country => (
      <ListItem key={country.iso}>
        <Link to={`/countries/${country.iso}`}>
          <Flag flag={country.flag} />
        </Link>
      </ListItem>
    ))}
  </List>
);
