import React, {Component} from 'react';

import './sign-in.style.scss';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';
import {singInWithGoogle, auth} from '../../firebase/firebase.utils';

export class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }

    this.setState({email: '', password: ''});
  };

  handleChange = e => {
    e.preventDefault();

    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  render() {
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
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn={true}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
