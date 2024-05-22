import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QRcontextProvider } from './context/QRcontext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QRcontextProvider><App/></QRcontextProvider>
  </React.StrictMode>
)
