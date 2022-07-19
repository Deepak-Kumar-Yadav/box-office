import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>Error 404 Page Not Found</div>{' '}
      </Route>
    </Switch>
  );
}

export default App;
