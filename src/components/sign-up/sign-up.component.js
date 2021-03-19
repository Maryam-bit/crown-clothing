import React from 'react'
import FromInput, { FormInput } from "../form-input/form-input.component"
import CustomButton from '../custom-button/custom-button.component'
import "./sign-up.styles.scss"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: "",
            email: '',
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("password doesn't matched")
        }

        try{
            const {user} =await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: "",
                email: '',
                password: "",
                confirmPassword: ""
            })
        }
        catch(error){
            console.log(error.message)
        }
    }

    handleChange = event => {
        const {name , value} = event.target;
        this.setState({[name]:value})
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>Sign Up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="confirmPassword"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;