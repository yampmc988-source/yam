import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { navServices, universalActivities } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const, mega: true },
  { label: "Industries", to: "/industries" as const },
  { label: "FAQs", to: "/faqs" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 perspective-midrange",
        solid
          ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "h-[3px] w-full bg-gradient-gold transition-opacity duration-500",
          solid ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="container-lux relative flex h-20 items-center justify-between">
        {/* Ambient glow behind logo for depth */}
        <div
          className={cn(
            "pointer-events-none absolute -left-6 top-1/2 size-24 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-500",
            solid ? "opacity-0" : "bg-gold/20 opacity-100",
          )}
        />

        <div className="relative z-10 flex items-center gap-3">
          <Logo variant={solid ? "dark" : "light"} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "group/nav relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    solid ? "text-foreground hover:text-navy" : "text-white/90 hover:text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-300",
                      megaOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-gold transition-transform duration-300 group-hover/nav:scale-x-100",
                    )}
                  />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, rotateX: -8 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: 8, rotateX: -6 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformPerspective: 1000, transformOrigin: "top center" }}
                      className="absolute left-1/2 top-full w-[52rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-card/95 p-3 shadow-elevated backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-1">
                          {navServices.map((s) => (
                            <Link
                              key={s.slug}
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                            >
                              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-navy text-gold shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                                <s.icon className="size-5" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-foreground">
                                  {s.title}
                                </span>
                                <span className="block text-xs text-muted-foreground">
                                  {s.tagline}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/services"
                          className="mt-1 flex items-center justify-between rounded-xl bg-gradient-navy px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.01]"
                        >
                          Explore all services
                          <ArrowRight className="size-4 text-gold" />
                        </Link>

                        {/* Separate group company */}
                        <div className="mt-3 pt-3">
                          <div className="h-px w-full bg-gradient-gold opacity-60" />
                          <div className="mt-3 rounded-2xl bg-soft-blue/15 p-3 ring-1 ring-navy-soft/15">
                            <div className="flex items-center gap-2 px-2 pb-2 pt-1">
                              <span className="flex size-5 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
                                <ShieldCheck className="size-3" />
                              </span>
                              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-soft">
                                Other Yam Group Company
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {universalActivities.map((a) => (
                                <Link
                                  key={a.slug}
                                  to="/universal/$slug"
                                  params={{ slug: a.slug }}
                                  className="group flex items-center gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-soft-blue/40"
                                >
                                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy-soft text-white ring-1 ring-gold/40 transition-all duration-300 group-hover:bg-navy-deep group-hover:ring-gold/70">
                                    <a.icon className="size-4" />
                                  </span>
                                  <span className="text-xs font-semibold text-foreground">
                                    {a.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <Link
                              to="/universal"
                              className="mt-1 flex items-center justify-between rounded-xl bg-navy-soft px-5 py-3 text-sm font-semibold text-white ring-1 ring-gold/30 transition-colors duration-300 hover:bg-navy-deep"
                            >
                              YAM Universal - F.Z.E · Explore all activities
                              <ArrowRight className="size-4 text-gold" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "group/nav relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  solid ? "text-foreground hover:text-navy" : "text-white/90 hover:text-white",
                )}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: cn(solid ? "text-navy" : "text-white") }}
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-gold transition-transform duration-300 group-hover/nav:scale-x-100" />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-5">
          <span
            className={cn(
              "h-6 w-px transition-colors duration-500",
              solid ? "bg-border" : "bg-white/20",
            )}
          />
          <Button
            asChild
            variant="gold"
            size="default"
            className="group/cta shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <Link to="/contact" className="flex items-center gap-1.5">
              Get Consultation
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "relative z-10 flex size-10 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10",
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="container-lux flex flex-col gap-2 py-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-lg px-3 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-5">
                {navServices.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-start gap-2.5 rounded-lg bg-secondary px-3.5 py-3 text-sm font-medium leading-snug text-foreground"
                  >
                    <s.icon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-5">
                <div className="h-px w-full bg-gradient-gold opacity-60" />
                <div className="mt-4 rounded-2xl bg-soft-blue/15 p-3 ring-1 ring-navy-soft/15">
                  <div className="mb-3 flex items-center gap-2 px-1 pt-1">
                    <span className="flex size-5 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
                      <ShieldCheck className="size-3" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-soft">
                      Other Yam Group Company
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {universalActivities.map((a) => (
                      <Link
                        key={a.slug}
                        to="/universal/$slug"
                        params={{ slug: a.slug }}
                        className="flex items-start gap-2.5 rounded-lg bg-navy-soft/10 px-3.5 py-3 text-sm font-medium leading-snug text-foreground ring-1 ring-navy-soft/20"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-navy-soft text-white ring-1 ring-gold/40">
                          <a.icon className="size-3.5" />
                        </span>
                        {a.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/universal"
                    className="mt-3 flex items-center justify-between rounded-lg bg-navy-soft px-3.5 py-3 text-sm font-semibold text-white ring-1 ring-gold/30"
                  >
                    YAM Universal - F.Z.E · View all
                    <ArrowRight className="size-4 text-gold" />
                  </Link>
                </div>
              </div>

              <Button asChild variant="gold" size="lg" className="mt-5">
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
