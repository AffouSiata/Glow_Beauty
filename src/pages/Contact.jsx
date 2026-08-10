import React from 'react'
import Header from '../components/Home/Header'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'


import Footer from '../components/Footer'
import { Contact2Icon } from 'lucide-react'

function Contact() {
  return (
    <>
        <Header />
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Footer />
    </>
  )
}

export default Contact