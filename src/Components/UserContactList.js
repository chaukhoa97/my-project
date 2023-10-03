import React, { useState, useEffect } from 'react'
import ContactInfo from './UserContact'

const UserContactList = ({ listId, contactList }) => {
  return (
    <div>
      {contactList.map((c) => (
        <ContactInfo listId={c.email} key={c.email} info={c} />
      ))}
    </div>
  )
}

export default UserContactList
