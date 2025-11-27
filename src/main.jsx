import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Converter.css'
import Converter1 from './Converter1.jsx'
import Converter2 from './Converter2.jsx'

createRoot(document.getElementById('converter1')).render(
  <StrictMode>
    <Converter1 />
  </StrictMode>,
)

createRoot(document.getElementById('converter2')).render(
  <StrictMode>
    <Converter2 />
  </StrictMode>,
)
