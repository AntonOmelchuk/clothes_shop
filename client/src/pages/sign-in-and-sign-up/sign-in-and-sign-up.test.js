import React from 'react';
import {shallow} from 'enzyme';

import SignInAndSignUp from './sign-in-sign-up.component';

it('renders SignAndSignUpPage component', () => {
    expect(shallow(<SignInAndSignUp />)).toMatchSnapshot()
});
