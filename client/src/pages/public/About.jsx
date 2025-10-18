import Breadcrumb from '../../components/common/Breadcrumb'
import AboutSection from '../../components/home/AboutSection'
import MemberSection from '../../components/home/MemberSection'
import ServicesSection from '../../components/about/ServicesSection'
import WhyChooseSection from '../../components/about/WhyChooseSection'
import MiniVideoSection from '../../components/about/MiniVideoSection'

const About = () => {
  return (
    <>
         <Breadcrumb
                title="Về chúng tôi"
                image="https://res.cloudinary.com/dttqah17o/image/upload/v1760690366/about-bg_titybb.jpg"
        />
        <AboutSection/>
        <ServicesSection/>
        <MiniVideoSection/>
        <MemberSection/>
        <WhyChooseSection/>
    </>
  )
}

export default About