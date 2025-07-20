import React from 'react'
// import "./Nav.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.jpg"

function Nav() {
  return (
    <>
        <nav>
            <div className='left'><Link><img src={logo} alt="" /></Link></div>
            <div className='middle'>
                <ul>
                    <li><Link>How we work</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Resources</Link></li>
                </ul>
            </div>
            <div className='right'>
                <button className='log'>Log in</button>
                <button className='sign'>Sign up</button>
            </div>
        </nav>
    </>
  )
}

export default Nav
