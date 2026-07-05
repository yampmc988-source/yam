import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/site-data";
import heroImg from "@/assets/hero-3-boardroom.jpg";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | YAM Management Services" },
      {
        name: "description",
        content:
          "Answers to common questions about YAM Management Services — our project management consultancy, industries, engagement models and methodology in the UAE.",
      },
      { property: "og:title", content: "Frequently Asked Questions — YAM" },
      { property: "og:description", content: "Everything you need to know about working with YAM Management Services." },
      { property: "og:url", content: `https://yampmc.com/faqs` },
    ],
    links: [{ rel: "canonical", href: `https://yampmc.com/faqs` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqsPage,
});

const ALL_KEY = "All questions";

function FaqsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_KEY);
  const searchRef = useRef<HTMLInputElement>(null);

  // Group faqs by category if present, otherwise treat as a single group.
  const categories = useMemo(() => {
    const hasCategories = generalFaqs.some((f: any) => f.category);
    if (!hasCategories) return [ALL_KEY];
    const unique = Array.from(new Set(generalFaqs.map((f: any) => f.category ?? "General")));
    return [ALL_KEY, ...unique];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return generalFaqs.filter((f: any) => {
      const matchesQuery =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === ALL_KEY || (f.category ?? "General") === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  // "/" focuses search, Escape clears it — small, expected power-user touches.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const resetFilters = () => {
    setQuery("");
    setActiveCategory(ALL_KEY);
  };

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="FAQs"
        title="Answers to the questions that matter"
        description="Clear, honest answers about how we work, who we serve and how we deliver certainty."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "FAQs" }]}
      />

      <section className="container-lux py-24">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-full bg-gold-deep/10 blur-3xl"
              />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions…"
                  className="h-14 rounded-full pl-12 pr-24 text-base shadow-soft"
                  aria-label="Search frequently asked questions"
                />
                <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="grid size-8 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-navy"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                  {!query && (
                    <kbd className="hidden select-none rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground sm:inline-block">
                      /
                    </kbd>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Category filters */}
          {categories.length > 1 && (
            <Reveal delay={0.03} className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      activeCategory === cat
                        ? "border-navy bg-navy text-white shadow-soft"
                        : "border-border bg-transparent text-muted-foreground hover:border-gold-deep/50 hover:text-navy"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          {/* Result count */}
          <Reveal delay={0.04} className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "question" : "questions"}
              {query && (
                <>
                  {" "}
                  matching <span className="font-medium text-navy">"{query}"</span>
                </>
              )}
            </p>
            {(query || activeCategory !== ALL_KEY) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-medium text-gold-deep transition hover:text-navy"
              >
                Reset
              </button>
            )}
          </Reveal>

          <Reveal delay={0.06} className="mt-6">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center">
                <div className="grid size-14 place-items-center rounded-full bg-gold-deep/10">
                  <MessageCircleQuestion className="size-7 text-gold-deep" />
                </div>
                <div>
                  <p className="font-semibold text-navy">
                    No questions match "{query}"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try a different search term, or browse all questions below.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy px-5 py-2 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                >
                  View all questions <ArrowRight className="size-3.5" />
                </button>
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((f: any, i: number) => (
                  <AccordionItem
                    key={f.q}
                    value={`faq-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="group text-left text-base font-semibold text-navy hover:text-gold-deep hover:no-underline">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-navy/5 text-xs font-semibold text-navy transition group-hover:bg-gold-deep/10 group-hover:text-gold-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{f.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-11 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Our team is ready to help. Reach out and we'll respond promptly."
      />
    </>
  );
}