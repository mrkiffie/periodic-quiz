import * as React from "react";
import { SubHeading } from "./ui/SubHeading";
import { A } from "./ui/atoms/A";
import { Typography } from "./ui/atoms/Typography";

export const About: React.SFC<{ path?: string }> = () => {
  return (
    <Typography>
      <SubHeading>About</SubHeading>
      <p>a simple periodic elements quiz</p>
      <p>
        created by <A href="https://mrkiffie.com">mrkiffie</A>
      </p>
      <p>
        source code is on{" "}
        <A href="https://github.com/mrkiffie/periodic-quiz">github</A>
      </p>
      <p>
        please report any{" "}
        <A href="https://github.com/mrkiffie/periodic-quiz/issues">issues</A>
      </p>
      <p>
        uses <A href="https://facebook.github.io/react/">react</A>,{" "}
        <A href="https://mobx.js.org/">mobx</A>,{" "}
        <A href="https://reach.tech/router">@reach/router</A>
        <br />
        and <A href="https://www.styled-components.com/">styled-components</A>
      </p>
      <p>
        hosted on <A href="https://surge.sh">surge</A>
      </p>
    </Typography>
  );
};
