import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Friend from './components/pages/Friends';
import Facehub from './components/pages/Facehub';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/friend" component={Friend} />
      <Route exact path="/facehub" component={Facehub} />
      <Route exact path="/notfound" component={NotFound} />
      <Redirect to="/notfound" />
    </Switch>
    </div>
  );
}

export default App;
