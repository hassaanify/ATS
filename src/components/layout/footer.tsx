'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About ATS Global', href: '#about' },
      { name: 'Leadership Team', href: '#leadership' },
      { name: 'Our Process', href: '#process' },
      { name: 'Contact Us', href: '#contact' }
    ],
    services: [
      { name: 'Process Consulting', href: '#services' },
      { name: 'Materials Characterization', href: '#services' },
      { name: 'Failure Analysis', href: '#services' },
      { name: 'Manufacturing Scale-Up', href: '#services' }
    ],
    expertise: [
      { name: 'Thin Film Deposition', href: '#expertise' },
      { name: 'Semiconductor Fabrication', href: '#expertise' },
      { name: 'Plasma Processing', href: '#expertise' },
      { name: 'Device Optimization', href: '#expertise' }
    ],
    industries: [
      { name: 'Semiconductor Manufacturing', href: '#industries' },
      { name: 'Optoelectronics', href: '#industries' },
      { name: 'Research Institutions', href: '#industries' },
      { name: 'Deep Tech Startups', href: '#industries' }
    ]
  }

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="mb-6">
                <img
                  src="/images/logo/LOGO.png"
                  alt="ATS Global LLC"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">ATS Global LLC</h3>
              <p className="text-blue-200 font-medium mb-4">
                Process Development • Materials Characterization • Device Optimization
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading semiconductor and materials engineering consultancy specializing in 
                advanced process development and manufacturing solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm">United States</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:Hassaan.usc@gmail.com" className="text-sm hover:text-blue-300 transition-colors">Hassaan.usc@gmail.com</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Expertise Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Expertise</h4>
              <ul className="space-y-2">
                {footerLinks.expertise.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Industries Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Industries</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.industries.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Media */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">Connect With Us</h5>
                <div className="flex space-x-3">
                  <motion.a
                    href="https://www.linkedin.com/in/muhammad-hassaan-tahir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="mailto:Hassaan.usc@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} className="text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400"
            >
              © 2025 ATS Global LLC. All rights reserved. | Engineering the Future of Semiconductor Innovation
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
              </div>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
      </div>
    </footer>
  )
}