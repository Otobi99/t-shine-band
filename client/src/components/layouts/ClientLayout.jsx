import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'

const ClientLayout = () => {
  return (
   <>
        <div className='bg-black px-2'>
            <Header/>
        </div>
        <>
            <Outlet/>
        </>
        <Footer/>
    </>
  )
}

export default ClientLayout