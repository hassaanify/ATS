'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Search, 
  ClipboardCheck, 
  Cog, 
  Microscope, 
  TrendingUp, 
  CheckCircle,
  ChevronDown 
} from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Comprehensive assessment of your technical requirements, challenges, and project objectives.",
    details: [
      "Technical requirements analysis",
      "Current process evaluation", 
      "Challenge identification",
      "Success criteria definition"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ClipboardCheck,
    title: "Technical Assessment",
    description: "Detailed evaluation of existing processes, materials, and equipment capabilities.",
    details: [
      "Process capability analysis",
      "Equipment evaluation",
      "Material characterization",
      "Gap analysis & recommendations"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cog,
    title: "Process Development",
    description: "Design and optimization of manufacturing processes tailored to your specific requirements.",
    details: [
      "Process design & modeling",
      "Recipe development",
      "Parameter optimization",
      "Process integration"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Microscope,
    title: "Characterization & Analysis",
    description: "Comprehensive testing and analysis to validate process performance and device characteristics.",
    details: [
      "Materials characterization",
      "Device performance testing",
      "Quality assessment",
      "Statistical analysis"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Iterative improvement of processes to achieve optimal yield, performance, and reliability.",
    details: [
      "Performance optimization",
      "Yield improvement",
      "Cost reduction",
      "Reliability enhancement"
    ],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: CheckCircle,
    title: "Manufacturing Readiness",
    description: "Preparation for production scale-up with comprehensive documentation and training.",
    details: [
      "Scale-up planning",
      "Documentation package",
      "Training & knowledge transfer",
      "Continuous support"
    ],
    color: "from-teal-500 to-blue-500"
  }
]

export function ProcessWorkflowSection() {
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10" ref={ref}>
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
            Our Process <span className="gradient-text">Workflow</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A systematic approach to semiconductor engineering that ensures optimal outcomes 
            from initial consultation to manufacturing readiness.
          </motion.p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center relative z-10`}>
                    <step.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full animate-pulse-slow" />
                  

                </div>

                {/* Content */}
                <div className="flex-1 glass-morphism rounded-xl p-6 lg:p-8 hover:glow-blue transition-all duration-300">
                  <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                      
                      {/* Details */}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 flex-shrink-0`} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                      <div className="w-16 h-16 lg:w-12 lg:h-12 border-4 border-white/20 rounded-full flex items-center justify-center">
                        <div className={`w-8 h-8 lg:w-6 lg:h-6 bg-gradient-to-r ${step.color} rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-8">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute"
                  >
                    <ChevronDown size={20} className="text-blue-400" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}