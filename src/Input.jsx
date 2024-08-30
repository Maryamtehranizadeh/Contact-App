
import './input.css'

function Input() {
  return (
    <div className='input'>
        <div className='first'>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Last Name'/>
        </div>
        <div className='second'>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone'/>
        </div>
        <div className='third'>
            <button>Add Contact</button>
        </div>
    </div>
  )
}

export default Input