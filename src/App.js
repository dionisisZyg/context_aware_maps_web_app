import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import { ConnectedRouter } from 'react-router-redux';
import LoginRouter from './components/loginRouter/loginRouter';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LoginRouter {...this.props}/>
            </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
