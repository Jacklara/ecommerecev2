import React, { Component } from 'react';
import '../Home/home.css'

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <h1 className="contactHead">Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Last Name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Phone Number: <br/>
            <input type="text" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email: <br/>
            <input type="Email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Comments: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Connect;