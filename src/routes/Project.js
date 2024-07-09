import React from 'react'
import HeroImg2 from '../components/HeroImg2';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCard from '../components/PricingCard';
import Work from "../components/Work"


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project