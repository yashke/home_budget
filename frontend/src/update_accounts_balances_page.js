import React from 'react';
import Dropzone from 'react-dropzone';
import { uploadAccountBalances } from './actions/bank';

class UpdateAccountsBalancesPage extends React.Component {
  onDrop = (files) => {
    this.context.dispatch(uploadAccountBalances(files));
  }

  render() {
    return <div>
        <h2>Update account balances</h2>

        <Dropzone onDrop={this.onDrop} />
      </div>;
  }
}

UpdateAccountsBalancesPage.contextTypes = {
  dispatch: React.PropTypes.func
};


export default UpdateAccountsBalancesPage;
