

# About Section Refinements

## Changes

### 1. Faster scroll scrub (`StickyTextScrub.tsx`)
- Reduce container height from `300vh` to `180vh` so the text reveal completes in less scroll distance

### 2. Luxurious typography (`StickyTextScrub.tsx`)
- Increase font size to `text-4xl md:text-6xl`
- Switch to `font-light tracking-tight leading-tight` for an elegant, Apple-editorial feel
- Add `italic` on key words or use a lighter weight for refinement

### 3. Gradient highlight on active words (`StickyTextScrub.tsx`)
- Replace the current white color target with a gradient — when a word becomes active, apply `background: linear-gradient(135deg, hsl(220,90%,56%), hsl(270,80%,60%))` with `background-clip: text` and `-webkit-text-fill-color: transparent`
- Inactive words stay at `hsl(0,0%,30%)` as before
- Use Framer Motion's `useTransform` to interpolate opacity, and swap to a CSS class with the gradient once the word passes the activation threshold

### 4. Bigger badges (`Index.tsx`)
- Change badge styling from `px-4 py-1.5 text-xs` to `px-6 py-2.5 text-sm md:text-base` with larger rounded-full pill styling
- Add a subtle glow effect matching the badge color

### Files modified
- `src/components/StickyTextScrub.tsx` — height, typography, gradient highlight logic
- `src/pages/Index.tsx` — badge size increase

