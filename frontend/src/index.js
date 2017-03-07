import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

let root = document.getElementById("container");

ReactDOM.render(<Layout />, root);
