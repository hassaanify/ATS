'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Wrench 
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Deep Technical Expertise",
    description: "Decades of combined experience in semiconductor process development, materials science, and advanced manufacturing technologies.",
    benefits: [
      "PhD-level technical depth",
      "Industry-proven methodologies", 
      "Cutting-edge technology knowledge",
      "Cross-disciplinary expertise"
    ]
  },
  {
    icon: Target,
    title: "Industry-Focused Solutions",
    description: "Tailored approaches that address specific industry challenges with practical, implementable solutions for real-world applications.",
    benefits: [
      "Sector-specific expertise",
      "Customized methodologies",
      "Market-aware solutions",
      "Regulatory compliance support"
    ]
  },
  {
    icon: TrendingUp,
    title: "Research to Manufacturing Support",
    description: "Seamless transition support from fundamental research through prototype development to high-volume manufacturing implementation.",
    benefits: [
      "End-to-end process development",
      "Scale-up expertise",
      "Technology transfer support",
      "Manufacturing readiness assessment"
    ]
  },
  {
    icon: BarChart3,
    title: "Data-Driven Engineering",
    description: "Advanced analytics and statistical process control methodologies to optimize performance, yield, and reliability outcomes.",
    benefits: [
      "Statistical analysis",
      "Process optimization algorithms",
      "Predictive modeling",
      "Performance benchmarking"
    ]
  },
  {
    icon: Shield,
    title: "Reliability and Performance Focus",
    description: "Comprehensive reliability engineering and lifetime prediction to ensure long-term device performance and customer satisfaction.",
    benefits: [
      "Accelerated life testing",
      "Degradation mechanism analysis",
      "Lifetime modeling",
      "Quality assurance protocols"
    ]
  },
  {
    icon: Wrench,
    title: "Practical Problem Solving",
    description: "Hands-on approach to complex engineering challenges with focus on actionable solutions and measurable outcomes.",
    benefits: [
      "Root cause analysis",
      "Implementation support",
      "Training and knowledge transfer",
      "Continuous improvement programs"
    ]
  }
]

export function WhyATSSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900" ref={ref}>
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
            Why Choose <span className="gradient-text">ATS Global</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our unique combination of deep technical expertise, industry experience, 
            and practical problem-solving approach delivers exceptional results for our clients.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group glass-morphism rounded-xl p-8 hover:glow-purple transition-all duration-500"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="glass-morphism rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Accelerate Your Innovation Timeline
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leverage ATS Global's proven methodologies and extensive experience to accelerate your 
              development timeline, reduce technical risks, and achieve faster time-to-market for 
              your innovative semiconductor technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}