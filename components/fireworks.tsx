'use client'

import { useEffect, useState, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
  size: number
}

export default function Fireworks() {
  const [particles, setParticles] = useState<Particle[]>([])
  const nextParticleId = useRef(0)

  useEffect(() => {
    const createExplosion = () => {
      const isMobile = window.innerWidth < 768
      const colors = ['#FF1744', '#F50057', '#D500F9', '#651FFF', '#2979F3', '#00B0FF', '#00E5FF', '#1DE9B6', '#00E676', '#76FF03', '#FFEA00', '#FFC400', '#FF9100', '#FF3D00']
      const newParticles: Particle[] = []
      
      // Reduce density on mobile
      const explosionCount = isMobile ? (Math.random() > 0.5 ? 1 : 2) : (Math.random() > 0.5 ? 2 : 3)
      const particleCount = isMobile ? 20 : 30
      
      for (let exp = 0; exp < explosionCount; exp++) {
        // Keep explosions within safe screen bounds
        const startX = Math.random() * window.innerWidth
        const startY = Math.random() * (window.innerHeight * (isMobile ? 0.5 : 0.6))

        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 * i) / particleCount
          // Adjust velocity for screen size
          const baseVelocity = isMobile ? 2 : 3
          const velocity = baseVelocity + Math.random() * (isMobile ? 2 : 4)
          
          newParticles.push({
            id: nextParticleId.current++,
            x: startX,
            y: startY,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            life: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: isMobile ? 2 + Math.random() * 2 : 4 + Math.random() * 2 // Smaller particles on mobile
          })
        }
      }

      setParticles(prev => [...prev, ...newParticles])
    }

    // Create initial explosion
    createExplosion()

    // Create continuous explosions
    const explosionInterval = setInterval(createExplosion, 800)

    return () => clearInterval(explosionInterval)
  }, [])

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy + 0.1,
            vy: p.vy + 0.05,
            life: p.life - 0.015,
          }))
          .filter(p => p.life > 0)
      )
    }, 20)

    return () => clearInterval(animationFrame)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: Math.max(0, particle.life),
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}
