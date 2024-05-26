import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <div className='max-w-[1980px] my-0 mx-auto'>
        <Navbar />

        <div>
            <Outlet />
        </div>



    </div>
  )
}

export default LandingPageLayout
