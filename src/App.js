import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <div>
        <Link to="/" />
      </div>
    </div>
  );
}

export default App;
