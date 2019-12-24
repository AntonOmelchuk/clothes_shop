import React, {useState} from 'react';
import {connect} from 'react-redux';

import {ButtonsContainer, SignInContainer, Title} from './sign-in.style';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/users/user.action';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [credentials, setCredentials] = useState({email: '', password: ''});

  const {email, password} = credentials;
  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart({email, password});

    setCredentials({email: '', password: ''});
  };

  const handleChange = e => {
    e.preventDefault();

    const {name, value} = e.target;

    setCredentials({...credentials, [name]: value});
  };
  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='E-mail'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn={true}
          >
            Sign In with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, {googleSignInStart, emailSignInStart})(SignIn);
