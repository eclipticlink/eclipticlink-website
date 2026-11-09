export type Regulation = { name: string; body: string };
export type LocationService = { serviceId: string; why: string };
export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  /** Display name, e.g. "Saudi Arabia" */
  name: string;
  /** ISO 3166-1 alpha-2 */
  countryCode: string;
  /** Short label for nav */
  short: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  /** Why companies here are investing in security now */
  context: string[];
  regulations: Regulation[];
  services: LocationService[];
  industries: string[];
  delivery: string;
  faqs: LocationFaq[];
};

export const locations: Location[] = [
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    countryCode: "SA",
    seoTitle: "Cybersecurity in Saudi Arabia | NCA ECC",
    metaDescription:
      "AI-powered cybersecurity for Saudi organizations: NCA ECC compliance, SAMA CSF, PDPL readiness, penetration testing, managed detection, and AI security.",
    h1: "Cybersecurity services in Saudi Arabia",
    intro:
      "Saudi Arabia is digitizing fast, and regulators expect security to keep pace. EclipticLink helps Saudi companies and their technology suppliers meet NCA, SAMA, and PDPL requirements, and stay protected against the attackers that rapid growth attracts.",
    keywords: [
      "cybersecurity company Saudi Arabia",
      "cybersecurity services KSA",
      "NCA ECC compliance",
      "SAMA cyber security framework",
      "Saudi PDPL compliance",
      "penetration testing Saudi Arabia",
      "managed SOC Saudi Arabia",
      "cybersecurity Riyadh",
    ],
    context: [
      "Vision 2030 programs are moving government services, finance, healthcare, and retail onto digital platforms, which expands the attack surface every year.",
      "The National Cybersecurity Authority (NCA) sets mandatory controls for government entities and critical national infrastructure, and those requirements flow down to their vendors.",
      "The Personal Data Protection Law (PDPL) now applies to any organization processing personal data of people in the Kingdom.",
    ],
    regulations: [
      {
        name: "NCA Essential Cybersecurity Controls (ECC)",
        body: "The baseline controls the National Cybersecurity Authority requires of government entities, critical infrastructure operators, and many of their suppliers. We run ECC gap assessments, implement missing controls, and prepare evidence for NCA compliance reviews.",
      },
      {
        name: "NCA Cloud Cybersecurity Controls (CCC)",
        body: "Additional controls for cloud service providers and organizations using cloud services. Our cloud security team maps your AWS, Azure, or GCP environment to CCC requirements.",
      },
      {
        name: "SAMA Cyber Security Framework",
        body: "Required for banks, insurers, and finance companies regulated by the Saudi Central Bank. We help with maturity assessments, control implementation, and penetration testing that supports SAMA expectations.",
      },
      {
        name: "Personal Data Protection Law (PDPL)",
        body: "Enforced by the Saudi Data & AI Authority (SDAIA), the PDPL governs how personal data is collected, processed, and transferred. We map data flows, implement safeguards, and prepare breach-notification procedures.",
      },
    ],
    services: [
      { serviceId: "compliance-grc", why: "NCA ECC, SAMA CSF, and PDPL gap assessments and remediation roadmaps." },
      { serviceId: "penetration-testing", why: "Web, mobile, API, and network testing to validate controls and support regulatory reviews." },
      { serviceId: "managed-detection-response", why: "AI-assisted monitoring with analyst escalation during Saudi business hours and beyond." },
      { serviceId: "ai-security", why: "Securing AI and LLM applications as Saudi organizations adopt AI under national AI ambitions." },
    ],
    industries: ["Government suppliers", "Banking and fintech", "Healthcare", "E-commerce and retail", "Technology and SaaS", "Energy supply chain"],
    delivery:
      "Remote-first delivery from our security team, with working hours that overlap fully with the Saudi business day.",
    faqs: [
      {
        q: "Who has to comply with the NCA Essential Cybersecurity Controls?",
        a: "The ECC applies to government organizations, private-sector organizations that own, operate, or host critical national infrastructure, and, through contracts, many of their technology vendors. If you sell to Saudi government or critical-infrastructure clients, expect ECC requirements in your contracts.",
      },
      {
        q: "Does the Saudi PDPL apply to companies outside Saudi Arabia?",
        a: "It can. The PDPL applies to processing of personal data relating to individuals in the Kingdom, including by organizations based outside it. Cross-border transfers are subject to specific conditions. Confirm your obligations with legal counsel.",
      },
      {
        q: "Can you help fintech companies with SAMA requirements?",
        a: "Yes. We support SAMA Cyber Security Framework maturity assessments, control implementation, and penetration testing for banks, payment companies, and fintechs.",
      },
    ],
  },
  {
    slug: "uae",
    name: "the United Arab Emirates",
    short: "UAE",
    countryCode: "AE",
    seoTitle: "Cybersecurity Company in the UAE & Dubai",
    metaDescription:
      "AI-powered cybersecurity in the UAE: PDPL and Dubai ISR compliance, penetration testing, managed SOC, and AI security for Dubai and Abu Dhabi.",
    h1: "Cybersecurity services in the UAE",
    intro:
      "The UAE is one of the world's most connected economies, and one of the most targeted. EclipticLink helps companies across Dubai, Abu Dhabi, and the free zones meet UAE data-protection and security standards, and defend against fast-moving threats with AI-assisted detection.",
    keywords: [
      "cybersecurity company UAE",
      "cybersecurity company Dubai",
      "cybersecurity Abu Dhabi",
      "penetration testing Dubai",
      "UAE PDPL compliance",
      "Dubai ISR compliance",
      "ADHICS compliance",
      "managed SOC UAE",
    ],
    context: [
      "The UAE has a high concentration of financial services, logistics, real estate, and regional headquarters, all attractive targets for ransomware and business email compromise.",
      "Federal, emirate, and free-zone regulators each set their own data-protection and security expectations, which makes compliance easy to get wrong.",
      "Rapid AI adoption across government and business brings new AI-specific risks that traditional testing doesn't cover.",
    ],
    regulations: [
      {
        name: "UAE Personal Data Protection Law (PDPL)",
        body: "Federal Decree-Law No. 45 of 2021 sets rules for processing personal data across the UAE outside the financial free zones. We map data flows, implement security safeguards, and prepare breach-response procedures.",
      },
      {
        name: "Dubai Information Security Regulation (ISR)",
        body: "Issued by the Dubai Electronic Security Center (DESC) for Dubai government entities and their suppliers. We run ISR gap assessments and help implement required controls.",
      },
      {
        name: "UAE Information Assurance Standards",
        body: "National information assurance controls for government and critical-sector entities. We align your security program to the standard and prepare supporting evidence.",
      },
      {
        name: "ADHICS (Abu Dhabi healthcare)",
        body: "The Abu Dhabi Healthcare Information and Cyber Security Standard from the Department of Health applies to healthcare providers and related entities in Abu Dhabi. We support gap assessments and control implementation.",
      },
      {
        name: "DIFC and ADGM data protection",
        body: "The financial free zones have their own data-protection laws. We help firms in DIFC and ADGM meet their security and breach-notification obligations.",
      },
    ],
    services: [
      { serviceId: "penetration-testing", why: "Testing for web apps, APIs, mobile apps, and networks, with reports that support regulator and client reviews." },
      { serviceId: "managed-detection-response", why: "AI-assisted monitoring and analyst-verified escalation aligned to the UAE working week." },
      { serviceId: "compliance-grc", why: "UAE PDPL, Dubai ISR, ADHICS, ISO 27001, and SOC 2 readiness." },
      { serviceId: "cloud-security", why: "Secure configuration of cloud workloads, including UAE cloud regions." },
      { serviceId: "ai-security", why: "Red teaming and governance for AI assistants and agents deployed in UAE businesses." },
    ],
    industries: ["Financial services and fintech", "Real estate and proptech", "Healthcare", "Logistics and trade", "Hospitality and retail", "Government suppliers"],
    delivery:
      "Remote-first delivery with working hours that overlap fully with the UAE business day.",
    faqs: [
      {
        q: "Which data-protection law applies to my UAE company?",
        a: "Most mainland companies fall under the federal PDPL. Companies in DIFC or ADGM follow their free zone's data-protection law, and some sectors, such as healthcare and banking, have additional sector rules. We help you work out which apply and what they require in practice.",
      },
      {
        q: "Do Dubai government suppliers need to follow the ISR?",
        a: "Dubai government entities are required to comply with the Information Security Regulation, and they commonly pass relevant requirements on to suppliers through contracts. If you serve Dubai government clients, expect ISR-aligned security questions.",
      },
      {
        q: "Can you test applications hosted in UAE data centers?",
        a: "Yes. We test applications and cloud environments wherever they are hosted, under rules of engagement agreed with you in advance.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "the United Kingdom",
    short: "United Kingdom",
    countryCode: "GB",
    seoTitle: "Cybersecurity Services UK & Cyber Essentials",
    metaDescription:
      "AI-powered cybersecurity for UK businesses: penetration testing, Cyber Essentials readiness, UK GDPR security, managed detection and response, and AI security.",
    h1: "Cybersecurity services for UK businesses",
    intro:
      "UK organizations face constant ransomware, phishing, and supply-chain attacks, plus customers who increasingly ask for proof of security. EclipticLink gives UK SMEs and scale-ups enterprise-grade protection without the cost of a full in-house security team.",
    keywords: [
      "cybersecurity services UK",
      "penetration testing UK",
      "Cyber Essentials readiness",
      "UK GDPR security",
      "managed SOC UK",
      "cybersecurity for SMEs UK",
      "AI security UK",
    ],
    context: [
      "Ransomware and business email compromise remain among the most damaging threats to UK businesses of every size.",
      "Public-sector and enterprise buyers often require Cyber Essentials certification, and increasingly ISO 27001 or SOC 2, before signing contracts.",
      "UK GDPR requires appropriate technical and organizational security measures, and reportable breaches must be notified to the ICO without undue delay.",
    ],
    regulations: [
      {
        name: "Cyber Essentials and Cyber Essentials Plus",
        body: "The UK government-backed scheme covering five core technical controls. We prepare you for certification, fix gaps in firewalls, configuration, access control, malware protection, and patching, and help you keep controls in place year-round.",
      },
      {
        name: "UK GDPR and the Data Protection Act 2018",
        body: "Require appropriate security for personal data and timely breach reporting to the ICO. We implement security controls, test them, and build incident-response procedures that meet reporting timelines.",
      },
      {
        name: "NIS Regulations",
        body: "Apply to operators of essential services and certain digital service providers. We help with security assessments and incident-response readiness.",
      },
      {
        name: "FCA operational resilience and DORA",
        body: "Financial firms must withstand and recover from disruption, and firms serving EU financial entities may also be affected by the EU's Digital Operational Resilience Act. We support testing, third-party risk, and incident readiness.",
      },
    ],
    services: [
      { serviceId: "penetration-testing", why: "Web, API, cloud, and network testing with clear, prioritized reports." },
      { serviceId: "compliance-grc", why: "Cyber Essentials readiness, ISO 27001, and SOC 2 for UK companies selling to enterprise." },
      { serviceId: "managed-detection-response", why: "AI-assisted monitoring with analyst escalation, without hiring a 24/7 team." },
      { serviceId: "incident-response", why: "Ransomware and BEC response, with documentation to support ICO reporting." },
    ],
    industries: ["SaaS and technology", "Professional services", "Financial services", "Healthcare and life sciences", "E-commerce", "Education"],
    delivery:
      "Remote delivery with working hours that overlap with the UK business day. Several of our existing clients are UK-based.",
    faqs: [
      {
        q: "Do you certify companies for Cyber Essentials?",
        a: "No. Certification is issued by IASME-licensed certification bodies. We prepare you for it, closing gaps and putting controls in place so you pass first time, and we can help you prepare for the Cyber Essentials Plus technical audit.",
      },
      {
        q: "How quickly do UK GDPR breaches need to be reported?",
        a: "Reportable personal data breaches must be notified to the ICO without undue delay and, where feasible, within 72 hours of becoming aware of them. Having an incident-response plan in place makes that deadline achievable.",
      },
      {
        q: "Is a penetration test required for Cyber Essentials?",
        a: "No, but many UK customers and insurers expect one in addition to Cyber Essentials, especially for internet-facing applications.",
      },
    ],
  },
  {
    slug: "united-states",
    name: "the United States",
    short: "United States",
    countryCode: "US",
    seoTitle: "Cybersecurity Services USA | SOC 2 & HIPAA",
    metaDescription:
      "AI-powered cybersecurity for US companies: SOC 2 and HIPAA readiness, penetration testing, managed detection and response, CMMC preparation, and AI security.",
    h1: "Cybersecurity services for US companies",
    intro:
      "US buyers expect proof of security before they sign, and regulators expect fast, accurate incident disclosure. EclipticLink helps US startups and growing companies pass security reviews, meet compliance requirements, and secure the AI products they ship.",
    keywords: [
      "cybersecurity services USA",
      "SOC 2 readiness",
      "HIPAA security compliance",
      "CMMC compliance",
      "penetration testing services US",
      "AI security company",
      "MDR services for small business",
    ],
    context: [
      "Enterprise customers routinely ask for a SOC 2 report and a recent penetration test during procurement.",
      "Sector rules such as HIPAA, the FTC Safeguards Rule, and NYDFS Part 500 set specific security requirements, and many states have their own privacy laws.",
      "US companies are leading AI adoption, which makes AI and LLM security a growing priority for product and security teams.",
    ],
    regulations: [
      {
        name: "SOC 2",
        body: "The de facto security attestation for US B2B SaaS. We take you from gap assessment to audit-ready, with evidence automation so Type II observation periods run smoothly.",
      },
      {
        name: "HIPAA Security Rule",
        body: "Requires administrative, physical, and technical safeguards for electronic protected health information. We run risk analyses and implement safeguards for healthcare providers, health tech, and business associates.",
      },
      {
        name: "CMMC",
        body: "The Cybersecurity Maturity Model Certification program applies to Department of Defense contractors handling Federal Contract Information or Controlled Unclassified Information. We help you prepare for the required assessment level.",
      },
      {
        name: "SEC cybersecurity disclosure rules",
        body: "Public companies must disclose material cybersecurity incidents and describe their risk management. We help build incident-response and materiality processes that support timely, accurate disclosure.",
      },
      {
        name: "State privacy laws and NYDFS Part 500",
        body: "Laws such as the CCPA/CPRA and New York's cybersecurity regulation for financial services add security and breach-notification requirements. We map which apply and close the gaps.",
      },
    ],
    services: [
      { serviceId: "compliance-grc", why: "SOC 2, HIPAA, and CMMC readiness with AI-assisted evidence collection." },
      { serviceId: "ai-security", why: "LLM red teaming and secure agent design for AI-first products." },
      { serviceId: "penetration-testing", why: "Annual and pre-release testing that satisfies customer security reviews." },
      { serviceId: "application-security", why: "DevSecOps and secure code review for fast-moving engineering teams." },
    ],
    industries: ["B2B SaaS", "AI startups", "Health tech", "Fintech", "Defense supply chain", "E-commerce"],
    delivery:
      "Remote delivery with working hours that overlap with US East Coast mornings, plus asynchronous reporting for other time zones.",
    faqs: [
      {
        q: "How much does SOC 2 readiness involve?",
        a: "It depends on your current controls and scope. After a gap assessment we give you a clear roadmap and timeline. Type II also requires an observation period, typically several months, during which controls must operate.",
      },
      {
        q: "Do you perform the SOC 2 audit?",
        a: "No. SOC 2 reports are issued by independent CPA firms. We prepare you for the audit and work alongside your auditor.",
      },
      {
        q: "Can you help secure our AI product before an enterprise security review?",
        a: "Yes. We red-team LLM features against the OWASP Top 10 for LLM Applications, fix the findings with your team, and help you answer AI-specific questions in customer security questionnaires.",
      },
    ],
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    short: "Pakistan",
    countryCode: "PK",
    seoTitle: "Cybersecurity Company in Pakistan",
    metaDescription:
      "AI-powered cybersecurity in Pakistan: penetration testing, SBP compliance support, managed detection, and ISO 27001 readiness for banks and IT exporters.",
    h1: "Cybersecurity services in Pakistan",
    intro:
      "Pakistan's banks, fintechs, and fast-growing IT export sector all need security that stands up to local regulators and international clients. EclipticLink is based in Pakistan and helps local companies protect their systems and win overseas contracts that demand proof of security.",
    keywords: [
      "cybersecurity company Pakistan",
      "cybersecurity services Pakistan",
      "penetration testing Pakistan",
      "SBP cybersecurity compliance",
      "ISO 27001 Pakistan",
      "cybersecurity Lahore",
      "cybersecurity Islamabad",
    ],
    context: [
      "Digital banking and fintech adoption is growing quickly, and so is fraud targeting customers and staff.",
      "Pakistani IT and software exporters are increasingly asked by overseas clients for ISO 27001, SOC 2, and penetration test evidence.",
      "Regulators including the State Bank of Pakistan expect regulated entities to maintain strong technology risk management.",
    ],
    regulations: [
      {
        name: "State Bank of Pakistan technology risk requirements",
        body: "SBP sets technology governance, risk management, and cybersecurity expectations for banks, microfinance banks, and payment providers. We support assessments, control implementation, and penetration testing.",
      },
      {
        name: "Prevention of Electronic Crimes Act (PECA) 2016",
        body: "Pakistan's main cybercrime law. We help organizations preserve evidence and respond to incidents in a way that supports reporting and investigation.",
      },
      {
        name: "Personal data protection",
        body: "Pakistan has proposed dedicated personal data protection legislation. We help organizations adopt data-protection practices now, aligned to international standards their overseas clients already expect.",
      },
      {
        name: "ISO 27001 and SOC 2 for exporters",
        body: "International clients often require these before awarding contracts. We prepare Pakistani software and BPO companies for certification and audit.",
      },
    ],
    services: [
      { serviceId: "penetration-testing", why: "Application, mobile, and network testing for banks, fintechs, and software companies." },
      { serviceId: "compliance-grc", why: "ISO 27001 and SOC 2 readiness for IT exporters, plus SBP compliance support." },
      { serviceId: "managed-detection-response", why: "AI-assisted monitoring for organizations without an in-house SOC." },
      { serviceId: "incident-response", why: "Fast local response to ransomware, fraud, and account-takeover incidents." },
    ],
    industries: ["Banking and microfinance", "Fintech and payments", "Software and IT exports", "Telecom", "E-commerce", "Healthcare"],
    delivery: "Our team is based in Pakistan, with remote and on-site support available locally.",
    faqs: [
      {
        q: "Can you help Pakistani software companies win international clients?",
        a: "Yes. We prepare IT exporters for ISO 27001 and SOC 2, run penetration tests, and help answer the security questionnaires that US, UK, and Gulf clients send during procurement.",
      },
      {
        q: "Do you work with banks and fintechs regulated by the SBP?",
        a: "Yes. We support technology risk assessments, control implementation, and penetration testing aligned to State Bank of Pakistan expectations.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
