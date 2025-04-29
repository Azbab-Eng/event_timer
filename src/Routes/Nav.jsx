import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Nav() {
    let navigate = useNavigate()
    const nav = ()=>{
        navigate ("/settings")
    }
  return (
    <>
        <button onClick={nav}>Go to Settings</button>
        <nav>
        <Link to="2" >Dashboard</Link>
        <Link to="profile" >Profile</Link>
        <Link to="settings" >Settings</Link>
        <Outlet/>
        </nav>
    </>
  )
}

export default Nav
