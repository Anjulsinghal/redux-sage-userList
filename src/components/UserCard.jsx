import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-sm text-gray-600 mb-3">{user.email}</p>
        <div className="text-sm text-gray-500">
          <p><span className="font-medium">Username:</span> {user.username}</p>
          <p><span className="font-medium">Phone:</span> {user.phone}</p>
          <p><span className="font-medium">Website:</span> {user.website}</p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <p className="font-medium text-indigo-600 hover:text-indigo-500">
            Company: {user.company.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserCard