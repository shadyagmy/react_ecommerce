import React, { Component } from 'react';

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import "./sign-up.scss";

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName : '',
            email: '',
            password : '',
            confirmPassword : ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert(`password don't match`);
            return ;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email: '',
                password : '',
                confirmPassword : ''
            })

        } catch (err) {
            console.log(err)
        }
    }

    handelChange = event => {
        const {name, value} = event.target;
        console.log(name,value )

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email,password,confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handelSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handelChange}
                        label='Display Name'
                        required
                        />

                        
                        <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handelChange}
                        label='Email'
                        required
                        />

                       
                        <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handelChange}
                        label='Password'
                        required
                        />

                       
                        <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handelChange}
                        label='Confirm Password'
                        required
                        />

                        <CustomButton type="submit" >SIGN UP</CustomButton>


                       
                </form>
            </div>
        )
    }
}
