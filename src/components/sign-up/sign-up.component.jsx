import React from 'react';

import {FormInput} from '../form-input/form-input.component';

import './sign-up.style.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {CustomButton} from '../custom-button/custom-button.component';

export class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
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
