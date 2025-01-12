import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/reset.css'
import 'modern-normalize/modern-normalize.css';
import App from './Components/App/App.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
