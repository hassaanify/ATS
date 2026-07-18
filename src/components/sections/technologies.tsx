'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'ALD', description: 'Atomic Layer Deposition', category: 'deposition' },
  { name: 'CVD', description: 'Chemical Vapor Deposition', category: 'deposition' },
  { name: 'PECVD', description: 'Plasma Enhanced CVD', category: 'deposition' },
  { name: 'RIE', description: 'Reactive Ion Etching', category: 'etching' },
  { name: 'ICP', description: 'Inductively Coupled Plasma', category: 'etching' },
  { name: 'ALE', description: 'Atomic Layer Etching', category: 'etching' },
  { name: 'SEM', description: 'Scanning Electron Microscopy', category: 'analysis' },
  { name: 'TEM', description: 'Transmission Electron Microscopy', category: 'analysis' },
  { name: 'XPS', description: 'X-ray Photoelectron Spectroscopy', category: 'analysis' },
  { name: 'XRD', description: 'X-ray Diffraction', category: 'analysis' }
]

const categoryColors = {
  deposition: 'from-blue-600 to-teal-600',
  etching: 'from-blue-500 to-cyan-500',
  analysis: 'from-teal-500 to-emerald-500'
}

export function TechnologiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/10 to-teal-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Advanced <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our technology ecosystem spans cutting-edge deposition, etching, and analytical techniques 
            for comprehensive semiconductor process development.
          </motion.p>
        </motion.div>

        {/* Technology Network Visualization */}
        <div className="relative mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className={`glass-morphism rounded-xl p-6 text-center cursor-pointer hover:glow-blue transition-all duration-300`}>
                  {/* Technology Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${categoryColors[tech.category as keyof typeof categoryColors]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm">{tech.name}</span>
                  </div>
                  
                  {/* Technology Name */}
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {tech.description}
                  </h3>
                  
                  {/* Category Indicator */}
                  <div className="text-xs text-gray-400 capitalize">
                    {tech.category}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
            {/* Dynamic connection lines between technology nodes */}
            {technologies.map((_, index) => {
              if (index < technologies.length - 1) {
                const isEven = index % 2 === 0
                return (
                  <motion.path
                    key={index}
                    d={`M${50 + (index % 5) * 200} ${100 + Math.floor(index / 5) * 150} 
                        Q${150 + (index % 5) * 200} ${125 + Math.floor(index / 5) * 150} 
                        ${250 + ((index + 1) % 5) * 200} ${100 + Math.floor((index + 1) / 5) * 150}`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                )
              }
              return null
            })}
          </svg>
        </div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              category: 'Deposition Technologies',
              gradient: 'from-blue-600 to-teal-600',
              description: 'Precision thin film growth with atomic-level control',
              techs: ['ALD', 'CVD', 'PECVD']
            },
            {
              category: 'Etching & Processing',
              gradient: 'from-blue-500 to-cyan-500',
              description: 'Advanced material removal and surface modification',
              techs: ['RIE', 'ICP', 'ALE']
            },
            {
              category: 'Analytical Techniques',
              gradient: 'from-teal-500 to-emerald-500',
              description: 'Comprehensive materials characterization and analysis',
              techs: ['SEM', 'TEM', 'XPS', 'XRD']
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-morphism rounded-xl p-6 text-center"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <div className="w-6 h-6 bg-white rounded-full opacity-80" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.category}</h3>
              <p className="text-gray-300 text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}