import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeWhy } from "@/components/sections/HomeWhy";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeIndustries } from "@/components/sections/HomeIndustries";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Yam Group of Companies",
          description:
            "Premium project management consultancy in Dubai, UAE specialising in project management, PMO consulting, cost management, QA/QC, risk management and digital project management.",
          areaServed: "United Arab Emirates",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          serviceType: [
            "Project Management",
            "PMO Consulting",
            "Cost Management",
            "QA/QC",
            "Risk Management",
            "Digital Project Management",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />
      <TrustStrip />
      <HomeAbout />
      <HomeServices />
      <HomeWhy />
      <HomeProcess />
      <HomeIndustries />
      <CTABanner />
    </>
  );
}
