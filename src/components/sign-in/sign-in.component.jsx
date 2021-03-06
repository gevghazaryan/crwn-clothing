import React from 'react';

import "./sign-in.style.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { auth,signInWithGoogle } from "../../firebase/firebase.util";

class Singin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch(error) {
            console.error('there is error')
        }

        this.setState({email: "",password: ""})  
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sing-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email"  required/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password"  required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{" "}Sign In with Google{" "}</CustomButton>                     
                    </div>
                </form>
            </div>
        )
    }
}

export default Singin