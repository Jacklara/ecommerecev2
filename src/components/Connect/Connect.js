import React, { Component } from 'react';
import '../Home/home.css'

// eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        questions: ''
      }
    };

  };

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.firstName = value.length < 1 ? 'Please include a first name' : '';
        break;
      case 'lastName':
          errors.lastName = value.length < 1 ? 'Please include a last name' : '';
          break;
      case 'email': 
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';  
        break;
      case 'questions':
          errors.lastName = value.length < 8 ? 'Please submit questions or comments' : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formValid: validateForm(this.state.errors)});
    this.setState({errorCount: countErrors(this.state.errors)});
  }


  render() {
    const {errors, formValid} = this.state;
    return (
      <div className="form">
        <h1 className="contactHead">Contact Us</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <label>
            First Name <br/>
            <input required type="text" placeholder=" Jane" name='firstName' onChange={this.handleChange} noValidate />
            {errors.firstName.length > 0 && <span className='error'>{errors.firstName}</span>}
          </label>
          <br />
          <label>
            Last Name <br/>
            <input required type="text" placeholder=" Doe" name='lastName' onChange={this.handleChange} noValidate/>
            {errors.lastName.length > 0 && <span className='error'>{errors.lastName}</span>}
          </label>
          <br />
          <label>
            Email <br/>
            <input required type="Email" placeholder=" jane@gmail.com" name='email' onChange={this.handleChange} noValidate/>
            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
          </label>
          <br />
          <label>
            Questions <br/>
            <input type="text" placeholder=" Thank you for your questions" name='questions' onChange={this.handleChange} noValidate/>
            {errors.questions.length > 0 && <span className='error'>{errors.questions}</span>}
          </label>
          <br />
          <input type="submit" value="Submit" />
          {this.state.errorCount !== null ? <p className="form-status"> {formValid ? 'Thank you' : 'Form invalid'}</p> : ''}
      </form>
      </div>
    );
  }
}

export default Connect;