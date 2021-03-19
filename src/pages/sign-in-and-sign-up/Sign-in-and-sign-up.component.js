import React from 'react'
import "./Sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/Sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"
 const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage