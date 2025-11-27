import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './Converter.css'
// import App from './App.jsx'
// import App2 from './App2.jsx'
import Converter1 from './Converter1.jsx'
import Converter2 from './Converter2.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root2')).render(
//   <StrictMode>
//     <App2 />
//   </StrictMode>,
// )

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
