import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/contact' exact component={Skills}/>
          <Link to="https://suryablog.herokuapp.com/"/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
