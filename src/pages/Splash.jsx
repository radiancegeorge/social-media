import React from 'react';
import logo from '../assets/Group 2.png';
import {Link} from 'react-router-dom';
import LongButton from '../components/ButtonLong'

const Splash = ()=>{
    return(
        <div className= 'container'>
            <div className="Splash">
                <img src={logo} alt=""/>
                <h1>MOMENTO</h1>
                <p>momento is a social media app that let's you share your moments with others</p>
                <LongButton to = '/signin' text = 'Sign In'/>
                <Link className = 'new-account' to = '/new-user'>Create New Account</Link>
            </div>
        </div>
    )
}

export default Splash;