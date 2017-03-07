import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './layout.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    }
  }

  menuIconClick = (e) => {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }

  render() {
    return <MuiThemeProvider>
        <div>
          <AppBar title="Home Budget" onLeftIconButtonTouchTap={this.menuIconClick} />
          <Drawer open={this.state.drawerOpened}>
            <AppBar title="Home Budget" onTouchTap={this.menuIconClick} iconElementLeft={<div></div>} />
            <MenuItem>Compare costs with transactions</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>;
  }
}
