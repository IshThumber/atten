import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, Teachers, Students } from './pages';


function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/students">Students</Link>
      </div>
      {/* <a href="/">Home</a>
      <a href="/teachers">Teachers</a>
      <a href="/students">Students</a> */}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/students" component={Students} />
        </Switch>
      </div>
    </>
  );
}

export default App;