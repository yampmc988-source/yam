import {
  ClipboardList,
  LayoutDashboard,
  Wallet,
  ShieldCheck,
  AlertTriangle,
  MonitorSmartphone,
  GanttChartSquare,
  Building2,
  Home,
  Factory,
  Fuel,
  Cpu,
  Code2,
  Users,
  Database,
  Globe2,
  type LucideIcon,
} from "lucide-react";

import heroBoardroom from "@/assets/hero-3-boardroom.jpg";
import heroConstruction from "@/assets/hero-2-construction.jpg";
import heroDigital from "@/assets/hero-5-digital.jpg";
import heroDubai from "@/assets/hero-1-dubai.jpg";
import heroEnergy from "@/assets/hero-4-energy.jpg";
import aboutCollab from "@/assets/about-collaboration.jpg";
import indConstruction from "@/assets/industry-construction.jpg";
import indRealEstate from "@/assets/industry-realestate.jpg";
import indManufacturing from "@/assets/industry-manufacturing.jpg";
import indTechnology from "@/assets/industry-technology.jpg";
import universalSoftwareDesign from "@/assets/universal-software-design.jpg";
import universalItResourcing from "@/assets/universal-it-resourcing.jpg";
import universalDataAnalytics from "@/assets/universal-data-analytics.jpg";
import universalGeneralTrading from "@/assets/universal-general-trading.jpg";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  icon: LucideIcon;
  image: string;
  overview: string;
  benefits: { title: string; text: string }[];
  workflow: { step: string; title: string; text: string }[];
  technologies: string[];
  industries: string[];
  caseStudy: { title: string; result: string; metric: string; metricLabel: string };
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "project-management",
    title: "Project Management",
    tagline: "End-to-end delivery leadership",
    short:
      "Full-lifecycle project leadership that keeps scope, time, cost and quality in perfect alignment from initiation to handover.",
    icon: ClipboardList,
    image: heroConstruction,
    overview:
      "Yam provides senior project management leadership across the entire project lifecycle. We integrate planning, procurement, delivery and closeout into a single governed system — giving stakeholders complete visibility and absolute confidence that landmark projects are delivered on time, within budget and to the highest standards of quality.",
    benefits: [
      {
        title: "Predictable delivery",
        text: "Rigorous baselines and earned-value control keep projects on schedule and on budget.",
      },
      {
        title: "Single point of accountability",
        text: "One empowered leadership team owning outcomes across every discipline.",
      },
      {
        title: "Stakeholder confidence",
        text: "Executive-grade reporting that turns complexity into clear, decisive insight.",
      },
      {
        title: "Risk-adjusted planning",
        text: "Proactive identification and mitigation embedded into every delivery phase.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Initiation",
        text: "Define objectives, governance, success criteria and delivery strategy.",
      },
      {
        step: "02",
        title: "Planning",
        text: "Build integrated scope, schedule, cost and risk baselines.",
      },
      {
        step: "03",
        title: "Execution",
        text: "Mobilise teams and deliver work packages against the baseline.",
      },
      {
        step: "04",
        title: "Handover",
        text: "Commission, close out and transition assets seamlessly to operations.",
      },
    ],
    technologies: [
      "Primavera P6",
      "MS Project",
      "Power BI",
      "Procore",
      "Autodesk Construction Cloud",
    ],
    industries: ["Construction", "Real Estate", "Oil & Gas", "Infrastructure"],
    caseStudy: {
      title: "Mixed-use tower, Dubai",
      result:
        "Delivered a AED 1.2B landmark development three weeks ahead of programme with zero safety incidents.",
      metric: "18%",
      metricLabel: "Schedule efficiency gained",
    },
    faqs: [
      {
        q: "Do you manage projects of any scale?",
        a: "Yes — from AED 20M fit-outs to multi-billion-dirham infrastructure programmes, we scale governance to fit the mandate.",
      },
      {
        q: "Can you take over a distressed project?",
        a: "Absolutely. We conduct a rapid health-check, stabilise the baseline and re-establish control within weeks.",
      },
    ],
  },
  {
    slug: "pmo-consulting",
    title: "PMO Consulting",
    tagline: "Governance that scales",
    short:
      "We design, deploy and mature Project Management Offices that turn portfolios into predictable, strategically aligned delivery engines.",
    icon: LayoutDashboard,
    image: aboutCollab,
    overview:
      "A high-performing PMO is the nervous system of an organisation's delivery capability. Yam designs, implements and matures PMOs — from governance frameworks and reporting standards to talent models and enabling technology — ensuring every project in the portfolio is aligned to strategy and delivered with discipline.",
    benefits: [
      {
        title: "Portfolio visibility",
        text: "One source of truth for the health of every initiative in your portfolio.",
      },
      {
        title: "Standardised delivery",
        text: "Consistent methods, templates and gates across all teams.",
      },
      {
        title: "Strategic alignment",
        text: "Investment prioritisation tied directly to business objectives.",
      },
      {
        title: "Capability uplift",
        text: "Coaching and enablement that embed lasting delivery maturity.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Assess",
        text: "Benchmark current maturity against best-practice frameworks.",
      },
      {
        step: "02",
        title: "Design",
        text: "Architect the target operating model, governance and tooling.",
      },
      { step: "03", title: "Deploy", text: "Stand up processes, dashboards and the PMO team." },
      { step: "04", title: "Mature", text: "Continuously optimise performance and adoption." },
    ],
    technologies: ["Power BI", "Jira Align", "Planview", "Smartsheet", "Azure DevOps"],
    industries: ["Government", "Technology", "Real Estate", "Manufacturing"],
    caseStudy: {
      title: "Enterprise PMO, government entity",
      result:
        "Established a portfolio PMO governing 140+ concurrent projects, improving on-time delivery dramatically.",
      metric: "37%",
      metricLabel: "Improvement in on-time delivery",
    },
    faqs: [
      {
        q: "How long does it take to stand up a PMO?",
        a: "A foundational PMO is typically operational within 8–12 weeks, with maturity building over subsequent quarters.",
      },
      {
        q: "Do you support existing PMOs?",
        a: "Yes — we frequently assess and re-energise established PMOs that have plateaued.",
      },
    ],
  },
  {
    slug: "cost-management",
    title: "Cost Management",
    tagline: "Certainty over every dirham",
    short:
      "Commercial control from feasibility to final account — protecting margin, eliminating waste and delivering true cost certainty.",
    icon: Wallet,
    image: heroDigital,
    overview:
      "Yam delivers rigorous cost and commercial management across the project lifecycle. From feasibility estimates and value engineering to procurement, cost control and final account, we protect your investment with transparent, forecast-driven commercial governance that turns budgets into guarantees.",
    benefits: [
      {
        title: "Cost certainty",
        text: "Accurate estimating and forecasting eliminate budget surprises.",
      },
      {
        title: "Value engineering",
        text: "Optimise design and specification without compromising quality.",
      },
      {
        title: "Commercial protection",
        text: "Robust contract and change management safeguard your position.",
      },
      {
        title: "Transparent reporting",
        text: "Real-time cost dashboards give leadership total clarity.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Estimate",
        text: "Establish reliable feasibility and elemental cost plans.",
      },
      {
        step: "02",
        title: "Procure",
        text: "Structure tenders and contracts for commercial advantage.",
      },
      {
        step: "03",
        title: "Control",
        text: "Track commitments, forecasts and variations in real time.",
      },
      { step: "04", title: "Close", text: "Negotiate and settle final accounts efficiently." },
    ],
    technologies: ["CostX", "Candy", "Power BI", "SAP", "Oracle Primavera Unifier"],
    industries: ["Construction", "Infrastructure", "Oil & Gas", "Real Estate"],
    caseStudy: {
      title: "Infrastructure programme",
      result:
        "Delivered AED 90M in verified savings through value engineering and disciplined change control.",
      metric: "AED 90M",
      metricLabel: "Verified savings delivered",
    },
    faqs: [
      {
        q: "Do you provide independent cost verification?",
        a: "Yes — we act as independent quantity surveyors and cost auditors for lenders, owners and government entities.",
      },
      {
        q: "When should cost management start?",
        a: "As early as feasibility. The earlier commercial governance begins, the greater the cost certainty.",
      },
    ],
  },
  {
    slug: "qa-qc",
    title: "QA / QC",
    tagline: "Quality engineered in",
    short:
      "Systematic quality assurance and control that protects reputation, ensures compliance and guarantees defect-free delivery.",
    icon: ShieldCheck,
    image: indConstruction,
    overview:
      "Quality is never an accident. Yam embeds structured quality assurance and quality control across design, procurement and construction — combining ISO-aligned systems, rigorous inspection regimes and data-driven audits to ensure every deliverable meets specification, code and client expectation the first time.",
    benefits: [
      {
        title: "Defect-free delivery",
        text: "Structured inspection and test plans catch issues before they escalate.",
      },
      {
        title: "Regulatory compliance",
        text: "Full alignment with local authority and international standards.",
      },
      {
        title: "Reputation protection",
        text: "Consistent quality that safeguards your brand and asset value.",
      },
      {
        title: "Auditable assurance",
        text: "Complete traceability from specification to sign-off.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Plan",
        text: "Develop the project quality plan and inspection regime.",
      },
      {
        step: "02",
        title: "Assure",
        text: "Embed processes that build quality into every activity.",
      },
      { step: "03", title: "Control", text: "Inspect, test and verify against specification." },
      { step: "04", title: "Improve", text: "Analyse data and drive continuous improvement." },
    ],
    technologies: ["ISO 9001", "Fieldwire", "Procore Quality", "Power BI", "Autodesk BIM 360"],
    industries: ["Construction", "Manufacturing", "Oil & Gas", "Infrastructure"],
    caseStudy: {
      title: "High-rise residential",
      result:
        "Achieved first-time snag closure on 96% of items, accelerating handover and eliminating rework.",
      metric: "96%",
      metricLabel: "First-time quality pass rate",
    },
    faqs: [
      {
        q: "Are your systems ISO-aligned?",
        a: "Yes — our QA/QC frameworks are built on ISO 9001 principles and tailored to project and authority requirements.",
      },
      {
        q: "Do you provide site inspection teams?",
        a: "We deploy qualified QA/QC engineers and inspectors for on-site verification and reporting.",
      },
    ],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    tagline: "Foresight over hindsight",
    short:
      "Enterprise-grade risk frameworks that anticipate threats, quantify exposure and protect delivery outcomes with confidence.",
    icon: AlertTriangle,
    image: heroBoardroom,
    overview:
      "Complex projects fail on unmanaged risk. Yam installs enterprise risk management that identifies, quantifies and mitigates threats across schedule, cost, safety and reputation. Using qualitative and quantitative analysis, we transform uncertainty into informed decisions — protecting outcomes and preserving stakeholder trust.",
    benefits: [
      {
        title: "Early warning",
        text: "Structured registers surface threats long before they materialise.",
      },
      {
        title: "Quantified exposure",
        text: "Monte Carlo analysis reveals true cost and schedule risk.",
      },
      {
        title: "Mitigation discipline",
        text: "Owned, tracked response plans that actually get executed.",
      },
      { title: "Resilient delivery", text: "Contingency sized to reality, not guesswork." },
    ],
    workflow: [
      { step: "01", title: "Identify", text: "Build a comprehensive, structured risk register." },
      { step: "02", title: "Analyse", text: "Quantify probability and impact across objectives." },
      { step: "03", title: "Respond", text: "Assign owners and execute mitigation strategies." },
      { step: "04", title: "Monitor", text: "Track exposure and adapt as the project evolves." },
    ],
    technologies: [
      "@RISK",
      "Primavera Risk Analysis",
      "Safran Risk",
      "Power BI",
      "Active Risk Manager",
    ],
    industries: ["Oil & Gas", "Infrastructure", "Government", "Construction"],
    caseStudy: {
      title: "Energy megaproject",
      result:
        "Quantitative risk modelling protected a critical milestone and avoided AED 45M in potential overrun.",
      metric: "AED 45M",
      metricLabel: "Overrun exposure avoided",
    },
    faqs: [
      {
        q: "Do you run quantitative risk analysis?",
        a: "Yes — we perform Monte Carlo cost and schedule risk analysis to size contingency accurately.",
      },
      {
        q: "Can you integrate risk with our governance?",
        a: "We embed risk management directly into your reporting and decision-making cadence.",
      },
    ],
  },
  {
    slug: "digital-project-management",
    title: "Digital Project Management",
    tagline: "Data-driven delivery",
    short:
      "Digital transformation of delivery — connecting BIM, dashboards, automation and AI into one intelligent project ecosystem.",
    icon: MonitorSmartphone,
    image: indTechnology,
    overview:
      "Yam digitises the way projects are planned and delivered. We integrate BIM, common data environments, real-time dashboards, automation and AI-driven analytics into a single connected ecosystem — giving leaders live insight, predictive foresight and a decisive competitive edge across every phase of delivery.",
    benefits: [
      { title: "Live visibility", text: "Real-time dashboards replace outdated monthly reports." },
      { title: "Predictive insight", text: "AI analytics forecast risk and performance trends." },
      { title: "Connected data", text: "A single common data environment eliminates silos." },
      { title: "Automation", text: "Streamlined workflows remove manual, error-prone effort." },
    ],
    workflow: [
      { step: "01", title: "Diagnose", text: "Assess digital maturity and define the roadmap." },
      {
        step: "02",
        title: "Integrate",
        text: "Connect tools, data and the common data environment.",
      },
      { step: "03", title: "Automate", text: "Deploy dashboards, workflows and AI analytics." },
      { step: "04", title: "Scale", text: "Roll out across the portfolio and sustain adoption." },
    ],
    technologies: ["Autodesk BIM 360", "Power BI", "Azure", "Procore", "Python & AI models"],
    industries: ["Technology", "Real Estate", "Infrastructure", "Manufacturing"],
    caseStudy: {
      title: "Portfolio digital transformation",
      result:
        "Cut executive reporting time from days to minutes with a live, single-source delivery dashboard.",
      metric: "10x",
      metricLabel: "Faster executive reporting",
    },
    faqs: [
      {
        q: "Do we need to replace our existing tools?",
        a: "Not necessarily — we integrate and orchestrate your existing stack before recommending new investment.",
      },
      {
        q: "How do you use AI in delivery?",
        a: "We apply predictive analytics for schedule, cost and risk forecasting, plus automation of routine reporting.",
      },
    ],
  },
  {
    slug: "project-controls",
    title: "Project Controls & Scheduling",
    tagline: "Precision planning",
    short:
      "Integrated planning, scheduling and earned-value controls that keep complex programmes measurable, transparent and on track.",
    icon: GanttChartSquare,
    image: heroDubai,
    overview:
      "Yam provides the analytical backbone of successful delivery. Our project controls specialists build integrated schedules, earned-value systems and forecasting models that measure true progress, expose deviations early and give leadership the data-driven control needed to steer complex programmes to success.",
    benefits: [
      {
        title: "Integrated baseline",
        text: "Unified scope, time and cost baselines for true control.",
      },
      { title: "Earned-value clarity", text: "Objective measurement of performance and forecast." },
      {
        title: "Early deviation alerts",
        text: "Trends and variances surfaced before they become problems.",
      },
      {
        title: "Decision-ready data",
        text: "Analytics that turn schedule noise into clear action.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Baseline",
        text: "Develop the integrated master schedule and cost baseline.",
      },
      { step: "02", title: "Measure", text: "Track progress with earned-value techniques." },
      { step: "03", title: "Forecast", text: "Model outcomes and identify recovery options." },
      {
        step: "04",
        title: "Report",
        text: "Deliver decisive, executive-grade performance insight.",
      },
    ],
    technologies: ["Primavera P6", "MS Project", "Power BI", "Deltek Acumen", "Ecosys"],
    industries: ["Oil & Gas", "Infrastructure", "Construction", "Government"],
    caseStudy: {
      title: "Rail infrastructure programme",
      result:
        "Integrated controls recovered a slipping critical path and restored the programme to baseline.",
      metric: "100%",
      metricLabel: "Baseline recovery achieved",
    },
    faqs: [
      {
        q: "Do you provide independent schedule assurance?",
        a: "Yes — we deliver schedule audits and independent assurance for owners, lenders and boards.",
      },
      {
        q: "Can you set up controls mid-project?",
        a: "We routinely establish or rebuild project controls on live, in-flight programmes.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  image: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    icon: Building2,
    image: indConstruction,
    overview:
      "From landmark towers to complex civil works, Yam brings disciplined leadership to construction projects where time, cost and quality cannot be compromised.",
    challenges: [
      "Tight programmes and margins",
      "Complex stakeholder coordination",
      "Quality and safety compliance",
      "Scope and change volatility",
    ],
    solutions: [
      "Integrated project management and controls",
      "Rigorous cost and commercial governance",
      "ISO-aligned QA/QC regimes",
      "Proactive risk mitigation",
    ],
    benefits: [
      "On-time, on-budget delivery",
      "Defect-free handover",
      "Full commercial protection",
      "Executive-grade transparency",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    image: indRealEstate,
    overview:
      "For developers and investors, Yam protects asset value from feasibility to handover — de-risking capital and maximising return on every development.",
    challenges: [
      "Capital efficiency pressure",
      "Speed to market",
      "Design and specification control",
      "Investor reporting demands",
    ],
    solutions: [
      "Feasibility and cost planning",
      "Development management",
      "Value engineering",
      "Live portfolio dashboards",
    ],
    benefits: [
      "Maximised ROI",
      "Reduced capital risk",
      "Faster time to market",
      "Investor-grade transparency",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    image: indManufacturing,
    overview:
      "Yam manages capital projects and facility expansions for manufacturers, delivering new capacity safely, efficiently and without disrupting operations.",
    challenges: [
      "Operational continuity",
      "Complex plant integration",
      "Strict compliance regimes",
      "Capital cost discipline",
    ],
    solutions: [
      "Capital project management",
      "Rigorous QA/QC",
      "Risk and safety governance",
      "Cost and schedule control",
    ],
    benefits: [
      "Uninterrupted operations",
      "Reliable capacity delivery",
      "Full compliance assurance",
      "Controlled capital spend",
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: Fuel,
    image: heroEnergy,
    overview:
      "In high-stakes energy environments, Yam delivers the governance, controls and risk discipline needed to manage complex industrial projects with confidence.",
    challenges: [
      "Extreme complexity and scale",
      "Stringent HSE requirements",
      "High-consequence risk",
      "Multi-contractor coordination",
    ],
    solutions: [
      "Integrated project controls",
      "Quantitative risk management",
      "Robust QA/QC",
      "Commercial and contract governance",
    ],
    benefits: [
      "Predictable delivery at scale",
      "Reduced risk exposure",
      "Regulatory compliance",
      "Cost and schedule certainty",
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: Cpu,
    image: indTechnology,
    overview:
      "Yam brings structured delivery to technology and digital infrastructure programmes — aligning agile execution with enterprise governance and outcomes.",
    challenges: [
      "Rapid change and scope evolution",
      "Aligning agile with governance",
      "Data and integration complexity",
      "Benefits realisation",
    ],
    solutions: [
      "Digital project management",
      "Enterprise PMO frameworks",
      "Data-driven controls",
      "Benefits tracking",
    ],
    benefits: [
      "Faster, predictable delivery",
      "Strategic alignment",
      "Connected, live data",
      "Measurable business value",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We immerse in your objectives, constraints and context to define what success truly means.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We architect integrated scope, schedule, cost and risk baselines built for delivery.",
  },
  {
    step: "03",
    title: "Execute",
    text: "We mobilise the right teams and deliver work packages against a governed baseline.",
  },
  {
    step: "04",
    title: "Monitor",
    text: "We measure real progress with live dashboards and earned-value analytics.",
  },
  {
    step: "05",
    title: "Control",
    text: "We surface deviations early and steer decisively to keep outcomes on track.",
  },
  {
    step: "06",
    title: "Deliver",
    text: "We commission, close out and transition assets seamlessly into operation.",
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Industries Served" },
  { value: 15, suffix: "+", label: "Years of Expertise" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const coreValues = [
  { title: "Integrity", text: "We do what is right, transparently, even when it is difficult." },
  { title: "Excellence", text: "We hold ourselves to the highest standard on every engagement." },
  { title: "Precision", text: "We govern with rigour, data and disciplined attention to detail." },
  {
    title: "Partnership",
    text: "We succeed only when our clients succeed — their goals are ours.",
  },
];

export const whyYam = [
  {
    title: "Senior-led delivery",
    text: "Every engagement is led by seasoned professionals, not junior teams.",
  },
  {
    title: "Data-driven governance",
    text: "Decisions grounded in live data, not opinion or guesswork.",
  },
  {
    title: "Sector expertise",
    text: "Deep experience across construction, energy, industrial and digital.",
  },
  {
    title: "Client-focused methodology",
    text: "Frameworks tailored to your context, never one-size-fits-all.",
  },
  { title: "End-to-end capability", text: "One partner across the full project lifecycle." },
  {
    title: "UAE market mastery",
    text: "Fluency in local authorities, standards and market dynamics.",
  },
];

export const generalFaqs: ServiceFAQ[] = [
  {
    q: "What does Yam Group of Companies do?",
    a: "Yam is a premium project management consultancy based in Dubai, UAE. We specialise in project management, PMO consulting, cost management, QA/QC, risk management, digital project management and project controls across the region.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve construction, real estate, manufacturing, oil & gas, technology and government organisations, as well as infrastructure firms and enterprise businesses across the UAE.",
  },
  {
    q: "Where is Yam based?",
    a: "We are headquartered in Dubai, United Arab Emirates, and deliver engagements across the UAE and wider Middle East.",
  },
  {
    q: "Do you work with government organisations?",
    a: "Yes. We regularly partner with government entities and public-sector organisations, delivering the governance and transparency the public sector demands.",
  },
  {
    q: "What size of projects do you manage?",
    a: "From focused fit-outs to multi-billion-dirham infrastructure and energy programmes — we scale our governance model to the mandate.",
  },
  {
    q: "Can you take over a project that is already in trouble?",
    a: "Absolutely. We conduct a rapid health-check, stabilise the baseline and re-establish control, often within a matter of weeks.",
  },
  {
    q: "How do you ensure projects stay on budget?",
    a: "Through rigorous cost management, earned-value controls, disciplined change management and real-time commercial reporting that eliminates surprises.",
  },
  {
    q: "What is a PMO and do I need one?",
    a: "A Project Management Office standardises and governs delivery across your portfolio. If you run multiple concurrent projects, a PMO dramatically improves predictability and strategic alignment.",
  },
  {
    q: "How do you manage project risk?",
    a: "We build structured risk registers, run qualitative and quantitative (Monte Carlo) analysis, assign mitigation owners and monitor exposure continuously.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with Primavera P6, MS Project, Power BI, Autodesk BIM 360, Procore, SAP and bespoke AI analytics — integrated to fit your environment.",
  },
  {
    q: "Do you provide digital transformation services?",
    a: "Yes. Our digital project management practice connects BIM, common data environments, live dashboards, automation and AI into one intelligent ecosystem.",
  },
  {
    q: "How is Yam different from other consultancies?",
    a: "We combine senior-led delivery, data-driven governance, deep sector expertise and genuine UAE market mastery — with a client-focused methodology tailored to each engagement.",
  },
  {
    q: "How do we get started?",
    a: "Request a consultation through our contact page. We will arrange a discovery conversation to understand your objectives and recommend the right approach.",
  },
  {
    q: "Do you offer independent assurance?",
    a: "Yes — we provide independent cost verification, schedule assurance and project health-checks for owners, lenders and boards.",
  },
  {
    q: "What are your typical engagement models?",
    a: "We work as embedded delivery partners, advisory consultants, or independent assurance providers — structured to suit your needs.",
  },
  {
    q: "How quickly can you mobilise?",
    a: "For most engagements we can mobilise a core team within one to two weeks of appointment.",
  },
  {
    q: "What is YAM Universal - F.Z.E?",
    a: "YAM Universal - F.Z.E is a separate company within Yam Group, licensed in the Ajman Free Zone (License No. 55811). It operates independently from our Dubai project management consultancy, delivering technology, IT resourcing, data and general trading services.",
  },
  {
    q: "How is YAM Universal different from Yam's project management consultancy?",
    a: "They are distinct entities. Our Dubai practice delivers project management, PMO, cost, QA/QC, risk and controls consultancy, while YAM Universal - F.Z.E is a separately licensed Ajman Free Zone company focused on software, IT resourcing, data analytics and general trading.",
  },
  {
    q: "What activities does YAM Universal cover?",
    a: "Four core activities: custom software & systems design, IT resourcing & managed services, data classification & analytics, and general trading (import & export). Each is available as a standalone engagement.",
  },
  {
    q: "Does YAM Universal build custom software?",
    a: "Yes. YAM Universal designs and engineers bespoke web and desktop applications, API and systems integration, cloud architecture on AWS/Azure, database and backend design, and UX/UI — built around how your teams actually operate.",
  },
  {
    q: "Can I engage both Yam's consultancy and YAM Universal together?",
    a: "Absolutely. As one group we can combine our project management governance with YAM Universal's technology, resourcing, data and trading capabilities under a single, coordinated relationship.",
  },
  {
    q: "Where is YAM Universal licensed and based?",
    a: "YAM Universal - F.Z.E is licensed by the Free Zones Authority of Ajman, UAE, under License No. 55811, and serves clients across the UAE and wider region.",
  },
];

export const navServices = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  tagline: s.tagline,
  icon: s.icon,
}));

// ---------------------------------------------------------------------------
// YAM Universal - F.Z.E (Ajman Free Zone, License No. 55811)
// A separate licensed entity within Yam Group of Companies — its activities
// are distinct from the Dubai PMC consultancy above and must stay separate
// from `services`.
// ---------------------------------------------------------------------------

export interface UniversalActivity {
  slug: string;
  title: string;
  tagline: string;
  text: string;
  icon: LucideIcon;
  image: string;
  overview: string;
  benefits: { title: string; text: string }[];
  workflow: { step: string; title: string; text: string }[];
  capabilities: string[];
  caseStudy: { title: string; result: string; metric: string; metricLabel: string };
  faqs: ServiceFAQ[];
}

export const universalActivities: UniversalActivity[] = [
  {
    slug: "software-systems-design",
    title: "Custom Software & Systems Design",
    tagline: "Software, engineered around you",
    text: "We design and build bespoke software and computer systems shaped around how your organisation actually works — from architecture and UX through to deployment.",
    icon: Code2,
    image: universalSoftwareDesign,
    overview:
      "YAM Universal designs and engineers custom software and computer systems for businesses that have outgrown off-the-shelf tools. We take the time to understand how your teams actually operate, then architect, build and deploy applications and systems that fit — rather than forcing your workflows to fit someone else's product.",
    benefits: [
      {
        title: "Built around your workflow",
        text: "Systems designed against how your teams really operate, not a generic template.",
      },
      {
        title: "Modern, maintainable architecture",
        text: "Clean, well-documented builds that are easy to extend as you grow.",
      },
      {
        title: "Full lifecycle ownership",
        text: "One team across design, development, testing and deployment.",
      },
      {
        title: "Scalable from day one",
        text: "Cloud-native architecture built to handle growth without a rebuild.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discover",
        text: "Map your processes, data and integration requirements in detail.",
      },
      {
        step: "02",
        title: "Design",
        text: "Architect the system and user experience before a line of code is written.",
      },
      { step: "03", title: "Build", text: "Develop and test in short, visible iterations." },
      {
        step: "04",
        title: "Deploy",
        text: "Launch, document and hand over with ongoing support options.",
      },
    ],
    capabilities: [
      "Web & desktop applications",
      "API & systems integration",
      "Cloud architecture (AWS/Azure)",
      "Database & backend design",
      "UX/UI design",
    ],
    caseStudy: {
      title: "Operations platform, regional distributor",
      result:
        "Replaced a stack of spreadsheets with a single custom operations platform, cutting order-processing time significantly.",
      metric: "60%",
      metricLabel: "Faster order processing",
    },
    faqs: [
      {
        q: "Do you build from scratch or customise existing software?",
        a: "Both — we design bespoke systems from the ground up, and we also extend or integrate with software you already use.",
      },
      {
        q: "Can you support the system after launch?",
        a: "Yes, we offer ongoing maintenance and enhancement arrangements once a system goes live.",
      },
    ],
  },
  {
    slug: "it-resourcing-services",
    title: "IT Resourcing & Managed Services",
    tagline: "The right IT talent, on demand",
    text: "Vetted IT professionals and managed technical support, deployed on demand to strengthen your teams, cover critical skills gaps and keep systems running.",
    icon: Users,
    image: universalItResourcing,
    overview:
      "YAM Universal supplies vetted IT professionals and managed technical support to organisations that need to scale capability quickly. Whether you need a single specialist to close a skills gap or an ongoing managed service to keep infrastructure running, we resource and support your technology operations with accountable, reliable people.",
    benefits: [
      {
        title: "Fast, vetted placement",
        text: "Pre-screened IT professionals matched to your requirement quickly.",
      },
      {
        title: "Flexible engagement models",
        text: "Short-term cover, project resourcing or long-term managed support.",
      },
      {
        title: "Reduced operational risk",
        text: "Reliable coverage for helpdesk, infrastructure and critical systems.",
      },
      {
        title: "Single point of contact",
        text: "One accountable partner instead of juggling multiple contractors.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Scope",
        text: "Define the skills, coverage and service levels you need.",
      },
      { step: "02", title: "Source", text: "Match vetted IT professionals to your requirement." },
      { step: "03", title: "Deploy", text: "Onboard resources into your team or environment." },
      {
        step: "04",
        title: "Support",
        text: "Monitor performance and adjust coverage as needs change.",
      },
    ],
    capabilities: [
      "Helpdesk & NOC support",
      "Managed infrastructure & endpoints",
      "Cloud & systems administration",
      "Cybersecurity monitoring",
      "Project-based IT staffing",
    ],
    caseStudy: {
      title: "Managed IT support, multi-site retailer",
      result:
        "Deployed a managed helpdesk and infrastructure team, restoring reliable IT support across all branch locations.",
      metric: "99.5%",
      metricLabel: "Support ticket SLA compliance",
    },
    faqs: [
      {
        q: "Can you provide a single specialist rather than a full team?",
        a: "Yes — we resource individual specialists as well as complete managed IT teams, based on what you need.",
      },
      {
        q: "Do you offer ongoing support contracts?",
        a: "Yes, we structure both short-term resourcing and long-term managed service agreements.",
      },
    ],
  },
  {
    slug: "data-classification-analytics",
    title: "Data Classification & Analytics",
    tagline: "Turning data into decisions",
    text: "We classify, structure and analyse business data — turning scattered information into a governed, decision-ready asset for leadership.",
    icon: Database,
    image: universalDataAnalytics,
    overview:
      "YAM Universal helps organisations bring order to their data. We classify, structure and analyse information scattered across systems and departments, applying clear governance and building the dashboards and models that turn raw data into insight leadership can act on with confidence.",
    benefits: [
      {
        title: "Governed data, not chaos",
        text: "Clear classification and structure applied across every data source.",
      },
      {
        title: "Decision-ready insight",
        text: "Dashboards and reporting built around the questions leadership actually asks.",
      },
      {
        title: "Stronger data security",
        text: "Sensitivity-based classification that supports compliance and access control.",
      },
      {
        title: "Confident analytics",
        text: "Models and analysis grounded in clean, trustworthy data.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Assess",
        text: "Audit existing data sources, quality and sensitivity.",
      },
      {
        step: "02",
        title: "Classify",
        text: "Structure and tag data against a clear governance framework.",
      },
      {
        step: "03",
        title: "Analyse",
        text: "Build the models and dashboards that answer your key questions.",
      },
      {
        step: "04",
        title: "Deliver",
        text: "Hand over live reporting with training for your team.",
      },
    ],
    capabilities: [
      "Data classification frameworks",
      "ETL & data pipelines",
      "Power BI / Tableau dashboards",
      "Data governance & compliance",
      "Predictive analytics",
    ],
    caseStudy: {
      title: "Enterprise data governance, holding company",
      result:
        "Classified and consolidated data from six disconnected systems into one governed reporting environment.",
      metric: "6→1",
      metricLabel: "Data sources unified",
    },
    faqs: [
      {
        q: "Do you work with data we already have, or help us collect new data?",
        a: "Both — we typically start by structuring and classifying your existing data, then build ongoing collection and analytics on top.",
      },
      {
        q: "Can you help with data compliance requirements?",
        a: "Yes, our classification frameworks are built to support data governance and regulatory compliance needs.",
      },
    ],
  },
  {
    slug: "general-trading-import-export",
    title: "General Trading — Import & Export",
    tagline: "Trade, sourced and moved with care",
    text: "Cross-border sourcing, import and export services that connect suppliers and buyers across markets, backed by disciplined logistics and compliance.",
    icon: Globe2,
    image: universalGeneralTrading,
    overview:
      "YAM Universal facilitates general trading across international markets — sourcing, importing and exporting goods on behalf of clients with the same discipline we bring to project delivery. From supplier identification through customs, logistics and final delivery, we manage the trading process end to end.",
    benefits: [
      {
        title: "Trusted sourcing",
        text: "Verified suppliers and buyers matched to your requirement.",
      },
      {
        title: "Full trade coordination",
        text: "One partner managing sourcing, shipping, customs and delivery.",
      },
      {
        title: "Compliance handled",
        text: "Documentation and customs processes managed to avoid costly delays.",
      },
      {
        title: "Market reach",
        text: "Access to cross-border trade networks across multiple regions.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Source",
        text: "Identify and verify suppliers or buyers for your requirement.",
      },
      {
        step: "02",
        title: "Contract",
        text: "Agree commercial terms, quality standards and delivery schedules.",
      },
      { step: "03", title: "Move", text: "Coordinate freight, customs clearance and logistics." },
      { step: "04", title: "Deliver", text: "Confirm delivery, quality and final documentation." },
    ],
    capabilities: [
      "Supplier & buyer sourcing",
      "Import & export documentation",
      "Customs & compliance coordination",
      "Freight & logistics management",
      "Quality & shipment inspection",
    ],
    caseStudy: {
      title: "Cross-border sourcing programme",
      result:
        "Coordinated import of critical equipment across three markets, keeping a client's project mobilisation on schedule.",
      metric: "3",
      metricLabel: "Markets coordinated",
    },
    faqs: [
      {
        q: "What kinds of goods can you trade?",
        a: "We handle general trading across a broad range of goods; get in touch with your specific requirement and we will confirm fit.",
      },
      {
        q: "Do you manage customs and documentation?",
        a: "Yes — we coordinate customs clearance, trade documentation and compliance as part of the service.",
      },
    ],
  },
];

export function getUniversalActivity(slug: string): UniversalActivity | undefined {
  return universalActivities.find((a) => a.slug === slug);
}
