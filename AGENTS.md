<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Website

## Overview

This repository contains the personal website and portfolio of Rishab Sukumar.

The website serves as:

- Professional portfolio
- Technical portfolio
- Personal website
- Publishing platform
- Long-term digital presence

This website should be designed to evolve over many years rather than support a single job application.

Future content may include:

- Professional case studies
- Open source projects
- Technical writing
- Engineering essays
- Music projects
- Speaking engagements
- Career reflections

---

## About Rishab

Rishab is a Senior iOS Engineer currently working on WhatsApp Business at Meta and previously led development across the ChargePoint Apple ecosystem.

Experience includes:

- iOS
- SwiftUI
- UIKit
- Mobile architecture
- Product engineering
- Accessibility
- Reliability
- Observability
- Performance
- Developer tooling

Platform expertise includes:

- iOS
- watchOS
- CarPlay
- App Clips
- Widgets
- Siri Shortcuts

The website should communicate both technical depth and product thinking.

---

## Professional Positioning

The website should position Rishab as:

- Senior Apple platform engineer
- Product-focused engineer
- Technical leader
- Builder of user-facing experiences
- Open source contributor
- Engineer with strong design appreciation

Avoid positioning Rishab as:

- Generic software engineer
- Backend specialist
- Full-stack generalist
- Influencer
- Startup founder

The overall impression should be:

> An engineer who ships polished experiences at scale.

---

## Site Structure

The website should support the following top-level sections.

### Home

Landing page introducing Rishab and highlighting selected work.

Purpose:

- Establish professional identity
- Showcase featured work
- Highlight platform expertise
- Direct visitors deeper into the site

### About

Professional story, engineering philosophy, interests, and career journey.

Avoid generic autobiographical content.

Focus on:

- Why software engineering
- Product mindset
- Design appreciation
- Collaboration
- Technical leadership

### Projects

Collection of professional and personal work.

Examples:

- WhatsApp
- ChargePoint
- Open source projects
- Future side projects

Projects are the most important content on the site.

### Resume

Interactive resume page with downloadable PDF.

Do not simply embed a PDF.

Present experience in a clean, readable format.

### Blog

Technical writing and long-form content.

Potential topics:

- iOS engineering
- SwiftUI
- Architecture
- Accessibility
- Performance
- Career growth
- Product development

### Music

Creative work, music releases, production projects, and artistic exploration.

This section should feel integrated into the broader website rather than disconnected.

---

## Homepage Structure

The homepage should prioritize:

1. Hero section
2. Selected work
3. Platform expertise
4. Open source work
5. Writing
6. Music
7. Contact

The homepage should serve as a gateway into the rest of the site.

---

## Design Principles

Primary influences:

- Apple
- Stripe
- Linear
- Vercel
- Notion

Characteristics:

- Strong typography
- Clean hierarchy
- Generous whitespace
- Minimal visual clutter
- Accessibility-first
- Responsive design
- Fast performance

Avoid:

- Startup marketing aesthetics
- Excessive gradients
- Particle effects
- Loud color palettes
- Skill bars
- Generic portfolio templates
- Technology logo walls

Animations should be subtle and purposeful.

Design should feel timeless rather than trendy.

---

## Project Pages

Projects should be written as case studies.

Preferred structure:

1. Overview
2. Problem
3. Constraints
4. Responsibilities
5. Technical Decisions
6. Outcome
7. Lessons Learned

Focus on:

- Ownership
- Product impact
- Tradeoffs
- Architecture
- Decision making
- Collaboration

Avoid:

- Resume bullet dumps
- Generic technology lists
- Excessive jargon

Readers should understand not only what was built, but why it was built that way.

---

## Current Featured Projects

### WhatsApp

Themes:

- Business messaging
- Monetization
- Reliability
- Product ownership
- User experience
- Launch execution

### ChargePoint

Themes:

- Apple ecosystem ownership
- Multi-platform experiences
- SwiftUI adoption
- UI modernization
- Accessibility
- Technical leadership

### Open Source

Themes:

- Developer productivity
- Tooling
- Community impact

Projects include:

- xcparse
- danger-app_size_report

---

## Writing Style

Writing should be:

- Clear
- Direct
- Professional
- Thoughtful
- Concise

Avoid:

- Marketing language
- Excessive self-promotion
- Corporate jargon
- Buzzword-heavy writing

The tone should feel like an experienced engineer reflecting on real work.

---

## Accessibility

Accessibility is a first-class requirement.

Generated code should:

- Support keyboard navigation
- Use semantic HTML
- Meet WCAG guidelines
- Support screen readers
- Use proper focus management
- Respect reduced motion preferences

Accessibility should never be treated as optional.

---

## Performance

Performance is a feature.

Prefer:

- Server Components where appropriate
- Optimized images
- Minimal dependencies
- Good Core Web Vitals

Avoid unnecessary JavaScript and over-engineering.

---

## Code Quality

Generated code should:

- Use TypeScript
- Follow modern Next.js conventions
- Be production quality
- Be maintainable
- Be strongly typed
- Be well structured

Favor clarity over cleverness.

Before introducing dependencies, justify why they are needed.

---

## Working Style

When implementing new features:

1. Inspect the existing codebase first.
2. Reuse existing components whenever possible.
3. Prefer incremental improvements over rewrites.
4. Avoid introducing unnecessary dependencies.
5. Explain major architectural changes before implementing them.
6. Preserve consistency with the existing design system.

Do not rebuild existing functionality without a clear reason.

---

## Long-Term Goal

This website should become the central hub for Rishab's professional and creative work over the next decade.

Every decision should optimize for:

- Longevity
- Maintainability
- Extensibility
- Content quality
- User experience

over short-term trends or visual gimmicks.

## Agent Efficiency

When implementing features:

- Make the smallest change necessary.
- Avoid rewriting files unless required.
- Avoid regenerating large components.
- Reuse existing components.
- Do not refactor unrelated code.