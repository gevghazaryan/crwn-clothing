import React from 'react';

import "./sign-in-and-sign-up-page.style.scss";

import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSingUpPage = () => (
    <div className="sign-in-and-sign-up">
        <Signin />
        <SignUp />
    </div>
)

export default SigninAndSingUpPage;