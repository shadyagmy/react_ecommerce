import React, { Component } from 'react';

import "./sign-in.scss";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import {signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password : ''
        }

    }


    handelSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password : ''})
    }

    handelChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>

                <form  onSubmit={this.handelSubmit}>
                     <FormInput id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handelChange={this.handelChange}
                        required
                        label ="Email"
                        />
                     
                     <FormInput id="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handelChange}
                            required
                            label ="Password"
                           
                            />
                    
                    <div className="buttons">
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton isGoogleSignIn  onClick={signInWithGoogle}>sign in with google</CustomButton>
                    </div>
                     
                </form>

            </div>
        )
    }
}
