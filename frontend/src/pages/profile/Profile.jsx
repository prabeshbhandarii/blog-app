import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MessageContext } from '../../context/MessageContext'
import MainLayout from '../../components/MainLayout'

const Profile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { message, setMessage } = useContext(MessageContext)
  const [editMode, setEditMode] = useState(false)
  useEffect(()=>{
    const fetchUserData = async ()=>{
      try{
        const {data} = await axios.get("http://localhost:3000/user/profile", {
          withCredentials: true
        })
        setUser(data.userData)
      }catch(err){
        throw new Error(err)
      }
    }
    fetchUserData()
  }, [])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.put("http://localhost:3000/user/profile", user, {
        withCredentials: true
      })
      setEditMode(false)
      setMessage({type: 'success', text: data.msg})
    } catch (err) {
      setMessage({type: 'error', text: err.response?.data?.msg || 'Something went wrong!' })
    }
  }

  return (
    <MainLayout>
    {message.text && (
          <div className="fixed top-4 right-4 max-w-xs w-full z-50">
            <div className={`text-center ${message.type === 'success' ? 'bg-green-400' : 'bg-red-500'} text-white p-4 py-5 rounded shadow-lg`}>
              {message.text}
            </div>
          </div>
        )}
      <div className='max-w-3xl mx-auto p-10'>
      <h1 className='text-2xl font-bold mb-4'>Profile Page</h1>
        <form onSubmit={handleSubmit}>
          <div className='p-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Username: 
            </label>
              <input 
                type='text' 
                name='username' 
                value={user.username}
                onChange={handleChange}
                className={`mt-1 p-2 m-4 block w-full rounded-md border-gray-300s shadow-sm ${editMode ? '' : 'bg-gray-100'}`}
              />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email: 
            </label>
              <input 
                type='email' 
                name='email' 
                value={user.email}
                onChange={handleChange}
                className={`mt-1 p-2 m-4 block w-full rounded-md border-gray-300s shadow-sm ${editMode ? '' : 'bg-gray-100'}`}
              />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password: 
            </label>
              <input 
                type='password' 
                name='password' 
                value={user.password}
                onChange={handleChange}
                className={`mt-1 p-2 m-4 block w-full rounded-md border-gray-300s shadow-sm ${editMode ? '' : 'bg-gray-100'}`}
              />
          </div>

          <div className='flex justify-end'>
            <button type='submit' className='px-4 py-2 m-4 bg-blue-600 text-white rounded-md'>
              Save
            </button>
          </div>
        </form>
    </div>
    </MainLayout>
  )
}

export default Profile