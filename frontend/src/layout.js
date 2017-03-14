import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import WelcomePage from './welcome_page';
import UpdateAccountsBalancesPage from './update_accounts_balances_page';
import './layout.css';


class Layout extends React.Component {
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

  onUpdateAccountsBalances = (e) => {
    this.setState({
      currentPage: "UPDATE_ACCOUNTS_BALANCES"
    });
  }

  currentPage = () => {
    switch (this.state.currentPage) {
      case "UPDATE_ACCOUNTS_BALANCES":
        return <UpdateAccountsBalancesPage />
      default:
        return <WelcomePage />;
    }
  }

  render() {
    return <MuiThemeProvider>
        <div>
          <AppBar title="Home Budget" onLeftIconButtonTouchTap={this.menuIconClick} />
          <Drawer open={this.state.drawerOpened}>
            <AppBar title="Home Budget" onTouchTap={this.menuIconClick} iconElementLeft={<div></div>} />
            <MenuItem onTouchTap={this.onUpdateAccountsBalances}>Update accounts balances</MenuItem>
          </Drawer>
          <Paper zDepth={1} className="page-container">
            {this.currentPage()}
          </Paper>
        </div>
      </MuiThemeProvider>;
  }
}

export default Layout;
