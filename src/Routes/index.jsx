import React from 'react';
import { Link,  Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import Admin from '../Components/Admin';
import Game from '../Components/Game';

const NoMatch = () => <div>404</div>;

export default (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Link href="/" to="/">
          Home
        </Link>
        <Link href="/questions" to="/questions">
          Questions
        </Link>
        <Switch>
          {/* <Route path="/questions/new" component={QuestionsForm} />
          <Route path="/questions/:id/edit" component={QuestionsForm} />
          <Route path="/questions/:id" component={Question} />
          <Route path="/questions" component={QuestionsPage} /> */}
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
