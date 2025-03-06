import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import StorecontextProvider from './components/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StorecontextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </StorecontextProvider>
  </BrowserRouter>
)
