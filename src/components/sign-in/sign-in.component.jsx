import React from 'react';

import "./sign-in.style.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

class Singin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
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
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label="email"  />
                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} label="password"  />
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