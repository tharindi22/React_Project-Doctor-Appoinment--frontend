import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       <img src="{assets.logo}" alt="" />
       
       <ul>
        <NavLinkvLink>
          <li>Home</li>
          <hr />
        </NavLinkvLink>
        <NavLinkvLink>
          <li>All Doctors</li>
          <hr />
        </NavLinkvLink>
        <NavLinkvLink>
          <li>About</li>
          <hr />
        </NavLinkvLink>
        <NavLinkvLink>
          <li>Contact</li>
          <hr />
        </NavLinkvLink>
       </ul>
       <div>
        <button>Create account</button>
       </div>
    </div>
  )
}

export default Navbar