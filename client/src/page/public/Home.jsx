import React from 'react'
import HeroSection from '../../components/section/HeroSection'
import MemberSection from '../../components/section/MemberSection'

const Home = () => {
  return (
    <div className='w-full py-24 bg-gradient-to-br from-white via-blue-50 to-white text-blue-800 overflow-hidden'>
      <HeroSection/>
      <MemberSection/>
    </div>
  )
}

export default Home