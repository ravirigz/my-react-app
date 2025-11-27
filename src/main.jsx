import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Converter.css'
import Converter1 from './Converter.jsx'
// import Converter2 from './Converter2.jsx'

createRoot(document.getElementById('converter')).render(
  <StrictMode>
    <Converter1 />
  </StrictMode>,
)
