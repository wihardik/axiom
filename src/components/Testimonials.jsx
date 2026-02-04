import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TestimonialCard = ({ quote, author, role, company, delay }) => {
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
      className="p-8 bg-white/40 backdrop-blur border border-charcoal/10 rounded-xl hover:border-teal/30 transition-all duration-300"
    >
      <p className="text-charcoal/80 leading-relaxed mb-6 italic font-serif text-base">
        "{quote}"
      </p>
      <div>
        <p className="font-serif font-bold">{author}</p>
        <p className="text-charcoal/60 text-sm">{role} at {company}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const testimonials = [
    {
      quote:
        "Prism transformed how our team manages design systems. What used to take weeks now happens in days.",
      author: 'Sarah Chen',
      role: 'Design Director',
      company: 'Lunar',
    },
    {
      quote:
        "The typography scaling feature alone has saved us countless hours. It's a game changer for consistency.",
      author: 'Marcus Rodriguez',
      role: 'Lead Designer',
      company: 'Helix',
    },
    {
      quote:
        "Finally, a tool that speaks the language of design systems. Prism gets it. Our team loves it.",
      author: 'Elena Volkov',
      role: 'Design Systems Manager',
      company: 'Velocity',
    },
    {
      quote:
        "The developer export feature eliminated friction between design and engineering. Handoff is now seamless.",
      author: 'James Kim',
      role: 'Head of Design',
      company: 'Quantum',
    },
    {
      quote:
        "We reduced design debt by 60% in three months. The audit tools are invaluable for maintaining quality.",
      author: 'Priya Patel',
      role: 'Design Lead',
      company: 'Nimbus',
    },
    {
      quote:
        "The collaboration features make working across timezones effortless. Real-time sync is a lifesaver.",
      author: 'David Fischer',
      role: 'Creative Director',
      company: 'Forge',
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header with asymmetry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <div>
          <span className="text-accent font-mono text-sm font-bold tracking-widest">
            TESTIMONIALS
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mt-4">
            Loved by creative minds.
          </h2>
        </div>
        <p className="text-charcoal/60 text-lg leading-relaxed pt-2">
          Teams from startups to Fortune 500 companies trust Prism to power their design operations. See what they have to say.
        </p>
      </motion.div>

      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} delay={i * 0.08} />
        ))}
      </div>

      {/* Diagonal accent */}
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-teal/5 transform rotate-45 pointer-events-none"></div>
    </section>
  )
}