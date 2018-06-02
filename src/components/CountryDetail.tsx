import * as React from "react";
import { observer, inject } from "mobx-react";
import { Flag } from "./ui/Flag";
import { FlagList } from "./ui/FlagList";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { SubHeading } from "./ui/SubHeading";

import { ICountry } from "../data/countries";
import { FlagQuizStore } from "../store/FlagQuizStore";

interface ICountryDetailProps {
  loadCountry?: (iso: string) => void;
  iso?: string;
  country?: ICountry;
  path?: string;
}

@inject((allStores: { flagQuizStore: FlagQuizStore }) => ({
  loadCountry: allStores.flagQuizStore.country.loadCountry,
  country: allStores.flagQuizStore.country.country
}))
@observer
export class CountryDetail extends React.Component<ICountryDetailProps> {
  public componentDidMount() {
    this.props.loadCountry(this.props.iso);
  }

  public componentDidUpdate(prevProps) {
    this.props.loadCountry(this.props.iso);
  }

  public render() {
    const country = this.props.country;
    if (!country) {
      return <div />;
    }

    return (
      <>
        <Container>
          <Flag flag={country.flag} large />
        </Container>
        <Heading>{country.name}</Heading>
        <SubHeading>{country.capital}</SubHeading>

        <FlagList countries={country.neighbours} />
      </>
    );
  }
}
