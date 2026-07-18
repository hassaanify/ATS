'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Zap, Target } from 'lucide-react'
import { getAssetPath } from '@/lib/path-helper'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="about" className="py-24 bg-slate-900/50" ref={ref}>
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
            About <span className="gradient-text">ATS Global</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Leading Semiconductor Innovation
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              ATS Global is a premier semiconductor and materials engineering consultancy 
              specializing in cutting-edge process development, advanced materials characterization, 
              device optimization, and comprehensive reliability analysis.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We provide world-class technical expertise in thin film deposition technologies, 
              plasma processing systems, semiconductor fabrication workflows, failure analysis 
              methodologies, and scalable manufacturing solutions for advanced electronic and 
              optoelectronic devices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to bridge the gap between groundbreaking research and practical 
              manufacturing implementation, enabling our clients to accelerate innovation and 
              achieve manufacturing excellence.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="glass-morphism rounded-2xl p-8 glow-blue">
              <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-white/10">
                <img
                  src={getAssetPath('images/semiconductors/af.png')}
                  alt="ATS Global Semiconductor Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12"
          >
            Company Timeline
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="glass-morphism rounded-2xl p-8 max-w-md">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Calendar className="text-blue-400" size={32} />
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">2025</div>
                  <div className="text-blue-200">Company Founded</div>
                </div>
              </div>
              <p className="text-gray-300 text-center">
                ATS Global LLC established as a leading semiconductor engineering consultancy
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: Target,
              title: "Precision Engineering",
              description: "Advanced process optimization with nanometer-scale precision"
            },
            {
              icon: Zap,
              title: "Rapid Innovation",
              description: "Accelerated development cycles from concept to manufacturing"
            },
            {
              icon: Calendar,
              title: "Proven Expertise",
              description: "Decades of combined experience in semiconductor technologies"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-morphism rounded-xl p-6 text-center hover:glow-blue transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}