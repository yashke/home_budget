import React from 'react';
import Dropzone from 'react-dropzone';
import addFiles from './backend';

class CompareCostsWithTransactionsPage extends React.Component {
  onDrop = (files) => {
    console.dir(files);
  }

  render() {
    return <div>
        <h2>Compare costs with transactions</h2>

        <Dropzone onDrop={this.onDrop} />
      </div>;
  }
}

export default CompareCostsWithTransactionsPage;
