import { map } from 'lodash';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { closeDrawer, toggleDrawer } from './actions/drawer';
import { goToPage } from './actions/menu';
import './layout.css';


class Layout extends React.Component {
  getChildContext = () => {
    return {
      dispatch: this.props.dispatch
    }
  }

  menuIconClick = (e) => {
    this.props.dispatch(toggleDrawer())
  }

  onMenuItemTap = (page) => {
    return (e) => {
      this.props.dispatch(closeDrawer(page))
      this.props.dispatch(goToPage(page))
    }
  }

  currentPage = () => {
    return React.createElement(this.props.menu.currentPage.container, this.props);
  }

  renderMenuItems = () => {
    return map(this.props.menu.pages, (page, i) => {
      return <MenuItem onTouchTap={this.onMenuItemTap(page)} key={"menu-item-" + i}>{page.label}</MenuItem>;
    });
  }

  render() {
    return <MuiThemeProvider>
        <div>
          <AppBar title="Home Budget" onLeftIconButtonTouchTap={this.menuIconClick} />
          <Drawer open={this.props.drawer}>
            <AppBar title="Home Budget" onTouchTap={this.menuIconClick} iconElementLeft={<div></div>} />
            {this.renderMenuItems()}
          </Drawer>
          <Paper zDepth={1} className="page-container">
            {this.currentPage()}
          </Paper>
        </div>
      </MuiThemeProvider>;
  }
}

Layout.childContextTypes = {
  dispatch: React.PropTypes.func
};

export default Layout;
