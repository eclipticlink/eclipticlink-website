/*
 * Region + service landing pages, e.g. /locations/uae/data-protection-services.
 *
 * Each page answers one cluster of buyer-intent searches seen in Search
 * Console for that region, with a short direct answer up top (for search
 * snippets and AI answers), substantive sections, and FAQs. Regulatory facts
 * mirror the fact-checked copy in locations.ts; keep the two in sync.
 */

export type RegionPage = {
  /** Location slug from locations.ts */
  region: string;
  slug: string;
  /** Service id from services/data.ts */
  serviceId: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  /** Two- or three-sentence direct answer to the main search */
  answer: string;
  sections: { title: string; paragraphs?: string[]; items?: string[] }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Blog slugs to link as further reading */
  guides: string[];
  keywords: string[];
  updatedAt: string;
};

export const regionPages: RegionPage[] = [
  {
    region: "uae",
    slug: "data-protection-services",
    serviceId: "compliance-grc",
    seoTitle: "Data Protection Services in Dubai & the UAE",
    metaDescription:
      "Data protection and data security services in Dubai and the UAE: PDPL, DIFC, ADGM and GDPR readiness, data mapping, security controls and breach response.",
    h1: "Data protection and data security services in the UAE",
    eyebrow: "Data protection · UAE",
    intro:
      "Whether you are on the mainland, in DIFC or ADGM, or handling EU customers' data, EclipticLink helps you work out which data-protection rules apply, close the security gaps, and prove it to regulators and clients.",
    answer:
      "Data protection services help a company handle personal data lawfully and keep it secure: mapping what data you hold, working out which laws apply (the UAE PDPL, DIFC or ADGM rules, the GDPR or sector rules), putting the right security controls in place, and preparing to detect and report breaches. In the UAE, which law applies depends mainly on where your company is licensed and whose data you process.",
    sections: [
      {
        title: "Which data protection law applies to your company?",
        items: [
          "<strong>Mainland UAE:</strong> Federal Decree-Law No. 45 of 2021 (the PDPL) governs personal data processed by companies outside the financial free zones. It requires appropriate security measures and notifying the regulator of breaches that put individuals' privacy at risk. Its Executive Regulations had not been published as of late 2026.",
          "<strong>DIFC:</strong> companies licensed in the Dubai International Financial Centre follow DIFC Data Protection Law No. 5 of 2020, overseen by the Commissioner of Data Protection, including breach notification duties.",
          "<strong>ADGM:</strong> Abu Dhabi Global Market's Data Protection Regulations 2021 are closely modelled on the GDPR, including notifying the regulator of reportable breaches within 72 hours where feasible.",
          "<strong>GDPR:</strong> also applies to UAE companies that offer goods or services to people in the EU or monitor their behaviour, even without an EU office.",
          "<strong>Sector rules:</strong> health data falls under Federal Law No. 2 of 2019 on ICT in health fields and, in Abu Dhabi, the ADHICS standard. Financial firms face requirements from the CBUAE, DFSA or FSRA depending on their licence.",
        ],
      },
      {
        title: "Data protection vs data security",
        paragraphs: [
          "<strong>Data protection</strong> (often called data privacy) is about using personal data lawfully: having a valid reason to process it, telling people what you do with it, respecting their rights, and keeping it no longer than you need.",
          "<strong>Data security</strong> is about keeping that data safe from attackers and mistakes: access control, encryption, monitoring and backups. Regulators expect both, and a security failure is usually what turns a privacy gap into a reportable breach.",
        ],
      },
      {
        title: "What our data protection services include",
        items: [
          "<strong>Data mapping:</strong> where personal and sensitive data is collected, stored and shared, including cloud regions and third parties.",
          "<strong>Gap assessment</strong> against the laws that apply to you, using ISO 27001 as a common baseline across frameworks.",
          "<strong>Policies and records:</strong> privacy notices, retention rules, records of processing and data-handling procedures your team will actually follow.",
          "<strong>Security controls:</strong> access control and multi-factor authentication, encryption, logging and safeguards against data leaving where it shouldn't.",
          "<strong>Third-party review:</strong> contract terms and security questions for suppliers that handle your data.",
          "<strong>Breach readiness:</strong> an incident response plan that meets each regulator's breach-notification expectations.",
          "<strong>Validation:</strong> penetration testing and ongoing monitoring, so the controls keep working after the project ends.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "Confirm your licensing jurisdiction, sector, and the personal data you hold." },
      { title: "Assess", body: "Map data flows and find the gaps against each law that applies." },
      { title: "Fix", body: "A prioritized plan, and hands-on help implementing controls and policies." },
      { title: "Prove", body: "Evidence for regulators, auditors and client security reviews, plus ongoing monitoring." },
    ],
    faqs: [
      {
        q: "Does GDPR apply to companies in the UAE?",
        a: "It can. The GDPR applies to companies outside the EU when they offer goods or services to people in the EU or monitor their behaviour. If you serve EU customers from Dubai, you may need to meet both the GDPR and your UAE obligations. We map where they overlap so you only do the work once.",
      },
      {
        q: "Do we need a data protection officer in the UAE?",
        a: "Sometimes. The UAE PDPL and the DIFC and ADGM laws require a data protection officer in certain cases, typically high-risk or large-scale processing of sensitive data. We help you work out whether you need one and what the role should cover.",
      },
      {
        q: "What counts as personal data under the UAE PDPL?",
        a: "Any information that identifies a person directly or indirectly, such as a name, ID number, phone number, location data or online identifier. Sensitive personal data, such as health, biometric and genetic information, needs stronger protection.",
      },
      {
        q: "Can you help with data classification?",
        a: "Yes. As part of data mapping we help you define a simple classification scheme, identify where sensitive data lives, and apply stronger controls to the most sensitive categories.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll confirm which laws apply to you, look at your highest-risk gaps, and outline a prioritized plan, whether or not you work with us afterwards.",
      },
    ],
    guides: ["dubai-uae-cybersecurity-compliance-guide"],
    keywords: [
      "data protection services Dubai",
      "data protection services UAE",
      "data security services UAE",
      "data privacy services UAE",
      "UAE PDPL compliance",
      "GDPR compliance UAE",
      "DIFC data protection",
      "ADGM data protection",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "uae",
    slug: "managed-soc-mdr",
    serviceId: "managed-detection-response",
    seoTitle: "Managed SOC & MDR Services in Dubai, UAE",
    metaDescription:
      "Managed SOC and MDR for companies in Dubai, Abu Dhabi and the UAE: AI-assisted 24/7 monitoring, threat hunting and analyst-approved response.",
    h1: "Managed SOC and MDR services in the UAE",
    eyebrow: "Managed SOC · UAE",
    intro:
      "Round-the-clock threat monitoring for UAE companies, without building an in-house security operations center. AI handles the volume; experienced analysts verify every escalation and response.",
    answer:
      "A managed SOC (security operations center), often delivered as MDR (managed detection and response), is a team that monitors your systems around the clock, investigates alerts and contains threats for you. For most UAE companies it is the fastest way to get 24/7 coverage without hiring and retaining a full in-house security team, and it works with the security tools you already have.",
    sections: [
      {
        title: "Managed SOC vs building an in-house SOC",
        paragraphs: [
          "Running your own SOC means hiring analysts for every shift, buying and tuning detection tools, and keeping their skills current. Experienced security staff are in high demand across the Gulf, so many companies struggle to cover nights and weekends.",
          "A managed SOC gives you that coverage as a service, connected to the tools you already own, with a team you can call when something happens. You keep control of decisions; we do the watching, investigating and first response.",
        ],
      },
      {
        title: "What we monitor",
        items: [
          "<strong>Identity:</strong> sign-ins to Microsoft Entra ID, Okta and Google Workspace, MFA fatigue attacks and risky app consents.",
          "<strong>Endpoints:</strong> alerts from your EDR on laptops and servers.",
          "<strong>Cloud:</strong> AWS, Azure and GCP audit logs, including workloads in UAE cloud regions.",
          "<strong>Email:</strong> phishing and business email compromise attempts.",
          "<strong>Critical assets:</strong> the systems, data and accounts that matter most to your business, identified and prioritized from day one.",
          "<strong>Network:</strong> firewall and VPN logs where they are available.",
        ],
      },
      {
        title: "How AI and analysts work together",
        items: [
          "AI correlates and enriches alerts, maps them to MITRE ATT&amp;CK and drafts the investigation notes.",
          "An analyst verifies every escalation before anyone on your team is paged.",
          "Pre-approved playbooks contain common threats in minutes, such as isolating a compromised laptop.",
          "Anything that affects users, production systems or customers waits for an analyst or for your approval, and every action is logged.",
        ],
      },
      {
        title: "Built for UAE requirements",
        items: [
          "Incident records and response procedures that support breach-notification duties under the UAE PDPL and the DIFC and ADGM laws.",
          "Monitoring evidence for ISO 27001 audits, the UAE Information Assurance Standards, and ISR-aligned requirements from Dubai government clients.",
          "Working hours that overlap fully with the UAE business day for escalations and reviews.",
          "Monthly reports that your management and auditors can read.",
        ],
      },
    ],
    steps: [
      { title: "Map", body: "Your assets, log sources and critical systems." },
      { title: "Connect", body: "Integrate your EDR, SIEM, identity provider and cloud logs." },
      { title: "Tune", body: "Baseline normal activity and agree escalation paths and playbooks with you." },
      { title: "Monitor", body: "Around-the-clock detection, triage, threat hunting and monthly reporting." },
    ],
    faqs: [
      {
        q: "How much does a managed SOC cost in the UAE?",
        a: "It depends mainly on how many users, endpoints and log sources you have and which response actions you want covered. We scope and price each engagement after a short call; the free 30-minute assessment is the place to start.",
      },
      {
        q: "Do we need to buy a SIEM or new security tools?",
        a: "Usually not. We integrate with common EDR, SIEM, identity and cloud platforms and only recommend new tooling where there is a measurable coverage gap.",
      },
      {
        q: "Can you monitor systems hosted in UAE data centers or cloud regions?",
        a: "Yes. We monitor remotely through your existing tools and logs, wherever your systems are hosted.",
      },
      {
        q: "Is your MDR agentic?",
        a: "Where it is safe. AI agents gather evidence, correlate and enrich alerts, and run the containment steps you pre-approve. Actions that affect users, production systems or customers wait for an analyst, and every action is logged.",
      },
      {
        q: "What happens when you detect a real attack?",
        a: "An analyst verifies it, contains it using the playbook steps you have approved, and contacts your named people. If it becomes a full incident, our incident response team takes over, including forensics and documentation for insurers and regulators.",
      },
    ],
    guides: ["ai-powered-mdr-what-it-is-and-how-it-works", "dubai-uae-cybersecurity-compliance-guide"],
    keywords: [
      "managed SOC UAE",
      "managed SOC Dubai",
      "MDR Dubai",
      "managed detection and response UAE",
      "SOC as a service UAE",
      "24/7 security monitoring Dubai",
      "critical asset monitoring UAE",
    ],
    updatedAt: "2026-11-27",
  },
];

export function getRegionPage(region: string, slug: string) {
  return regionPages.find((p) => p.region === region && p.slug === slug);
}
