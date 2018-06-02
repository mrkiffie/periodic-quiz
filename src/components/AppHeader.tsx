import * as React from "react";
import { observer, inject } from "mobx-react";

import MenuIcon from "./icon/Menu";
import { Toolbar } from "./ui/Toolbar";
import { ToolbarHeading } from "./ui/ToolbarHeading";
import { IconButton } from "./ui/atoms/Button";

import { formatScore } from "../util/formatScore";

import { Navigation } from "./Navigation";
import { Score } from "./Score";
import { FlagQuizStore } from "../store/FlagQuizStore";

interface IAppHeaderProps extends React.Props<any> {
  count?: number;
  score?: number;
  isScoreEnabled?: boolean;
  toggleMenu?: (open?: boolean) => {};
}

export const AppHeader: React.SFC<IAppHeaderProps> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    count: allStores.flagQuizStore.quiz.count,
    score: allStores.flagQuizStore.quiz.score,
    isScoreEnabled: allStores.flagQuizStore.settings.isScoreEnabled,
    toggleMenu: allStores.flagQuizStore.menu.toggleMenu
  })
)(
  observer(props => (
    <>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={props.toggleMenu}>
          <MenuIcon />
        </IconButton>
        <ToolbarHeading>Flag Quiz</ToolbarHeading>
        {props.isScoreEnabled && (
          <Score>
            {props.score} / {props.count} -{" "}
            {formatScore(props.score, props.count)}
          </Score>
        )}
      </Toolbar>
      <Navigation />
    </>
  ))
);
