
import React from 'react'
import { Outlet } from 'react-router-dom'
import OurSideBar from './OurSideBar'




const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
         <OurSideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout