import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import AboutSection from '../../components/home/AboutSection'
import MemberSection from '../../components/home/MemberSection'

const About = () => {
  return (
    <>
         <Breadcrumb
                title="Về chúng tôi"
                image="https://res.cloudinary.com/dttqah17o/image/upload/v1760690366/about-bg_titybb.jpg"
        />
        <AboutSection/>
        <MemberSection/>
    </>
  )
}

export default About