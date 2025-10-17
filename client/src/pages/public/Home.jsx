import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import AboutSection from '../../components/home/AboutSection'
import MemberSection from '../../components/home/MemberSection'
import BandVideo from '../../components/home/BandVideo'
import ShowSection from '../../components/home/ShowSection'
import Booking from '../../components/common/Booking'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <MemberSection/>
      <BandVideo/>
      <ShowSection/>
      <Booking/>
    </div>
  )
}

export default Home