import React from 'react';
import {connect} from 'react-redux';

import './sign-up.style.scss';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/users/user.action';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    this.props.signUpStart({email, password, displayName});
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className='sign-up'>
        <h1 className='title'>I do not have an account</h1>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            name='displayName'
            type='text'
            value={displayName}
            label='Name'
            required
          />
          <FormInput
            onChange={this.handleChange}
            name='email'
            type='email'
            value={email}
            label='E-mail'
            required
          />
          <FormInput
            onChange={this.handleChange}
            type='password'
            name='password'
            value={password}
            label='Password'
          />
          <FormInput
            onChange={this.handleChange}
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            label='Password'
            required
            minLength='6'
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default connect(null, {signUpStart})(SignUp);
