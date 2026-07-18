'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Layers, 
  Zap, 
  Microscope, 
  Settings, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react'

const expertiseAreas = [
  {
    icon: Layers,
    title: "Thin Film Deposition",
    technologies: ["ALD", "CVD", "PECVD"],
    description: "Advanced atomic layer deposition, chemical vapor deposition, and plasma-enhanced processes for precise thin film control."
  },
  {
    icon: Settings,
    title: "Semiconductor Fabrication",
    technologies: ["Process Integration", "Yield Optimization", "Manufacturing Support"],
    description: "Complete fabrication workflows from design to production with focus on yield enhancement and process reliability."
  },
  {
    icon: Zap,
    title: "Plasma Processing",
    technologies: ["RIE", "ICP", "ALE"],
    description: "Reactive ion etching, inductively coupled plasma, and atomic layer etching for precise material removal and surface modification."
  },
  {
    icon: Microscope,
    title: "Materials Characterization",
    technologies: ["SEM", "TEM", "XPS", "XRD"],
    description: "Comprehensive analytical techniques for structural, compositional, and surface analysis of advanced materials."
  },
  {
    icon: ShieldCheck,
    title: "Failure Analysis",
    technologies: ["Root Cause Investigation", "Process Troubleshooting"],
    description: "Systematic investigation methodologies to identify failure mechanisms and implement corrective solutions."
  },
  {
    icon: TrendingUp,
    title: "Device Optimization",
    technologies: ["Performance Benchmarking", "Reliability Improvement"],
    description: "Data-driven optimization strategies to enhance device performance, reliability, and manufacturing yield."
  }
]

export function ExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800" ref={ref}>
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
            Core <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our deep technical expertise spans the entire semiconductor development lifecycle, 
            from fundamental research to scalable manufacturing implementation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group glass-morphism rounded-xl p-6 hover:glow-blue transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <area.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {area.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {area.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {area.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}