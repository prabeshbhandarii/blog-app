import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MainLayout from '../../components/MainLayout';
import { MessageContext } from '../../context/MessageContext';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { setMessage } = useContext(MessageContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/signin', formData, {
        withCredentials: true
      });
      setMessage({type: 'success', text: response.data.msg})
      login()
      navigate('/')
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.msg || 'Something went wrong!' });
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete='current-password'
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    </MainLayout>
  );
};

export default Login;