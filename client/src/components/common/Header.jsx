import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container mx-auto px-4 md:px-0 flex justify-between items-center py-3'>
        <div className='w-30 h-30 p-1 border-2 rounded-md border-blue-600 bg-gray-300'>
            <img src={logo} alt="T Shine Band" className='w-full h-full object-cover'/>
        </div>
        <div className='flex items-center space-x-3 text-white'>
            <Link>Trang chủ</Link>
            <Link>Danh mục</Link>
            <Link>Thành viên</Link>
            <Link>Thư viện</Link>
            <Link>Liên hệ</Link>
        </div>
    </div>
  )
}

export default Header