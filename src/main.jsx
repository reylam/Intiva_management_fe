import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './layout.jsx'
// import App from './layout2.jsx'
// import App from './roblox/roblox.jsx'
// import App from './index.jsx'
import App from './admin_dashboard.jsx' 
// import App from './adidas.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
