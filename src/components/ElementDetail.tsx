import * as React from "react";
import { observer, inject } from "mobx-react";
import { Element } from "./ui/Element";
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
      return <div />;
    }

    return (
      <>
        <Typography>
          <Element element={element} />
          <Heading>{element.name}</Heading>
          <p>{element.summary}</p>
        </Typography>
      </>
    );
  }
}
