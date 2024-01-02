import React from 'react'
import {useLocation } from 'react-router-dom'
import Nav from '../components/Nav'

export default function About() {
   const {state,pathname}=useLocation()


  return (
    <div>
        <Nav />
    <div className='ml-40 mt-40 h-screen text-2xl gap-5'>
    <h1>About page</h1>
    <p>path name{pathname}</p>
    <p>  state {state?.data}</p>
</div>
</div>
  )
}
