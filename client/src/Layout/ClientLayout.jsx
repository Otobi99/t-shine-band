import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const ClientLayout = () => {
  return (
    <div className='w-full bg-gradient-to-br from-white via-blue-50 to-white text-blue-800 overflow-hidden'>
      <Header/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default ClientLayout