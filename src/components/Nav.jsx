import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='flex items-center justify-center font-bold text-2xl gap-20'>
      
         <NavLink to={"/about"}    state={{data:"name"}} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4  border-pink-600" : ""
          }
         >About </NavLink>

<NavLink to={"/"}    state={{data:"name"}} 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4  border-pink-600" : ""
          }
         >Home </NavLink>
         
    </div>
  )
}