import * as React from "react";
import { observer, inject } from "mobx-react";
import { MainStore } from "../store/MainStore";
import CloseIcon from "./icon/Close";
import { Button, IconButton } from "./ui/atoms/Button";
import { Toolbar } from "./ui/Toolbar";
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
@inject((allStores: { mainStore: MainStore }) => ({
  isMenuOpen: allStores.mainStore.menu.open,
  isScoreEnabled: allStores.mainStore.settings.isScoreEnabled,
  toggleMenu: allStores.mainStore.menu.toggleMenu,
  toggleScore: allStores.mainStore.settings.toggleScore,
  resetScore: allStores.mainStore.quiz.resetScore
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
    { route: "/element-quiz", text: "Element Quiz" },
    { route: "/search", text: "Search Elements" }
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
