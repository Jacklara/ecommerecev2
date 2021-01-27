import React from 'react';
import Home from '../Home/Home';
import Guides from '../Guides/Guides';
import Connect from '../Connect/Connect';
import './nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  export default function Navbar() {
    return (
        <Router>
            <div className="nav">
            <ul className="navlist">
                <li>
                <Link to="./">Home</Link>
                </li>
                <li>
                <Link to="/Guides">Guides</Link>
                </li>
                <li>
                <Link to="/Connect">Connect</Link>
                </li>
                <li style={{float:"right"}}>
                    <img className="logo" alt="logo" src={`${process.env.PUBLIC_URL}./photos/logo.png`}/>
                </li>
            </ul>
            <hr />

            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Guides">
                <Guides />
            </Route>
            <Route path="/Connect">
                <Connect />
            </Route>
            </Switch>
        </div>
        </Router>
  );
}