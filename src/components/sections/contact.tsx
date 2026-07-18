'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    industry: '',
    projectDescription: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Hassaan.usc@gmail.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "United States",
      description: "Serving clients globally"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We prioritize rapid communication"
    }
  ]

  const industries = [
    "Semiconductor Manufacturing",
    "Optoelectronics", 
    "Advanced Materials",
    "Research Institution",
    "University",
    "Deep Tech Startup",
    "R&D Laboratory",
    "Electronics Industry",
    "Other"
  ]

  return (
    <section className="py-24 bg-slate-800/50" ref={ref}>
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to accelerate your semiconductor innovation? Let's discuss how our expertise 
            can drive your next breakthrough.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 glass-morphism rounded-lg hover:glow-blue transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      {info.title === "Email" ? (
                        <a 
                          href={`mailto:${info.value}`}
                          className="text-blue-300 font-medium hover:text-blue-200 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-blue-300 font-medium">{info.value}</p>
                      )}
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Types */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">How We Can Help</h3>
              <div className="space-y-4">
                {[
                  "Schedule a Consultation",
                  "Business Inquiries", 
                  "Partnership Opportunities",
                  "Technical Discussions",
                  "Project Collaboration"
                ].map((type, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    <span>{type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-morphism rounded-2xl p-8 glow-purple"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry, index) => (
                        <option key={index} value={industry} className="bg-slate-800 text-white">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please describe your project requirements, challenges, or how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 text-lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={48} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your inquiry. Our team will review your message and respond within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      industry: '',
                      projectDescription: ''
                    })
                  }}
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}