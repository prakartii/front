import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useGatedTransform, rangeMap, staggerChild } from "../lib/motion";
import { useMediaQuery } from "../lib/useMediaQuery";
import { useMagnetic } from "../lib/useMagnetic";
import { splitEmphasis } from "../lib/text";
import { useLanguage } from "../lib/i18n/LanguageContext";
import AmbientOrb from "./three/AmbientOrb";
import FloatingChip from "./living/FloatingChip";
import ConnectorLine from "./living/ConnectorLine";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MicroDot from "./living/MicroDot";
import MiniSparkline from "./living/MiniSparkline";

const BLOB_RADIUS = "42% 58% 63% 37% / 47% 41% 59% 53%";

// Each headline line gets its own static rotation and horizontal drift —
// four floating fragments of one sentence, not a stacked paragraph. Routed
// through GSAP's own tween (not a CSS class) because the reveal animation
// already owns the transform on these nodes.
const LINE_ROTATE = [-1.4, 1.1, -0.7, 0];
const LINE_ML = ["", "lg:ml-[5%]", "lg:ml-[2%]", "lg:ml-[30%] xl:ml-[46%]"];

/**
 * "She is the hero." Not a copy-left/video-right split — a single collage
 * where the headline, the pottery film, and Sakhi's ambient orb overlap as
 * one composition. Four depth layers (headline, video, orb, annotation)
 * move at four independent scroll speeds instead of one flat blur ramp.
 * The video is cropped into an organic, tilting frame that leans toward
 * the cursor rather than sitting as a glass rectangle.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const lineRefs = useRef([]);
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { t } = useLanguage();
  const magnetic = useMagnetic({ strength: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headlineOpacity = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.3], [1, 0]), 1);
  const headlineY = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.3], [0, -36]), 0);

  const videoOpacity = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.65], [1, 0.55]), 1);
  const videoScale = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.7], [1, 0.92]), 1);
  const videoY = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.7], [0, 70]), 0);

  const orbOpacity = useGatedTransform(scrollYProgress, reduced, rangeMap([0.1, 0.5], [1, 0]), 1);
  const orbY = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 1], [0, -130]), 0);

  const annotationOpacity = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.22], [1, 0]), 1);
  const annotationY = useGatedTransform(scrollYProgress, reduced, rangeMap([0, 0.4], [0, -46]), 0);

  // Cursor tilt on the video crop — a calm lean toward the pointer, not a
  // spin. Static -4deg base rotation composed with the pointer-driven tilt.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 16, mass: 0.4 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 16, mass: 0.4 });

  function onVideoMouseMove(e) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    tiltX.set(((e.clientY - r.top) / r.height - 0.5) * -16);
  }
  function onVideoMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  // Whole-hero pointer parallax — makes the composition feel alive even
  // when the cursor is nowhere near the video: the film drifts gently
  // toward the pointer, and the paper collage drifts a touch the other
  // way, so idle mouse movement reads as depth rather than a hover effect
  // scoped to one element.
  const heroDriftX = useMotionValue(0);
  const heroDriftY = useMotionValue(0);
  const springHeroDriftX = useSpring(heroDriftX, { stiffness: 40, damping: 18, mass: 0.8 });
  const springHeroDriftY = useSpring(heroDriftY, { stiffness: 40, damping: 18, mass: 0.8 });
  const swatchDriftX = useMotionValue(0);
  const swatchDriftY = useMotionValue(0);
  const springSwatchDriftX = useSpring(swatchDriftX, { stiffness: 35, damping: 16, mass: 0.9 });
  const springSwatchDriftY = useSpring(swatchDriftY, { stiffness: 35, damping: 16, mass: 0.9 });

  function onHeroPointerMove(e) {
    if (reduced || isMobile) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    heroDriftX.set(nx * 22);
    heroDriftY.set(ny * 16);
    swatchDriftX.set(nx * -12);
    swatchDriftY.set(ny * -9);
  }
  function onHeroPointerLeave() {
    heroDriftX.set(0);
    heroDriftY.set(0);
    swatchDriftX.set(0);
    swatchDriftY.set(0);
  }

  const headline = t("hero.headline");

  // Line-by-line headline reveal on mount — GSAP, independent of the
  // scroll-linked Framer Motion work on the wrapper around it. useGSAP
  // (not a bare useEffect) is what makes this survive React 18 StrictMode's
  // double-invoke in dev without the tween getting killed before it plays.
  useGSAP(
    () => {
      const nodes = lineRefs.current.filter(Boolean);
      if (nodes.length === 0) return;
      if (reduced) {
        gsap.set(nodes, { opacity: 1, y: 0, rotate: (i) => LINE_ROTATE[i] ?? 0, filter: "blur(0px)" });
        return;
      }
      gsap.fromTo(
        nodes,
        { opacity: 0, y: 28, rotate: (i) => (LINE_ROTATE[i] ?? 0) + 3, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          rotate: (i) => LINE_ROTATE[i] ?? 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.4,
        }
      );
    },
    { dependencies: [reduced, headline.join("|")], scope: heroRef }
  );

  return (
    <section ref={sectionRef} id="film" className="relative h-[200vh]">
      <div
        ref={heroRef}
        onMouseMove={onHeroPointerMove}
        onMouseLeave={onHeroPointerLeave}
        className="paper-grain sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-ivory via-ivory to-pearl"
        style={{ contain: "layout paint" }}
      >
        <div
          className="atmosphere"
          style={{
            "--atmo-color": "#E6A489",
            "--atmo-x": "78%",
            "--atmo-y": "22%",
            "--atmo-opacity": 0.3,
            "--atmo-size": "48%",
          }}
        />

        {/* the hero's second atmosphere — a soft-edged clay/sand zone
            filling the right half, feathered by blur rather than a hard
            seam. The headline's last line deliberately crosses into it,
            so one sentence spans two atmospheres. */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute inset-y-0 right-0 w-[70%] sm:w-[60%] lg:w-[58%] pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, transparent 0%, rgba(217,191,174,0.5) 38%, rgba(227,200,163,0.62) 100%)",
            filter: "blur(70px)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 h-full pt-32 lg:pt-40 pb-16 flex flex-col">
          <motion.p
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="font-mono text-label uppercase text-ink-600 mb-8 max-w-md"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <div className="relative flex-1">
            <motion.div
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="max-w-2xl lg:max-w-3xl"
            >
              {headline.map((line, i) => {
                const isLast = i === headline.length - 1;
                return (
                  <p
                    key={i}
                    ref={(el) => (lineRefs.current[i] = el)}
                    className={`font-display text-balance text-ink-900 ${LINE_ML[i] ?? ""} ${
                      isLast ? "text-display-lg lg:max-w-none" : "text-display-md"
                    }`}
                  >
                    {splitEmphasis(line).map((seg, j) =>
                      seg.em ? (
                        <em key={j} className="text-terracotta not-italic">
                          {seg.t}
                        </em>
                      ) : (
                        <span key={j}>{seg.t}</span>
                      )
                    )}
                  </p>
                );
              })}

              <motion.p
                style={{ opacity: headlineOpacity }}
                className="font-body text-body-lg text-ink-600 max-w-md mt-8"
              >
                {t("hero.subhead")}
              </motion.p>

              <motion.div
                style={{ opacity: headlineOpacity }}
                className="flex flex-wrap items-center gap-8 mt-12"
              >
                <motion.a
                  ref={magnetic.ref}
                  href="#start"
                  onMouseMove={magnetic.onMouseMove}
                  onMouseLeave={magnetic.onMouseLeave}
                  style={magnetic.style}
                  className="inline-block font-body font-medium bg-ink-900 text-ivory px-8 py-4 rounded-full text-base hover:bg-terracotta-deep transition-colors"
                >
                  {t("hero.ctaPrimary")} →
                </motion.a>
                <a
                  href="#memory"
                  className="font-body text-sm text-ink-600 hover:text-ink-900 underline underline-offset-4 decoration-terracotta/40 transition-colors"
                >
                  {t("hero.ctaSecondary")} ↓
                </a>
              </motion.div>
            </motion.div>

            {/* the pottery film — one cropped, tilting element in the
                collage, overlapping the headline rather than framed apart
                from it */}
            <motion.div
              style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
              className="mt-14 ml-auto w-[80%] sm:w-[62%] lg:w-[32%] lg:mt-0 lg:absolute lg:top-[6%] lg:right-[-1%] aspect-[4/5]"
            >
              {/* idle breathing — a slow, continuous life independent of
                  scroll or cursor, so the frame never reads as a static
                  photograph even when nobody is moving the mouse */}
              <motion.div
                className="w-full h-full"
                animate={reduced ? { scale: 1 } : { scale: [1, 1.035, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  onMouseMove={onVideoMouseMove}
                  onMouseLeave={onVideoMouseLeave}
                  style={{
                    x: springHeroDriftX,
                    y: springHeroDriftY,
                    rotate: -4,
                    rotateX: springTiltX,
                    rotateY: springTiltY,
                    transformPerspective: 900,
                  }}
                  className="relative w-full h-full overflow-hidden shadow-[0_30px_70px_-18px_rgba(43,38,32,0.3)]"
                >
                  <div
                    className="paper-grain absolute inset-0 overflow-hidden"
                    style={{ borderRadius: BLOB_RADIUS }}
                  >
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="/sakhi-opening.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* recurring collage motif — two paper-grain swatches
                overlapping at an offset, her own handwritten note beside
                them, tucked into the corner rather than centered on the
                composition */}
            <motion.div
              style={{ opacity: annotationOpacity, y: annotationY }}
              className="hidden lg:block absolute lg:top-[66%] lg:right-[16%] pointer-events-none"
            >
              <motion.div style={{ x: springSwatchDriftX, y: springSwatchDriftY }}>
                <div className="relative w-[150px] h-[150px]">
                  <div className="paper-grain absolute left-0 top-0 w-[104px] h-[104px] -rotate-[7deg] bg-gradient-to-br from-sage to-sage-deep/70 shadow-[0_18px_40px_-18px_rgba(43,38,32,0.35)]" />
                  <div className="paper-grain absolute right-0 bottom-0 w-[72px] h-[72px] rotate-[9deg] bg-gradient-to-br from-clay to-clay-deep/70 shadow-[0_14px_30px_-16px_rgba(43,38,32,0.3)]" />
                </div>
                <p className="font-script text-2xl lg:text-3xl text-terracotta mt-3 ml-6 -rotate-[4deg]">
                  {t("hero.annotation")}
                </p>
                <MiniSparkline color="#9C5330" width={44} className="mt-2 ml-6" />
              </motion.div>
            </motion.div>

            {/* ambient presence — an independent layer, small, receding
                into the corner rather than straddling the composition */}
            <motion.div
              style={{ opacity: orbOpacity, y: orbY }}
              className="hidden lg:block absolute -top-28 right-0 pointer-events-none"
            >
              <AmbientOrb variant="presence" size={128} proximitySource={heroRef} />
            </motion.div>

            {/* the threads connecting her AI's quiet awareness — the orb
                sensing a note, a note sensing the film — drawn once on
                scroll-in, never re-triggered */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <ConnectorLine from={{ x: 90, y: 4 }} to={{ x: 60, y: 19 }} color="#C17A52" opacity={0.35} delay={0.3} />
              <ConnectorLine from={{ x: 76, y: 55 }} to={{ x: 82, y: 27 }} color="#9C5330" opacity={0.28} dashed delay={0.5} />
            </div>

            <FloatingChip
              seed={0.2}
              rotate={-2}
              tint="bg-ivory/90"
              parallax={{ x: springHeroDriftX, y: springHeroDriftY }}
              className="hidden lg:block absolute top-[13%] left-[50%] w-[16%] pointer-events-none"
            >
              <p className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-600 px-3.5 py-2.5 flex items-center gap-2">
                <MicroDot size={5} />
                {t("hero.chip1")}
              </p>
            </FloatingChip>

            <FloatingChip
              seed={0.75}
              rotate={2.5}
              tint="bg-champagne/45"
              delay={0.15}
              parallax={{ x: springSwatchDriftX, y: springSwatchDriftY }}
              className="hidden lg:block absolute top-[50%] left-[66%] w-[15%] pointer-events-none"
            >
              <p className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-600 px-3.5 py-2.5">
                {t("hero.chip2")}
              </p>
            </FloatingChip>

            <Particles count={7} seedOffset={3} className="hidden lg:block absolute inset-0" />
          </div>

          <motion.p
            variants={staggerChild}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="hidden lg:block font-mono text-2xs text-ink-400 mt-16"
          >
            {t("hero.sectionIndex")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-mono text-2xs uppercase text-ink-400">{t("hero.scrollCue")}</span>
          <div className="w-px h-8 bg-ink-400/60 animate-breathe" />
        </motion.div>

        <SectionDivider fill="#DCE6D6" />
      </div>
    </section>
  );
}
