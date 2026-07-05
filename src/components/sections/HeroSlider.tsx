import { useCallback, useEffect, useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionTemplate, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

import hero1 from "@/assets/hero-1-dubai.jpg";
import hero2 from "@/assets/hero-2-construction.jpg";
import hero3 from "@/assets/hero-3-boardroom.jpg";
import hero4 from "@/assets/hero-4-energy.jpg";
import hero5 from "@/assets/hero-5-digital.jpg";

const slides = [
  {
    image: hero1,
    kicker: "Project Management Consultancy · Dubai, UAE",
    title: "Delivering Excellence in Project Management",
    subtitle:
      "Empowering organisations with strategic project management, PMO consulting, cost optimisation, quality assurance and digital transformation across the UAE.",
  },
  {
    image: hero2,
    kicker: "Construction & Infrastructure",
    title: "Building Landmark Projects Through Precision Leadership",
    subtitle:
      "Disciplined delivery for complex builds — where time, cost and quality are governed with absolute rigour from groundbreaking to handover.",
  },
  {
    image: hero3,
    kicker: "Strategy & Governance",
    title: "Leading Projects That Shape the Future",
    subtitle:
      "Executive-grade PMO frameworks and data-driven governance that turn ambitious portfolios into predictable, strategic outcomes.",
  },
  {
    image: hero4,
    kicker: "Energy & Industrial",
    title: "Managing Complex Industrial Projects With Confidence",
    subtitle:
      "Quantitative risk, robust controls and HSE-led delivery for oil, gas and heavy industry projects at the highest stakes.",
  },
  {
    image: hero5,
    kicker: "Digital Transformation",
    title: "Digital Project Management for Enterprise Growth",
    subtitle:
      "BIM, live dashboards, automation and AI — connected into one intelligent ecosystem that gives leaders decisive foresight.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.6 };
  const px = useSpring(0.5, springConfig);
  const py = useSpring(0.5, springConfig);

  const go = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [index, paused]);

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const orb1X = useMotionTemplate`calc((${px} - 0.5) * -40px)`;
  const orb1Y = useMotionTemplate`calc((${py} - 0.5) * -40px)`;
  const orb2X = useMotionTemplate`calc((${px} - 0.5) * 30px)`;
  const orb2Y = useMotionTemplate`calc((${py} - 0.5) * 30px)`;
  const imgTranslateX = useMotionTemplate`calc((${px} - 0.5) * -18px)`;
  const imgTranslateY = useMotionTemplate`calc((${py} - 0.5) * -18px)`;
  const contentRotateY = useMotionTemplate`calc((${px} - 0.5) * -2deg)`;
  const contentRotateX = useMotionTemplate`calc((${py} - 0.5) * 2deg)`;

  const slide = slides[index];

  return (
    <section
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-deep perspective-midrange"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerMove={handlePointerMove}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ x: imgTranslateX, y: imgTranslateY }}
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden
            fetchPriority={index === 0 ? "high" : "low"}
            className="size-full origin-center scale-[1.06] animate-kenburns object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/20" />

      {/* Floating gold accents — parallax reactive */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute right-[8%] top-[22%] hidden size-40 animate-float-slow rounded-full bg-gold/15 blur-3xl lg:block"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute bottom-[18%] right-[24%] hidden size-28 animate-float-med rounded-full bg-soft-blue/10 blur-2xl lg:block"
      />
      <div className="pointer-events-none absolute left-[6%] top-[38%] hidden size-20 rounded-full border border-gold/20 lg:block" />
      <div className="pointer-events-none absolute left-[10%] top-[60%] hidden size-3 animate-pulse-ring rounded-full bg-gold/60 lg:block" />

      <div className="container-lux relative flex h-full flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <motion.div style={{ rotateY: contentRotateY, rotateX: contentRotateX, transformStyle: "preserve-3d" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
                  <span className="gold-rule" />
                  {slide.kicker}
                </span>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.04] text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic strength={0.25}>
              <Button asChild variant="gold" size="lg" className="shine-sweep">
                <Link to="/contact">
                  Get a Consultation <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button asChild variant="light-outline" size="lg">
                <Link to="/services">
                  Explore Services <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="container-lux absolute inset-x-0 bottom-10 z-10">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative h-1 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
                style={{ width: i === index ? 56 : 24 }}
              >
                {i === index && !paused && (
                  <motion.span
                    key={index}
                    className="absolute inset-0 origin-left bg-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6.5, ease: "linear" }}
                  />
                )}
                {i === index && paused && <span className="absolute inset-0 bg-gold" />}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="mr-2 font-display text-sm text-white/60">
              <span className="text-white">0{index + 1}</span> / 0{slides.length}
            </span>
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
