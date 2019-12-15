import React, {Component} from 'react';
import {connect} from 'react-redux';

import './sign-in.style.scss';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/users/user.action';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;

    emailSignInStart({email, password});

    this.setState({email: '', password: ''});
  };

  handleChange = e => {
    e.preventDefault();

    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  render() {
    const {googleSignInStart} = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='E-mail'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn={true}
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {googleSignInStart, emailSignInStart})(SignIn);
