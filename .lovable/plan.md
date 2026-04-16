

# Showcase Overhaul

## Summary
Rebrand the hero, enhance the about section, replace tech stack with gradient cards (Cyber-Shield style), update stats, fix project links, and swap GitHub badges for personal identity badges.

## Changes

### 1. Hero Section (`src/pages/Index.tsx`)
- Change name from "itsdebrakayes" to **"Debra-Kaye Smith"**
- Change subtitle to **"Full Stack Developer. Creative."**
- Remove GitHub badges (PRO, Pull Shark)
- Add personal identity badges: **"Jamaican"**, **"Gamer"**, **"UWI Mona"**, **"CS Graduate"** with warm/blue gradient glows

### 2. About Section — Fancier Layout (`src/pages/Index.tsx`)
- Instead of just the sticky text scrub alone, add a visual intro above or around it — a centered section with:
  - A decorative gradient divider
  - A large editorial "About." heading (gradient text, like the Projects/Stack headings)
  - Key highlight cards in a row (e.g., "5+ Years", "UWI Mona", "Frontend + Backend") as small glass pills before the text scrub begins
- Keep the sticky text scrub but make it feel like part of a richer section

### 3. Fix Project Links (`src/pages/Index.tsx`)
- Rename "Cumino" to **"QME Now"**
- Update QME Now URL to `https://qmenow.lovable.app`
- Update QME Now preview image to `https://image.thum.io/get/width/800/crop/600/https://qmenow.lovable.app`
- Fix DanraK Productions URL — ensure it points to `https://danarkproductions.com` (already correct, verify)

### 4. Tech Stack — Gradient Cards like Cyber-Shield (`src/pages/Index.tsx`, `src/index.css`)
- Replace the current simple glass-subtle grid with **gradient service-style cards** inspired by the Cyber-Shield dashboard
- Each tech card gets:
  - A colored gradient background (top-left color bleed into dark card)
  - A small gradient accent bar at the top
  - An icon container with matching tint
  - The tech name and category label
- Color mapping per category:
  - **Frontend**: blue gradient (hsl 220)
  - **Backend**: teal/green gradient (hsl 170)
  - **Tools**: purple gradient (hsl 270)
- Add corresponding CSS classes to `src/index.css` for the card backgrounds, accent bars, and icon containers
- Use Lucide icons for each tech (e.g., `Code2` for React, `FileCode` for TypeScript, `Palette` for Tailwind, `Server` for Node.js, `Database` for MySQL/Supabase, `GitBranch` for Git, `Cloud` for Azure)

### 5. Stats Section — Personal Milestones (`src/pages/Index.tsx`)
- Replace "194+ Contributions" with **"5+ Years as a Developer"**
- Keep "19 Repositories" and "5+ Live Projects"

### 6. Footer update
- Change copyright to "Debra-Kaye Smith"

## Files Modified
| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Hero rebrand, badges swap, about section enhancement, project link fixes, gradient tech cards, stats update |
| `src/index.css` | Add gradient card CSS classes for tech stack (inspired by Cyber-Shield's `dashboard-service-card` pattern) |

## Technical Approach for Gradient Cards
Adapt the Cyber-Shield pattern: each card gets a `tech-card--{tone}` CSS class with a `linear-gradient(160deg, hsl(color / 0.25) 0%, hsl(0 0% 0% / 0.95) 76%)` background, a gradient accent bar, and a tinted icon container. Cards use `backdrop-filter: blur(14px)`, `border: 1px solid hsl(0 0% 100% / 0.12)`, and a hover lift animation via Framer Motion.

