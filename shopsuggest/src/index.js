import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import routes from './config/routes';
import {Router, hashHistory} from 'react-router';
import {browserHistory} from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';


import logo from './logo.svg';
import './App.css';
import store from './store/configureStore';

import './index.css';

let IS_PROD = false;
const history = syncHistoryWithStore(IS_PROD ? browserHistory : hashHistory, store);

render(
  <Provider store={store}>
    <Router routes={routes} history={history}></Router>
  </Provider>,
  document.getElementById('root')
  );

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
