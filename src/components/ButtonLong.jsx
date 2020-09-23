import React from 'react';


const LongButton = ({to, text})=>{
    return(
        <button className='signin' type = 'submit'
        onClick = {
            ()=>{
              if(to){
                window.location.href = to
              }  
            }
        }
        >{text}</button>
    )
};

export default LongButton;