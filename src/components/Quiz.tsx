import * as React from "react";
import { observer, inject } from "mobx-react";
import { Flag } from "./ui/Flag";
import { Container } from "./ui/Container";
import { AnswerStatus, Spacer } from "./ui/AnswerStatus";
import { Heading } from "./ui/Heading";
import { FlagQuizStore } from "../store/FlagQuizStore";
import { ICountry } from "../data/countries";
import { Button } from "./ui/atoms/Button";

interface IQuizProps {
  selected?: ICountry;
  answerQuiz?: (answer: ICountry) => void;
  options?: ICountry[];
  answer?: ICountry;
  fromTo?: string;
  path?: string;
}

@inject((allStores: { flagQuizStore: FlagQuizStore }) => ({
  selected: allStores.flagQuizStore.quiz.selected,
  answerQuiz: allStores.flagQuizStore.quiz.answerQuiz,
  options: allStores.flagQuizStore.quiz.options,
  answer: allStores.flagQuizStore.quiz.answer
}))
@observer
export class Quiz extends React.Component<IQuizProps> {
  public onClick(option) {
    if (this.props.selected) {
      return; // option already selected - prevent duplicate clicks
    }
    this.props.answerQuiz(option);
  }

  public renderOptions(type) {
    return this.props.options.map(option => (
      <Button key={option.iso3} onClick={() => this.onClick(option)}>
        <Spacer />
        {type === "flag" && (
          <div>
            <Flag flag={option.flag} />
          </div>
        )}
        {type === "country" && option.name}
        {type === "capital" && option.capital}
        <AnswerStatus {...this.props} option={option} />
      </Button>
    ));
  }

  public render() {
    const { answer, fromTo = "flag-country" } = this.props;
    const [from, to] = fromTo.split("-");

    if (!answer) {
      return <div />;
    }

    return (
      <div>
        {from === "flag" && (
          <Container>
            <Flag flag={answer.flag} large />
          </Container>
        )}
        {from === "country" && <Heading>{answer.name}</Heading>}
        {from === "capital" && <Heading>{answer.capital}</Heading>}
        <div style={{ maxWidth: "100%", width: "35em", margin: "0 auto" }}>
          {this.renderOptions(to)}
        </div>
      </div>
    );
  }
}
