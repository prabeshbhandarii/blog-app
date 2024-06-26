import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { MessageProvider } from './context/MessageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <MessageProvider>
        <App />
      </MessageProvider>
    </BrowserRouter>

)
