import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import backIcon from '../assets/back.png'
import LongButton from '../components/ButtonLong';
import submitRegForm from '../hooks/useSubmit';

const NewUser = ()=>{
    const inputs = [
        {
            name: 'id',
            type: 'text',
            placeholder: 'Email ID',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        },
        {
            name: 'confirm',
            type: 'password',
            placeholder: 'Confirm Password',
        },
    ]
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
                    Fill in the required details and click Proceed.
                    Fields marked <span style= {{
                        color: 'red'
                    }}>*</span> are mandatory 
                </p>

                <form action="" style ={{
                    marginBottom: '2rem'
                }} onSubmit = {(e)=>{
                    const result = submitRegForm(e);
                    result.then(response=>{
                        console.log(response)
                    })
                }}>
                    {
                        inputs.map((input, key)=>(
                            <Input key ={key} name = {input.name}
                            placeholder = {input.placeholder}
                            type = {input.type}
                            />
                        ))
                    }

                    <p style = {{
                        marginTop: '2rem'
                    }}>
                        By Creating Account, you are automatically accepting all the <Link to = '/terms-and-conditions' style= {{
                            color: '#FF6265',
                            textDecoration: 'underline'
                        }}>Terms & Conditions</Link> related to Momento
                    </p>
                    <LongButton text='Proceed' />
                </form>
            </div>
        </div>
    )
}
export default NewUser;