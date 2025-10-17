import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import AboutSection from '../../components/home/AboutSection'
import MemberSection from '../../components/home/MemberSection'
import BandVideo from '../../components/home/BandVideo'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <MemberSection/>
      <BandVideo/>
    </div>
  )
}

export default Home