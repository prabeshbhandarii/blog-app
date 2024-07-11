
import React, { useContext, useState } from 'react';
import MainLayout from '../../components/MainLayout'
import { MessageContext } from '../../context/MessageContext';
import axios from 'axios'

const WriteBlogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    imageurl: ''
  })
  const { message, setMessage } = useContext(MessageContext)

  // useEffect(()=>{
  //   if(message.text){
  //     const timer = setTimeout(()=>{
  //       setMessage({type: '', text: ''})
  //     }, 2000)
  //     return ()=> clearTimeout(timer)
  //   }
  // }, [message])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/blog', formData, {
        withCredentials: true
      });
      setMessage({type: 'success', text: response.data.msg})
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.msg || 'Something went wrong!' });
    }
  };

  return (
    <MainLayout>
    {message.text && (
          <div className="fixed top-4 right-4 max-w-xs w-full z-50">
            <div className={`text-center ${message.type === 'success' ? 'bg-green-400' : 'bg-red-500'} text-white p-4 py-5 rounded shadow-lg`}>
              {message.text}
            </div>
          </div>
        )}
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Write a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="body">
            Body
          </label>
          <textarea
            name="body"
            id="body"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.body}
            onChange={handleChange}
            rows="10"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Image URL
          </label>
          <input
            name="imageurl"
            id="imageurl"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.imageurl}
            onChange={handleChange}
            required
          />
        </div>

        <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
      </form>
    </div>
    </MainLayout>
  );
};

export default WriteBlogs;
