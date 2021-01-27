import React, { Component } from 'react';
import Beginner from '../Beginner/Beginner';
import Intermediet from '../Intermediet/Intermediet';
import Advanced from '../Advanced/Advanced';
import '../Home/home.css';
import './Guides.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Guides extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI/guides/2")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render() {
    return (
      <div>
        <h1 className="guides">Guides</h1>
            <Router>
            <div className="dropdown">
              <button className="dropbtn">Levels</button>
            <div className="dropdown-content">
                <Link to="/Beginner">Beginner</Link>
                <Link to="/Intermediet">Intermediet</Link>
                <Link to="/Advanced">Advanced</Link>
            </div>
            <hr />

            <Switch>
            <Route path="/Beginner">
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
            </Router>
        <div className="guide-content">{this.state.apiResponse}</div>
      </div>
    );
  }
}

export default Guides;