import React from 'react';
import { Link } from 'react-router-dom';
import backImage from '../assets/back.png';
import LongButton from '../components/ButtonLong';
import '../styles/signin.css';
import FormInput from '../components/Input';

const SignIn = ()=>{
    const inputs = [
        {
            name: 'id',
            placeholder: 'Email ID',
            type: 'text'
        },
        {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
        }
    ]
    return(
        <div className="container">
            <div className="Signin">
                <div className="header">
                    <Link to = '/'>
                        <img src={backImage} alt="" /> 
                    </Link>
                    <h1>Sign In</h1>
                </div>
                <p>Type in your Email ID and Password you chose for Momento and click Go to Feed</p>
                <form action="">
                    {
                        inputs.map(input=>(
                            <FormInput placeholder= {input.placeholder}
                            name = {input.name}
                            type = {input.type} />
                        ))
                    }
                    <LongButton text = 'Go to Feed' />
                </form>
                <Link className = 'new-account' to = '/reset-password' >Can't Sign In? Reset Password </Link>
            </div>
        </div>
    )
}
export default SignIn;