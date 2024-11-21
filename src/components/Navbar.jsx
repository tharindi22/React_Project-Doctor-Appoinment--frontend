import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
       <img className='w-44 cursor-pointer' src="{assets.logo}" alt="" />
       
       <ul className='hidden md:flex items-start gap-5 font-medium'>
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