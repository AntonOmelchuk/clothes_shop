import React, {useState} from 'react';
import {connect} from 'react-redux';

import './sign-up.style.scss';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/users/user.action';

const SignUp = ({signUpStart}) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {displayName, email, password, confirmPassword} = credentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    signUpStart({email, password, displayName});
  };

  const handleChange = e => {
    const {name, value} = e.target;

    setCredentials({...credentials, [name]: value});
  };

  return (
    <div className='sign-up'>
      <h1 className='title'>I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name='displayName'
          type='text'
          value={displayName}
          label='Name'
          required
        />
        <FormInput
          onChange={handleChange}
          name='email'
          type='email'
          value={email}
          label='E-mail'
          required
        />
        <FormInput
          onChange={handleChange}
          type='password'
          name='password'
          value={password}
          label='Password'
        />
        <FormInput
          onChange={handleChange}
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
};

export default connect(null, {signUpStart})(SignUp);
