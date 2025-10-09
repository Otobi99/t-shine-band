import React from 'react'
import Hero from '../components/Hero'
import MemberHome from '../components/MemberHome'
import GalleryShowcase from '../components/common/GalleryShowcase'
import AboutBand from '../components/common/AboutBand'


const Home = () => {
  return (
    <>
      <Hero/>
      <AboutBand/>
      <MemberHome/>
      <GalleryShowcase/>
    </>
  )
}

export default Home