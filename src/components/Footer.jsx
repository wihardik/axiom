import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Docs', 'Status', 'Community'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'DPA'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="border-t border-charcoal/10 py-24 px-6 lg:px-8 bg-charcoal/1">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">
              Ready to elevate your design system?
            </h3>
          </div>
          <button className="px-8 py-4 bg-teal text-cream font-mono font-semibold rounded-lg hover:shadow-2xl transition-shadow duration-300 text-base w-fit">
            Get Started Free
          </button>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
        >
          {Object.entries(links).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-serif font-bold mb-6">{category}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-charcoal/60 hover:text-charcoal transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with asymmetry */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-teal transform rotate-45"></div>
            <span className="text-base font-serif font-bold">Prism</span>
          </div>

          <p className="text-charcoal/50 text-sm">
            © 2024 Prism Design Systems. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-charcoal/50 hover:text-charcoal transition-colors duration-200 text-sm font-mono"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}