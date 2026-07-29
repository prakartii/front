# Sakhi — Homepage (Section 1: Hero = the film itself)

Production scaffold for the Sakhi landing page. Real project code — install
and run it.

## Setup

```bash
npm install
npm run dev
```

Your exported opening film should live at `public/sakhi-opening.mp4` (the
uploaded clip is already placed there as a placeholder).

## Design tokens

| Token | Hex | Meaning |
|---|---|---|
| `clay-wet` | `#6B6259` | Raw stoneware grey-brown, mid-shape on the wheel |
| `clay-bisque` | `#E8DECF` | Unfired bisqueware — page background |
| `clay-fired` | `#9C4A2B` | Fired terracotta — primary accent, CTAs, links |
| `clay-kiln` | `#2B2521` | Fired shadow — body text/ink |
| `glass-amber` | `#C98A3E` | The lotus's warm glass core |
| `glass-dusk` | `#41615C` | Sakhi's cool signature accent — reserved for "recognition" moments only |

Type: **Fraunces** (display), **Manrope** (body/UI), **IBM Plex Mono** (labels).

## How this is now ONE continuous experience (not video-then-page)

This replaces the previous architecture entirely. There is no `VideoIntro`
component anymore, no intro-complete state, no skip button. The video lives
directly inside `Hero.jsx` as a pinned, looping background layer:

1. **The video is the Hero.** `Hero` renders a tall (`220vh`) section. Inside
   it, a `sticky top-0 h-screen` wrapper pins the video (and everything
   layered on it) for the first full viewport of scrolling.
2. **Navbar fades in over the video on mount** — a simple timed
   `opacity`/`y` animation, no dependency on the video at all. It's visible
   within the first second, sitting directly on top of playing footage.
3. **The headline appears while the video keeps playing** — a mount-based
   staggered reveal (`staggerParent`/`staggerChild`), timed ~1.3s in, layered
   directly over the loop with a drop-shadow for legibility rather than
   waiting for any video event.
4. **Scrolling — not time — drives the transition.** `useScroll({ target:
   sectionRef })` tracks progress across the whole 220vh section, and three
   things are wired directly to that progress via `useTransform`:
   - the video gains **blur** (0 → 26px) and a subtle **zoom** (1 → 1.14),
   - a warm terracotta **scrim** rises over it (opacity 0.1 → 0.65),
   - the headline **fades and lifts away** in just the first third of the
     scroll, yielding the stage early rather than lingering.
   By the time a visitor has scrolled through the pinned section, the video
   has become indistinguishable from the page's own background gradient —
   there's no frame where "the intro ends and the site begins."
5. **The video loops continuously**, independent of scroll — it's ambient
   footage now, always alive, not a one-shot cinematic you sit through
   once. This is what makes "scroll to blur it away" make sense as an
   interaction: you're not skipping a story, you're moving past a living
   backdrop.

## Known follow-up (flagging honestly, not hiding it)

- Nav link/logo color is currently cream (`clay-bisque`) throughout, tuned
  for legibility over the warm video. Once the next section
  (`MemoryTimeline`) is built with a light bisque background, the nav will
  need a scroll-linked color flip (cream → `clay-kiln`) timed to when the
  hero unpins, or the logo will wash out against a light background. Noting
  this now rather than solving it against content that doesn't exist yet.
- `prefers-reduced-motion` still zeroes out decorative animation globally
  (see `globals.css`), but the scroll-linked blur/scale here is driven by
  `useTransform`, which doesn't automatically respect that media query the
  way CSS `animation` does — worth branching this to a static blurred state
  for reduced-motion users in the next pass.

## Next sections (built one at a time)

- `MemoryTimeline` (`#memory`) — chronological device, replaces the current
  placeholder section
- `GrowthSignals` (`#growth`) — predictive-opportunity glass cards
- `FounderStories` (`#stories`) — social proof
- Final CTA (`#start`) + footer
