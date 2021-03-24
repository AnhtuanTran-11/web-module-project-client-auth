import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div>
    <Switch>
      <PrivateRoute exact path='/protected' component={FriendsList} />
      <Route path='/login' component={LoginPage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
