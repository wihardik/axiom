import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="p-8 border border-charcoal/10 hover:border-teal/30 rounded-xl transition-all duration-300 hover:shadow-lg group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-charcoal/60 leading-relaxed text-sm">{description}</p>
    </motion.div>
  )
}

export default function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'Design Systems',
      description: 'Build and maintain comprehensive design systems with version control and collaboration tools.',
    },
    {
      icon: '✏️',
      title: 'Typography Master',
      description: 'Scale typography across projects. Define families, weights, and scales once, apply everywhere.',
    },
    {
      icon: '🔄',
      title: 'Live Sync',
      description: 'Changes propagate in real-time. No more stale assets. Keep everyone on the same page.',
    },
    {
      icon: '📦',
      title: 'Component Library',
      description: 'Reusable component framework with built-in variants, states, and responsive modes.',
    },
    {
      icon: '🔍',
      title: 'Audit & Analytics',
      description: 'Track design debt, spot inconsistencies, and get actionable insights on system health.',
    },
    {
      icon: '🚀',
      title: 'Developer Export',
      description: 'Generate code, design tokens, and documentation automatically for seamless handoff.',
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section label and heading with asymmetry */}
      <div className="mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-sm font-bold tracking-widest"
        >
          CAPABILITIES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-serif font-bold mt-4 max-w-3xl"
        >
          Everything you need to scale design.
        </motion.h2>
      </div>

      {/* Grid with asymmetrical layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} delay={i * 0.1} />
        ))}
      </div>

      {/* Diagonal accent element */}
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-teal/5 transform rotate-45 pointer-events-none"></div>
    </section>
  )
}