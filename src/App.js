import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        The Home Page
      </Route>
      <Route exact path="/About">
        The About Page
      </Route>
      <Route>Error 404 Page Not Found</Route>
    </Switch>
  );
}

export default App;
