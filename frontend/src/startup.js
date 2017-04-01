import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import state from './state';
import Layout from './layout';
import { loadMenu } from './actions/menu';

function hookUpState(state) {
  return {
    menu: state.menu,
    drawer: state.drawer,
    bank: state.bank
  };
}

function startUp() {
  let store = createStore(state, applyMiddleware(thunkMiddleware));
  let root = document.getElementById("container");
  let MainComponentWithState = connect(hookUpState)(Layout);

  store.dispatch(loadMenu());

  injectTapEventPlugin();
  ReactDOM.render(
    <Provider store={store}>
      <MainComponentWithState />
    </Provider>
  , root);
}

export default startUp;
