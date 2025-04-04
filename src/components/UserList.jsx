import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
