import * as React from "react";
import { observer, inject } from "mobx-react";
import { Element } from "./ui/Element";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { SubHeading } from "./ui/SubHeading";
import { Typography } from "./ui/atoms/Typography";

import { IElement } from "../data/items";
import { MainStore } from "../store/MainStore";

interface IElementDetailProps {
  loadDetail?: (symbol: string) => void;
  symbol?: string;
  element?: IElement;
  path?: string;
}

@inject((allStores: { mainStore: MainStore }) => ({
  loadDetail: allStores.mainStore.element.loadDetail,
  element: allStores.mainStore.element.element
}))
@observer
export class ElementDetail extends React.Component<IElementDetailProps> {
  public componentDidMount() {
    this.props.loadDetail(this.props.symbol);
  }

  public componentDidUpdate() {
    this.props.loadDetail(this.props.symbol);
  }

  public render() {
    const element = this.props.element;
    if (!element) {
      console.log(element);
      return <div />;
    }

    return (
      <>
        <Container>
          <Element element={element} />
        </Container>
        <Heading>{element.symbol}</Heading>
        <SubHeading>{element.name}</SubHeading>
        <Typography>
          <p>{element.summary}</p>
        </Typography>
      </>
    );
  }
}
