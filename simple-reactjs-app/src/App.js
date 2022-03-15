import React, { Component } from 'react';
import logo from './namelogo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//import Weather from './Weather'

import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Signup from './pages/Signup';
import Signin from './pages/signin';
//import index from './pages/index';

class App extends Component {
  render() {
    console.log("Host URL:" + process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* 
<h1 className="App-title">Neufood</h1>
*/}
          </header>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={Teams} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={Signup} />
            <Route path='/signin' component={Signin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
