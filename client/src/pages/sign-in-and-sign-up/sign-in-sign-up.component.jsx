import React from 'react';

import SignIn from '../../components/sing-in/sing-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

export const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};
