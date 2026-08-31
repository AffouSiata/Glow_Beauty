import React from 'react'
import Header from '../components/Home/Header'
import AboutHero from '../components/About/AboutHero'
import AboutSection from '../components/About/AboutSection'
import MissionSection from '../components/About/MissionSection'
import WhyChooseUs from '../components/Home/Whychoose'
import Testimonials from '../components/Home/temoin/Testimonials'
import Footer from '../components/Footer'
function About() {
  return (
    <>
        <Header />
        <AboutHero />
        <AboutSection />
        <MissionSection />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
    </>
  )
}

export default About