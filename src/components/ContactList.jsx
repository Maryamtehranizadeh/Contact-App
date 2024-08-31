import { useState } from 'react'

function ContactList({ contacts }) {
  console.log(contacts)

  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                <span>🐵</span>
                {contact.name}
                {contact.lastName}
              </p>
              <p>
                <span>📭</span>
                {contact.email}
              </p>
              <p>
                <span>☎</span>
                {contact.phone}
              </p>
              <button>🗑</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No Contacts Yet!</div>
      )}
    </div>
  )
}

export default ContactList
