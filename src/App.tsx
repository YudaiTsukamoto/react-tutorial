import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import './App.css';
import SignUp from './pages/Signup';
import UserPage from './pages/User';
import 'reflect-metadata';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users/:id" component={UserPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
