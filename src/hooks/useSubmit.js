const submitRegForm = async (e)=>{
    e.preventDefault()
    const form = e.target;
    const id = ()=>{
        if (form.id) {
            const input = String(form.id.value);
            if (input.trim() === '') {
                alert('please fill up email');
                return false
            } else if (input.includes('@') === false || input.includes('.com') === false) {
                alert('make sure email is a valid one');
                return false
            }else{
                return true
            }
        }
    }
    const password = ()=>{
        if(form.password){
            const input  = String(form.password.value);
            const confirmInput  = String(form.confirm.value);
            if(input.trim() === ''){
                alert('please type a password');
                return false
            }else if(input.length <= 8){
                alert('please make sure your password is longer than 8 characters');
                return false
            }else if(confirmInput !== input){
                alert('please make sure both passwords are a match');
                return false;
            }else{
                return true;
            }
        }
    }
    if(id() && password()){
        const submitData = await fetch('http://localhost:4000/register' , {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id: form.id.value, 
                password: form.password.value
            })
        })
        const status = await submitData.status;
        return status
    }
}


export default submitRegForm