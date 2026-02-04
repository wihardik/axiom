import React from 'react'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-hidden bg-cream text-charcoal">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}