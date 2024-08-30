import { useState } from 'react';
import './input.css'

function Input() {
    const [form, setForm]= useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    })

    
    const changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(value, name);
        setForm((form)=>({...form,[name]:value}))
    }
        
    const addHandler = ()=>{
        console.log(form);
    }

  return (
    <div className='input'>
        <div>
            <input name ="firstname" value={form.firstname} onChange={changeHandler} type="text" placeholder='Name'/>
            <input name ="lastname" value={form.lastname} onChange={changeHandler} type="text" placeholder='Last Name'/>
        </div>
        <div>
            <input name ="email" value={form.email} onChange={changeHandler} type="text" placeholder='Email'/>
            <input name ="phone" value={form.phone} onChange={changeHandler} type="text" placeholder='Phone'/>
        </div>
        <div>
            <button className='add-button' onClick={addHandler}>Add Contact</button>
        </div>
    </div>
  )
}

export default Input