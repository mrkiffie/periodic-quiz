import * as React from "react";
import { observer, inject } from "mobx-react";
import { FlagQuizStore } from "../store/FlagQuizStore";
import CloseIcon from "./icon/Close";
import { Button, IconButton } from "./ui/atoms/Button";
import { Toolbar } from "./ui/Toolbar";
import { List } from "./ui/List";
import { ListItem } from "./ui/atoms/ListItem";
import { Nav } from "./ui/Nav";
import { Overlay } from "./ui/Overlay";
import { Link } from "./ui/atoms/Link";
import { Label } from "./ui/atoms/Label";
import { Switch } from "./ui/Switch";

interface INavigation {
  isMenuOpen?: boolean;
  isScoreEnabled?: boolean;
  toggleMenu?: (open: boolean) => {};
  toggleScore?: () => {};
  resetScore?: () => {};
}
@inject((allStores: { flagQuizStore: FlagQuizStore }) => ({
  isMenuOpen: allStores.flagQuizStore.menu.open,
  isScoreEnabled: allStores.flagQuizStore.settings.isScoreEnabled,
  toggleMenu: allStores.flagQuizStore.menu.toggleMenu,
  toggleScore: allStores.flagQuizStore.settings.toggleScore,
  resetScore: allStores.flagQuizStore.quiz.resetScore
}))
@observer
export class Navigation extends React.Component<INavigation> {
  private onClick = (delay = 200) => {
    setTimeout(() => {
      this.props.toggleMenu(false);
    }, delay);
  };

  private instantClick = () => this.onClick(0);

  private delayedClick = () => this.onClick(200);

  private routes = [
    { route: "/flag-country", text: "Flag Country" },
    { route: "/flag-capital", text: "Flag Capital" },
    { route: "/country-flag", text: "Country Flag" },
    { route: "/country-capital", text: "Country Capital" },
    { route: "/capital-flag", text: "Capital Flag" },
    { route: "/capital-country", text: "Capital Country" },
    { route: "/flag-list", text: "Flag List" }
  ];

  public render() {
    const { isMenuOpen } = this.props;

    const tabIndex = isMenuOpen ? 0 : -1;

    return (
      <>
        <Overlay open={isMenuOpen} />
        <Nav open={isMenuOpen}>
          <Toolbar>
            <IconButton
              onClick={this.instantClick}
              tabIndex={tabIndex}
              aria-label="Close Menu"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

          {this.routes.map(({ route, text }) => (
            <Link
              key={route}
              to={route}
              tabIndex={tabIndex}
              onClick={this.delayedClick}
            >
              {text}
            </Link>
          ))}
          <Label
            tabIndex={tabIndex}
            onClick={this.props.toggleScore}
            onKeyPress={e => e.key === "Enter" && this.props.toggleScore()}
          >
            Toggle Score
            <Switch
              tabIndex={-1}
              disabled={tabIndex === -1}
              checked={this.props.isScoreEnabled}
              onChange={this.props.toggleScore}
            />
          </Label>
          <Button tabIndex={tabIndex} onClick={this.props.resetScore}>
            Reset Score
          </Button>
          <Link tabIndex={tabIndex} to="/about" onClick={this.delayedClick}>
            About
          </Link>
        </Nav>
      </>
    );
  }
}
