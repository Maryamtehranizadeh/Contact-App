import ContactItem from './ContactItem'

function ContactList({ contacts, deleteHandler }) {
  //   console.log(contacts)
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <div>No Contacts Yet!</div>
      )}
    </div>
  )
}

export default ContactList
