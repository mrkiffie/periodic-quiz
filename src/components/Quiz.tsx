import * as React from "react";
import { observer, inject } from "mobx-react";

import { Heading } from "./ui/Heading";
import { SimpleElement } from "./ui/Element";
import { MainStore } from "../store/MainStore";
import { Button } from "./ui/atoms/Button";
import { IElement } from "../data/items";

import styled, { css } from "styled-components";

const Grid = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 20em;
`;

interface IAnswerButton {
  correct?: boolean;
  incorrect?: boolean;
}
const AnswerButton = Button.extend`
  ${Grid} & {
    width: unset;
  }
  margin: 1em;
  padding: 0;
  ${(p: IAnswerButton) =>
    p.correct &&
    css`
      background-color: #4caf50 !important;
    `} ${(p: IAnswerButton) =>
    p.incorrect &&
    css`
      background-color: #f44336 !important;
    `};
`;

interface IQuizProps<T> {
  selected?: T;
  answerQuiz?: (answer: T) => void;
  options?: T[];
  answer?: T;
  path?: string;
}

@inject((allStores: { mainStore: MainStore }) => ({
  selected: allStores.mainStore.quiz.selected,
  answerQuiz: allStores.mainStore.quiz.answerQuiz,
  options: allStores.mainStore.quiz.options,
  answer: allStores.mainStore.quiz.answer
}))
@observer
export class Quiz<T extends IElement = IElement> extends React.Component<
  IQuizProps<T>
> {
  public onClick(option) {
    if (this.props.selected) {
      return; // option already selected - prevent duplicate clicks
    }
    this.props.answerQuiz(option);
  }

  public render() {
    const { answer, selected, options } = this.props;

    if (!answer) {
      return <div />;
    }

    return (
      <div>
        <Heading>{answer.name}</Heading>
        <Grid>
          {options.map(option => (
            <AnswerButton
              key={option.symbol}
              onClick={() => this.onClick(option)}
              correct={!!(selected && option.symbol === answer.symbol)}
              incorrect={
                !!(
                  selected &&
                  selected.symbol === option.symbol &&
                  selected.symbol !== answer.symbol
                )
              }
            >
              <SimpleElement element={option} />
            </AnswerButton>
          ))}
        </Grid>
      </div>
    );
  }
}
