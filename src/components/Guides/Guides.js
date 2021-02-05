import React from 'react';
import '../Home/home.css';
import './Guides.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Beginner from './Beginner';
import Intermediet from './Intermediet';
import Advanced from './Advanced';

export default function Guides () {
  return (
    <Router>
      <div>
      <h1 className="guides">Workout Guides</h1>
      <h2 className="direction">Please select your skill level</h2>
        <div className="levelnav">
          <ul className="levellist">
            <li className="items">
              <Link to="./">Beginner</Link>
            </li>
            <li className="items">
              <Link to="./Intermediet">Intermediet</Link>
            </li>
            <li className="items">
              <Link to="./Advanced">Advanced</Link>
            </li>
          </ul>

          <hr />

          <Switch>
              <Route exact path="/">
                  <Beginner />
              </Route>
              <Route path="/Intermediet">
                  <Intermediet />
              </Route>
              <Route path="/Advanced">
                  <Advanced />
              </Route>
              </Switch>
        </div>
      </div>
    </Router>
  )
}