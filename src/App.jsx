// App.js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/actions/userActions'
import UserList from './components/UserList'
import Loading from './components/Loading'
import Error from './components/Error'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(state => state.users)

  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">User List</h1>
        <UserList users={users} />
      </div>
    </div>
  )
}

export default App