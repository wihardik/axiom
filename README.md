# Prism — Editorial SaaS Landing Page

A premium, design-forward SaaS landing page built with editorial/magazine aesthetic principles.

## Design Direction

**Editorial/Magazine with Sharp Minimal Accents** — High-contrast serif typography paired with clean sans-serif, asymmetrical layouts with diagonal accent shapes, refined grain texture, and a cohesive charcoal/cream/teal palette with burnt orange accent details.

### Visual Hierarchy
- **Headline Font**: Playfair Display (serif) — bold, editorial presence
- **Body Font**: Inter (sans) — clean, legible, neutral
- **Code Font**: Space Mono (monospace) — buttons, labels, technical elements

### Color Palette
- **Cream**: #F9F7F4 (background, premium feel)
- **Charcoal**: #1A1A1A (primary text, depth)
- **Teal**: #0D7377 (primary accent, CTAs)
- **Burnt Orange**: #E67E22 (secondary accent, highlights)

## Features

- **Sticky Navigation** — Logo and CTA button with scroll-triggered backdrop blur
- **Hero Section** — Editorial headline, subheading, dual CTAs, asymmetrical floating card
- **Features Grid** — 6-item scrolling animation with hover states
- **Pricing Tiers** — 3 tiers with "Most Popular" highlight (scaled, darkened)
- **Testimonials** — 6 quotes with staggered reveal
- **FAQ Accordion** — Smooth expand/collapse animations
- **Footer** — Comprehensive links with social and CTA

## Animations & Motion

- Scroll-triggered reveals using Intersection Observer
- Staggered entrances for grid items
- Smooth FAQ accordion opens
- Hover state scale effects on buttons
- Subtle fade and slide transitions throughout

## Framework

Vite 6 + React 19 with Framer Motion for animations.

## Preview

Configured to run on `0.0.0.0:8080` for k8s HTTPRoute access with secure host configuration.

## Theme

Clean Light with editorial magazine aesthetic — cream backgrounds, charcoal text, teal primary accent, burnt orange secondary highlights, asymmetrical layouts, refined typography pairing, and subtle grain texture overlay.