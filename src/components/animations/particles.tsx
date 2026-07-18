'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export function CircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10,50 L90,50 M50,10 L50,90 M30,30 L70,30 M30,70 L70,70"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500/30"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-blue-400/50" />
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-purple-400/50" />
            <circle cx="70" cy="70" r="2" fill="currentColor" className="text-blue-400/50" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}

export function WaferVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative w-96 h-96"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
          {/* Wafer grid pattern */}
          <div className="absolute inset-4 rounded-full overflow-hidden">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-1 p-4">
              {Array.from({ length: 64 }, (_, i) => (
                <motion.div
                  key={i}
                  className="bg-blue-400/10 rounded-sm border border-blue-400/20"
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}