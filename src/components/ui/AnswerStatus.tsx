import * as React from "react";
import styled from "styled-components";
import CorrectIcon from "../icon/Check";
import WrongIcon from "../icon/Close";

export const Spacer = styled.span`
  height: 24px;
  width: 24px;
`;

import { ICountry } from "../../data/countries";
interface IAnswerStatus {
  answer?: ICountry;
  selected?: ICountry;
  option?: ICountry;
}

export const AnswerStatus: React.SFC<IAnswerStatus> = ({
  answer,
  selected,
  option
}) => {
  // always show the correct answer
  if (selected && option.iso === answer.iso) {
    return (
      <Spacer style={{ color: "#4CAF50" }}>
        <CorrectIcon />
      </Spacer>
    );
  }

  // show if the selected answer was wrong
  if (selected && selected.iso === option.iso && selected.iso !== answer.iso) {
    return (
      <Spacer style={{ color: "#f44336" }}>
        <WrongIcon />
      </Spacer>
    );
  }

  return <Spacer />;
};
