function ContactItem({ data, deleteHandler }) {
  return (
    <li key={data.id}>
      <p>
        <span>🐵</span>
        {data.name}
        {data.lastName}
      </p>
      <p>
        <span>📭</span>
        {data.email}
      </p>
      <p>
        <span>☎</span>
        {data.phone}
      </p>
      <button onClick={() => deleteHandler(data.id)}>🗑</button>
    </li>
  )
}

export default ContactItem
