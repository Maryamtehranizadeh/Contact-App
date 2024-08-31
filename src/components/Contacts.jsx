import { useState } from 'react'
import ContactList from './ContactList'
import inputs from '../constants/inputs'
import { v4 } from 'uuid'

function Contacts() {
  const [alert, setAlert] = useState('')
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({
    id: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setContact((contact) => ({ ...contact, [name]: value }))
  }

  const addHandler = () => {
    console.log(contact)
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert('Please enter valid data')
      return
    } else {
      setAlert('')
      const newContact = { ...contact, id: v4() }
      setContacts((contacts) => [...contacts, newContact])
      setContact({
        name: '',
        lastName: '',
        email: '',
        phone: '',
      })
    }
  }

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>

      <div>{alert && <p>{alert}</p>}</div>

      <ContactList contacts={contacts} />
    </div>
  )
}

export default Contacts
