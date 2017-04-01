import React from 'react';
import Paper from 'material-ui/Paper';
import AccountComponent from './account_component';

class WelcomePage extends React.Component {
  renderAccounts = () => {
    if (this.props.bank.accounts.length > 0) {
      return this.props.bank.accounts.map((account) => {
        var key = `account-${account.id}`;
        return <AccountComponent account={account} key={key} />;
      });
    } else {
      return <div>
          No account yet
        </div>
    }
  }

  render() {
    return <div>
        <h2>Welcome in budgeting app</h2>

        {this.renderAccounts()}
      </div>;
  }
}

export default WelcomePage;
