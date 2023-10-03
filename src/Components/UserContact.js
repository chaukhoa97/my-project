// Only display image, name, and phone number
// The name should not be equal or less than 20 characters, if longer, truncate it
// The phone should be between 8 and 14 character, if not leave the phone blank
// The picture should be a valid URL, if not leave the picture blank

const UserContact = ({ listId, info }) => {
  const truncatedName =
    info.name.length > 20 ? info.name.slice(0, 20) + '...' : info.name
  const formattedPhone =
    info.phone.length >= 8 && info.phone.length <= 14 ? info.phone : ''

  return (
    <div id={listId} className="user-contact">
      <img src={info.thumbnail} alt={info.name} />
      <div>
        <h3>{truncatedName}</h3>
        <p>{formattedPhone}</p>
      </div>
    </div>
  )
}

export default UserContact
