import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Layout extends React.Component {
  render() {
    return <MuiThemeProvider>
        <div>
          <RaisedButton>Hello, I'm button</RaisedButton>
        </div>
      </MuiThemeProvider>;
  }
}
