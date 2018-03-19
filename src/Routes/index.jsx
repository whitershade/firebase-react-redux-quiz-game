import React from 'react';
import { Link,  Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import Admin from '../Components/Admin';
import Game from '../Containers/Game';

const NoMatch = () => <div>404</div>;

export default (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
