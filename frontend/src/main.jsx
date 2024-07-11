import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { MessageProvider } from './context/MessageContext'
import { AuthProvider } from './context/AuthContext'
import { PostsContext, PostsProvider } from './context/PostsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <MessageProvider>
        <AuthProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </AuthProvider>
      </MessageProvider>
    </BrowserRouter>

)
