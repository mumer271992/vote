import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import QuestionsPage from '../pages/QuestionsPage/QuestionsPage';
import QuestionDetailsPage from '../pages/QuestionDetailsPage/QuestionDetailsPage';

const Router = () => (
  <div>
    <BrowserRouter>
      <div className="page m-t-2">
        <Switch>
          <Route
            exact
            path="/"
          >
            <Redirect to="/questions" />
          </Route>
          <Route
            exact
            path="/questions"
            component={QuestionsPage}
          />
          <Route
            exact
            path="/questions/:question_id"
            component={QuestionDetailsPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default Router;
