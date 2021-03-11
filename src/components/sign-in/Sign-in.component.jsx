import React from 'react'
import FromInput, { FormInput } from "../form-input/form-input.component"
import "./Sign-in.styles.scss"
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from "../../firebase/firebase.utils"
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: "", password: "" })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="email" />
                    <FromInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password" />
                    <div className="buttons">
                        <CustomButton type="submit">submit form</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Signup with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;