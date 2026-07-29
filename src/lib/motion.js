import { useTransform } from "framer-motion";

// Shared Framer Motion vocabulary for the whole site.
// Principle: light and air, not "clay settling" — prefer blur+opacity+small
// scale/drift over heavy translate, and keep everything airy enough to read
// as premium rather than busy.

export const settleIn = {
  hidden: { opacity: 0, filter: "blur(6px)", scale: 0.985, y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const glassCardHover = {
  rest: { y: 0, boxShadow: "0 8px 32px rgba(91,86,80,0.12)" },
  hover: {
    y: -4,
    boxShadow: "0 16px 40px rgba(91,86,80,0.18)",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

// Directional reveal for editorial layouts where entries alternate sides —
// the direction itself is the hierarchy cue, not just a delay.
export function driftReveal({ from = "left" } = {}) {
  const x = from === "left" ? -24 : 24;
  return {
    hidden: { opacity: 0, x, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

// Idle continuous float for glass panels / the orb — life outside scroll.
export const floatY = {
  animate: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
};

// Piecewise-linear range mapper, for writing gated transforms that mirror
// framer's own `useTransform(mv, inputRange, outputRange)` array form, e.g.
// useGatedTransform(scrollYProgress, reduced, rangeMap([0, 1], [1, 1.14]), 1)
export function rangeMap(inputRange, outputRange) {
  return (v) => {
    if (v <= inputRange[0]) return outputRange[0];
    if (v >= inputRange[inputRange.length - 1]) return outputRange[outputRange.length - 1];
    for (let i = 0; i < inputRange.length - 1; i++) {
      const [a, b] = [inputRange[i], inputRange[i + 1]];
      if (v >= a && v <= b) {
        const t = (v - a) / (b - a);
        return outputRange[i] + t * (outputRange[i + 1] - outputRange[i]);
      }
    }
    return outputRange[outputRange.length - 1];
  };
}

// The reduced-motion gate: every scroll-linked useTransform in the app
// should be routed through this. `reduced` comes from useReducedMotion()
// (framer-motion) read once at the top of the calling component. When true,
// the motion value still exists (hooks stay unconditional) but its mapped
// output collapses to a single static value — so scroll never drives
// parallax/scale/blur for users who've asked for reduced motion.
export function useGatedTransform(motionValue, reduced, mapFn, staticValue) {
  return useTransform(motionValue, (v) => (reduced ? staticValue : mapFn(v)));
}
