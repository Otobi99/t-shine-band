import React from 'react'
import HeroSection from '../../components/section/HeroSection'
import MemberSection from '../../components/section/MemberSection'
import SponsorSlider from '../../components/section/SponsorSlider'
import IntroSection from '../../components/section/IntroSection'
import FeatureVideoSection from '../../components/section/FeatureVideoSection'
import WhyChooseUs from '../../components/section/WhyChooseUs'
import ContactForm from '../../components/form/ContactForm'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <MemberSection/>
      <SponsorSlider/>
      <IntroSection/>
      <FeatureVideoSection/>
      <WhyChooseUs/>
    </>
  )
}

export default Home