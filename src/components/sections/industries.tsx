'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cpu, 
  Lightbulb, 
  Atom, 
  GraduationCap, 
  Building, 
  Rocket, 
  FlaskConical, 
  Zap 
} from 'lucide-react'

const industries = [
  {
    icon: Cpu,
    title: "Semiconductor Manufacturing",
    description: "Advanced process development for logic, memory, and power devices with focus on yield optimization and reliability.",
    applications: ["Logic ICs", "Memory Devices", "Power Electronics", "RF Components"]
  },
  {
    icon: Lightbulb,
    title: "Optoelectronics",
    description: "Specialized solutions for LED, laser, photodetector, and solar cell manufacturing with precision optical performance.",
    applications: ["LEDs & OLEDs", "Laser Diodes", "Photodetectors", "Solar Cells"]
  },
  {
    icon: Atom,
    title: "Advanced Materials",
    description: "Novel material development and characterization for next-generation electronic and energy applications.",
    applications: ["2D Materials", "Quantum Dots", "Perovskites", "Wide Bandgap Semiconductors"]
  },
  {
    icon: GraduationCap,
    title: "Research Institutions",
    description: "Collaborative research partnerships with universities and institutes for fundamental and applied research projects.",
    applications: ["Basic Research", "Technology Development", "Student Training", "Equipment Support"]
  },
  {
    icon: Building,
    title: "Universities",
    description: "Educational support and advanced training programs for semiconductor engineering and materials science curricula.",
    applications: ["Curriculum Development", "Lab Setup", "Faculty Training", "Student Projects"]
  },
  {
    icon: Rocket,
    title: "Deep Tech Startups",
    description: "Rapid prototyping and scalable process development for emerging technology companies and innovative startups.",
    applications: ["Technology Validation", "Prototype Development", "Scale-up Support", "IP Development"]
  },
  {
    icon: FlaskConical,
    title: "R&D Laboratories",
    description: "Specialized consulting for corporate and government R&D labs developing next-generation technologies.",
    applications: ["Process Innovation", "Materials Research", "Technology Transfer", "Proof of Concept"]
  },
  {
    icon: Zap,
    title: "Electronics Industry",
    description: "Manufacturing optimization and reliability enhancement for consumer, automotive, and industrial electronics.",
    applications: ["Consumer Electronics", "Automotive", "Industrial IoT", "Medical Devices"]
  }
]

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 bg-slate-900/50" ref={ref}>
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
            Industries We <span className="gradient-text">Support</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From cutting-edge research institutions to high-volume manufacturing, 
            we provide specialized expertise across diverse technology sectors.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-morphism rounded-xl p-6 hover:glow-blue transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon size={24} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                {industry.description}
              </p>

              {/* Applications */}
              <div className="space-y-1">
                <h4 className="text-xs font-medium text-teal-300 uppercase tracking-wider">Key Applications</h4>
                {industry.applications.map((app, appIndex) => (
                  <div key={appIndex} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-1 h-1 bg-teal-400 rounded-full mr-2 flex-shrink-0" />
                    {app}
                  </div>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}