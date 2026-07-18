'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cpu, 
  TrendingUp, 
  Microscope, 
  Shield, 
  AlertTriangle, 
  Factory 
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: "Semiconductor Process Consulting",
    description: "Expert guidance on ALD, CVD, PECVD, plasma processing, and complete fabrication workflows for next-generation devices.",
    features: [
      "Process development & optimization",
      "Equipment selection & setup", 
      "Recipe development",
      "Process integration strategies"
    ]
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description: "Data-driven approaches to improve manufacturing yield, device performance, and process reliability across all production stages.",
    features: [
      "Yield enhancement programs",
      "Statistical process control",
      "Performance benchmarking",
      "Cost reduction strategies"
    ]
  },
  {
    icon: Microscope,
    title: "Materials Characterization",
    description: "Comprehensive analytical support using advanced SEM, TEM, XPS, XRD, and specialized metrology techniques.",
    features: [
      "Structural analysis",
      "Compositional characterization",
      "Surface analysis",
      "Defect identification"
    ]
  },
  {
    icon: Shield,
    title: "Reliability Engineering",
    description: "Advanced device degradation studies, lifetime prediction modeling, and comprehensive reliability assessment programs.",
    features: [
      "Accelerated life testing",
      "Degradation mechanisms analysis",
      "Lifetime modeling",
      "Reliability qualification"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Failure Analysis",
    description: "Systematic engineering investigations with advanced analytical techniques for rapid root-cause identification and solution implementation.",
    features: [
      "Root cause analysis",
      "Failure mechanism identification",
      "Corrective action plans",
      "Prevention strategies"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing Scale-Up",
    description: "Seamless transition from research-scale processes to high-volume manufacturing with maintained quality and performance.",
    features: [
      "Pilot-to-production scaling",
      "Manufacturing readiness assessment",
      "Supply chain optimization",
      "Quality system development"
    ]
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="services" className="py-24 bg-slate-800/50" ref={ref}>
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
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive semiconductor engineering solutions from concept to production, 
            delivered by industry experts with decades of combined experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-morphism rounded-xl p-8 hover:glow-purple transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}