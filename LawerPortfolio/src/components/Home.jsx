import React from 'react'
import HeroSection from '../components/content/HeroSection'
import Vision from '../components/content/Vision'
import WhyUs from '../components/content/WhyUs'
import OurPartners from '../components/content/OurPartners'
import CardSection from '../components/content/CardSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Vision/>
      <CardSection/>
      <WhyUs/>
      <OurPartners/>
      
    </div>
  )
}

export default Home
