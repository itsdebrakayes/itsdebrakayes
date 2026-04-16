

# Apple WWDC Keynote Showcase — Updated Plan

## What's New
Add **glassmorphism project preview cards** for live sites (DanraK Productions at danarkproductions.com and Cumino) that show embedded screenshots/thumbnails of the actual live websites, using the same glass-morphism card style from your previous projects (backdrop-blur, bg-white/10, border-white/20).

## Architecture

Since this deploys as a **web app** (not a raw README.md), we can do everything — scroll animations, glassmorphism, embedded site previews. The GitHub profile README.md will simply link to this deployed Lovable app.

## Sections (Full Scroll Experience)

1. **Hero** — Massive "itsdebrakayes" text, scales down on scroll, pins to top. Gradient glow background.

2. **About** — Sticky word-by-word text reveal (gray → white on scroll). Achievement badges float in with parallax.

3. **Featured Projects (Horizontal Scroll Section)** — Vertical scroll drives horizontal card movement. Each project is a **glassmorphism card** (`backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl`):
   - **DanraK Productions** & **Cumino** — Cards include an `<iframe>` thumbnail (or screenshot via a thumbnail API like `https://image.thum.io/get/https://danarkproductions.com`) showing the live site homepage, plus a "Visit Site →" link
   - **CACTUS**, **JamAI**, **YaadExplorer** — Glass cards with description, tech pills, "View on GitHub →" link
   - All cards have the gradient accent bar and hover glow effect

4. **Tech Stack** — Staggered fade-in grid with glassmorphism item cards

5. **Stats** — Scroll-scrubbed counter numbers with gradient text

6. **Footer** — Minimal with social links

## Apple Scroll Animations (1:1 Replica)

- **Sticky text scrub**: `position: sticky` + `useScroll`/`useTransform` from Framer Motion to scrub opacity word-by-word
- **Hero scale-down**: Title scales from 1.0 → 0.6 and translates up as you scroll, using scroll-linked `scale` transform
- **Horizontal scroll**: Tall container (400vh), sticky inner, `translateX` driven by vertical scroll progress
- **Parallax float**: Images/cards at `scrollY * 0.3` rate
- **Staggered intersection fade**: `whileInView` with staggered delays (100ms per child)
- **Counter scrub**: Numbers interpolate 0 → final value based on scroll position

## Live Site Previews

For DanraK and Cumino cards, we'll use a website thumbnail service (`image.thum.io` or `microlink.io`) to render a static screenshot of the live homepage inside the glassmorphism card. This avoids iframe cross-origin issues and loads fast. The card will show:
- Site screenshot (rounded, with subtle shadow)
- Project name in bold
- One-line description
- "Visit Live Site →" button with gradient accent

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Full scroll experience with all 6 sections |
| `src/index.css` | Dark theme (#000), SF Pro font stack, glassmorphism utilities, gradient tokens |
| `src/App.css` | Clear legacy boilerplate |
| `src/components/ScrollReveal.tsx` | Intersection-based fade+translate wrapper |
| `src/components/StickyTextScrub.tsx` | Word-by-word scroll-driven text reveal |
| `src/components/HorizontalScroll.tsx` | Vertical-to-horizontal scroll section |
| `src/components/GlassCard.tsx` | Reusable glassmorphism project card (with optional site preview image) |
| `src/components/CountUpNumber.tsx` | Scroll-linked number counter |
| `README.md` | GitHub profile README linking to deployed showcase |
| `package.json` | Add `framer-motion` dependency |

## Glassmorphism Card Style (from your existing projects)

```css
backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl
```

Inner elements use `backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10` — matching exactly what's in your QueMeNow Glass project.

