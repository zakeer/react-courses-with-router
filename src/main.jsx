import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const COURSES_ENDPOINT = `/courses.json`;

// fetch(COURSES_ENDPOINT)
//   .then(function(res) {
//     return res.json();
//   })
//   .then((resInJSON) => {
//     createRoot(document.getElementById('root')).render(
//       <StrictMode>
//         <App courses={resInJSON} />
//       </StrictMode>,
//     )
//   })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


