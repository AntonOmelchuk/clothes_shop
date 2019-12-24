import React from 'react';

import {SignInAndSignUpContainer} from './sign-in-and-sign-up.style';

import SignIn from '../../components/sing-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};
