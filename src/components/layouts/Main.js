import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Main() {
  return (
    <div className='w-[480px] mx-auto'>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}
