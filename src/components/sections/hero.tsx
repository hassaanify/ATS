'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ParticleBackground, CircuitPattern, WaferVisualization } from '@/components/animations/particles'
import { getAssetPath } from '@/lib/path-helper'

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-teal-900/20">
      {/* Background Animations */}
      <ParticleBackground />
      <CircuitPattern />
      <WaferVisualization />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block p-6 glass-morphism rounded-2xl mb-6">
            <img
              src={getAssetPath('images/logo/LOGO.png')}
              alt="ATS Global LLC Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Company Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            ATS Global LLC
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide">
            Process Development • Materials Characterization • Device Optimization
          </p>
        </motion.div>

        {/* Main Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Engineering the Future of{' '}
            <span className="gradient-text">Semiconductor Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced semiconductor process development, materials characterization, 
            reliability engineering, and scalable manufacturing solutions for the next generation 
            of electronic and optoelectronic devices.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" variant="primary" className="text-lg px-8 py-4" onClick={scrollToContact}>
            Get in Touch
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={scrollToServices}>
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </section>
  )
}