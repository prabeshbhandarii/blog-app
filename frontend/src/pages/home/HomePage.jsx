import React, { useContext, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './contents/Hero';
import { MessageContext } from '../../context/MessageContext';

const HomePage = () => {
  const { message, setMessage } = useContext(MessageContext)
  useEffect(()=>{
    if(message.text){
      const timer = setTimeout(()=>{
        setMessage({type: '', text: ''})
      }, 2000)
      return ()=> clearTimeout(timer)
    }
  }, [message])
  
  return (
    <div>
      <MainLayout>
        <Hero />
        {message.text && (
          <div className="fixed top-4 right-4 max-w-xs w-full z-50">
            <div className={`text-center ${message.type === 'success' ? 'bg-green-400' : 'bg-red-500'} text-white p-4 py-5 rounded shadow-lg`}>
              {message.text}
            </div>
          </div>
        )}
      </MainLayout>
    </div>
  );
};

export default HomePage;
