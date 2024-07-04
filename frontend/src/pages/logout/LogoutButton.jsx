import React from 'react'
import { useAuth } from '../../context/AuthContext'

const LogoutButton = () => {
    const { logout } = useAuth()
  return (
    <div>
      <button onClick={logout} className="px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
    </div>
  )
}

export default LogoutButton
