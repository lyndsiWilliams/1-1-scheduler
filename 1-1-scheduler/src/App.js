// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Schedule from './components/Schedule';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};


export default App;