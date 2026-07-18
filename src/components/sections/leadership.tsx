'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail, Award, BookOpen, Users, Briefcase } from 'lucide-react'

export function LeadershipSection() {
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

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Leading expert in semiconductor process development and materials characterization"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Published researcher with extensive expertise in thin film technologies"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Proven track record of leading high-performance engineering teams"
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "Deep experience across semiconductor manufacturing and R&D environments"
    }
  ]

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
            Leadership <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the visionary leader driving innovation in semiconductor engineering and materials science.
          </motion.p>
        </motion.div>

        {/* CEO Profile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl p-8 md:p-12 glow-blue"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Photo */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <div className="relative mx-auto max-w-sm">
                  <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl flex items-center justify-center border-2 border-white/10 overflow-hidden">
                    {/* CEO Image - h.png */}
                    <img
                      src="/images/leadership/h.png"
                      alt="Muhammad Hassan Tahir - CEO & Founder of ATS Global LLC"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        // If image fails to load, show placeholder
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="text-center text-white/80 hidden">
                      <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users size={40} className="text-blue-400" />
                      </div>
                      <p className="text-sm font-medium">[UPLOAD h.png]</p>
                      <p className="text-xs text-gray-400 mt-2">Place h.png in /public/images/leadership/</p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-40" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 space-y-6"
              >
                {/* Name and Title */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Muhammad Hassan Tahir
                  </h3>
                  <div className="text-xl text-blue-300 font-semibold mb-4">
                    CEO & Founder
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/muhammad-hassaan-tahir/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href="mailto:Hassaan.usc@gmail.com"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Email Contact"
                    >
                      <Mail size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Muhammad Hassan Tahir is the visionary founder and CEO of ATS Global LLC, 
                    bringing decades of expertise in semiconductor process development, materials 
                    characterization, and advanced manufacturing technologies.
                  </p>
                  <p>
                    As a recognized leader in the semiconductor industry, Muhammad has driven 
                    groundbreaking innovations in thin film deposition, plasma processing, and 
                    device optimization across multiple technology sectors.
                  </p>
                  <p>
                    His commitment to bridging the gap between cutting-edge research and 
                    practical manufacturing solutions has positioned ATS Global as a trusted 
                    partner for leading technology companies and research institutions worldwide.
                  </p>
                </div>

                {/* Expertise Areas */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Process Development",
                    "Materials Science", 
                    "Semiconductor Fabrication",
                    "Reliability Engineering",
                    "Technical Leadership"
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Leadership Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-morphism rounded-xl p-6 text-center hover:glow-purple transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon size={24} className="text-white" />
                  </div>
              <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              "Engineering Tomorrow's Technology Today"
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "Our mission is to accelerate semiconductor innovation by providing world-class 
              engineering expertise, cutting-edge process development, and practical solutions 
              that transform groundbreaking research into manufacturable reality."
            </p>
            <div className="text-right mt-6">
              <div className="text-blue-300 font-semibold">— Muhammad Hassan Tahir</div>
              <div className="text-gray-400 text-sm">CEO & Founder, ATS Global LLC</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}