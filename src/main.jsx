import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Basic/App.jsx'
import Exercise from './Exercise/Exercise.jsx'
import  RouteExer  from './Routes/Routes.jsx'
import Nav from './Exercise/Test/components/Nav.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App /> */}
    {/* <Exercise/> */}
    {/* <RouteExer/> */}
    <Nav/>
  </StrictMode>,
)
