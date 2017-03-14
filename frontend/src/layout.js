import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import WelcomePage from './welcome_page';
import CompareCostsWithTransactionsPage from './compare_costs_with_transactions_page';
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

  onCompareLinkClick = (e) => {
    this.setState({
      currentPage: "COMPARE_COSTS_WITH_TRANSACTIONS"
    });
  }

  currentPage = () => {
    switch (this.state.currentPage) {
      case "COMPARE_COSTS_WITH_TRANSACTIONS":
        return <CompareCostsWithTransactionsPage />
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
            <MenuItem onTouchTap={this.onCompareLinkClick}>Compare costs with transactions</MenuItem>
          </Drawer>
          <Paper zDepth={1} className="page-container">
            {this.currentPage()}
          </Paper>
        </div>
      </MuiThemeProvider>;
  }
}

export default Layout;
