import React from 'react'
import Hero from "./componnts/Hero";
import AdvancedAi from "./componnts/Advancedai";
import Netural from "./componnts/Netural";
import AISection from "./componnts/AiSection";
import Pricing from "./componnts/Pricing";
import ContactForm from "./componnts/Contact";


const Home = () => {
  return (
    <div>
      <Hero />
       <AdvancedAi /> 
      <Netural />
      <AISection /> 
      <Pricing />
      <ContactForm />
    </div>
  )
}

export default Home

