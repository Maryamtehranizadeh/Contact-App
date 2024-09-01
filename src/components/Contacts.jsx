import { useState } from 'react'
import ContactList from './ContactList'
import inputs from '../constants/inputs'
import { v4 } from 'uuid'
import styles from './Contacts.module.css'

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
    // console.log(contact)
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
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
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

      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Contacts
