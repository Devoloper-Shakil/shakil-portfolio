import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom";
import About from './Components/About/About';
import Navbar from './Components/Home/Navbar/Navbar';
import Futter from './Components/Home/Futter/Futter';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className=" bg-dark">
      <div className="container">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/project">
              <Projects></Projects>
            </Route>
            <Route path="/contact">
             <Contact></Contact>
            </Route>
          </Switch>
          <Futter></Futter>
        </Router>

      </div>

    </div>
  );
}

export default App;
