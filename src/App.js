import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Questions from './Containers/Questions';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Questions />
        </div>
    </Provider>
    );
  }
}


export default App;
