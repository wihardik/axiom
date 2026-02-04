import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PricingCard = ({ tier, price, description, features, highlighted, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-2xl p-8 lg:p-10 border transition-all duration-300 ${
        highlighted
          ? 'bg-charcoal text-cream border-charcoal shadow-2xl lg:scale-105'
          : 'bg-white/30 backdrop-blur border-charcoal/10 text-charcoal'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent text-charcoal text-xs font-mono font-bold rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold">{tier}</h3>
        <p className={`text-sm mt-2 ${highlighted ? 'text-cream/70' : 'text-charcoal/60'}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl lg:text-5xl font-serif font-bold">${price}</span>
        <span className={`text-sm ml-2 ${highlighted ? 'text-cream/60' : 'text-charcoal/60'}`}>
          /month
        </span>
      </div>

      <button
        className={`w-full py-3 font-mono font-semibold rounded-lg mb-8 transition-all duration-300 ${
          highlighted
            ? 'bg-accent text-charcoal hover:shadow-lg'
            : 'border-2 border-current hover:bg-charcoal/5'
        }`}
      >
        Start Trial
      </button>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`text-lg mt-0.5 ${highlighted ? 'text-accent' : 'text-teal'}`}>
              ✓
            </span>
            <span className="text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const tiers = [
    {
      tier: 'Starter',
      price: '29',
      description: 'For individual designers',
      highlighted: false,
      features: [
        'Up to 5 projects',
        'Basic components library',
        'Team collaboration (2 seats)',
        'Design tokens export',
        'Email support',
      ],
    },
    {
      tier: 'Studio',
      price: '99',
      description: 'For growing design teams',
      highlighted: true,
      features: [
        'Unlimited projects',
        'Full component library',
        'Team collaboration (15 seats)',
        'Advanced design tokens',
        'API access',
        'Priority support',
        'Custom integrations',
      ],
    },
    {
      tier: 'Enterprise',
      price: '299',
      description: 'For large organizations',
      highlighted: false,
      features: [
        'Everything in Studio',
        'Unlimited team seats',
        'On-premise deployment',
        'SSO & advanced security',
        'Custom training',
        '24/7 dedicated support',
        'SLA guarantee',
      ],
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-charcoal/2 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-mono text-sm font-bold tracking-widest">PRICING</span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6">
            Fair pricing for all sizes.
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Start free, upgrade when you need. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, i) => (
            <PricingCard key={i} {...tier} delay={i * 0.15} />
          ))}
        </div>
      </div>

      {/* Accent element */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-accent/5 transform rotate-45 pointer-events-none"></div>
    </section>
  )
}