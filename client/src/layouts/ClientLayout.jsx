import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const ClientLayout = () => {
  return (
    <div>
        <Header/>
        <main className='mt-25'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default ClientLayout