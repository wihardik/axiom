import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-charcoal/10 py-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-start justify-between gap-4 hover:opacity-70 transition-opacity duration-200 group"
      >
        <h3 className="text-lg font-serif font-bold leading-relaxed">{question}</h3>
        <span className="text-2xl text-teal flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-charcoal/60 leading-relaxed mt-4 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const faqs = [
    {
      question: 'How long does it take to set up a design system?',
      answer:
        'Most teams are up and running within a few hours. We provide templates and migration guides to accelerate onboarding. Our support team is available to help with complex setups.',
    },
    {
      question: 'Can we export design tokens and use them in our code?',
      answer:
        'Yes. Prism generates tokens in CSS, JSON, and JavaScript formats. These integrate directly with your development workflow and stay in sync whenever the design system updates.',
    },
    {
      question: 'What happens to my data if I cancel my subscription?',
      answer:
        'Your data remains yours. You can export everything in standard formats before your subscription ends. We make it easy to migrate to another platform if you choose to.',
    },
    {
      question: 'Do you offer on-premise or self-hosted deployment?',
      answer:
        'Yes, on-premise deployment is available on our Enterprise plan. This includes dedicated infrastructure, custom configurations, and priority support from our team.',
    },
    {
      question: 'How does real-time collaboration work?',
      answer:
        'When a team member makes changes, updates are pushed live to all connected editors and viewers. Comments, version history, and activity feeds keep everyone informed in real-time.',
    },
    {
      question: 'What integrations do you support?',
      answer:
        'We integrate with Figma, Sketch, Adobe XD, Slack, GitHub, and more. Our API allows you to build custom integrations tailored to your workflow.',
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-charcoal/2 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-mono text-sm font-bold tracking-widest">FAQ</span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mt-4">
            Questions? We have answers.
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/70 mb-6">
            Can't find what you're looking for?
          </p>
          <button className="px-8 py-3 border-2 border-charcoal/30 text-charcoal font-mono font-semibold rounded-lg hover:border-charcoal/60 hover:bg-charcoal/5 transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>

      {/* Accent element */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 transform rotate-45 pointer-events-none"></div>
    </section>
  )
}