import React from 'react';
import Dropzone from 'react-dropzone';
import { addFiles } from './backend';

class UpdateAccountsBalancesPage extends React.Component {
  onDrop = (files) => {
    addFiles(files).then((accounts) => {
      console.dir(accounts);
    });
  }

  render() {
    return <div>
        <h2>Update account balances</h2>

        <Dropzone onDrop={this.onDrop} />
      </div>;
  }
}

export default UpdateAccountsBalancesPage;
