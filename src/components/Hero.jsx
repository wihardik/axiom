import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 lg:px-8 overflow-hidden">
      {/* Accent diagonal shape */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 transform rotate-45 pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl relative z-10"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-teal/10 border border-teal/20 text-teal font-mono text-sm font-medium rounded-full">
            ✨ Design Platform
          </span>
        </motion.div>

        {/* Headline - Editorial serif */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 tracking-tight"
        >
          Design systems,
          <br />
          <span className="text-teal">refined</span>.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-charcoal/70 font-sans max-w-2xl mb-8 leading-relaxed"
        >
          Collaborate on editorial layouts, manage typography at scale, and publish with confidence. Built for teams who obsess over craft.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
          <button className="px-8 py-4 bg-teal text-cream font-mono font-semibold rounded-lg hover:shadow-2xl transition-shadow duration-300 text-base">
            Start Building
          </button>
          <button className="px-8 py-4 border-2 border-charcoal/30 text-charcoal font-mono font-semibold rounded-lg hover:border-charcoal/60 hover:bg-charcoal/5 transition-all duration-300 text-base">
            View Demo
          </button>
        </motion.div>

        {/* Stats row with asymmetry */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
        >
          {[
            { value: '2.4M', label: 'Designs' },
            { value: '12K+', label: 'Teams' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-serif font-bold">{stat.value}</p>
              <p className="text-sm text-charcoal/50 font-sans mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating card element - positioned asymmetrically */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-32 hidden lg:block"
      >
        <div className="w-80 h-64 bg-white/40 backdrop-blur border border-charcoal/10 rounded-2xl shadow-2xl p-6 transform -rotate-6">
          <div className="space-y-4">
            <div className="h-3 bg-charcoal/20 rounded-full w-2/3"></div>
            <div className="h-3 bg-charcoal/20 rounded-full w-full"></div>
            <div className="h-3 bg-charcoal/20 rounded-full w-3/4"></div>
            <div className="flex gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-teal"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="w-2 h-2 rounded-full bg-charcoal/30"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}