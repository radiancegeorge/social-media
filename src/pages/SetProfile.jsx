import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import backIcon from '../assets/back.png'
import LongButton from '../components/ButtonLong';
import locationIcon from '../assets/Location-pin - simple-line-icons.png';
import calendarIcon from '../assets/Calendar - simple-line-icons.png';
import '../styles/SetProfile.css';
import submitForm from '../hooks/useSubmit';

//http://localhost:4000/


const SetProfile = ()=>{
    const inputs = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Full Name',
        },
        {
            name: 'dob',
            type: 'date',
            placeholder: 'Date Of Birth',
            img: <img src={calendarIcon} alt=""/>
        },
        {
            name: 'gender',
            type: 'text',
            placeholder: 'Gender',
        },
        {
            name: 'about',
            type: 'text',
            placeholder: 'About Me',
        },
        {
            name: 'location',
            type: 'text',
            placeholder: 'Location',
            img: <img src={locationIcon} alt=""/>
        }
    ]
    return(
        <div className="container">
            <div className="Signin SetProfile">
                <div className="header">
                    <Link to='/signin'>
                        <img src={backIcon} alt="" />
                    </Link>
                    <h1>Set up Profile</h1>
                </div>
                <p>
                    Hey! We need few details from you before you start sharing on Momento 
                </p>

                <form action=""  style={{
                    paddingBottom: '2rem'
                }} onSubmit = {(e)=>{
                    submitForm(e)
                }}>
                    {
                        inputs.map((input, key)=>(
                            <label key = {key} htmlFor={input.name}>
                                <Input name = {input.name} placeholder = {input.placeholder}
                                type = {input.type}
                                />
                                {
                                    input.img
                                }
                            </label>
                        ))
                    }
                    <LongButton text='Get Set Go!' />
                </form>
            </div>
        </div>
    )
}
export default SetProfile;