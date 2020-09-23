import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../components/Input';
import backIcon from '../assets/back.png';
import LongButton from '../components/ButtonLong';

const NewPassword = ()=>{
    
    return(
        <div className="container">
            <div className="Signin">
                <div className="header">
                    <Link to='/signin'>
                        <img src={backIcon} alt="" />
                    </Link>
                    <h1>Create New Password</h1>
                </div>
                <p>
                    A strong password has combination of letter and numbers and special characters like $,!,%, etc.  
                </p>

                <form action="">
                    <Input name='password' placeholder='New Password' type = 'password'/>
                    <Input name='confirm' placeholder='Confirm Password' type = 'password'/>
                    <LongButton text='Save' />
                </form>
            </div>
        </div>
    )
}
export default NewPassword;