import React from 'react';

const Input = ({type = 'text', name, placeholder = name})=>{
    return(
        <input className = 'form-input' type={type} name= {name} placeholder={placeholder} />
    )
}
export default Input;