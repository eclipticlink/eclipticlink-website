/*
 * Region + service landing pages, e.g. /locations/uae/data-protection-services.
 *
 * Each page answers one cluster of buyer-intent searches seen in Search
 * Console for that region, with a short direct answer up top (for search
 * snippets and AI answers), substantive sections, and FAQs. Regulatory facts
 * mirror the fact-checked copy in locations.ts; keep the two in sync.
 */

import type { TopicContent } from "../components/topic-page";

export type RegionPage = TopicContent & {
  /** Location slug from locations.ts */
  region: string;
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
      {
        title: "Common gaps we find in UAE companies",
        items: [
          "No up-to-date record of what personal data is held, where, and why.",
          "Shared or never-reviewed admin accounts on systems that hold personal data.",
          "No tested breach-response plan or regulator notification process.",
          "Suppliers handling personal data without data-protection terms in their contracts.",
          "Personal data copied into spreadsheets, chat tools and test environments.",
          "Transfers to overseas cloud regions or vendors that were never mapped.",
        ],
      },
      {
        title: "Cross-border data transfers",
        paragraphs: [
          "The PDPL and the DIFC and ADGM laws each restrict sending personal data outside their jurisdiction unless conditions are met, such as adequate protection in the destination or appropriate safeguards. Overseas cloud regions, offshore support teams and SaaS tools all count, so mapping where data travels is one of the first things we do.",
        ],
      },
      {
        title: "A practical data protection checklist",
        items: [
          "Confirm your licensing jurisdiction and the laws that apply.",
          "Build an inventory of the personal data you hold and where it lives.",
          "Identify sensitive data and apply stronger controls to it.",
          "Turn on MFA and remove shared admin accounts.",
          "Encrypt personal data in storage and in transit.",
          "Review supplier contracts for data-protection terms.",
          "Map cross-border transfers and put safeguards in place.",
          "Write and test a breach-response plan, including regulator notification.",
          "Set retention periods, and delete data you no longer need.",
          "Train staff on handling personal data and spotting phishing.",
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
      {
        title: "Managed SOC vs MSSP vs in-house SOC",
        table: {
          headers: [
            "",
            "In-house SOC",
            "Traditional MSSP",
            "Managed SOC / MDR",
          ],
          rows: [
            [
              "Who handles alerts",
              "Your own analysts, on shifts",
              "The provider, often forwarding alerts to you",
              "The provider's analysts, who investigate them",
            ],
            [
              "Response",
              "Your team",
              "Usually a notification",
              "Containment using playbooks you pre-approve",
            ],
            [
              "Time to get started",
              "Months to hire and set up tools",
              "Weeks",
              "Weeks, using the tools you already own",
            ],
            [
              "Cost profile",
              "Salaries for every shift, plus tools and training",
              "Monthly fee, often by device or log volume",
              "Monthly fee scoped to users, endpoints and log sources",
            ],
            [
              "Best for",
              "Large organizations with a steady security budget",
              "Log collection and retention",
              "Growing companies that need 24/7 detection and response",
            ],
          ],
        },
        after: [
          "The difference that matters most is the last mile: whether someone investigates and acts on an alert at 3am on a Saturday, or simply sends you an email about it.",
        ],
      },
      {
        title: "Attacks worth watching for in UAE businesses",
        paragraphs: [
          "These are the patterns that most often become real incidents for companies in trade, real estate, finance and professional services, and the ones our monitoring is tuned to catch early:",
        ],
        items: [
          "<strong>Payment-diversion fraud:</strong> an attacker inside a compromised mailbox changes the bank details on a genuine invoice.",
          "<strong>Account takeover</strong> of Microsoft 365 and Google Workspace through phishing and MFA fatigue.",
          "<strong>Ransomware</strong> that starts with exposed remote access or an unpatched VPN.",
          "<strong>Fake login pages</strong> impersonating well-known brands and services to steal credentials.",
          "<strong>Risky cloud changes,</strong> such as storage made public or new admin keys created outside working hours.",
        ],
      },
      {
        title: "Questions to ask a managed SOC provider in the UAE",
        items: [
          "Who investigates an alert, and does a person verify it before your team is called?",
          "Which actions can they take on their own, and which need your approval?",
          "How do they cover nights, weekends and public holidays?",
          "Do they work with the tools you already own, or require their own stack?",
          "Where is your log data stored and processed, and who can access it?",
          "What does the monthly report show, and can your auditors use it?",
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
      {
        q: "Does the UAE PDPL require breach notification?",
        a: "Yes. The PDPL requires notifying the regulator of breaches that put individuals' privacy at risk, and the DIFC and ADGM laws have their own notification duties. A managed SOC helps you detect breaches quickly and keeps the records you need to report them.",
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
  {
    region: "saudi-arabia",
    slug: "managed-soc-mdr",
    serviceId: "managed-detection-response",
    seoTitle: "Managed SOC & MDR Services in Saudi Arabia",
    metaDescription:
      "Managed SOC and MDR for Saudi companies: AI-assisted 24/7 monitoring, threat hunting and analyst-approved response, aligned to NCA expectations.",
    h1: "Managed SOC and MDR services in Saudi Arabia",
    eyebrow: "Managed SOC · Saudi Arabia",
    intro:
      "Around-the-clock threat monitoring for Saudi companies and technology suppliers, without building a full in-house security operations center. AI handles the volume; analysts verify every escalation and response.",
    answer:
      "A managed SOC (security operations center), often delivered as MDR (managed detection and response), monitors your systems around the clock, investigates alerts and contains threats for you. In Saudi Arabia it also gives you the security event monitoring that NCA's controls expect. Government entities and critical infrastructure operators should first check what NCA and their contracts require of managed security providers.",
    sections: [
      {
        title: "Who a managed SOC suits in Saudi Arabia",
        items: [
          "<strong>Private companies and fintechs</strong> that need 24/7 coverage but can't yet staff a full SOC.",
          "<strong>Companies newly in scope of NCA's Non-CNI Cybersecurity Controls</strong> (NCNICC-1:2025, adopted in December 2025), which scale requirements to company size.",
          "<strong>Technology suppliers</strong> to government and critical infrastructure, whose contracts pass down ECC requirements such as security event monitoring.",
        ],
      },
      {
        title: "Government entity or critical infrastructure operator?",
        paragraphs: [
          "The ECC expects cybersecurity positions to be filled by qualified, full-time Saudi professionals, and your contract or NCA may require a licensed local provider for managed security services. Check those requirements before outsourcing monitoring. We can still help you design the in-house function and support it with testing and compliance work.",
        ],
      },
      {
        title: "What we watch",
        items: [
          "<strong>Identity providers and VPNs,</strong> where most account takeovers start.",
          "<strong>Endpoints and servers</strong> through your existing EDR.",
          "<strong>Cloud accounts and workloads,</strong> whether hosted in the Kingdom or abroad.",
          "<strong>Email,</strong> for phishing and business email compromise aimed at finance and procurement teams.",
          "<strong>The systems in your ECC or NCNICC scope,</strong> prioritized from day one.",
        ],
      },
      {
        title: "Aligned to Saudi requirements",
        items: [
          "Centralized logging and security event monitoring, which the ECC lists among its cybersecurity defense controls.",
          "Monitoring evidence for NCA compliance assessments and, for financial firms, SAMA Cyber Security Framework reviews.",
          "Incident records and procedures that support breach-notification duties under the PDPL, enforced by SDAIA.",
          "Log data handled in line with NDMO and sector data-residency rules: we agree where logs are stored and processed before onboarding.",
          "Working hours that overlap fully with the Saudi business day.",
        ],
      },
      {
        title: "AI for the volume, analysts for the decisions",
        paragraphs: [
          "AI correlates and enriches alerts, maps them to MITRE ATT&amp;CK and drafts the investigation, so analysts spend their time deciding rather than collecting. An analyst verifies every escalation before your team is paged. Pre-approved playbooks contain common threats in minutes; anything that affects users, production systems or customers waits for an analyst or for your approval, and every action is logged.",
        ],
      },
      {
        title: "Managed SOC alongside the cybersecurity function NCA expects",
        table: {
          headers: [
            "",
            "Your cybersecurity function",
            "Managed SOC",
          ],
          rows: [
            [
              "Owns",
              "Strategy, policies, risk decisions and NCA reporting",
              "Day-to-day detection, triage and first response",
            ],
            [
              "Hours",
              "Business hours",
              "Around the clock",
            ],
            [
              "Evidence",
              "Approves it and presents it to assessors",
              "Produces monitoring logs, incident records and monthly reports",
            ],
            [
              "Decisions",
              "Approves business-impacting actions",
              "Contains threats within pre-approved playbooks",
            ],
          ],
        },
        after: [
          "Splitting the work this way keeps accountability with your team, as the ECC intends, while giving them coverage they could not staff around the clock on their own.",
        ],
      },
      {
        title: "Onboarding checklist for Saudi organizations",
        items: [
          "Confirm whether you are in scope of the ECC, NCNICC, SAMA, or only contract requirements.",
          "Agree where log data will be stored and processed, in line with NDMO rules, sector regulations and the PDPL.",
          "List your critical systems and the accounts that can change them.",
          "Connect identity, endpoint, email and cloud logs first, then network and application logs.",
          "Name who approves containment actions, and how to reach them out of hours.",
          "Agree the monthly report format, so it doubles as compliance evidence.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "Confirm your NCA and SAMA obligations, critical assets and where log data may be stored." },
      { title: "Connect", body: "Integrate your EDR, SIEM, identity provider and cloud logs." },
      { title: "Tune", body: "Baseline normal activity and agree escalation paths and playbooks." },
      { title: "Monitor", body: "Around-the-clock detection, triage, threat hunting and monthly reporting." },
    ],
    faqs: [
      {
        q: "Do Saudi regulations require us to keep security logs in the Kingdom?",
        a: "It depends on your sector and the data involved. Data localization is governed mainly by SDAIA's National Data Management Office (NDMO) rules and sector regulations, and security logs often contain personal data covered by the PDPL. We agree where log data is stored and processed before onboarding.",
      },
      {
        q: "Can a managed SOC help with NCA ECC compliance?",
        a: "Yes, for the monitoring part. The ECC lists security event monitoring among its defense controls, and a managed SOC gives you both the coverage and the evidence. The ECC also requires governance controls, such as a cybersecurity function independent of IT, that monitoring alone does not cover; our compliance team can help with those.",
      },
      {
        q: "We supply a Saudi government entity. What monitoring do we need?",
        a: "Start with your contract: government clients pass ECC requirements down to suppliers, and those commonly include centralized logging and security event monitoring for the systems you run for them. A managed SOC can provide that coverage and the evidence your client will ask for.",
      },
      {
        q: "Can a managed SOC replace the in-house cybersecurity function the ECC requires?",
        a: "For organizations in ECC scope, no. The ECC expects an in-house cybersecurity function staffed by qualified Saudi professionals. A managed SOC supports that team with round-the-clock monitoring and first response; it doesn't replace the function itself.",
      },
      {
        q: "How do you handle Saudi working hours and holidays?",
        a: "Monitoring runs around the clock, including weekends and public holidays. Escalations, reviews and reporting happen during working hours that overlap fully with the Saudi business day.",
      },
    ],
    guides: ["nca-ecc-compliance-checklist-saudi-arabia", "ai-powered-mdr-what-it-is-and-how-it-works"],
    keywords: [
      "managed SOC Saudi Arabia",
      "SOC services Saudi Arabia",
      "MDR Saudi Arabia",
      "managed detection and response KSA",
      "SOC as a service Riyadh",
      "NCA ECC monitoring",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "pakistan",
    slug: "managed-soc-mdr",
    serviceId: "managed-detection-response",
    seoTitle: "Managed SOC & MDR Services in Pakistan",
    metaDescription:
      "Managed SOC and MDR for Pakistani banks, fintechs and IT exporters: AI-assisted 24/7 monitoring, threat hunting and analyst-approved response from a local team.",
    h1: "Managed SOC and MDR services in Pakistan",
    eyebrow: "Managed SOC · Pakistan",
    intro:
      "Round-the-clock threat monitoring from a team based in Pakistan, for banks, fintechs and software companies that need SOC coverage without building it in-house.",
    answer:
      "A managed SOC (security operations center), often delivered as MDR (managed detection and response), monitors your systems around the clock, investigates alerts and contains threats for you. EclipticLink's team is based in Pakistan, so you get local support and response alongside AI-assisted monitoring that works with the tools you already have.",
    sections: [
      {
        title: "Who it's for",
        items: [
          "<strong>Banks, microfinance banks and payment providers</strong> working to State Bank of Pakistan technology risk expectations.",
          "<strong>Fintechs</strong> facing fraud and account takeover aimed at customers and staff.",
          "<strong>Software and BPO exporters</strong> whose overseas clients ask for proof of monitoring, ISO 27001 or SOC 2.",
          "<strong>Telecom, e-commerce and healthcare companies</strong> without an in-house SOC.",
        ],
      },
      {
        title: "What we monitor",
        items: [
          "<strong>Identity:</strong> Microsoft 365 and Google Workspace sign-ins, MFA abuse and suspicious mailbox rules.",
          "<strong>Endpoints:</strong> EDR alerts on laptops and servers.",
          "<strong>Cloud:</strong> AWS, Azure and GCP audit logs.",
          "<strong>Email:</strong> phishing and business email compromise attempts.",
          "<strong>Payment systems and admin accounts,</strong> where fraud and takeover do the most damage.",
        ],
      },
      {
        title: "Local team, international standards",
        items: [
          "Our team is based in Pakistan, with remote and on-site support available locally.",
          "Evidence for SBP reviews, ISO 27001 audits and the security questionnaires overseas clients send.",
          "Incident handling that preserves evidence to support reporting and investigation under the Prevention of Electronic Crimes Act (PECA) 2016.",
          "Monthly reports your management, auditors and clients can read.",
        ],
      },
      {
        title: "AI for the volume, analysts for the decisions",
        paragraphs: [
          "AI groups related alerts, adds context and drafts the investigation; an analyst verifies every escalation before anyone on your team is called. Containment steps you pre-approve, such as isolating a compromised laptop, run in minutes. Anything that affects users, production systems or customers waits for an analyst or for your approval.",
        ],
      },
      {
        title: "Fraud and account takeover in Pakistani fintech",
        paragraphs: [
          "Digital banking and wallet adoption has grown quickly, and so has fraud aimed at customers and staff. Monitoring focused on identity and admin access catches account takeover while it is happening, rather than in a log review weeks later. We look for:",
        ],
        items: [
          "Logins from new devices or locations followed by profile, phone number or payout changes.",
          "Staff accounts viewing far more customer records than usual.",
          "Admin credentials and API keys used from unexpected places.",
          "Phishing campaigns and fake apps impersonating your brand.",
        ],
      },
      {
        title: "What overseas clients ask Pakistani exporters about monitoring",
        items: [
          "Do you monitor your systems 24/7, and who responds out of hours?",
          "How quickly do you detect and contain a security incident?",
          "Do you keep security logs, and for how long?",
          "Will you tell us if an incident affects our data?",
          "Can you show evidence, such as reports or an ISO 27001 or SOC 2 report?",
        ],
        after: [
          "A managed SOC lets you answer all five honestly, with reports to back the answers up, which shortens procurement and helps win contracts.",
        ],
      },
      {
        title: "Managed SOC or hiring your own team?",
        paragraphs: [
          "Running a 24/7 rota takes several analysts plus tooling and ongoing training, and experienced security staff are also in demand from overseas employers. A managed SOC spreads that cost, gives you a full team from day one, and lets your own IT staff focus on running the business.",
        ],
      },
      {
        title: "A typical first month",
        items: [
          "<strong>Week 1:</strong> connect identity, email and endpoint logs, and list your critical systems and admin accounts.",
          "<strong>Week 2:</strong> learn what normal activity looks like, and agree escalation contacts and pre-approved actions.",
          "<strong>Week 3:</strong> a first threat hunt across your environment, looking for signs of past compromise.",
          "<strong>Week 4:</strong> your first monthly report, with quick wins that reduce risk straight away.",
        ],
      },
    ],
    steps: [
      { title: "Assess", body: "Your systems, client obligations and any SBP expectations." },
      { title: "Connect", body: "Microsoft 365 or Google Workspace, EDR and cloud logs." },
      { title: "Agree", body: "Who approves containment, and how we reach them day or night." },
      { title: "Protect", body: "24/7 monitoring, monthly reports and on-site help when needed." },
    ],
    faqs: [
      {
        q: "Is EclipticLink a Pakistani cybersecurity company?",
        a: "Our security team is based in Pakistan, with remote and on-site support available locally. We also serve clients in the UAE, Saudi Arabia, the UK and the US.",
      },
      {
        q: "Can a managed SOC help with State Bank of Pakistan requirements?",
        a: "It covers the monitoring and incident response parts of SBP's technology risk expectations and gives you evidence for reviews. We can also support the wider assessment and control work.",
      },
      {
        q: "Can you provide on-site support?",
        a: "Yes. Our team is based in Pakistan, so alongside remote monitoring we can provide on-site support locally when an incident or onboarding needs it.",
      },
      {
        q: "Can you help us answer client security questionnaires?",
        a: "Yes. Monitoring reports, incident records and our documentation answer many of the questions overseas clients ask, and our compliance team can help with the rest, including ISO 27001 and SOC 2.",
      },
      {
        q: "What happens when you detect a real attack?",
        a: "We confirm it, contain it with the steps you have approved, and call your named contacts straight away. Because our team is local, we can also come on site. Evidence is preserved from the start, so you can report the incident or support an investigation later.",
      },
    ],
    guides: ["ai-powered-mdr-what-it-is-and-how-it-works", "incident-response-plan-first-24-hours"],
    keywords: [
      "managed SOC Pakistan",
      "SOC services Pakistan",
      "MDR Pakistan",
      "cybersecurity company Pakistan",
      "security monitoring Pakistan",
      "SOC as a service Lahore",
      "SOC as a service Islamabad",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "united-states",
    slug: "soc-2-readiness-for-startups",
    serviceId: "compliance-grc",
    seoTitle: "SOC 2 Readiness Services for Startups",
    metaDescription:
      "SOC 2 for startups: from gap assessment to audit-ready, with policies, controls, cloud fixes, evidence and a penetration test, for SaaS on AWS, Azure or GCP.",
    h1: "SOC 2 readiness for startups",
    eyebrow: "SOC 2 · Startups",
    intro:
      "Enterprise customers keep asking for your SOC 2 report. We take startups from the first gap assessment to audit-ready without derailing the product roadmap.",
    answer:
      "SOC 2 is an attestation report, issued by an independent CPA firm under AICPA standards, that shows how a company protects customer data. For a startup the usual path is a readiness assessment, fixing the gaps, then a Type I report on control design at a point in time and a Type II report on how controls operated over an observation period. Enterprise buyers usually ask for the Type II.",
    sections: [
      {
        title: "SOC 2 Type I vs Type II",
        items: [
          "<strong>Type I</strong> looks at whether your controls are designed properly, at a single point in time. It is faster and can unblock early deals.",
          "<strong>Type II</strong> tests whether those controls actually operated over an observation period, typically between three and twelve months. It is what most enterprise security reviews ask for.",
        ],
      },
      {
        title: "What SOC 2 asks of a startup",
        items: [
          "<strong>Security</strong> is the one Trust Services Criterion every report covers. Availability, Confidentiality, Processing Integrity and Privacy are optional, added when customers need them.",
          "<strong>Policies:</strong> access control, change management, incident response, vendor management and risk assessment.",
          "<strong>Technical controls:</strong> SSO and MFA, least-privilege access, encryption, logging, backups and vulnerability management.",
          "<strong>Operational evidence:</strong> access reviews, onboarding and offboarding records, change approvals and security training.",
          "<strong>A recent penetration test</strong>, which SOC 2 does not name but auditors and enterprise customers routinely expect.",
        ],
      },
      {
        title: "SOC 2 on AWS, Azure or GCP",
        paragraphs: [
          "Your cloud provider has its own SOC 2 report, but it only covers their side of the shared-responsibility model. You still have to show how you configure identity and access, logging, encryption and backups in your own accounts.",
          "We map your cloud configuration to SOC 2 controls and fix the gaps, as infrastructure-as-code changes where possible, so the fixes stay fixed.",
        ],
      },
      {
        title: "SOC 2 software vs readiness help",
        paragraphs: [
          "Compliance automation platforms collect evidence and track controls, and they are worth using. They don't decide how your controls should work, fix misconfigured cloud accounts, run your penetration test or answer an auditor's follow-up questions. We work alongside whichever platform you choose, or without one.",
        ],
      },
      {
        title: "SOC 2 and ISO 27001 together",
        paragraphs: [
          "If you sell to US enterprises and to customers in Europe or the Gulf, you may be asked for both. Many controls overlap, so we plan them together and collect evidence once.",
        ],
      },
      {
        title: "Choosing your Trust Services Criteria",
        items: [
          "Start with <strong>Security</strong>, which every report covers.",
          "Add <strong>Availability</strong> if customers rely on uptime commitments.",
          "Add <strong>Confidentiality</strong> if you hold customers' confidential business data.",
          "Add <strong>Privacy</strong> or <strong>Processing Integrity</strong> only when customers ask, because each adds controls and evidence to maintain.",
        ],
      },
      {
        title: "Evidence auditors commonly ask for",
        table: {
          headers: [
            "Area",
            "Examples of evidence",
          ],
          rows: [
            [
              "Access control",
              "Access reviews, offboarding records, MFA settings",
            ],
            [
              "Change management",
              "Pull request approvals, deployment logs, change tickets",
            ],
            [
              "Risk management",
              "Risk assessment and treatment decisions",
            ],
            [
              "Vendor management",
              "Vendor list and security reviews of key suppliers",
            ],
            [
              "Incident response",
              "Incident response plan, incident records or a tabletop exercise",
            ],
            [
              "People",
              "Security training records and onboarding checks",
            ],
          ],
        },
      },
      {
        title: "Common SOC 2 mistakes startups make",
        items: [
          "Starting the Type II observation period before the controls actually work.",
          "Writing policies that don't match how the team really operates.",
          "Leaving the production cloud environment out of access reviews.",
          "Forgetting offboarding, so former staff keep live access.",
          "Treating the compliance platform as the whole project.",
        ],
      },
    ],
    steps: [
      { title: "Assess", body: "A gap assessment against the criteria in scope for your customers." },
      { title: "Fix", body: "Policies, controls and cloud configuration, prioritized by audit impact." },
      { title: "Test", body: "A penetration test and an evidence check before the auditor arrives." },
      { title: "Audit", body: "Support through your Type I and Type II audits with the CPA firm you choose." },
    ],
    faqs: [
      {
        q: "How long does SOC 2 take for a startup?",
        a: "Readiness work commonly takes from a few weeks to a few months, depending on how much is already in place. A Type I can follow once controls are designed; a Type II then needs an observation period, typically three to twelve months, before the auditor issues the report.",
      },
      {
        q: "Do we need a SOC 2 Type I before a Type II?",
        a: "No. Some startups get a Type I first to unblock deals quickly; others go straight into a Type II observation period.",
      },
      {
        q: "Can EclipticLink issue our SOC 2 report?",
        a: "No. Only an independent CPA firm can issue a SOC 2 report. We get you ready and support you through the audit.",
      },
      {
        q: "Is a penetration test required for SOC 2?",
        a: "SOC 2 doesn't name one, but auditors look for vulnerability management and testing evidence, and enterprise customers routinely ask for a recent pentest report. We can run it as part of readiness.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand, which criteria your customers need, and outline a prioritized plan to audit-ready.",
      },
    ],
    guides: ["soc-2-compliance-checklist-for-startups", "penetration-testing-vs-vulnerability-scanning"],
    keywords: [
      "SOC 2 for startups",
      "SOC 2 readiness",
      "SOC 2 compliance for startups",
      "SOC 2 on AWS",
      "SOC 2 Type II startup",
      "startup security compliance",
      "SOC 2 and ISO 27001",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "uae",
    slug: "penetration-testing",
    serviceId: "penetration-testing",
    seoTitle: "Penetration Testing in Dubai & the UAE",
    metaDescription:
      "Penetration testing in Dubai, Abu Dhabi and the UAE: web, API, mobile, network and cloud testing with reports that support regulator, tender and client reviews.",
    h1: "Penetration testing in Dubai and the UAE",
    eyebrow: "Penetration testing · UAE",
    intro:
      "Find out how an attacker would get in before they do. We test web apps, APIs, mobile apps, networks and cloud environments for UAE companies, with reports your regulators, auditors and clients can use.",
    answer:
      "A penetration test is a controlled attack on your systems by security testers, who find weaknesses, prove which ones are exploitable and show you how to fix them. UAE companies commonly need one to meet regulator and client expectations, to support ISO 27001 or SOC 2 audits, and to answer tender security questions, as well as to find real risks before attackers do.",
    sections: [
      {
        title: "What we test",
        items: [
          "<strong>Web applications:</strong> authentication, access control, injection and business-logic flaws.",
          "<strong>APIs:</strong> REST, GraphQL and gRPC against the OWASP API Security Top 10.",
          "<strong>Mobile apps:</strong> iOS and Android apps and the APIs behind them.",
          "<strong>Networks:</strong> internet-facing exposure and internal attack paths, including Active Directory.",
          "<strong>Cloud:</strong> AWS, Azure and GCP environments, including UAE cloud regions.",
          "<strong>AI features:</strong> chatbots and agents tested for prompt injection and data leakage.",
        ],
      },
      {
        title: "Why UAE companies test",
        items: [
          "To show the security measures the UAE PDPL and the DIFC and ADGM data-protection laws expect are actually working.",
          "To meet ISR-aligned requirements passed down by Dubai government clients, and UAE Information Assurance Standards controls in government and critical sectors.",
          "To support sector requirements, such as ADHICS in Abu Dhabi healthcare and CBUAE, DFSA or FSRA expectations in finance.",
          "To answer tender and client security questionnaires, and to back ISO 27001 and SOC 2 audits.",
        ],
      },
      {
        title: "Dubai government and critical entities",
        paragraphs: [
          "Dubai government entities, and critical entities brought under DESC rules by Law No. 15 of 2024, must use cybersecurity providers with DESC Cyber Force certification. If that applies to you, confirm a provider's certification before engaging them. Suppliers to those entities are usually covered through their contracts instead.",
        ],
      },
      {
        title: "What you get",
        items: [
          "CVSS-scored, prioritized findings, each validated by a tester.",
          "A technical report with proof-of-concept steps and fix guidance.",
          "An executive summary for leadership.",
          "A retest and attestation letter for customers, auditors and tenders.",
        ],
      },
      {
        title: "Which test do you need?",
        table: {
          headers: [
            "If you need to…",
            "Test to commission",
          ],
          rows: [
            [
              "Prove a customer-facing web app is secure",
              "Authenticated web application test",
            ],
            [
              "Secure a mobile app and its back end",
              "Mobile app test plus an API test",
            ],
            [
              "Answer a tender or client security review",
              "Test of the systems in scope, with an attestation letter",
            ],
            [
              "See what is exposed to the internet",
              "External network test and attack surface review",
            ],
            [
              "Find out how far an attacker could get inside",
              "Internal network test from an assumed-breach position",
            ],
            [
              "Validate a cloud environment",
              "Cloud configuration and identity review",
            ],
            [
              "Launch an AI assistant or agent",
              "LLM and AI application test",
            ],
          ],
        },
      },
      {
        title: "Common findings in UAE web and mobile apps",
        items: [
          "Customers able to see other customers' records by changing an ID in a request.",
          "Admin panels reachable from the internet without multi-factor authentication.",
          "Password reset flows that let an attacker take over an account.",
          "Cloud storage buckets or database backups left open to the public.",
          "Outdated components with known, exploitable vulnerabilities.",
          "Mobile apps with API keys or secrets embedded in the app package.",
        ],
        after: [
          "None of these needs advanced techniques, which is exactly why attackers check for them first.",
        ],
      },
      {
        title: "How to prepare for a penetration test",
        items: [
          "Write down what is in scope and what is not, and get sign-off from the system owners.",
          "Create test accounts for each user role, including an admin role if it is in scope.",
          "Use a staging environment that mirrors production where you can.",
          "Tell your hosting provider and internal teams about the testing window.",
          "Name who testers should call if they find something critical mid-test.",
          "Book developer time for fixes and the retest, so the report doesn't sit on a shelf.",
        ],
      },
      {
        title: "Choosing a penetration testing company in Dubai",
        items: [
          "Ask for a sample report: findings should include proof-of-concept steps and practical fixes.",
          "Confirm the testing is manual and goes beyond a rebranded vulnerability scan.",
          "Check that a retest of fixes and an attestation letter are included.",
          "Agree how findings and evidence are stored and who can see them.",
          "If you are a Dubai government or critical entity, confirm the provider's DESC Cyber Force certification first.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "Agree targets, environments and written rules of engagement." },
      { title: "Test", body: "AI-assisted reconnaissance, then manual exploitation." },
      { title: "Report", body: "Validated findings with proof-of-concept steps and fixes." },
      { title: "Retest", body: "Confirm the fixes and issue an attestation letter." },
    ],
    faqs: [
      {
        q: "Can you test applications hosted in UAE data centers?",
        a: "Yes. We test applications and cloud environments wherever they are hosted, under rules of engagement agreed with you in advance.",
      },
      {
        q: "Do you need to be on site?",
        a: "Usually not. Web, API, mobile, cloud and external network testing are done remotely. Internal network testing can use a secure remote connection inside your network.",
      },
      {
        q: "How long does a penetration test take?",
        a: "It depends on scope. A focused web application or API test commonly takes one to two weeks of testing; larger engagements across several applications and networks take longer. Reporting and a retest add time on either side.",
      },
      {
        q: "How much does a penetration test cost in the UAE?",
        a: "Price depends on what is in scope: the number of applications, endpoints, user roles and network ranges. We scope and quote each engagement after a short call; the free 30-minute assessment is the place to start.",
      },
      {
        q: "Is a vulnerability scan enough?",
        a: "Usually not. Scans list known issues; a penetration test proves what an attacker could actually do and finds logic flaws scanners miss. Auditors and many UAE clients ask for a penetration test report, not a scan.",
      },
    ],
    guides: ["how-to-choose-a-penetration-testing-company-uae", "penetration-testing-vs-vulnerability-scanning", "dubai-uae-cybersecurity-compliance-guide"],
    keywords: [
      "penetration testing Dubai",
      "penetration testing UAE",
      "pentest Dubai",
      "web application penetration testing UAE",
      "API penetration testing Dubai",
      "penetration testing company Dubai",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "uae",
    slug: "iso-27001-certification",
    serviceId: "compliance-grc",
    seoTitle: "ISO 27001 Certification Support in Dubai & UAE",
    metaDescription:
      "ISO 27001 certification support in Dubai, DIFC, ADGM and across the UAE: gap assessment, risk assessment, Statement of Applicability, internal audit and audit readiness.",
    h1: "ISO 27001 certification support in the UAE",
    eyebrow: "ISO 27001 · UAE",
    intro:
      "ISO 27001 is the common baseline that ties UAE data-protection and security requirements together. We take you from gap assessment to certification-ready, and help you keep it.",
    answer:
      "ISO/IEC 27001 is the international standard for an information security management system (ISMS). Certification is issued by an accredited certification body after a two-stage audit, and is typically valid for three years with annual surveillance audits. For UAE companies it is a practical baseline across the PDPL, DIFC and ADGM rules and client requirements, and it is what many tenders and enterprise customers ask for.",
    sections: [
      {
        title: "Why ISO 27001 for UAE companies",
        items: [
          "One framework that maps across the UAE PDPL, DIFC and ADGM data-protection laws, ISR-aligned client requirements and the UAE Information Assurance Standards.",
          "Recognized by regional and international clients, so one certificate answers many security questionnaires.",
          "A structured way to manage risk, rather than a one-off project.",
        ],
      },
      {
        title: "What we do",
        items: [
          "<strong>Gap assessment</strong> against ISO/IEC 27001:2022 and the frameworks that apply to you.",
          "<strong>Scope and risk assessment:</strong> what the ISMS covers and the risks that matter.",
          "<strong>Statement of Applicability:</strong> which Annex A controls apply and why.",
          "<strong>Policies and controls</strong> that match how you actually operate, implemented with your team.",
          "<strong>Internal audit and management review</strong> before the certification body arrives.",
          "<strong>ISO/IEC 42001</strong> for organizations building AI, alongside ISO 27001.",
        ],
      },
      {
        title: "ISO 27001 or SOC 2?",
        paragraphs: [
          "ISO 27001 is the norm in the UAE, Europe and most of the world. SOC 2 is the report US enterprise customers usually ask for. Dubai SaaS companies selling into the US often need both, and many controls overlap, so we plan them together and collect evidence once.",
        ],
      },
      {
        title: "DIFC and ADGM companies",
        paragraphs: [
          "Companies in DIFC and ADGM follow their free zone's own data-protection law. ISO 27001 doesn't replace those obligations, but a working ISMS gives you the security controls, records and breach-response procedures that make meeting them much easier to prove.",
        ],
      },
      {
        title: "What ISO 27001:2022 covers",
        paragraphs: [
          "The standard has two parts. The management-system clauses cover context, leadership, planning, support, operation, performance evaluation and improvement. Annex A is a reference set of 93 controls in four themes; your Statement of Applicability explains which apply to you and why.",
        ],
        table: {
          headers: [
            "Annex A theme",
            "Controls",
            "Examples",
          ],
          rows: [
            [
              "Organizational",
              "37",
              "Policies, supplier security, incident management, business continuity",
            ],
            [
              "People",
              "8",
              "Screening, awareness training, remote working",
            ],
            [
              "Physical",
              "14",
              "Secure areas, equipment protection, clear desk",
            ],
            [
              "Technological",
              "34",
              "Access control, logging, secure development, backups",
            ],
          ],
        },
      },
      {
        title: "Stage 1 vs Stage 2 audits",
        table: {
          headers: [
            "",
            "Stage 1",
            "Stage 2",
          ],
          rows: [
            [
              "Focus",
              "Documentation and readiness",
              "Whether the ISMS actually operates",
            ],
            [
              "What the auditor reviews",
              "Scope, risk assessment, Statement of Applicability, policies",
              "Evidence that controls work, internal audit, management review",
            ],
            [
              "Outcome",
              "A list of gaps to close before Stage 2",
              "The certification decision",
            ],
          ],
        },
      },
      {
        title: "Why companies fail Stage 2",
        items: [
          "A risk assessment that doesn't actually drive the Statement of Applicability.",
          "Policies that exist on paper, with no evidence that anyone follows them.",
          "No internal audit or management review before the certification audit.",
          "Missing supplier security reviews and user access reviews.",
          "A scope that is unclear, or that leaves out the systems customers care about.",
        ],
      },
      {
        title: "Budgeting for ISO 27001",
        items: [
          "<strong>Readiness support:</strong> gap assessment, documentation and implementation help.",
          "<strong>Certification body fees</strong> for the Stage 1 and Stage 2 audits and the annual surveillance audits.",
          "<strong>Internal time:</strong> an ISMS owner, plus input from IT, HR and leadership.",
          "<strong>Tooling</strong> you may already have, such as MFA, endpoint protection and backups.",
        ],
        after: [
          "We help you size each of these at the start, so there are no surprises halfway through.",
        ],
      },
    ],
    steps: [
      { title: "Assess", body: "Gap assessment and scope for your ISMS." },
      { title: "Build", body: "Risk assessment, Statement of Applicability, policies and controls." },
      { title: "Check", body: "Internal audit and management review." },
      { title: "Certify", body: "Support through the Stage 1 and Stage 2 audits with your certification body." },
    ],
    faqs: [
      {
        q: "Can EclipticLink certify us for ISO 27001?",
        a: "No. Certification is issued by an accredited certification body. We get you ready, run your internal audit, and support you through the certification audits.",
      },
      {
        q: "How long does ISO 27001 certification take?",
        a: "It depends on your size and how much is already in place. Readiness commonly takes a few months; the certification audit then has two stages, a documentation review and an assessment of how the ISMS operates in practice.",
      },
      {
        q: "Does ISO 27001 make us compliant with the UAE PDPL?",
        a: "Not on its own. ISO 27001 covers information security, which is a large part of what the PDPL expects, but privacy duties such as lawful processing and data-subject rights need separate work. We plan both together.",
      },
      {
        q: "We are a SaaS company in Dubai. Do we need SOC 2 as well?",
        a: "If you sell to US enterprises, probably. They usually ask for a SOC 2 report even when you hold ISO 27001. The overlap is large, so doing both is far less work than it sounds.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand and outline a realistic path to certification.",
      },
    ],
    guides: ["dubai-uae-cybersecurity-compliance-guide", "soc-2-compliance-checklist-for-startups"],
    keywords: [
      "ISO 27001 certification Dubai",
      "ISO 27001 UAE",
      "ISO 27001 DIFC",
      "ISO 27001 consultant Dubai",
      "SOC 2 Dubai",
      "ISMS UAE",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "saudi-arabia",
    slug: "penetration-testing",
    serviceId: "penetration-testing",
    seoTitle: "Penetration Testing in Saudi Arabia",
    metaDescription:
      "Penetration testing for Saudi companies and suppliers: web, API, mobile, network and cloud testing that supports NCA ECC, SAMA and client security reviews.",
    h1: "Penetration testing in Saudi Arabia",
    eyebrow: "Penetration testing · Saudi Arabia",
    intro:
      "Validate your controls the way an attacker would. We test web apps, APIs, mobile apps, networks and cloud for Saudi companies and technology suppliers, with reports that support NCA and SAMA reviews.",
    answer:
      "A penetration test is a controlled attack on your systems by security testers, who find weaknesses, prove which are exploitable and show you how to fix them. In Saudi Arabia, periodic penetration testing is part of the NCA Essential Cybersecurity Controls for organizations in scope, banks and fintechs use it to support SAMA expectations, and clients increasingly ask suppliers for a recent report.",
    sections: [
      {
        title: "What we test",
        items: [
          "<strong>Web applications and APIs:</strong> access control, injection and business-logic flaws.",
          "<strong>Mobile apps:</strong> iOS and Android apps and their back-end APIs.",
          "<strong>Networks:</strong> internet-facing exposure and internal attack paths.",
          "<strong>Cloud:</strong> AWS, Azure and GCP configuration and identity.",
          "<strong>AI features:</strong> prompt injection and data leakage in chatbots and agents.",
        ],
      },
      {
        title: "Testing that supports Saudi requirements",
        items: [
          "NCA ECC lists penetration testing among its cybersecurity defense controls, and the requirements reach many suppliers through contracts.",
          "Companies newly in scope of NCA's Non-CNI Cybersecurity Controls (NCNICC-1:2025) can use testing to validate controls scaled to their size.",
          "Banks, insurers and fintechs regulated by the Saudi Central Bank use testing to support the SAMA Cyber Security Framework.",
          "Testing of systems that process personal data supports the security safeguards expected under the PDPL.",
        ],
      },
      {
        title: "Government entity or critical infrastructure operator?",
        paragraphs: [
          "Check whether NCA or your contract requires a licensed local provider for penetration testing before you engage anyone. We can still help with scoping, remediation and compliance work around the test.",
        ],
      },
      {
        title: "What you get",
        items: [
          "CVSS-scored, prioritized findings with proof-of-concept steps.",
          "Fix guidance your developers can act on, and an executive summary.",
          "Evidence mapped to the ECC and SAMA controls the test supports.",
          "A retest and attestation letter.",
        ],
      },
      {
        title: "Planning a test around the ECC",
        items: [
          "Start from the systems in your ECC scope: internet-facing services, critical systems and applications that handle sensitive data.",
          "Follow the scope and frequency in the current control text, and test again after major changes.",
          "Keep the report, remediation evidence and retest results together for NCA compliance assessments.",
          "Feed findings into vulnerability management, so the same issues are caught between tests.",
        ],
      },
      {
        title: "Testing fintech and banking apps",
        paragraphs: [
          "Fintechs and payment companies usually need their mobile apps, APIs and admin portals tested together, because that is where account takeover and payment fraud happen. A combined test typically covers:",
        ],
        items: [
          "Mobile app tampering and sensitive data stored insecurely on the device.",
          "API authorization: whether one customer can reach another's accounts or transactions.",
          "One-time-password and device-binding flows that can be bypassed.",
          "Admin portals and internal tools exposed to the internet.",
        ],
      },
      {
        title: "Preparing a test in a regulated environment",
        items: [
          "Get internal approvals and agree change windows for any production testing.",
          "Agree where test data, evidence and reports will be stored, in line with data-residency rules.",
          "Provide test accounts for each role, including privileged roles where they are in scope.",
          "Name the person to call if a critical issue is found mid-test.",
        ],
      },
      {
        title: "Test types at a glance",
        table: {
          headers: [
            "Test",
            "The question it answers",
          ],
          rows: [
            [
              "Web application",
              "Can an attacker break in or abuse the business logic?",
            ],
            [
              "API",
              "Can one user reach another user's data or actions?",
            ],
            [
              "Mobile app",
              "Can the app, or the data it stores, be abused?",
            ],
            [
              "External network",
              "What can an attacker reach from the internet?",
            ],
            [
              "Internal network",
              "How far could an attacker move once inside?",
            ],
            [
              "Cloud",
              "Are identities, storage and networks configured safely?",
            ],
          ],
        },
      },
    ],
    steps: [
      { title: "Scope", body: "Targets, environments, and the NCA or SAMA controls the test should support." },
      { title: "Test", body: "AI-assisted reconnaissance, then manual exploitation." },
      { title: "Report", body: "Validated findings, fixes and mapped evidence." },
      { title: "Retest", body: "Confirm the fixes and issue an attestation letter." },
    ],
    faqs: [
      {
        q: "Does the NCA ECC require penetration testing?",
        a: "Yes, for organizations in scope, periodic penetration testing is part of the ECC's cybersecurity defense controls. The control text sets out what must be tested and how often, so check the current ECC version and your contracts.",
      },
      {
        q: "Can you test systems hosted in Saudi Arabia?",
        a: "Yes. We test applications and cloud environments wherever they are hosted, under written rules of engagement agreed in advance.",
      },
      {
        q: "Do you support SAMA requirements for fintechs?",
        a: "Yes. We run penetration tests for banks, payment companies and fintechs, with findings mapped to support SAMA Cyber Security Framework expectations.",
      },
      {
        q: "How often should Saudi companies run penetration tests?",
        a: "At least as often as the ECC control text and your contracts require, and again after major changes such as a new app release or a cloud migration. Many organizations test their critical and internet-facing systems at least once a year.",
      },
      {
        q: "Is a penetration test the same as an NCA compliance assessment?",
        a: "No. A penetration test proves whether an attacker could exploit your systems. An NCA compliance assessment checks whether you have implemented the required controls. The test report is one piece of evidence for the assessment, not a replacement for it.",
      },
    ],
    guides: ["nca-ecc-compliance-checklist-saudi-arabia", "penetration-testing-vs-vulnerability-scanning"],
    keywords: [
      "penetration testing Saudi Arabia",
      "penetration testing Riyadh",
      "pentest KSA",
      "NCA ECC penetration testing",
      "SAMA penetration testing",
      "penetration testing company Saudi Arabia",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "united-kingdom",
    slug: "cyber-essentials-readiness",
    serviceId: "compliance-grc",
    seoTitle: "Cyber Essentials Readiness for UK Businesses",
    metaDescription:
      "Cyber Essentials and Cyber Essentials Plus readiness for UK businesses: fix gaps in the five controls and pass first time, with help keeping them in place all year.",
    h1: "Cyber Essentials readiness for UK businesses",
    eyebrow: "Cyber Essentials · UK",
    intro:
      "Cyber Essentials is often the first thing UK public-sector and enterprise buyers ask for. We get you ready to pass, Plus included, and help you keep the controls working all year.",
    answer:
      "Cyber Essentials is the UK government-backed scheme that certifies five basic technical controls: firewalls, secure configuration, security update management, user access control and malware protection. Cyber Essentials is assessed through a self-assessment that a certification body verifies; Cyber Essentials Plus adds a hands-on technical audit. Certification is issued by IASME-licensed certification bodies and is renewed every year.",
    sections: [
      {
        title: "The five controls",
        items: [
          "<strong>Firewalls:</strong> boundary and device firewalls configured to block unwanted access.",
          "<strong>Secure configuration:</strong> default passwords changed, unnecessary software and accounts removed.",
          "<strong>Security update management:</strong> supported software only, with high-risk updates applied promptly.",
          "<strong>User access control:</strong> least privilege, separate admin accounts, and multi-factor authentication for cloud services.",
          "<strong>Malware protection:</strong> anti-malware or application allow-listing on in-scope devices.",
        ],
      },
      {
        title: "Who needs it",
        items: [
          "Suppliers bidding for many UK central government contracts, especially those that handle personal data.",
          "Companies whose enterprise customers or insurers ask for it.",
          "Any UK business that wants a sensible baseline against common attacks such as phishing-led malware and password guessing.",
        ],
      },
      {
        title: "How we get you ready",
        items: [
          "Agree the scope: which offices, devices, cloud services and users are in.",
          "Check every device and cloud account against the current requirements.",
          "Fix the gaps with your team: configuration, updates, MFA and admin accounts.",
          "Review your self-assessment answers before you submit.",
          "For Cyber Essentials Plus, run a pre-audit check so the technical audit holds no surprises.",
        ],
      },
      {
        title: "Beyond Cyber Essentials",
        paragraphs: [
          "Cyber Essentials is a baseline, not a full security program. Many UK customers and insurers also expect a penetration test for internet-facing applications, and larger buyers increasingly ask for ISO 27001 or SOC 2. We can plan those as next steps on top of the same controls.",
        ],
      },
      {
        title: "Cyber Essentials vs Cyber Essentials Plus",
        table: {
          headers: [
            "",
            "Cyber Essentials",
            "Cyber Essentials Plus",
          ],
          rows: [
            [
              "How it is assessed",
              "Self-assessment questionnaire, verified by a certification body",
              "The same questionnaire, plus a hands-on technical audit",
            ],
            [
              "Controls covered",
              "The five technical controls",
              "The same five controls",
            ],
            [
              "Typical driver",
              "A baseline for suppliers and insurers",
              "Higher-assurance contracts and buyers",
            ],
            [
              "Renewal",
              "Every 12 months",
              "Every 12 months",
            ],
          ],
        },
      },
      {
        title: "Common reasons companies fail",
        items: [
          "Devices running software that is no longer supported, such as older operating systems.",
          "Cloud services without multi-factor authentication switched on.",
          "Staff using admin accounts for everyday work.",
          "Default passwords left on routers, firewalls and other network devices.",
          "High-risk security updates not installed promptly.",
          "Personal devices used for work, with no plan for how they meet the controls.",
        ],
      },
      {
        title: "Scope decisions to get right",
        items: [
          "The cloud services you use are in scope, including email and file sharing.",
          "Home and remote workers' devices that access company data or services.",
          "Personal devices that access company email or data are usually in scope too.",
          "Which offices and networks are included, and how they connect to the internet.",
          "Servers and virtual machines, wherever they are hosted.",
        ],
        after: [
          "Getting scope right up front avoids the most common surprise: a failed assessment because of a device nobody thought to include.",
        ],
      },
      {
        title: "Staying compliant all year",
        items: [
          "Check monthly that high-risk updates are installed across every in-scope device.",
          "Review admin accounts quarterly, and remove the ones nobody needs.",
          "Turn on MFA for every new cloud service as you adopt it.",
          "Keep a device inventory, so new laptops and phones are set up correctly from day one.",
          "Retire devices before their software goes out of support.",
        ],
        after: [
          "Doing this steadily makes renewal a formality rather than a scramble, and keeps you protected in between.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "Agree what is in scope for certification." },
      { title: "Check", body: "Assess devices, accounts and cloud services against the requirements." },
      { title: "Fix", body: "Close the gaps with your team, prioritized by what blocks certification." },
      { title: "Certify", body: "Submit with confidence, and prepare for the Plus audit if needed." },
    ],
    faqs: [
      {
        q: "Do you certify companies for Cyber Essentials?",
        a: "No. Certification is issued by IASME-licensed certification bodies. We prepare you for it, closing gaps and putting controls in place so you pass first time, and we can help you prepare for the Cyber Essentials Plus technical audit.",
      },
      {
        q: "What is the difference between Cyber Essentials and Cyber Essentials Plus?",
        a: "Both cover the same five controls. Cyber Essentials is a verified self-assessment. Cyber Essentials Plus adds a hands-on technical audit of your devices and systems by the certification body.",
      },
      {
        q: "How often do we need to renew?",
        a: "Every year. Certification is valid for twelve months, so it pays to keep the controls in place rather than fixing everything just before renewal.",
      },
      {
        q: "Is a penetration test required for Cyber Essentials?",
        a: "No, but many UK customers and insurers expect one in addition to Cyber Essentials, especially for internet-facing applications.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at your setup and tell you what stands between you and certification.",
      },
    ],
    guides: ["penetration-testing-vs-vulnerability-scanning"],
    keywords: [
      "Cyber Essentials readiness",
      "Cyber Essentials Plus",
      "Cyber Essentials consultant",
      "Cyber Essentials UK",
      "Cyber Essentials help",
      "Cyber Essentials requirements",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "uae",
    slug: "third-party-risk-management",
    serviceId: "compliance-grc",
    seoTitle: "TPRM Services in Dubai & the UAE",
    metaDescription: "Third-party risk management in Dubai and the UAE: vendor reviews and contract terms that support PDPL, DIFC, ADGM and regulator outsourcing expectations.",
    h1: "Third-party risk management (TPRM) in the UAE",
    eyebrow: "TPRM · UAE",
    intro: "UAE companies rely on regional and international vendors for cloud, payments, IT support and software. We help you prove those suppliers are safe to trust, in the way UAE regulators and your own clients expect.",
    answer: "Third-party risk management (TPRM) in the UAE means knowing which vendors handle your data or reach your systems, checking they are secure, and putting the right terms in their contracts. It matters here because several UAE rules expect it in practice: data-protection laws on processors and transfers, financial regulators' outsourcing expectations, and security requirements that government clients pass down to suppliers.",
    sections: [
      {
        title: "Where UAE rules touch vendor risk",
        items: [
          "<strong>UAE PDPL:</strong> personal data handled by processors on your behalf still needs appropriate security, and transfers abroad need safeguards.",
          "<strong>DIFC and ADGM:</strong> both data-protection laws expect written contracts and adequate safeguards when processors handle personal data.",
          "<strong>Financial services:</strong> banks and finance companies face outsourcing and third-party expectations from the CBUAE, DFSA or FSRA, depending on their licence.",
        "<strong>UAE IA Regulation:</strong> the federal information assurance standard, formerly known as NESA, includes a dedicated third-party security control family.",
        "<strong>Government supply chains:</strong> Dubai government clients pass ISR-aligned requirements to suppliers through contracts, and you may need to pass them on to your own subcontractors.",
          "<strong>Healthcare:</strong> providers handling health data need vendors that meet sector rules, such as ADHICS in Abu Dhabi.",
        ],
      },
      {
        title: "Vendors UAE companies most often underestimate",
        items: [
          "Managed IT and support providers with remote admin access.",
          "Overseas SaaS tools that quietly store customer data outside the UAE.",
          "Marketing and CRM platforms holding large contact lists.",
          "Payment, logistics and booking partners connected by API.",
          "Freelancers and small agencies given shared accounts.",
        ],
      },
      {
        title: "Questions to ask every vendor about your data",
        items: [
          "Where is our data stored and processed, including backups?",
          "Which subprocessors can access it, and where are they based?",
          "Can you keep our data in a UAE region if we need you to?",
          "How and how quickly will you tell us about a breach?",
          "How is our data returned or deleted when the contract ends?",
        ],
        after: [
          "Clear written answers to these five questions resolve most cross-border and breach-notification concerns before they become audit findings.",
        ],
      },
      {
        title: "What we deliver",
        items: [
          "A vendor register, tiered by data, access and business impact.",
          "In-depth assessments of your critical vendors.",
          "A clause set for security, data protection, breach notification and data location.",
          "An evidence pack for regulators, auditors and client questionnaires.",
          "A reassessment calendar, so the program keeps running.",
        ],
      },
    ],
    steps: [
      {
        title: "Map",
        body: "Your vendors and where your data flows.",
      },
      {
        title: "Tier",
        body: "Rank vendors by data, access and impact.",
      },
      {
        title: "Assess and contract",
        body: "Review critical vendors and fix contract gaps.",
      },
      {
        title: "Monitor",
        body: "Reassess on schedule and track vendor incidents.",
      },
    ],
    faqs: [
      {
        q: "Is TPRM required by law in the UAE?",
        a: "There is no single TPRM law, but several rules expect it in practice: data-protection laws on processors and transfers, financial regulators' outsourcing expectations, and contract requirements from government and enterprise clients. A documented program is the simplest way to show you meet them.",
      },
      {
        q: "Do our vendors need to store data in the UAE?",
        a: "Not always. It depends on your sector, the data involved and your contracts. Some regulated sectors and government clients require local storage; others allow transfers with safeguards. We help you work out which applies to each vendor.",
      },
      {
        q: "Can you assess vendors based outside the UAE?",
        a: "Yes. Most critical vendors are international SaaS and cloud providers. We review their security reports, contracts and data-location commitments wherever they are based.",
      },
      {
        q: "We are a supplier ourselves. Can you help with client vendor questionnaires?",
        a: "Yes. We help you answer accurately and build the evidence behind your answers, which often shortens procurement.",
      },
      {
        q: "Which UAE companies need TPRM most?",
        a: "Banks, insurers and other regulated financial firms, healthcare providers, suppliers to government and critical entities, and any company that shares large amounts of customer data with SaaS or outsourcing partners. These face the most direct regulatory and contractual expectations.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand and outline a practical plan, whether or not you work with us afterwards.",
      },
    ],
    guides: [
      "third-party-risk-management-guide",
      "dubai-uae-cybersecurity-compliance-guide",
    ],
    keywords: [
      "TPRM services UAE",
      "third-party risk management Dubai",
      "vendor risk management UAE",
      "supplier security assessment Dubai",
      "outsourcing risk UAE",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "united-kingdom",
    slug: "phishing-simulation-training",
    serviceId: "penetration-testing",
    seoTitle: "Phishing Training for UK Businesses",
    metaDescription: "Anti-phishing training and phishing simulation for UK businesses in London and nationwide: realistic campaigns, quick training and evidence for insurers.",
    h1: "Anti-phishing training and phishing simulation for UK businesses",
    eyebrow: "Phishing training · UK",
    intro: "UK businesses see phishing more than any other attack. We help teams in London and across the UK recognize it, report it fast and stop it turning into a breach.",
    answer: "Anti-phishing training for UK businesses combines realistic phishing simulations with short, practical training, so staff learn to spot suspicious emails, texts and calls and report them quickly. The UK government's Cyber Security Breaches Survey has consistently found phishing to be the most common type of attack businesses identify, which is why insurers and enterprise customers increasingly ask what you do about it.",
    sections: [
      {
        title: "The phishing UK businesses actually see",
        items: [
          "Fake invoices and payment-change requests aimed at finance teams.",
          "Shared-document and voicemail lures that lead to fake Microsoft 365 login pages.",
          "Parcel-delivery and HMRC-themed text messages.",
          "Impersonation of senior leaders asking for something urgent.",
          "Genuine supplier mailboxes, compromised and used to send convincing follow-ups.",
        ],
      },
      {
        title: "How it fits with Cyber Essentials and UK GDPR",
        paragraphs: [
          "Cyber Essentials covers five technical controls but not staff awareness, so phishing training fills a gap the scheme leaves open.",
          "Under UK GDPR, a phishing-led breach of personal data may need to be reported to the ICO without undue delay and, where feasible, within 72 hours. Teaching staff to report suspicious messages straight away matters for compliance as well as security.",
        ],
      },
      {
        title: "An approach aligned with NCSC guidance",
        paragraphs: [
          "The NCSC's phishing guidance recommends layered defences: make it harder for attackers to reach your users, help users spot and report phishing, limit the damage when a phish gets through, and respond quickly. It also warns against relying on training alone or blaming staff. Our programs follow the same thinking, with simulations and training alongside email security, MFA and fast incident response.",
        ],
      },
      {
        title: "What UK teams get",
        items: [
          "A baseline simulation, so you know where you start.",
          "Monthly or quarterly campaigns themed on real UK lures.",
          "Short training for people who click, and briefings for finance and leadership.",
          "A simple way for staff to report suspicious messages.",
          "Quarterly reports for leadership, insurers and auditors.",
        ],
      },
      {
        title: "Rules every UK finance team should follow",
        items: [
          "Confirm any change of bank details by calling the supplier on a number you already hold, never one in the email.",
          "Require a second person to approve payments above an agreed amount.",
          "Treat urgent payment requests from senior leaders by email, text or WhatsApp as suspicious until verified.",
          "If a payment may have gone to a fraudster, call your bank straight away; acting quickly gives the best chance of recovering funds.",
        ],
      },
      {
        title: "Reporting phishing in the UK",
        paragraphs: [
          "Alongside your own internal reporting button, staff can forward suspicious emails to the NCSC's Suspicious Email Reporting Service at report@phishing.gov.uk, and suspicious text messages to 7726, the free reporting number used by UK mobile networks. Reports help take down malicious sites and warn others.",
        ],
      },
    ],
    steps: [
      {
        title: "Baseline",
        body: "Measure clicks and reports in a first campaign.",
      },
      {
        title: "Train",
        body: "Quick, relevant training and team briefings.",
      },
      {
        title: "Campaign",
        body: "Regular simulations based on current UK lures.",
      },
      {
        title: "Report",
        body: "Trends for leadership, insurers and auditors.",
      },
    ],
    faqs: [
      {
        q: "Do you work with businesses in London?",
        a: "Yes. We work with businesses in London and across the UK, delivering simulations and training remotely in UK working hours, with live online sessions for teams that want them.",
      },
      {
        q: "Does Cyber Essentials require phishing training?",
        a: "No. Cyber Essentials covers five technical controls. Phishing training is a separate measure, but many UK customers and insurers expect both.",
      },
      {
        q: "Can you include text and phone phishing?",
        a: "Yes. Alongside email we can include text-message and phone scenarios aimed at the teams most likely to be targeted, such as finance and the help desk.",
      },
      {
        q: "What do insurers ask about phishing?",
        a: "Many cyber insurance applications ask whether you run security awareness training and phishing simulations, and whether MFA is enforced. A documented program with results makes those answers easy.",
      },
      {
        q: "How soon will we see results?",
        a: "Most organizations see reporting rise within the first two or three campaigns, once staff know how to report and that they will be thanked for it. Lasting change in click rates on harder scenarios usually takes several months of regular practice.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand and outline a practical plan, whether or not you work with us afterwards.",
      },
    ],
    guides: [
      "phishing-simulation-that-changes-behaviour",
    ],
    keywords: [
      "anti-phishing training UK",
      "phishing training London",
      "phishing simulation UK",
      "security awareness training UK",
      "anti phishing services London",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "united-kingdom",
    slug: "managed-soc-mdr",
    serviceId: "managed-detection-response",
    seoTitle: "Managed SOC & MDR Services in the UK",
    metaDescription: "Managed SOC and MDR for UK businesses: AI-assisted 24/7 monitoring and analyst-approved response, with incident records that support ICO reporting and insurers.",
    h1: "Managed SOC and MDR services in the UK",
    eyebrow: "Managed SOC · UK",
    intro: "24/7 detection and response for UK SMEs and scale-ups, without hiring a round-the-clock security team.",
    answer: "A managed SOC, often delivered as MDR (managed detection and response), gives UK businesses round-the-clock monitoring, investigation and response from an outside team, using the security tools they already have. It catches ransomware and account takeover early, and it keeps the incident records you need if a breach has to be reported to the ICO.",
    sections: [
      {
        title: "What UK businesses most need watching",
        items: [
          "<strong>Ransomware</strong> that enters through remote access, VPNs and unpatched internet-facing systems.",
          "<strong>Microsoft 365 account takeover,</strong> often the first step in invoice and payment fraud.",
          "<strong>Supplier compromise,</strong> where a trusted partner's account is used against you.",
          "<strong>Cloud changes</strong> such as storage made public or new admin accounts created at odd hours.",
          "<strong>Unusual data access</strong> by staff accounts, a common precursor to data theft.",
        ],
      },
      {
        title: "Breach reporting in the UK",
        paragraphs: [
          "Under UK GDPR, a reportable personal data breach must be notified to the ICO without undue delay and, where feasible, within 72 hours of becoming aware of it. That clock is hard to meet without fast detection and good records. Our analysts timestamp every investigation step, so you know what happened and when, and can decide quickly whether to report.",
          "Operators of essential services and certain digital service providers under the NIS Regulations, and financial firms under FCA operational resilience rules, have further expectations for incident handling.",
        ],
      },
      {
        title: "Which model suits a UK SME?",
        items: [
          "<strong>No security staff:</strong> MDR gives you a full detection and response team from day one.",
          "<strong>One or two security people:</strong> MDR covers nights, weekends and alert volume, so they can focus on projects.",
          "<strong>An existing SOC:</strong> we can cover out-of-hours, overflow or specific environments such as cloud.",
        ],
      },
      {
        title: "MDR and cyber insurance",
        paragraphs: [
          "Many UK cyber insurers ask whether you have endpoint detection and round-the-clock monitoring in place, and some expect it for higher levels of cover. A managed SOC gives you a clear answer, with monthly reports to back it up.",
        ],
      },
      {
        title: "What happens when we detect an incident",
        items: [
          "An analyst confirms the activity is real and works out its scope.",
          "Pre-approved containment runs straight away, such as isolating a laptop or revoking a session.",
          "Your named contact gets a call or alert with a plain-English summary and the decisions we need from you.",
          "We keep a timestamped record of every step, ready for insurers, the ICO or your legal advisers.",
          "Afterwards, a short review covers the root cause and what to change so it doesn't happen again.",
        ],
      },
    ],
    steps: [
      {
        title: "Scope",
        body: "Your users, devices, Microsoft 365 or Google Workspace, and cloud.",
      },
      {
        title: "Connect",
        body: "Integrate your existing EDR and log sources.",
      },
      {
        title: "Agree",
        body: "Escalation contacts and which actions we take automatically.",
      },
      {
        title: "Watch",
        body: "24/7 detection and response, with monthly reporting.",
      },
    ],
    faqs: [
      {
        q: "Do you monitor outside UK working hours?",
        a: "Yes. Monitoring runs around the clock, including weekends and bank holidays. Escalation calls, reviews and reporting happen during UK working hours.",
      },
      {
        q: "Can you help us report a breach to the ICO?",
        a: "We provide the investigation timeline and evidence and support your decision. Whether and how to report is for you and your legal advisers to decide; the ICO expects reportable breaches without undue delay and, where feasible, within 72 hours.",
      },
      {
        q: "We use Microsoft 365. Do we need extra tools?",
        a: "Often not. If you already have Microsoft Defender or another EDR, we integrate with it and your Microsoft 365 logs, and only recommend additions where there's a real gap.",
      },
      {
        q: "Is a managed SOC suitable for small businesses?",
        a: "Yes. We work with SMEs and scale-ups and scope pricing to the size of your environment, so you get 24/7 coverage without the cost of a full in-house team.",
      },
      {
        q: "Does a managed SOC help with ISO 27001 or Cyber Essentials?",
        a: "For ISO 27001, monitoring logs and incident records are useful evidence for the logging, monitoring and incident management controls. Cyber Essentials doesn't require monitoring, but a managed SOC covers the threats its five controls can't stop on their own.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand and outline a practical plan, whether or not you work with us afterwards.",
      },
    ],
    guides: [
      "agentic-mdr-ai-agents-in-the-soc",
      "ai-powered-mdr-what-it-is-and-how-it-works",
    ],
    keywords: [
      "managed SOC UK",
      "MDR UK",
      "SOC as a service UK",
      "managed detection and response UK",
      "24/7 security monitoring UK",
      "managed SOC London",
    ],
    updatedAt: "2026-11-27",
  },
  {
    region: "united-states",
    slug: "managed-soc-mdr",
    serviceId: "managed-detection-response",
    seoTitle: "Managed SOC & MDR Services in the US",
    metaDescription: "Managed SOC and MDR for US companies: 24/7 AI-assisted monitoring and analyst-approved response, supporting SEC, NYDFS, HIPAA and cyber insurance requirements.",
    h1: "Managed SOC and MDR services in the US",
    eyebrow: "Managed SOC · US",
    intro: "Round-the-clock detection and response for US companies that need enterprise-grade monitoring without building a 24/7 SOC.",
    answer: "A managed SOC, or MDR service, gives US companies a team that monitors their systems around the clock, investigates alerts and contains threats, using the tools they already own. It also produces the evidence that SOC 2 auditors, regulators such as the SEC and NYDFS, HIPAA programs and cyber insurers increasingly expect.",
    sections: [
      {
        title: "Requirements that make monitoring urgent",
        items: [
          "<strong>SEC:</strong> public companies must disclose material cybersecurity incidents on Form 8-K within four business days of determining they are material.",
          "<strong>NYDFS Part 500:</strong> covered financial entities must notify the regulator within 72 hours of certain cybersecurity events.",
          "<strong>HIPAA:</strong> the Security Rule requires audit controls and procedures to identify and respond to security incidents involving electronic protected health information.",
          "<strong>State breach laws:</strong> every state has its own breach-notification law, with different triggers and deadlines.",
          "<strong>SOC 2:</strong> auditors look for monitoring of system components and evidence that anomalies are investigated.",
        ],
      },
      {
        title: "Cyber insurance underwriting questions",
        items: [
          "Do you have endpoint detection and response on every endpoint?",
          "Is there 24/7 monitoring and response?",
          "Is MFA enforced for email and remote access?",
          "Do you have an incident response plan and tested backups?",
        ],
        after: [
          "A managed SOC answers the first two directly and helps you evidence the rest, which can make renewals smoother.",
        ],
      },
      {
        title: "Built around your stack",
        paragraphs: [
          "We integrate with common EDR, SIEM, identity and cloud platforms, such as Microsoft Defender and Sentinel, CrowdStrike, Okta and Entra ID, and AWS, Azure and GCP, and only recommend new tooling where there's a measurable gap. That keeps onboarding to weeks rather than months.",
        ],
      },
      {
        title: "Coverage across US time zones",
        paragraphs: [
          "Monitoring runs around the clock, so time zones don't affect detection. Escalation calls and reviews are scheduled in your working hours, and your named contacts decide in advance which actions we take automatically outside them.",
        ],
      },
      {
        title: "What we watch in a typical US environment",
        items: [
          "<strong>Endpoints:</strong> laptops and servers through your EDR, for ransomware, credential theft and unusual tools.",
          "<strong>Identity:</strong> Okta or Entra ID sign-ins, MFA resets and new admin roles.",
          "<strong>Email and collaboration:</strong> Microsoft 365 or Google Workspace mailbox rules, risky OAuth app grants and mass file sharing.",
          "<strong>Cloud:</strong> AWS CloudTrail, Azure activity and GCP audit logs for new keys, public storage and disabled logging.",
          "<strong>Key SaaS:</strong> admin activity in platforms such as GitHub and Salesforce, where a single account can expose a lot of data.",
        ],
      },
      {
        title: "What your monthly report covers",
        items: [
          "Every incident, how it was detected and how it was handled.",
          "Every automated action we took, and why.",
          "Detection tuning and new detections added for your environment.",
          "Coverage gaps, such as devices without EDR or log sources that stopped sending.",
          "Prioritized recommendations, in plain language, for leadership and auditors.",
        ],
      },
    ],
    steps: [
      {
        title: "Scope",
        body: "Users, endpoints, cloud accounts and regulatory obligations.",
      },
      {
        title: "Connect",
        body: "Integrate your EDR, identity provider and cloud logs.",
      },
      {
        title: "Tune",
        body: "Learn normal activity and agree response playbooks.",
      },
      {
        title: "Monitor",
        body: "24/7 detection, threat hunting and monthly reporting.",
      },
    ],
    faqs: [
      {
        q: "Can MDR help with SEC cybersecurity disclosure?",
        a: "It helps with the facts. Fast detection and a clear investigation timeline give your legal and leadership team what they need to assess materiality quickly. The disclosure decision itself stays with them.",
      },
      {
        q: "Do you support healthcare organizations?",
        a: "Yes. We monitor systems that handle electronic protected health information and keep records that support your HIPAA security program.",
      },
      {
        q: "When is MDR worth it?",
        a: "Usually once you hold sensitive data, sell to enterprises or carry cyber insurance. Building 24/7 coverage in-house means several analysts plus tools; MDR gives you that coverage for a monthly fee scoped to your environment.",
      },
      {
        q: "Which tools do you work with?",
        a: "Common EDR, SIEM, identity and cloud platforms. We use what you already own and only recommend new tooling where there's a measurable gap.",
      },
      {
        q: "What is the difference between MDR and an MSSP?",
        a: "A traditional MSSP mostly manages security devices and forwards alerts for you to investigate. MDR investigates the alerts itself and responds, for example by isolating a device or revoking a session, so your team receives an answer rather than a ticket.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at where you stand and outline a practical plan, whether or not you work with us afterwards.",
      },
    ],
    guides: [
      "agentic-mdr-ai-agents-in-the-soc",
      "ai-powered-mdr-what-it-is-and-how-it-works",
    ],
    keywords: [
      "managed SOC US",
      "MDR services US",
      "managed detection and response USA",
      "SOC as a service",
      "24/7 security monitoring US",
      "is MDR worth it",
    ],
    updatedAt: "2026-11-27",
  },
];

export function getRegionPage(region: string, slug: string) {
  return regionPages.find((p) => p.region === region && p.slug === slug);
}
