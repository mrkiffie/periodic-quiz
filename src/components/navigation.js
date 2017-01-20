import React, { Component } from 'react';
import { Drawer, List, ListItem, Divider, Toggle } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link } from 'react-router';

class Navigation extends Component {

  render() {
    const routes = [
      { route: '/flag-country', text: 'Flag Country' },
      { route: '/flag-capital', text: 'Flag Capital' },
      { route: '/country-flag', text: 'Country Flag' },
      { route: '/country-capital', text: 'Country Capital' },
      { route: '/capital-flag', text: 'Capital Flag' },
      { route: '/capital-country', text: 'Capital Country' },
      { route: '/', text: 'Flag List' },
    ];

    const { open, muiTheme } = this.props;

    return (
      <div>
        <Drawer open={open}>
          <List style={{ paddingTop: 0, textAlign: 'left' }}>
            <ListItem
              onClick={() => this.props.toggleMenu(false)}
              style={{
                backgroundColor: muiTheme.palette.primary1Color,
                height: muiTheme.appBar.height,
              }}
              tabIndex={open ? 0 : -1}
            >
              <NavigationClose
                style={{
                  color: muiTheme.palette.alternateTextColor,
                  marginTop: '2px',
                }}
              />
            </ListItem>
            {routes.map(({ route, text }) => (
              <ListItem
                key={route}
                containerElement={<Link to={route} />}
                primaryText={text}
                tabIndex={open ? 0 : -1}
              />
            ))}

          </List>
          <Divider />
          <List>
            <ListItem
              primaryText="Settings"
              tabIndex={open ? 0 : -1}
              primaryTogglesNestedList
              nestedItems={[
                <ListItem key="toggle-score" primaryText="Toggle Score" rightToggle={<Toggle />} />,
              ]}
            />
            <ListItem
              containerElement={<Link to="/about" />}
              primaryText="About"
              tabIndex={open ? 0 : -1}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default muiThemeable()(Navigation);
