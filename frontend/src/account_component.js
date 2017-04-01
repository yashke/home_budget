import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class AccountComponent extends React.Component {
  renderBalance = () => {
    var beforeComma = parseInt(this.props.account.balance.amountInCents / 100);
    var afterComma = this.props.account.balance.amountInCents % 100;

    return `${beforeComma}.${afterComma} ${this.props.account.balance.currency}`;
  }

  render() {
    return <Card>
        <CardHeader title={this.props.account.id}></CardHeader>
        <CardText>
          Balance: <strong>{this.renderBalance()}</strong>
        </CardText>
      </Card>;
  }
}

export default AccountComponent;
