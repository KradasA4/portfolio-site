import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home';
import Project from './components/Pages/Project';
import Friend from './components/Pages/Friends';
import Facehub from './components/Pages/Facehub';
import NotFound from './components/Pages/NotFound';


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
