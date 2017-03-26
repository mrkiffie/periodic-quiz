import React, {Component} from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Link from 'react-router/lib/Link';
import Settings from './settings';
import {resetScore} from '../actions';

class Navigation extends Component {

  onCLick(delay = 200) {
    setTimeout(() => {
      this.props.toggleMenu(false);
    }, delay);
  }

  render() {
    const routes = [
      {route: '/flag-country', text: 'Flag Country'},
      {route: '/flag-capital', text: 'Flag Capital'},
      {route: '/country-flag', text: 'Country Flag'},
      {route: '/country-capital', text: 'Country Capital'},
      {route: '/capital-flag', text: 'Capital Flag'},
      {route: '/capital-country', text: 'Capital Country'},
      {route: '/flag-list', text: 'Flag List'},
    ];

    const {open, muiTheme} = this.props;

    return (
      <div>
        <Drawer
          open={open}
          docked={false}
          disableSwipeToOpen={true}
          onRequestChange={() => this.onCLick(0)}
        >
          <List style={{paddingTop: 0, textAlign: 'left'}}>
            <ListItem
              onClick={() => this.onCLick(0)}
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
            {routes.map(({route, text}) => (
              <ListItem
                key={route}
                containerElement={<Link to={route} />}
                primaryText={text}
                tabIndex={open ? 0 : -1}
                onClick={() => this.onCLick()}
              />
            ))}

          </List>
          <Divider />
          <List>
            <Settings />
            <ListItem
              primaryText="Reset Score"
              tabIndex={open ? 0 : -1}
              onClick={() => this.props.resetScore()}
            />
            <ListItem
              containerElement={<Link to="/about" />}
              primaryText="About"
              tabIndex={open ? 0 : -1}
              onClick={() => this.onCLick()}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default muiThemeable()(connect(null, {resetScore})(Navigation));
