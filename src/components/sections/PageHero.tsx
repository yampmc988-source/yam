import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({ image, eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-32">
      <motion.img
        src={image}
        alt=""
        aria-hidden
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0 bg-navy-deep/30" />
      <div className="container-lux relative">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 text-sm text-white/70"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="transition-colors hover:text-gold">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="size-3.5 text-gold/70" />}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light"
        >
          <span className="gold-rule" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
