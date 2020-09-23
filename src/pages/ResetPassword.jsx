import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import backIcon from '../assets/back.png'
import LongButton from '../components/ButtonLong';

const ResetPassword = ()=>{
    return(
        <div className="container">
            <div className="Signin">
                <div className="header">
                    <Link to = '/signin'>
                        <img src = {backIcon} alt=""/>
                    </Link>
                    <h1>Reset Password</h1>
                </div>
                <p>
                    No Problem! Just give in your Email ID and we will send you a link to reset your password
                </p>

                <form action="">
                    <Input name='id' placeholder='Email ID' />
                    <LongButton text = 'Send Link'/>
                </form>
            </div>
        </div>
    )
}
export default ResetPassword;