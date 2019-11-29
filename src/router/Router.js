import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import QuestionsPage from '../pages/QuestionsPage/QuestionsPage';

const Router = () => (
  <div>
    <BrowserRouter>
      <div className="page m-t-2">
        <Switch>
          <Route
            exact
            path="/"
            component={QuestionsPage}
          >
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default Router;
