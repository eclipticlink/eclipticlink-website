export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  /** Service id this article supports (internal linking) */
  relatedService?: string;
  /** Other service pages that should list this article under "Further reading" */
  alsoRelated?: string[];
  /** Location slug this article supports (linked both ways) */
  relatedLocation?: string;
  tags: string[];
  readingTime: number;
  body: BlogBlock[];
  /** Optional FAQ shown after the article and emitted as FAQPage structured data */
  faqs?: { q: string; a: string }[];
  /** Primary sources shown after the article and emitted as schema.org citations */
  sources?: { title: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dubai-uae-cybersecurity-compliance-guide",
    sources: [{"title": "UAE Government: Data protection laws", "url": "https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws"}, {"title": "ADGM Office of Data Protection", "url": "https://www.adgm.com/operating-in-adgm/office-of-data-protection"}],
    title: "Dubai Cybersecurity Compliance: ISR, PDPL, DIFC & ADGM",
    excerpt: "Mainland, DIFC, ADGM, government supplier, or regulated sector? The cybersecurity and data protection rules you follow in the UAE depend on all of these. Here is how they fit together, and where to start.",
    metaDescription: "A practical guide to cybersecurity compliance in Dubai and the UAE: federal PDPL, DIFC and ADGM data protection, Dubai ISR, UAE IA Standards and sector rules.",
    publishedAt: "2026-11-14",
    category: "Compliance",
    relatedService: "compliance-grc",
    relatedLocation: "uae",
    tags: ["cybersecurity compliance Dubai", "UAE PDPL", "Dubai ISR", "DIFC data protection", "ADGM data protection", "UAE IA Standards", "UAE cybersecurity regulations"],
    readingTime: 9,
    faqs: [
      { q: "Does the UAE PDPL apply to companies in DIFC or ADGM?", a: "Generally no. The DIFC and ADGM financial free zones have their own data protection laws and regulators, and the federal PDPL applies outside them. Some data covered by other specific laws, such as certain health and banking data, also has its own rules." },
      { q: "Is ISO 27001 mandatory in the UAE?", a: "ISO 27001 is not generally required by law, but customers, government tenders and regulators frequently ask for it. It also maps well to the UAE IA Standards and the Dubai ISR, which makes it a practical common baseline." },
      { q: "Do Dubai government suppliers need to follow the ISR?", a: "The ISR applies directly to Dubai government entities, and Law No. 15 of 2024 also brings critical non-government entities under DESC's security rules. Suppliers are usually not regulated directly, but government clients pass relevant requirements on through contracts and questionnaires, and cybersecurity providers to these entities need DESC Cyber Force certification." },
      { q: "Can health data be stored outside the UAE?", a: "Federal Law No. 2 of 2019 on the use of ICT in health fields generally requires health data to be stored and processed inside the UAE, with limited exceptions. Confirm your specific case with legal counsel before choosing cloud regions." },
    ],
    body: [
      {"type": "p", "text": "Companies in Dubai and across the UAE face more cybersecurity and data protection frameworks than almost anywhere else in the region. A startup in Dubai Internet City, a bank in DIFC, a clinic in Abu Dhabi, and a supplier to a Dubai government entity can all be subject to different rules, sometimes several at once."},
      {"type": "p", "text": "This guide explains how the main frameworks fit together, how to work out which apply to you, and how to build one security program that satisfies them all without duplicating work."},
      {"type": "blockquote", "text": "Start with three questions: where is your company licensed, which sector are you in, and who are your customers? The answers decide which rules apply."},
      {"type": "h2", "text": "Step 1: Where is your company licensed?"},
      {"type": "p", "text": "Data protection in the UAE depends first on jurisdiction. The financial free zones have their own data protection regimes, separate from the federal law that applies on the mainland and in most other free zones."},
      {"type": "table", "headers": ["Jurisdiction", "Data protection law", "Regulator"], "rows": [["Mainland UAE and most free zones", "Federal Decree-Law No. 45 of 2021 (PDPL)", "UAE Data Office, moving to the Artificial Intelligence and Data Authority"], ["Dubai International Financial Centre (DIFC)", "DIFC Data Protection Law No. 5 of 2020", "DIFC Commissioner of Data Protection"], ["Abu Dhabi Global Market (ADGM)", "ADGM Data Protection Regulations 2021", "ADGM Office of Data Protection"]]},
      {"type": "h3", "text": "The federal PDPL"},
      {"type": "p", "text": "The UAE's Personal Data Protection Law applies to personal data processing by organizations outside the financial free zones. It sets familiar principles such as lawful processing, purpose limitation, and data subject rights, requires <strong>appropriate technical and organizational security measures</strong>, and requires notifying the regulator of breaches that put individuals' privacy at risk. Two points to watch: the Executive Regulations, which set details such as notification timelines and penalties, had not been published as of late 2026, and in June 2026 the UAE announced a new Artificial Intelligence and Data Authority that absorbs the UAE Data Office. Check the current position before finalizing your program."},
      {"type": "h3", "text": "DIFC Data Protection Law"},
      {"type": "p", "text": "DIFC's law is one of the most mature data protection regimes in the region. It includes accountability requirements, breach notification to the Commissioner, and specific rules for personal data processed by AI and other autonomous systems, which matters if you are deploying AI assistants or automated decision-making."},
      {"type": "h3", "text": "ADGM Data Protection Regulations"},
      {"type": "p", "text": "ADGM's regulations are closely modelled on the EU GDPR, including notifying the regulator of reportable personal data breaches <strong>within 72 hours where feasible</strong>. If you already run a GDPR program, much of it carries over."},
      {"type": "h2", "text": "Step 2: Do you serve government or critical sectors?"},
      {"type": "h3", "text": "Dubai Information Security Regulation (ISR)"},
      {"type": "p", "text": "Issued by the Dubai Electronic Security Center (DESC), the ISR sets minimum security requirements for Dubai government entities, and Law No. 15 of 2024 also brings critical non-government entities under DESC's security rules. Most private suppliers are not regulated directly, but meet ISR-aligned requirements through contracts, tenders, and security questionnaires, and companies providing cybersecurity services to these entities need DESC Cyber Force certification. Expect questions on governance, access control, incident management, and how you protect government data."},
      {"type": "h3", "text": "UAE Information Assurance Standards"},
      {"type": "p", "text": "Originally issued as the NESA standards, the UAE IA Standards define controls for government entities and organizations in critical sectors. Their structure is risk-based and maps closely to ISO 27001, so one well-designed control set can serve both."},
      {"type": "h2", "text": "Step 3: Are you in a regulated sector?"},
      {"type": "ul", "items": ["<strong>Financial services:</strong> banks and financial firms face cyber and technology risk requirements from their regulator, which is the CBUAE, the DFSA in DIFC, or the FSRA in ADGM, depending on their licence.", "<strong>Healthcare:</strong> Federal Law No. 2 of 2019 on ICT in health fields generally requires health data to stay in the UAE. Abu Dhabi healthcare entities must also meet the ADHICS standard, and Dubai has its own health data rules.", "<strong>Telecoms and critical infrastructure:</strong> sector regulators and the UAE Cybersecurity Council set additional expectations."]},
      {"type": "h2", "text": "One program, many frameworks"},
      {"type": "p", "text": "The most efficient approach is to build a single information security management system, usually based on <strong>ISO 27001</strong>, and map each additional framework onto it. Most requirements overlap: risk assessment, access control, logging and monitoring, incident response, supplier management, and security testing appear in all of them."},
      {"type": "table", "headers": ["Control area", "Why it matters across UAE frameworks"], "rows": [["Data mapping", "Every data protection law needs to know what personal data you hold, where, and why"], ["Access control and MFA", "Core requirement in ISO 27001, the IA Standards, the ISR, and sector rules"], ["Logging and monitoring", "Needed to detect breaches and meet notification duties"], ["Incident response plan", "Breach-notification expectations differ by regulator, so plan for each"], ["Supplier management", "Government and financial regulators expect security in outsourcing contracts"], ["Penetration testing", "Common evidence that controls actually work"]]},
      {"type": "h2", "text": "A practical roadmap"},
      {"type": "ol", "items": ["Confirm your jurisdiction, sector, and customer requirements, and list every framework that applies.", "Map personal and sensitive data, including which cloud regions it is stored in.", "Run a gap assessment against ISO 27001 plus the specific frameworks that apply to you.", "Fix the highest-risk gaps first: identity and access, logging, backups, and incident response.", "Write policies that reflect how you actually work, then train your team.", "Validate with a <a href=\"/services/penetration-testing\">penetration test</a> and keep evidence ready for audits and tenders."]},
      {"type": "h2", "text": "Key takeaways"},
      {"type": "ul", "items": ["Your licensing jurisdiction decides which data protection law applies: PDPL, DIFC, or ADGM.", "Government and critical-sector work brings in the Dubai ISR and the UAE IA Standards, directly for government and critical entities and through contracts for their suppliers.", "Financial and health data have additional sector rules, including data residency for health data.", "Build one ISO 27001-based program and map each framework onto it instead of running separate projects."]},
      {"type": "p", "text": "EclipticLink helps companies across the UAE with <a href=\"/services/compliance-grc\">compliance readiness</a>, from gap assessments to audit evidence. See our <a href=\"/locations/uae\">cybersecurity services in the UAE</a>. This guide is general information, not legal advice; confirm your obligations with qualified counsel."},
    ],
  },
  {
    slug: "nca-ecc-compliance-checklist-saudi-arabia",
    title: "NCA ECC Compliance Checklist for Saudi Companies",
    excerpt: "The NCA Essential Cybersecurity Controls are the baseline for Saudi government entities, critical infrastructure, and the companies that supply them. Here is who must comply, what the controls cover, and a practical readiness checklist.",
    metaDescription: "A practical NCA ECC compliance checklist for Saudi Arabia: who must comply, what the Essential Cybersecurity Controls cover, common gaps, and how to prepare.",
    publishedAt: "2026-11-14",
    category: "Compliance",
    relatedService: "compliance-grc",
    relatedLocation: "saudi-arabia",
    tags: ["NCA ECC", "Essential Cybersecurity Controls", "NCA compliance", "Saudi cybersecurity regulations", "ECC checklist", "Saudi Arabia cybersecurity"],
    readingTime: 8,
    faqs: [
      { q: "Who must comply with the NCA ECC?", a: "Government organizations inside and outside Saudi Arabia, their companies and entities, and private-sector organizations that own, operate, or host critical national infrastructure. Other private companies may fall under NCA's Non-CNI Cybersecurity Controls (NCNICC-1:2025), and many meet ECC requirements because government and CNI clients include them in contracts." },
      { q: "Where can I get the latest version of the ECC?", a: "Download it from the National Cybersecurity Authority's official website. NCA updates its control frameworks over time, so always work from the current version before starting a gap assessment." },
      { q: "Does the ECC require data to stay in Saudi Arabia?", a: "ECC-2:2024 removed the explicit in-country hosting requirement that appeared in the 2018 version. Data localization is now governed mainly by SDAIA's National Data Management Office (NDMO), existing rules on hosting government data, sector regulators, and the Personal Data Protection Law, so localization obligations may still apply. Check these rules for your data before choosing cloud regions." },
      { q: "How is the ECC different from the SAMA Cyber Security Framework?", a: "The ECC is the national baseline set by NCA. The SAMA Cyber Security Framework applies specifically to financial institutions regulated by the Saudi Central Bank. Some financial institutions need to address both." },
    ],
    body: [
      {"type": "p", "text": "The <strong>Essential Cybersecurity Controls (ECC)</strong> from Saudi Arabia's National Cybersecurity Authority (NCA) define the minimum cybersecurity requirements for organizations that matter most to the Kingdom's security and economy. As Vision 2030 moves more services online, ECC requirements increasingly appear in contracts for software vendors, IT service providers, and consultancies too."},
      {"type": "p", "text": "This guide explains who must comply, what the controls cover, and how to prepare, with a checklist you can work through."},
      {"type": "h2", "text": "Who must comply?"},
      {"type": "ul", "items": ["<strong>Government organizations</strong> inside and outside the Kingdom, including ministries, authorities, and their companies and entities.", "<strong>Private-sector organizations</strong> that own, operate, or host critical national infrastructure (CNI).", "<strong>Suppliers, in practice:</strong> government and CNI organizations must manage third-party risk, so they pass ECC requirements to vendors through contracts and security questionnaires."]},
      {"type": "p", "text": "<strong>Not government or CNI?</strong> In December 2025 NCA adopted the <strong>Non-CNI Private Sector Entities Cybersecurity Controls (NCNICC-1:2025)</strong>, a separate baseline for private companies outside critical national infrastructure, with requirements scaled by company size. Check whether it applies to you; much of this checklist is still relevant."},
      {"type": "blockquote", "text": "If you sell technology or services to Saudi government or critical-infrastructure clients, plan for ECC requirements, even if you are not directly in scope."},
      {"type": "h2", "text": "What the ECC covers"},
      {"type": "p", "text": "The current version, <strong>ECC-2:2024</strong>, groups the controls into four main domains. Industrial control system controls, a separate domain in the 2018 version, now sit in NCA's Operational Technology Cybersecurity Controls. Always check the latest version on NCA's website:"},
      {"type": "table", "headers": ["Domain", "What it includes"], "rows": [["Cybersecurity governance", "Strategy, cybersecurity function and roles, policies, risk management, compliance reviews, HR security, awareness and training"], ["Cybersecurity defense", "Asset management, identity and access, system and network protection, email security, mobile and data protection, cryptography, backups, vulnerability management, penetration testing, logging and monitoring, incident management, physical security, web application security"], ["Cybersecurity resilience", "Cybersecurity in business continuity management"], ["Third-party and cloud cybersecurity", "Security requirements for suppliers, outsourcing, and cloud and hosting services"]]},
      {"type": "h3", "text": "Related NCA control frameworks"},
      {"type": "p", "text": "The ECC is the baseline. Depending on your situation, NCA's more specific frameworks may also apply, such as the <strong>Non-CNI Private Sector Entities Cybersecurity Controls (NCNICC)</strong>, the <strong>Cloud Cybersecurity Controls (CCC)</strong> for cloud providers and customers, the <strong>Critical Systems Cybersecurity Controls (CSCC)</strong>, the <strong>Data Cybersecurity Controls (DCC)</strong>, the <strong>Operational Technology Cybersecurity Controls (OTCC)</strong>, and the <strong>Telework Cybersecurity Controls (TCC)</strong>."},
      {"type": "h2", "text": "NCA ECC readiness checklist"},
      {"type": "h3", "text": "Governance"},
      {"type": "ul", "items": ["Cybersecurity strategy approved by leadership and aligned with business goals", "A dedicated cybersecurity function independent of IT, with cybersecurity positions filled by qualified, full-time Saudi professionals", "Cybersecurity policies and procedures approved, published, and reviewed periodically", "Documented cybersecurity risk assessment and treatment plan", "Cybersecurity requirements built into projects and change management", "Security awareness and training program for all staff"]},
      {"type": "h3", "text": "Defense"},
      {"type": "ul", "items": ["Complete, maintained inventory of information and technology assets", "Identity and access management with MFA for remote and privileged access", "Hardened systems, network segmentation, and email protection", "Data classification, protection, and approved cryptography", "Tested backups for critical systems", "Vulnerability management with defined remediation timelines", "Periodic <a href=\"/blogs/penetration-testing-vs-vulnerability-scanning\">penetration testing</a> of external and critical systems", "Centralized security event logging and monitoring", "Documented incident response process and reporting to NCA where required"]},
      {"type": "h3", "text": "Resilience"},
      {"type": "ul", "items": ["Cybersecurity requirements included in business continuity and disaster recovery plans", "Continuity plans tested and updated after exercises"]},
      {"type": "h3", "text": "Third parties and cloud"},
      {"type": "ul", "items": ["Cybersecurity clauses in supplier and outsourcing contracts, including confidentiality and incident notification", "Supplier security assessments before onboarding and periodically after", "Cloud and hosting arrangements that meet ECC cloud controls and any NDMO or sector data-residency rules"]},
      {"type": "h2", "text": "Common gaps we see"},
      {"type": "ol", "items": ["No independent cybersecurity function, with security sitting informally inside IT, or roles not staffed as the ECC requires.", "Policies copied from templates that do not match real practice.", "Incomplete asset inventories, especially for cloud and SaaS.", "Penetration testing done once, not periodically, and findings not tracked to closure.", "Supplier contracts with no cybersecurity requirements.", "Evidence scattered across emails and shared drives instead of organized per control."]},
      {"type": "h2", "text": "How to prepare: a practical sequence"},
      {"type": "ol", "items": ["Confirm your scope: directly regulated, or bound through client contracts.", "Download the latest ECC from NCA and assign an owner to every control.", "Run a gap assessment and rank gaps by risk and effort.", "Fix governance foundations first: the cybersecurity function, strategy, and policies.", "Close technical gaps: access, logging, vulnerabilities, backups, and testing.", "Organize evidence per control so you are ready for NCA compliance assessments and client audits."]},
      {"type": "h2", "text": "Key takeaways"},
      {"type": "ul", "items": ["The ECC applies directly to government and CNI organizations, and indirectly to many of their suppliers. Other private companies should check NCNICC-1:2025.", "It covers governance, defense, resilience, and third-party and cloud security.", "Governance gaps, such as an independent cybersecurity function and real policies, are the most common blockers.", "Work from the latest NCA version, and keep evidence organized per control."]},
      {"type": "p", "text": "EclipticLink supports Saudi organizations with <a href=\"/services/compliance-grc\">NCA ECC gap assessments and remediation</a>, <a href=\"/services/penetration-testing\">penetration testing</a>, and ongoing monitoring. See our <a href=\"/locations/saudi-arabia\">cybersecurity services in Saudi Arabia</a>. This guide is general information, not legal advice; always confirm requirements against NCA's official publications."},
    ],
  },
  {
    slug: "mcp-security-risks",
    updatedAt: "2026-11-22",
    faqs: [{"q": "What is the Model Context Protocol (MCP)?", "a": "MCP is an open protocol that lets AI assistants connect to external tools and data sources through MCP servers. It standardizes the connection, so a model can read files, query systems or take actions without a custom integration for each tool."}, {"q": "Are MCP servers safe to use?", "a": "They can be, but only with controls around them. An MCP server runs with whatever access you give it, so a malicious or compromised server, or a prompt injection that reaches it, can misuse that access. Vet the source, pin versions, grant least privilege, and require human approval for sensitive actions."}, {"q": "What is tool poisoning in MCP?", "a": "Tool poisoning is when a tool's description or metadata contains hidden instructions that the model reads and follows. Because models treat tool descriptions as trusted context, a poisoned tool can steer the assistant into leaking data or calling other tools."}, {"q": "How do I secure an MCP integration?", "a": "Inventory every server, install only from sources you trust, pin and review versions, scope credentials per tool, isolate servers from sensitive networks, log every tool call, and require confirmation before actions that change or send data."}],
    sources: [{"title": "Model Context Protocol: Security Best Practices", "url": "https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices"}, {"title": "OWASP Top 10 for LLM Applications", "url": "https://genai.owasp.org/llm-top-10/"}, {"title": "MITRE ATLAS", "url": "https://atlas.mitre.org/"}],
    title: "MCP Security Risks: Server Risks and a Checklist",
    excerpt:
      "The Model Context Protocol makes it easy to give AI assistants new tools. It also makes it easy to give an attacker a path into your data. Here are the risks, and a checklist to use before you connect.",
    metaDescription:
      "MCP security risks explained: MCP server risks such as tool poisoning, rug pulls, prompt injection and token theft, plus a checklist to vet MCP servers.",
    publishedAt: "2026-11-09",
    category: "AI Security",
    relatedService: "ai-security",
    tags: [
      "MCP security",
      "Model Context Protocol",
      "MCP server security",
      "tool poisoning",
      "AI agent security",
      "prompt injection",
      "AI supply chain",
    ],
    readingTime: 9,
    body: [
      {
        type: "p",
        text: "The <strong>Model Context Protocol (MCP)</strong> is an open standard for connecting AI applications to external tools and data. An MCP server can give an assistant access to your file system, GitHub, Slack, a database, a CRM, or almost anything else with an API. Developers and business users are connecting servers at a remarkable pace, often by pasting a few lines into a config file.",
      },
      {
        type: "p",
        text: "That convenience is the problem. Every MCP server you connect is code you are trusting, with access to data and actions, and with a direct line into your model's context. This guide explains the main MCP security risks and gives you a practical checklist to work through before you connect a new server.",
      },
      { type: "h2", text: "How MCP works, briefly" },
      {
        type: "p",
        text: "An <strong>MCP client</strong> (for example a desktop AI assistant, an IDE, or your own agent) connects to one or more <strong>MCP servers</strong>. Each server advertises capabilities, mainly <em>tools</em> the model can call, <em>resources</em> it can read, and <em>prompts</em>. The model sees each tool's name, description, and input schema, and decides when to call it.",
      },
      {
        type: "p",
        text: "Servers can run locally on a user's machine, communicating over standard input and output, or remotely over HTTP. Local servers run with the user's own operating-system permissions. Remote servers usually hold credentials, such as OAuth tokens, for the services they connect to.",
      },
      {
        type: "blockquote",
        text: "The model reads tool descriptions and tool results as text. Anything an attacker can put into that text can influence what the model does next.",
      },
      { type: "h2", text: "The main MCP security risks" },
      { type: "h3", text: "1. Tool poisoning" },
      {
        type: "p",
        text: "Tool descriptions are written by the server author and are passed to the model, but users rarely see them in full. A malicious server can hide instructions in a description, for example telling the model to read a sensitive file and include its contents in a tool argument. The user sees an innocent-looking tool name; the model sees the hidden instructions.",
      },
      { type: "h3", text: "2. Rug pulls: definitions that change after approval" },
      {
        type: "p",
        text: "A server can behave well when you review it and change later. Because tool definitions are fetched at runtime, an update to the server, or a compromised maintainer account, can silently swap a harmless description or behavior for a malicious one after you have approved it.",
      },
      { type: "h3", text: "3. Cross-server interference (tool shadowing)" },
      {
        type: "p",
        text: "When several servers are connected to the same client, they share the same model context. A malicious server's descriptions can instruct the model to change how it uses tools from a <em>different</em>, trusted server, for instance redirecting the recipient of emails sent through your legitimate email tool.",
      },
      { type: "h3", text: "4. Prompt injection through tool results" },
      {
        type: "p",
        text: "Even a perfectly honest server returns data from the outside world: web pages, issue comments, emails, documents, database rows. If an attacker controls any of that content, they can plant instructions that the model reads when the tool returns. This is <a href=\"/blogs/prompt-injection-attacks-how-to-secure-llm-applications\">indirect prompt injection</a>, and MCP makes it much more powerful because the model has more tools to act with.",
      },
      { type: "h3", text: "5. Over-privileged tokens and credential exposure" },
      {
        type: "p",
        text: "Remote servers often hold broad OAuth tokens or API keys, which makes them attractive targets. Local server configs frequently contain API keys in plain text. A single compromised server, or a stolen config file, can expose access to many systems at once.",
      },
      { type: "h3", text: "6. Command injection and unsafe local execution" },
      {
        type: "p",
        text: "Many local servers wrap shell commands, file operations, or scripts. If a server passes model-generated arguments into a shell or file path without validation, the model, or an attacker steering it, can run arbitrary commands with the user's privileges.",
      },
      { type: "h3", text: "7. Supply chain and impersonation" },
      {
        type: "p",
        text: "Servers are commonly installed from public package registries and community lists. Typosquatted package names, abandoned projects, and unofficial servers that claim to represent a well-known product are all realistic ways for malicious code to end up on developer machines.",
      },
      { type: "h2", text: "The combination that causes breaches" },
      {
        type: "p",
        text: "Security researcher Simon Willison describes a \"lethal trifecta\" for AI agents: access to <strong>private data</strong>, exposure to <strong>untrusted content</strong>, and the ability to <strong>communicate externally</strong>. When one agent has all three, an attacker who can get text in front of the model can potentially get your data out. MCP makes it very easy to assemble all three by accident, for example by connecting an email server, a file system server, and a web-fetch server to the same assistant.",
      },
      {
        type: "table",
        headers: ["Capability", "Example MCP servers", "Why it matters"],
        rows: [
          ["Private data", "File system, database, CRM, drive", "Something worth stealing"],
          ["Untrusted content", "Web fetch, email, issue trackers, chat", "A way for attackers to inject instructions"],
          ["External communication", "Email send, HTTP requests, messaging", "A way to exfiltrate data"],
        ],
      },
      { type: "h2", text: "Checklist: before you connect an MCP server" },
      { type: "h3", text: "Vet the source" },
      {
        type: "ul",
        items: [
          "Prefer official servers published by the vendor of the service you are connecting to.",
          "Check the publisher, repository activity, maintainers, and install counts, and watch for look-alike names.",
          "Read the tool descriptions in full, not just the tool names, and look for instructions aimed at the model.",
          "Pin a specific version and review changes before upgrading, so definitions can't change underneath you.",
        ],
      },
      { type: "h3", text: "Limit what it can reach" },
      {
        type: "ul",
        items: [
          "Grant the narrowest OAuth scopes and API permissions that still work, and prefer read-only where possible.",
          "Run local servers in a container or sandbox with access only to the directories they need.",
          "Restrict outbound network access from servers that don't need the internet.",
          "Keep secrets in a secrets manager or OS keychain rather than plain-text config files.",
        ],
      },
      { type: "h3", text: "Control what the model can do with it" },
      {
        type: "ul",
        items: [
          "Require human approval for tools that send data out, change records, spend money, or delete anything.",
          "Avoid connecting servers that complete the lethal trifecta to the same agent; split workloads across separate agents instead.",
          "Disable tools you don't need. Many servers expose far more tools than your use case requires.",
        ],
      },
      { type: "h3", text: "Monitor and govern" },
      {
        type: "ul",
        items: [
          "Log tool calls, arguments, and results centrally, and alert on unusual patterns.",
          "Keep an inventory of which MCP servers are approved, who uses them, and what they can access.",
          "For organizations, route remote servers through a gateway that enforces authentication, allow-lists, and logging.",
        ],
      },
      { type: "h2", text: "For teams building MCP servers" },
      {
        type: "ol",
        items: [
          "Treat every argument from the model as untrusted input: validate types, allow-list values, and never build shell commands by string concatenation.",
          "Implement proper authorization for remote servers, following the authorization guidance in the MCP specification, and never pass a client's token through to downstream APIs unchecked.",
          "Keep tool descriptions short, factual, and free of instructions.",
          "Return only the data the task needs, and mark content from external sources as untrusted.",
          "Publish signed releases and a changelog so users can review what changed.",
        ],
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "An MCP server is third-party code with access to your data and a direct line into your model's context. Vet it like any other dependency.",
          "Tool descriptions and tool results are both attack surfaces.",
          "The biggest risk comes from combining private data, untrusted content, and external communication in one agent.",
          "Least privilege, human approval for high-impact actions, version pinning, and logging remove most of the risk.",
        ],
      },
      {
        type: "p",
        text: "EclipticLink's <a href=\"/services/ai-security\">AI and LLM security</a> team reviews MCP servers and agent architectures, tests them for tool poisoning and prompt injection, and helps you set up governance for which servers your organization can use.",
      },
    ],
  },
  {
    slug: "how-to-secure-ai-agents-with-tool-access",
    sources: [{"title": "OWASP Top 10 for LLM Applications", "url": "https://genai.owasp.org/llm-top-10/"}, {"title": "MITRE ATLAS", "url": "https://atlas.mitre.org/"}, {"title": "NIST AI Risk Management Framework", "url": "https://www.nist.gov/itl/ai-risk-management-framework"}],
    faqs: [
      {
        q: "What is excessive agency in AI agents?",
        a: "Excessive agency is a risk in the OWASP Top 10 for LLM Applications where an agent has more functionality, permissions, or autonomy than its task needs, so a mistake or manipulation can cause real damage.",
      },
      {
        q: "How do you secure an AI agent that can call tools?",
        a: "Give it the smallest possible toolset, run it with the user's scoped permissions, require human approval for high-impact actions, validate tool arguments in code, sandbox code execution, restrict network egress, set limits, and log every action.",
      },
      {
        q: "What is the lethal trifecta for AI agents?",
        a: "It describes an agent that combines access to private data, exposure to untrusted content, and the ability to communicate externally. Together these let an attacker who can inject text potentially exfiltrate data, so avoid giving one agent all three.",
      },
    ],
    title: "How to Secure AI Agents That Have Tool Access",
    excerpt:
      "An AI agent that can send email, query databases, or call APIs is a new kind of privileged user, one that can be talked into things. Here is how to design agents that stay safe even when the model is fooled.",
    metaDescription:
      "A practical guide to AI agent security: excessive agency, least-privilege tools, human approval, sandboxing, and monitoring for agents with tool and API access.",
    publishedAt: "2026-11-09",
    category: "AI Security",
    relatedService: "ai-security",
    tags: [
      "AI agent security",
      "agentic AI security",
      "excessive agency",
      "OWASP LLM Top 10",
      "LLM tool use",
      "least privilege",
      "prompt injection",
    ],
    readingTime: 8,
    body: [
      {
        type: "p",
        text: "A chatbot that answers questions can embarrass you. An <strong>AI agent</strong> that can send emails, update records, run code, or call your APIs can do real damage. The moment you give a language model tools, it becomes a privileged user of your systems, and unlike a human employee, it can be persuaded by any text it reads.",
      },
      {
        type: "p",
        text: "This guide covers how to design agents that stay safe even when the model makes a mistake or is manipulated, because with today's models, you have to assume that sometimes it will be.",
      },
      { type: "h2", text: "The core principle: assume the model can be fooled" },
      {
        type: "p",
        text: "No system prompt, filter, or model choice reliably prevents <a href=\"/blogs/prompt-injection-attacks-how-to-secure-llm-applications\">prompt injection</a>. So the security question for an agent isn't \"can the model be tricked?\" but <strong>\"what is the worst thing that happens if it is?\"</strong> Good agent security is mostly about making that answer boring.",
      },
      {
        type: "blockquote",
        text: "Design the agent's permissions as if an attacker were writing its instructions, because through injected content, sometimes they are.",
      },
      { type: "h2", text: "Understand excessive agency" },
      {
        type: "p",
        text: "The OWASP Top 10 for LLM Applications lists <strong>Excessive Agency (LLM06)</strong> as a top risk and breaks it into three causes. Almost every agent incident traces back to one of them.",
      },
      {
        type: "table",
        headers: ["Cause", "What it looks like", "Fix"],
        rows: [
          ["Excessive functionality", "A \"read email\" integration that can also send and delete", "Expose only the specific operations the task needs"],
          ["Excessive permissions", "The agent uses an admin or shared service account", "Scope credentials to the task and to the current user"],
          ["Excessive autonomy", "High-impact actions run with no human check", "Require approval for consequential actions"],
        ],
      },
      { type: "h2", text: "Eight controls for secure AI agents" },
      { type: "h3", text: "1. Give each agent the smallest possible toolset" },
      {
        type: "p",
        text: "Build narrow tools for specific jobs instead of generic ones. A tool called <code>get_order_status(order_id)</code> is far safer than <code>run_sql(query)</code> or <code>http_request(url)</code>. Every general-purpose tool you remove is a whole class of attack that disappears.",
      },
      { type: "h3", text: "2. Act with the user's permissions, not the agent's" },
      {
        type: "p",
        text: "When an agent works on behalf of a user, it should use that user's delegated, scoped credentials. Then it can never access data the user couldn't access themselves. Agents running on a shared, all-powerful service account are a confused-deputy problem waiting to happen.",
      },
      { type: "h3", text: "3. Require human approval for high-impact actions" },
      {
        type: "p",
        text: "Sending external messages, moving money, changing permissions, deleting data, and deploying code should need explicit confirmation. Show the user exactly what will happen, including the full recipient list and content, not a summary written by the model.",
      },
      { type: "h3", text: "4. Break the lethal trifecta" },
      {
        type: "p",
        text: "An agent that has access to private data, reads untrusted content, and can communicate externally can be steered into leaking that data. If an agent needs to read untrusted content such as inbound email or web pages, remove its ability to send data out, or split the work across separate agents with a strict boundary between them.",
      },
      { type: "h3", text: "5. Validate every tool call in code" },
      {
        type: "p",
        text: "Treat the model's tool arguments as untrusted input. Validate them against strict schemas, allow-list values such as domains, recipients, and file paths, and enforce business rules like spending limits in your application, not in the prompt.",
      },
      { type: "h3", text: "6. Sandbox code execution and restrict the network" },
      {
        type: "p",
        text: "Agents that write or run code should do so in an isolated, short-lived sandbox with no access to production credentials and restricted outbound network access. Egress controls stop many data-exfiltration attempts even when an injection succeeds.",
      },
      { type: "h3", text: "7. Set limits and a kill switch" },
      {
        type: "p",
        text: "Cap the number of steps, tool calls, and spend per task, and rate-limit sensitive tools. Make sure you can disable an agent, or a single tool, instantly without a deployment.",
      },
      { type: "h3", text: "8. Log everything and watch for anomalies" },
      {
        type: "p",
        text: "Record prompts, retrieved content, tool calls, arguments, results, and approvals with a trace ID per task. Alert on unusual behavior, such as a support agent suddenly querying billing data or a tool being called far more often than normal. These logs are also essential evidence if something goes wrong.",
      },
      { type: "h2", text: "Test your agents like an attacker would" },
      {
        type: "p",
        text: "Before launch and after every change to tools, prompts, or data sources, red-team the agent. Useful test cases include:",
      },
      {
        type: "ul",
        items: [
          "Planting instructions in documents, emails, tickets, and web pages the agent will read.",
          "Trying to get the agent to call tools outside its intended task.",
          "Attempting to access another user's data through the agent.",
          "Trying to bypass approval steps, for example by splitting one harmful action into several harmless-looking ones.",
          "Checking that limits, sandboxing, and egress controls hold when the model is fully compromised.",
        ],
      },
      {
        type: "p",
        text: "MITRE ATLAS, a knowledge base of adversary techniques against AI systems, is a useful reference for building these test scenarios. If your agents connect to tools through the Model Context Protocol, also review our <a href=\"/blogs/mcp-security-risks\">MCP security checklist</a>.",
      },
      { type: "h2", text: "A quick agent security checklist" },
      {
        type: "ol",
        items: [
          "Does each agent have only the tools and operations its task needs?",
          "Does it act with the current user's scoped permissions?",
          "Do high-impact actions require clear human approval?",
          "Have you avoided combining private data, untrusted content, and external communication in one agent?",
          "Are tool arguments validated and business rules enforced in code?",
          "Is code execution sandboxed and outbound network access restricted?",
          "Are there step, spend, and rate limits, plus a kill switch?",
          "Is every action logged and monitored?",
        ],
      },
      {
        type: "p",
        text: "EclipticLink's <a href=\"/services/ai-security\">AI and LLM security</a> team designs and red-teams agentic systems, from customer-facing assistants to internal automation agents, so you can ship AI features without handing attackers the keys.",
      },
    ],
  },
  {
    slug: "prompt-injection-attacks-how-to-secure-llm-applications",
    sources: [{"title": "OWASP Top 10 for LLM Applications", "url": "https://genai.owasp.org/llm-top-10/"}, {"title": "MITRE ATLAS", "url": "https://atlas.mitre.org/"}, {"title": "NIST AI Risk Management Framework", "url": "https://www.nist.gov/itl/ai-risk-management-framework"}],
    faqs: [
      {
        q: "What is a prompt injection attack?",
        a: "Prompt injection is when an attacker crafts text, typed directly or hidden in content the model reads, that overrides an LLM application's instructions. It can make the model leak data, ignore safety rules, or misuse the tools it has access to.",
      },
      {
        q: "What is the difference between direct and indirect prompt injection?",
        a: "Direct prompt injection is typed straight into the chat by the user. Indirect prompt injection is planted in documents, emails, web pages, or other content the model later reads, so the attacker never has to interact with the application.",
      },
      {
        q: "Can prompt injection be fully prevented?",
        a: "Not reliably with current models. The practical goal is defense in depth: limit what the model can access and do, enforce permissions in code, validate outputs, require human approval for high-impact actions, and monitor for abuse.",
      },
    ],
    title: "Prompt Injection Attacks: How to Secure LLM Applications",
    excerpt:
      "Prompt injection is the top risk in the OWASP Top 10 for LLM Applications. Here is how direct and indirect attacks work, and the layered defenses that actually reduce risk.",
    metaDescription:
      "What prompt injection is, how direct and indirect attacks work against chatbots, RAG, and AI agents, and practical defenses to secure LLM applications.",
    publishedAt: "2026-10-28",
    category: "AI Security",
    relatedService: "ai-security",
    tags: ["prompt injection", "LLM security", "AI security", "OWASP LLM Top 10", "AI agents", "RAG security"],
    readingTime: 8,
    body: [
      {
        type: "p",
        text: "Large language models follow instructions, and that is exactly the problem. A model cannot reliably tell the difference between instructions from the developer and instructions hidden in the data it is processing. <strong>Prompt injection</strong> exploits that gap, and it sits at number one in the OWASP Top 10 for LLM Applications for good reason.",
      },
      {
        type: "p",
        text: "If your business runs a customer-facing chatbot, an internal copilot, a retrieval-augmented generation (RAG) system, or an AI agent that can call tools, prompt injection is a risk you need to design for, not patch later.",
      },
      { type: "h2", text: "Direct vs. indirect prompt injection" },
      {
        type: "p",
        text: "<strong>Direct prompt injection</strong> is when a user types malicious instructions straight into the application, for example asking the model to ignore its previous instructions and reveal its system prompt, or to role-play its way around content restrictions. These are often called jailbreaks.",
      },
      {
        type: "p",
        text: "<strong>Indirect prompt injection</strong> is more dangerous. The attacker never talks to your model. Instead they plant instructions in content the model will later read: a web page, a PDF uploaded for summarization, an email in an inbox an assistant can access, or a document in your knowledge base. When the model ingests that content, it may follow the attacker's instructions with the user's permissions.",
      },
      {
        type: "blockquote",
        text: "Treat every piece of content an LLM reads as potentially hostile input, and every piece of output it produces as untrusted.",
      },
      { type: "h2", text: "What attackers can achieve" },
      {
        type: "ul",
        items: [
          "<strong>Data exfiltration:</strong> tricking the model into revealing system prompts, other users' data, or documents it retrieved.",
          "<strong>Unauthorized actions:</strong> if the model can send emails, update records, or call APIs, injected instructions can trigger those actions.",
          "<strong>Misinformation and manipulation:</strong> poisoned content that changes what the assistant tells users or employees.",
          "<strong>Downstream exploits:</strong> model output that contains script or markup and is rendered without sanitization, leading to XSS or injection in other systems.",
        ],
      },
      { type: "h2", text: "Why there is no single fix" },
      {
        type: "p",
        text: "You cannot fully solve prompt injection with a better system prompt. Instructions and data share the same channel, so filtering is probabilistic. The goal is defense in depth: make attacks harder, limit what a successful attack can do, and detect when one happens.",
      },
      { type: "h2", text: "Layered defenses that work" },
      { type: "h3", text: "1. Limit agency and permissions" },
      {
        type: "p",
        text: "The most effective control is reducing the blast radius. Give agents only the tools they need, scope API tokens to the minimum, and require explicit human confirmation for high-impact actions like sending external email, moving money, or deleting data.",
      },
      { type: "h3", text: "2. Enforce permissions outside the model" },
      {
        type: "p",
        text: "In RAG systems, retrieval must respect the end user's access rights. Filter documents by permission <em>before</em> they reach the model, never by asking the model to decide what a user should see.",
      },
      { type: "h3", text: "3. Separate and label untrusted content" },
      {
        type: "p",
        text: "Clearly delimit retrieved or user-supplied content, tell the model it is data rather than instructions, and strip hidden text, unusual Unicode, and markup from documents during ingestion. This raises the bar without being a guarantee.",
      },
      { type: "h3", text: "4. Validate output before acting on it" },
      {
        type: "p",
        text: "Treat model output like user input. Validate tool-call arguments against strict schemas, encode output before rendering it in a browser, and never pass raw model output to a shell, SQL query, or template engine.",
      },
      { type: "h3", text: "5. Add guardrails and monitoring" },
      {
        type: "p",
        text: "Input and output classifiers can catch known attack patterns and sensitive-data leakage. Log prompts, retrieved context, and tool calls so you can investigate incidents, and alert on anomalies such as an agent suddenly calling tools it rarely uses.",
      },
      { type: "h2", text: "Test it like an attacker would" },
      {
        type: "p",
        text: "Before launch, and after every significant change to prompts, tools, or data sources, red-team the application. Good AI red teaming combines automated adversarial prompt generation, which can try thousands of variants, with manual testing of indirect injection paths through every data source the model touches.",
      },
      {
        type: "table",
        headers: ["Test area", "What to check"],
        rows: [
          ["System prompt", "Can it be extracted or overridden?"],
          ["RAG sources", "Can a planted document change behavior or leak other data?"],
          ["Tools and agents", "Can injected text trigger unintended tool calls?"],
          ["Output handling", "Is output rendered or executed unsafely downstream?"],
          ["Data leakage", "Can users access PII or secrets through clever questioning?"],
        ],
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Prompt injection can't be eliminated, but its impact can be contained.",
          "Least privilege and human confirmation for high-impact actions matter more than prompt wording.",
          "Enforce data permissions in code, not in the prompt.",
          "Test continuously; your attack surface changes every time your prompts, tools, or data change.",
        ],
      },
      {
        type: "p",
        text: "EclipticLink's <a href=\"/services/ai-security\">AI and LLM security</a> team red-teams chatbots, RAG pipelines, and agents against the OWASP LLM Top 10 and MITRE ATLAS, and helps you design guardrails that hold up in production.",
      },
    ],
  },
  {
    slug: "ai-powered-mdr-what-it-is-and-how-it-works",
    faqs: [{"q": "What is AI-powered MDR?", "a": "AI-powered managed detection and response is a managed security service that uses AI to triage, correlate and enrich alerts, while human analysts validate threats and direct the response. AI handles volume and speed; people remain accountable for decisions."}, {"q": "What is the difference between MDR and EDR?", "a": "EDR is a tool that detects and records activity on endpoints. MDR is a service: a team monitors tools such as EDR around the clock, investigates alerts and helps you respond. Many MDR services use EDR as a core data source."}, {"q": "Can an AI SOC replace human analysts?", "a": "Not safely. AI is strong at repetitive triage and summarizing evidence, but it can be wrong or manipulated. High-impact decisions such as isolating production systems or declaring an incident should stay with experienced analysts."}, {"q": "Does a small company need MDR?", "a": "If you cannot monitor and respond to alerts at all hours with your own staff, MDR is often more practical than building an in-house SOC. It is most useful once you hold sensitive customer data or have customers asking about your security monitoring."}],
    sources: [{"title": "MITRE ATT&CK", "url": "https://attack.mitre.org/"}, {"title": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework"}, {"title": "NIST SP 800-61 Rev. 3: Incident Response Recommendations", "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"}],
    title: "AI-Powered MDR and AI SOC: What It Is and How It Works",
    excerpt:
      "Every security vendor now says “AI.” Here is what AI genuinely improves in managed detection and response, where humans are still essential, and what to ask a provider.",
    metaDescription:
      "What AI-powered MDR and an AI SOC really mean, how AI triage cuts alert fatigue, where human analysts still matter, and how to choose an MDR provider.",
    publishedAt: "2026-10-14",
    updatedAt: "2026-11-22",
    category: "Detection & Response",
    relatedService: "managed-detection-response",
    tags: ["MDR", "managed detection and response", "AI threat detection", "SOC", "alert fatigue", "XDR"],
    readingTime: 7,
    body: [
      {
        type: "p",
        text: "Managed detection and response (MDR) is a service where an external team monitors your environment, investigates suspicious activity, and helps contain threats. It exists because most companies cannot staff a 24/7 security operations center (SOC) themselves.",
      },
      {
        type: "p",
        text: "The newest generation of MDR leans heavily on AI. Some of that is real progress and some of it is marketing. This guide separates the two.",
      },
      { type: "h2", text: "The core problem: too many alerts" },
      {
        type: "p",
        text: "Security tools generate a huge number of alerts, and the large majority turn out to be benign. Analysts who spend all day closing false positives get slower, miss things, and burn out. Attackers count on real signals getting lost in the noise.",
      },
      { type: "h2", text: "What AI does well in MDR" },
      {
        type: "ul",
        items: [
          "<strong>Behavioral baselining:</strong> machine learning models learn what is normal for each user, device, and workload, and flag deviations that static rules miss.",
          "<strong>Correlation:</strong> grouping dozens of related low-level events into one incident with a single storyline.",
          "<strong>Enrichment:</strong> automatically adding asset owner, user role, threat intelligence, and recent activity to every alert.",
          "<strong>Summarization:</strong> LLMs turn raw logs into a readable narrative mapped to MITRE ATT&CK techniques, so an analyst understands an incident in minutes.",
          "<strong>Prioritization:</strong> ranking incidents by likely impact so the most dangerous ones are investigated first.",
        ],
      },
      { type: "h2", text: "What still needs humans" },
      {
        type: "p",
        text: "AI is fast but not infallible. It can be confidently wrong, and attackers deliberately try to look normal. Human analysts remain essential for:",
      },
      {
        type: "ul",
        items: [
          "Validating escalations before your team is paged.",
          "Judging business context, such as whether the CFO really is travelling.",
          "Making containment decisions that could disrupt operations.",
          "Threat hunting for novel techniques that have no training data yet.",
          "Communicating clearly with your leadership during an incident.",
        ],
      },
      {
        type: "blockquote",
        text: "The right model is AI-accelerated and human-verified: automation for scale and speed, people for judgment and accountability.",
      },
      { type: "h2", text: "MDR vs. EDR vs. SIEM vs. XDR" },
      {
        type: "table",
        headers: ["Term", "What it is"],
        rows: [
          ["EDR", "Endpoint detection and response software on laptops and servers."],
          ["SIEM", "A platform that collects and searches logs from many sources."],
          ["XDR", "Detection that spans endpoint, identity, email, cloud, and network."],
          ["MDR", "A service: people and processes that operate these tools for you."],
        ],
      },
      { type: "h2", text: "What is an AI SOC, and how does it relate to MDR?" },
      {
        type: "p",
        text: "A security operations center (SOC) is the team and process that monitors alerts, investigates them and responds. An <strong>AI SOC</strong> uses machine learning and language models inside that workflow: to enrich and group alerts, map them to MITRE ATT&amp;CK, draft the investigation summary and suggest next steps, so analysts spend their time on decisions rather than data gathering.",
      },
      {
        type: "p",
        text: "AI-powered MDR is the outsourced version: the provider runs an AI-assisted SOC for you, around the clock, using your existing tools. The question to ask is not whether a provider uses AI, but where a person signs off. Fully autonomous “agentic” response can be useful for well-understood, low-risk actions, such as blocking a known-malicious file. Anything that affects users, production systems or customers should still be approved by an analyst.",
      },
      { type: "h2", text: "Questions to ask an MDR provider" },
      {
        type: "ol",
        items: [
          "Which log sources do you cover, and how do you measure detection coverage?",
          "Where exactly do you use AI, and does a human review every escalation?",
          "Which response actions can you take without asking us, and how is that agreed?",
          "Can we see the investigation notes behind each incident?",
          "How do you tune detections to our environment over time?",
          "What do monthly reports include, and are they readable by non-specialists?",
        ],
      },
      {
        type: "p",
        text: "Learn more about EclipticLink's <a href=\"/services/managed-detection-response\">AI-powered MDR and SOC service</a>, which integrates with the tools you already have.",
      },
    ],
  },
  {
    slug: "penetration-testing-vs-vulnerability-scanning",
    sources: [{"title": "NIST SP 800-115: Technical Guide to Information Security Testing and Assessment", "url": "https://csrc.nist.gov/pubs/sp/800/115/final"}, {"title": "NIST SP 800-40 Rev. 4: Enterprise Patch Management Planning", "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"}, {"title": "OWASP Web Security Testing Guide", "url": "https://owasp.org/www-project-web-security-testing-guide/"}, {"title": "OWASP API Security Top 10 (2023)", "url": "https://owasp.org/API-Security/editions/2023/en/0x11-t10/"}, {"title": "PCI Security Standards Council: PCI DSS document library", "url": "https://www.pcisecuritystandards.org/document_library/"}],
    alsoRelated: ["vulnerability-management", "compliance-grc", "application-security"],
    updatedAt: "2026-11-19",
    faqs: [
      {
        q: "What is the difference between a vulnerability scan and a penetration test?",
        a: "A vulnerability scan is an automated check that lists known weaknesses such as missing patches and misconfigurations. A penetration test is performed by security testers who manually exploit and chain weaknesses to prove what an attacker could actually achieve. A scan tells you what might be wrong; a pentest proves what is exploitable and how much damage it could do.",
      },
      {
        q: "Do I need both a vulnerability scan and a penetration test?",
        a: "Most organizations do. Scans give continuous, broad coverage between tests and catch new issues quickly. Penetration tests prove real-world impact, find logic flaws scanners miss, and are what PCI DSS, enterprise customers and many auditors ask for. Scanning without testing leaves you blind to chained and business-logic attacks; testing without scanning leaves gaps for most of the year.",
      },
      {
        q: "What is the difference between a vulnerability assessment and a penetration test?",
        a: "A vulnerability assessment identifies, validates and prioritizes weaknesses, usually starting from scan results and adding human review to remove false positives. A penetration test goes further: testers actively exploit the weaknesses and chain them to show the real path an attacker could take and the data or systems they could reach.",
      },
      {
        q: "What is the difference between vulnerability management and penetration testing?",
        a: "Vulnerability management is an ongoing program: continuous scanning, asset inventory, risk-based prioritization, patching, and tracking until each issue is fixed. Penetration testing is a time-boxed engagement that proves exploitability at a point in time. Pentest findings should feed the vulnerability management program so the same class of issue is caught automatically next time.",
      },
      {
        q: "Is a vulnerability scan enough for compliance?",
        a: "Usually not on its own. PCI DSS requires both regular vulnerability scans and periodic penetration tests, and SOC 2 and ISO 27001 auditors and enterprise customers commonly expect a recent penetration test report in addition to evidence of scanning.",
      },
      {
        q: "How often should we run vulnerability scans and penetration tests?",
        a: "Run vulnerability scans continuously or at least weekly, and commission a penetration test at least once a year and after significant changes such as a major release, new product, or cloud migration.",
      },
      {
        q: "How long does a penetration test take?",
        a: "It depends on scope. A focused web application or API test commonly takes one to two weeks of testing, while a larger engagement covering several applications, internal networks and cloud environments takes longer. Scoping, reporting and a retest after fixes add time on either side.",
      },
      {
        q: "Can automated tools replace a penetration test?",
        a: "No. Automated tools are fast and broad, but they cannot reason about business logic, chain low-severity issues into a serious attack, or confirm exploitability the way an experienced tester can. The best programs use AI and automation to speed up testing and human testers to judge what matters.",
      },
    ],
    title: "Penetration Testing vs Vulnerability Scanning",
    excerpt:
      "They sound similar and are often confused, even in RFPs. Here is the real difference, how vulnerability assessments and vulnerability management fit in, and whether you need both.",
    metaDescription:
      "Vulnerability scan vs penetration test: what each finds, effort, compliance (PCI DSS, SOC 2, ISO 27001), and whether you need both. Comparison table inside.",
    publishedAt: "2026-09-30",
    category: "Offensive Security",
    relatedService: "penetration-testing",
    tags: [
      "penetration testing",
      "vulnerability scanning",
      "vulnerability assessment",
      "vulnerability management",
      "pentest",
      "PCI DSS",
      "SOC 2",
    ],
    readingTime: 9,
    body: [
      {
        type: "p",
        text: "A vulnerability scan and a penetration test both look for security weaknesses, but they answer different questions. A scan asks <em>what known issues might exist?</em> A penetration test asks <em>what could an attacker actually do with them?</em> Mixing them up leads to the wrong purchase: teams buy a scan when a customer asked for a pentest, or pay for a pentest when what they needed was continuous scanning.",
      },
      {
        type: "p",
        text: "This guide explains the difference in plain terms, how vulnerability assessments and vulnerability management fit in, what compliance frameworks expect, and how to decide what you need right now.",
      },
      { type: "h2", text: "The short answer" },
      {
        type: "ul",
        items: [
          "<strong>Vulnerability scanning</strong> is automated, broad and frequent. It finds known weaknesses across many systems and should run continuously.",
          "<strong>Penetration testing</strong> is manual, deep and periodic. Testers exploit and chain weaknesses to prove real impact, including logic flaws no scanner can see.",
          "<strong>Most organizations need both</strong>: scanning for coverage every week, a penetration test at least once a year and after major changes.",
        ],
      },
      {
        type: "table",
        headers: ["", "Vulnerability scan", "Penetration test"],
        rows: [
          ["Performed by", "Automated tools", "Security testers, assisted by tools"],
          ["Question it answers", "What known issues might exist?", "What can an attacker actually do?"],
          ["Depth", "Broad and shallow", "Narrow and deep"],
          ["Frequency", "Continuous or weekly", "Annually and after major changes"],
          ["Finds business-logic flaws", "Rarely", "Yes"],
          ["Chains issues into an attack", "No", "Yes"],
          ["Proves exploitability", "No", "Yes, with proof-of-concept steps"],
          ["False positives", "Common", "Removed during testing"],
          ["Effort and cost", "Low per run", "Higher, scoped per engagement"],
          ["Output", "List of potential issues with severity scores", "Validated findings, attack narrative and fix guidance"],
        ],
      },
      { type: "h2", text: "What is vulnerability scanning?" },
      {
        type: "p",
        text: "Vulnerability scanning is automated. A scanner probes your systems and compares what it finds against databases of known vulnerabilities (CVEs), missing patches, outdated software and weak configurations. Scans are fast, repeatable and cheap to run, which is exactly why they should run all the time.",
      },
      { type: "h3", text: "Common types of vulnerability scans" },
      {
        type: "ul",
        items: [
          "<strong>External scans</strong> look at your internet-facing systems the way an outside attacker would.",
          "<strong>Internal scans</strong> run inside your network to find weaknesses an attacker could use after getting a foothold.",
          "<strong>Authenticated scans</strong> log in to systems and see far more than unauthenticated scans, such as missing patches and local misconfigurations.",
          "<strong>Web application and API scans</strong> look for common issues such as injection and missing security headers.",
          "<strong>Cloud configuration scans</strong> check AWS, Azure and GCP settings, such as public storage and over-permissive identity policies.",
        ],
      },
      {
        type: "ul",
        items: [
          "<strong>Strengths:</strong> broad coverage, frequent, relatively low cost, good for catching new issues quickly.",
          "<strong>Limitations:</strong> false positives, no business-logic testing, no chaining of issues, and no proof of real-world impact.",
        ],
      },
      { type: "h2", text: "What is penetration testing?" },
      {
        type: "p",
        text: "A penetration test is performed by skilled security testers who think like attackers. They use scanners as a starting point, then manually exploit weaknesses, chain low-severity issues into high-impact attacks, and test business logic that no automated tool understands.",
      },
      {
        type: "p",
        text: "Here is a typical example. A scanner reports nothing serious on an invoicing API. A tester notices that changing the invoice number in a request returns another customer's invoice. That is an insecure direct object reference (IDOR): a critical data exposure that looks like a perfectly valid request to a scanner.",
      },
      { type: "h3", text: "Common types of penetration tests" },
      {
        type: "ul",
        items: [
          "<strong>Web application testing:</strong> authentication, session handling, access control and business logic.",
          "<strong>API testing:</strong> broken object-level authorization, excessive data exposure and rate limiting.",
          "<strong>External and internal network testing:</strong> what an attacker can reach from the internet, and how far they can move once inside.",
          "<strong>Cloud penetration testing:</strong> identity, storage and network paths in AWS, Azure and GCP.",
          "<strong>Social engineering and red teaming:</strong> phishing and multi-step attack simulations against people and processes.",
          "<strong>AI and LLM application testing:</strong> prompt injection, data leakage and excessive agent permissions.",
        ],
      },
      {
        type: "ul",
        items: [
          "<strong>Strengths:</strong> proves impact, finds logic flaws and chained attacks, removes false positives, and gives developers reproducible steps.",
          "<strong>Limitations:</strong> point-in-time, more effort, and scoped to specific targets.",
        ],
      },
      { type: "h2", text: "Vulnerability assessment vs penetration testing" },
      {
        type: "p",
        text: "A <strong>vulnerability assessment</strong> sits between the two. It usually starts from scan results, then adds human review to remove false positives, confirm which findings are real, and rank them by risk to your business. It tells you which weaknesses exist and which to fix first, but it stops short of exploiting them.",
      },
      {
        type: "p",
        text: "A penetration test goes further. Testers exploit the weaknesses and chain them together to show the actual path an attacker could take and what they could reach: customer data, admin access, or production systems. If you need to know <em>whether</em> something is exploitable and <em>how bad</em> it would be, you need a pentest.",
      },
      { type: "h2", text: "Vulnerability management vs penetration testing" },
      {
        type: "p",
        text: "<strong>Vulnerability management</strong> is not a single test but an ongoing program: an up-to-date asset inventory, continuous scanning, risk-based prioritization, remediation tracked to an owner and a deadline, and reporting on whether exposure is going down.",
      },
      {
        type: "p",
        text: "Penetration testing is a time-boxed engagement that proves exploitability at a point in time. The two work best together: the pentest finds the issues scanners miss, and those findings feed back into the vulnerability management program so the same class of issue is caught automatically next time.",
      },
      { type: "h2", text: "Do you need both?" },
      {
        type: "p",
        text: "For most organizations, yes. Scanning without testing leaves you blind to chained and business-logic attacks. Testing without scanning leaves you exposed for the eleven months between tests, while new code, new cloud resources and new vulnerabilities appear every week.",
      },
      {
        type: "table",
        headers: ["Your situation", "What you need"],
        rows: [
          ["A customer or auditor asked for a pentest report", "Penetration test (scoped to the product they buy)"],
          ["Preparing for SOC 2 or ISO 27001", "Continuous scanning plus an annual penetration test"],
          ["Taking card payments (PCI DSS)", "Quarterly scans and an annual penetration test, both required"],
          ["Launching a new product, API or AI feature", "Penetration test before launch"],
          ["You do not know what is exposed to the internet", "External scanning and attack surface monitoring first"],
          ["Lots of findings, no idea what to fix first", "Vulnerability assessment and risk-based prioritization"],
          ["After a major release or cloud migration", "Targeted penetration test of what changed"],
        ],
      },
      { type: "h2", text: "What compliance frameworks expect" },
      {
        type: "ul",
        items: [
          "<strong>PCI DSS v4.0</strong> requires both: internal and external vulnerability scans at least every three months (external scans by an Approved Scanning Vendor), and penetration testing at least every twelve months and after significant changes.",
          "<strong>SOC 2</strong> does not name a penetration test, but auditors look for vulnerability management and testing evidence, and enterprise customers routinely ask for a recent pentest report.",
          "<strong>ISO 27001</strong> requires technical vulnerabilities to be managed, and organizations commonly use scanning and penetration testing as evidence.",
          "<strong>Regional frameworks</strong> such as Saudi Arabia's NCA ECC and the UAE Information Assurance Standards include vulnerability management and testing requirements for organizations in scope.",
        ],
      },
      { type: "h2", text: "How to combine them" },
      {
        type: "ol",
        items: [
          "Know what you have: keep an inventory of internet-facing assets, cloud accounts and applications.",
          "Run continuous vulnerability scanning and fix issues by real risk, not just CVSS score.",
          "Commission a penetration test at least annually and after significant changes such as a new product, major release, or cloud migration.",
          "Feed pentest findings back into scanning, detection and secure coding so the same class of issue is caught automatically next time.",
          "Retest after remediation to prove fixes work, and keep the report as evidence for customers and auditors.",
        ],
      },
      { type: "h2", text: "How to choose a penetration testing provider" },
      {
        type: "ul",
        items: [
          "Ask for a sample report. Findings should include proof-of-concept steps and fix guidance your developers can act on.",
          "Check that testing is manual and goes beyond a rebranded scan.",
          "Agree a clear scope and rules of engagement in writing before any testing starts.",
          "Make sure a retest of fixes is included, along with an attestation letter you can share with customers.",
          "Ask how they test APIs, cloud environments and AI features if you have them.",
        ],
      },
      {
        type: "p",
        text: "See EclipticLink's <a href=\"/services/penetration-testing\">penetration testing</a> and <a href=\"/services/vulnerability-management\">vulnerability management</a> services, or <a href=\"/contact?service=penetration-testing&amp;from=pentest-vs-scanning\">book a free 30-minute assessment</a> to work out which you need.",
      },
    ],
  },
  {
    slug: "soc-2-compliance-checklist-for-startups",
    updatedAt: "2026-11-22",
    faqs: [{"q": "What is the difference between SOC 2 Type I and Type II?", "a": "A Type I report assesses whether controls are suitably designed at a specific point in time. A Type II report also tests whether they operated effectively over a period, commonly three to twelve months. Enterprise buyers usually prefer Type II."}, {"q": "Is SOC 2 legally required?", "a": "No. SOC 2 is a voluntary attestation, but customers, particularly enterprise buyers, often require it in contracts or security reviews before they will sign."}, {"q": "Who can issue a SOC 2 report?", "a": "Only an independent CPA firm can perform the examination and issue a SOC 2 report. Consultants and compliance platforms can prepare you, but they cannot issue the report themselves."}, {"q": "Which Trust Services Criteria are required?", "a": "Security, also called the Common Criteria, is required in every SOC 2 report. Availability, Processing Integrity, Confidentiality and Privacy are optional and should be included based on what you promise customers."}, {"q": "Does SOC 2 require a penetration test?", "a": "The criteria do not explicitly mandate one, but auditors look for evidence of security testing and many enterprise customers ask for a recent penetration test report."}],
    sources: [{"title": "AICPA: 2017 Trust Services Criteria (revised points of focus, 2022)", "url": "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022"}, {"title": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework"}],
    title: "SOC 2 Compliance Checklist for Startups and SaaS Companies",
    excerpt:
      "Enterprise customers keep asking for your SOC 2 report. Here is a practical, plain-English checklist to get from zero to audit-ready without derailing your roadmap.",
    metaDescription:
      "A practical SOC 2 checklist for startups and SaaS: Type I vs Type II, Trust Services Criteria, required policies, technical controls, and evidence collection.",
    publishedAt: "2026-09-16",
    category: "Compliance",
    relatedService: "compliance-grc",
    tags: ["SOC 2", "SOC 2 checklist", "compliance", "SaaS security", "Trust Services Criteria", "audit readiness"],
    readingTime: 7,
    body: [
      {
        type: "p",
        text: "SOC 2 is an attestation report, issued by an independent CPA firm, that shows how a service organization protects customer data. For B2B SaaS companies it has become a standard requirement in enterprise sales. The good news is that most of the work is just good security practice, written down and proven.",
      },
      { type: "h2", text: "Type I vs. Type II" },
      {
        type: "ul",
        items: [
          "<strong>Type I</strong> evaluates whether your controls are designed appropriately at a single point in time.",
          "<strong>Type II</strong> evaluates whether those controls operated effectively over an observation period, commonly three to twelve months. Most enterprise buyers ultimately want Type II.",
        ],
      },
      { type: "h2", text: "Choose your Trust Services Criteria" },
      {
        type: "p",
        text: "Security is always in scope. Availability, Processing Integrity, Confidentiality, and Privacy are optional. Add only the ones your customers actually need, because each adds controls and evidence.",
      },
      { type: "h2", text: "The checklist" },
      { type: "h3", text: "Governance and policies" },
      {
        type: "ul",
        items: [
          "Information security policy approved by leadership",
          "Acceptable use, access control, and data classification policies",
          "Incident response plan, tested at least annually",
          "Vendor management process and risk assessments",
          "Annual risk assessment documented",
          "Security awareness training for all staff",
        ],
      },
      { type: "h3", text: "Identity and access" },
      {
        type: "ul",
        items: [
          "Single sign-on and MFA on all critical systems",
          "Role-based access with least privilege",
          "Documented onboarding and offboarding, with timely access removal",
          "Quarterly access reviews",
        ],
      },
      { type: "h3", text: "Infrastructure and engineering" },
      {
        type: "ul",
        items: [
          "Encryption in transit and at rest",
          "Centralized logging and monitoring with alerting",
          "Vulnerability scanning and a patching SLA",
          "Change management: code review and approval before production",
          "Backups tested by restoring them",
          "<a href=\"/blogs/penetration-testing-vs-vulnerability-scanning\">Annual penetration test</a>, not just a vulnerability scan",
        ],
      },
      { type: "h3", text: "People" },
      {
        type: "ul",
        items: [
          "Background checks where legally permitted",
          "Signed confidentiality agreements",
          "Endpoint protection and disk encryption on company devices",
        ],
      },
      { type: "h2", text: "Evidence is where teams struggle" },
      {
        type: "p",
        text: "Auditors need proof that controls operated, such as screenshots, tickets, logs, and review records, across the whole observation period. Automating evidence collection from your cloud, identity provider, and ticketing system saves enormous time. AI can also help map one control to several frameworks, so SOC 2 work also counts toward ISO 27001 or HIPAA.",
      },
      {
        type: "blockquote",
        text: "Write policies that describe what you actually do. A policy you don't follow is worse than no policy, because it becomes an audit exception.",
      },
      {
        type: "p",
        text: "EclipticLink's <a href=\"/services/compliance-grc\">compliance and GRC team</a> runs gap assessments, implements missing controls, and automates evidence so your audit is predictable. See how our <a href=\"/locations/united-states/soc-2-readiness-for-startups\">SOC 2 readiness service for startups</a> works.",
      },
    ],
  },
  {
    slug: "common-cloud-security-misconfigurations",
    updatedAt: "2026-11-22",
    faqs: [{"q": "What is a cloud security misconfiguration?", "a": "A cloud misconfiguration is a setting that leaves cloud resources more exposed than intended, such as a public storage bucket, an over-privileged role, disabled logging, or a management port open to the internet."}, {"q": "Who is responsible for cloud misconfigurations?", "a": "Under the shared responsibility model, the provider secures the underlying cloud and the customer secures how services are configured, including identities, data access and network rules. Most misconfigurations fall on the customer's side."}, {"q": "How do you find cloud misconfigurations?", "a": "Use cloud security posture management tools or native services to check accounts continuously against benchmarks such as the CIS Benchmarks, and scan infrastructure-as-code before deployment so issues are caught early."}, {"q": "How do you prevent cloud misconfigurations?", "a": "Define infrastructure as code, enforce guardrails with organization-level policies, apply least privilege, require MFA, keep logging on centrally, and review changes before they reach production."}],
    sources: [{"title": "NSA and CISA: Top Ten Cybersecurity Misconfigurations (AA23-278A)", "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-278a"}, {"title": "CIS Benchmarks", "url": "https://www.cisecurity.org/cis-benchmarks"}, {"title": "AWS Well-Architected Framework: Security Pillar", "url": "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"}],
    title: "Cloud Security Misconfigurations: 8 Examples and Fixes",
    excerpt:
      "Most cloud breaches are not sophisticated zero-days. They are simple misconfigurations. Here are the ones attackers check first in AWS, Azure, and GCP, and how to fix them.",
    metaDescription:
      "8 cloud security misconfigurations attackers check first in AWS, Azure and GCP, from public storage and over-privileged IAM to leaked keys, with fixes.",
    publishedAt: "2026-09-02",
    category: "Cloud Security",
    relatedService: "cloud-security",
    tags: ["cloud security", "AWS security", "Azure security", "GCP security", "misconfiguration", "IAM", "CSPM"],
    readingTime: 6,
    body: [
      {
        type: "p",
        text: "Cloud providers secure the underlying infrastructure. How you configure it is your responsibility under the shared responsibility model, and that is where most cloud incidents begin. Attackers run automated scans looking for these mistakes constantly.",
      },
      { type: "h2", text: "1. Publicly accessible storage" },
      {
        type: "p",
        text: "S3 buckets, Azure Blob containers, or GCS buckets left open to the internet remain a leading cause of data exposure. <strong>Fix:</strong> enable account-level public access blocks and alert on any policy change that grants public access.",
      },
      { type: "h2", text: "2. Over-privileged IAM roles" },
      {
        type: "p",
        text: "Wildcard permissions and admin roles attached to workloads mean one compromised service becomes a full account compromise. <strong>Fix:</strong> use access analyzers to right-size permissions based on actual usage.",
      },
      { type: "h2", text: "3. Long-lived access keys" },
      {
        type: "p",
        text: "Static keys end up in code repositories, CI logs, and laptops. <strong>Fix:</strong> replace them with short-lived credentials via SSO and workload identity federation, and scan repositories for secrets.",
      },
      { type: "h2", text: "4. Missing MFA on privileged accounts" },
      {
        type: "p",
        text: "Root and admin accounts without phishing-resistant MFA are a gift to attackers. <strong>Fix:</strong> enforce MFA for all humans and lock away root credentials.",
      },
      { type: "h2", text: "5. Logging disabled or not monitored" },
      {
        type: "p",
        text: "Without CloudTrail, Azure Activity Logs, or GCP Audit Logs in every region and account, you cannot detect or investigate an intrusion. <strong>Fix:</strong> centralize logs in a separate, locked-down account and alert on high-risk events.",
      },
      { type: "h2", text: "6. Overly permissive network rules" },
      {
        type: "p",
        text: "Security groups that allow SSH, RDP, or databases from 0.0.0.0/0 are scanned within minutes of creation. <strong>Fix:</strong> restrict management access to a bastion or identity-aware proxy.",
      },
      { type: "h2", text: "7. Unencrypted data and snapshots" },
      {
        type: "p",
        text: "Encryption at rest is usually one setting, but snapshots and backups are often forgotten, and sometimes shared publicly. <strong>Fix:</strong> enforce default encryption and audit snapshot sharing.",
      },
      { type: "h2", text: "8. Exposed Kubernetes dashboards and APIs" },
      {
        type: "p",
        text: "Unauthenticated dashboards and public API servers give attackers a direct path to workloads and secrets. <strong>Fix:</strong> keep control planes private, enforce RBAC, and apply network policies.",
      },
      { type: "h2", text: "Prevent, don't just detect" },
      {
        type: "p",
        text: "Cloud security posture management (CSPM) finds misconfigurations after they happen. Policy-as-code checks in your CI/CD pipeline stop them from being deployed at all. The best programs use both, and use attack-path analysis to prioritize the combinations that are genuinely exploitable.",
      },
      {
        type: "p",
        text: "EclipticLink's <a href=\"/services/cloud-security\">cloud security</a> assessments cover AWS, Azure, GCP, and Kubernetes, with fixes delivered as infrastructure-as-code. Not sure whether you need a scan or a full test? See <a href=\"/blogs/penetration-testing-vs-vulnerability-scanning\">penetration testing vs vulnerability scanning</a>.",
      },
    ],
  },
  {
    slug: "incident-response-plan-first-24-hours",
    updatedAt: "2026-11-22",
    faqs: [{"q": "What should you do first after a data breach?", "a": "Confirm the incident, start a timestamped log, bring in your incident lead, and contain affected systems. Isolate them from the network rather than powering them off, because shutting down can destroy evidence held in memory."}, {"q": "Should you turn off a hacked computer?", "a": "Usually no. Disconnect it from the network instead. Powering it off can erase volatile evidence that investigators need to understand how the attacker got in and what they accessed."}, {"q": "How quickly do you have to report a data breach?", "a": "It depends on the law and sector. Under the GDPR, controllers generally must notify the supervisory authority within 72 hours of becoming aware of a reportable breach. Other rules set different deadlines, so involve legal counsel early."}, {"q": "Should you pay a ransomware demand?", "a": "CISA and the FBI advise against paying. Payment does not guarantee recovery and can fund further attacks. Involve counsel, law enforcement and your insurer before making any decision."}],
    sources: [{"title": "NIST SP 800-61 Rev. 3: Incident Response Recommendations", "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"}, {"title": "CISA #StopRansomware Guide", "url": "https://www.cisa.gov/stopransomware/ransomware-guide"}],
    title: "Incident Response: First 24 Hours of a Breach",
    excerpt:
      "The first hours after discovering a breach shape everything that follows. A clear, practical sequence for containing the damage without destroying the evidence you'll need.",
    metaDescription:
      "What to do in the first 24 hours of a cyber incident: triage, containment, evidence preservation, communication, and when to call incident response experts.",
    publishedAt: "2026-08-19",
    category: "Incident Response",
    relatedService: "incident-response",
    tags: ["incident response", "ransomware", "data breach", "digital forensics", "incident response plan"],
    readingTime: 6,
    body: [
      {
        type: "p",
        text: "Discovering a security incident is stressful, and stress leads to well-meaning mistakes like wiping a laptop, rebooting servers, or emailing the whole company from a compromised account. A simple, rehearsed sequence makes the difference.",
      },
      { type: "h2", text: "Hour 0–1: Confirm and mobilize" },
      {
        type: "ul",
        items: [
          "Confirm what you are seeing and record when and how it was discovered.",
          "Activate your incident response plan and name an incident lead.",
          "Move coordination to an out-of-band channel, such as phones or a separate messaging workspace, in case email or chat is compromised.",
          "Contact your incident response provider, legal counsel, and cyber insurer early. Many policies require prompt notification.",
        ],
      },
      { type: "h2", text: "Hour 1–4: Contain without destroying evidence" },
      {
        type: "ul",
        items: [
          "<strong>Isolate, don't power off.</strong> Disconnect affected machines from the network; shutting down destroys memory evidence.",
          "Disable or reset compromised accounts and revoke active sessions and tokens.",
          "Block known malicious IPs, domains, and email senders.",
          "Preserve logs before they rotate: identity, endpoint, firewall, cloud audit, and email.",
        ],
      },
      { type: "h2", text: "Hour 4–12: Scope the incident" },
      {
        type: "p",
        text: "Work out the initial access vector, which systems and accounts are affected, and whether data was accessed or exfiltrated. AI-assisted forensics can turn large volumes of logs into a timeline quickly, but every conclusion should be verified by a responder before decisions are based on it.",
      },
      { type: "h2", text: "Hour 12–24: Eradicate and communicate" },
      {
        type: "ul",
        items: [
          "Remove persistence such as malicious accounts, scheduled tasks, OAuth grants, and backdoors.",
          "Plan recovery from known-clean backups.",
          "Brief leadership with facts, not speculation.",
          "With legal counsel, assess regulatory and contractual notification obligations, some of which have tight deadlines.",
        ],
      },
      {
        type: "blockquote",
        text: "The best time to choose an incident response partner is before you need one. Retainers mean pre-agreed terms and faster mobilization.",
      },
      { type: "h2", text: "After the incident" },
      {
        type: "p",
        text: "Run a blameless post-incident review, fix the root cause, and update your plan. Then test it with a tabletop exercise so the next response is faster.",
      },
      {
        type: "p",
        text: "If you are dealing with an incident now, contact EclipticLink's <a href=\"/services/incident-response\">incident response team</a> immediately.",
      },
    ],
  },
  {
    slug: "third-party-risk-management-guide",
    title: "Third-Party Risk Management: A Practical Guide",
    excerpt: "Vendors can see your data, reach your systems and ship code you run. Here is how to build a third-party risk program that finds the risky ones without burying procurement in questionnaires.",
    metaDescription: "A practical guide to third-party risk management (TPRM): building a vendor inventory, tiering suppliers, assessing security, contract clauses and ongoing monitoring.",
    publishedAt: "2026-11-27",
    category: "Compliance",
    relatedService: "compliance-grc",
    relatedLocation: "uae",
    tags: [
      "third-party risk management",
      "TPRM",
      "vendor risk management",
      "vendor security assessment",
      "supply chain security",
      "SOC 2 vendor management",
    ],
    readingTime: 8,
    faqs: [
      {
        q: "What is third-party risk management?",
        a: "Third-party risk management (TPRM) is the process of identifying, assessing and controlling the risks that vendors, suppliers and partners bring to your organization, especially security, privacy and resilience risks. It covers the whole relationship, from selection and contracting to monitoring and offboarding.",
      },
      {
        q: "What are the main steps in a TPRM program?",
        a: "Build an inventory of third parties, tier them by data access and business impact, assess them in proportion to their tier, put security and data-protection terms in contracts, monitor them on a schedule, and remove their access cleanly when the relationship ends.",
      },
      {
        q: "How often should vendors be reassessed?",
        a: "Critical vendors usually once a year, and again after a significant change such as a breach, an acquisition or a new service. Lower tiers can be reviewed every two or three years, or only at renewal.",
      },
      {
        q: "Is a SOC 2 report enough to approve a vendor?",
        a: "It is strong evidence, but read it properly: check the period covered, the scope, any exceptions, carved-out subservice organizations and the user controls you are expected to run. A report that doesn't cover the service you are buying proves little.",
      },
      {
        q: "Who should own third-party risk?",
        a: "Usually security or risk owns the process, procurement owns the trigger, and each business owner is accountable for their vendors. What matters most is that no new vendor can be onboarded without passing through the process.",
      },
    ],
    sources: [
      {
        title: "NIST Cybersecurity Framework 2.0",
        url: "https://www.nist.gov/cyberframework",
      },
      {
        title: "NIST SP 800-161 Rev. 1: Cybersecurity Supply Chain Risk Management Practices",
        url: "https://csrc.nist.gov/pubs/sp/800/161/r1/final",
      },
      {
        title: "NCSC: Supply chain security guidance",
        url: "https://www.ncsc.gov.uk/collection/supply-chain-security",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every company now runs on other companies. Cloud hosting, payroll, CRM, customer support, payments, analytics and IT support are almost always bought rather than built, and each of those vendors holds some of your data or some access to your systems. When one of them is breached, it is often your customers who are affected and your name in the headlines.",
      },
      {
        type: "p",
        text: "Third-party risk management (TPRM) is how you keep that risk under control. Done badly, it becomes a pile of unread spreadsheets that slows down every purchase. Done well, it focuses on the few vendors that could really hurt you and leaves everyone else alone. This guide covers how to build the second kind.",
      },
      {
        type: "blockquote",
        text: "The goal of TPRM is not to assess every vendor. It is to know which vendors matter, and to be confident about those.",
      },
      {
        type: "h2",
        text: "Step 1: Build a vendor inventory you can trust",
      },
      {
        type: "p",
        text: "You cannot manage vendors you don't know about. Most companies' first inventory is surprisingly incomplete, because teams sign up for tools on a credit card, developers connect services through API keys, and marketing adds plugins to the website.",
      },
      {
        type: "p",
        text: "Build the list from several sources rather than one:",
      },
      {
        type: "ul",
        items: [
          "<strong>Finance and accounts payable:</strong> every supplier you pay, including small recurring card charges.",
          "<strong>Single sign-on and identity logs:</strong> every app your staff log into with company accounts.",
          "<strong>Cloud and code:</strong> third-party integrations, API keys and software dependencies.",
          "<strong>Contracts and procurement:</strong> anything with a signed agreement or data processing addendum.",
          "<strong>Business owners:</strong> a short survey asking each team which outside services they rely on.",
        ],
      },
      {
        type: "p",
        text: "For each vendor, record what it does, who owns the relationship, what data it handles, what access it has and how critical it is to operations. That record is the foundation for everything else.",
      },
      {
        type: "h2",
        text: "Step 2: Tier vendors by risk",
      },
      {
        type: "p",
        text: "Tiering decides how much effort each vendor deserves. Three questions do most of the work: what data can they see, what systems can they reach, and what happens to the business if they disappear tomorrow?",
      },
      {
        type: "table",
        headers: [
          "Tier",
          "What puts a vendor here",
          "Assessment",
        ],
        rows: [
          [
            "Critical",
            "Sensitive data at scale, admin or network access, or core to operations",
            "Deep review with independent evidence, contract security terms, annual reassessment",
          ],
          [
            "High",
            "Personal or confidential data, but limited access to systems",
            "Focused questionnaire and evidence review",
          ],
          [
            "Medium",
            "Internal data of limited sensitivity",
            "Short questionnaire or review of the vendor's trust page",
          ],
          [
            "Low",
            "No data and no access",
            "Inventory entry only",
          ],
        ],
      },
      {
        type: "p",
        text: "Most companies find only a handful of critical vendors. Concentrating on them is what makes the program sustainable.",
      },
      {
        type: "h2",
        text: "Step 3: Assess in proportion",
      },
      {
        type: "p",
        text: "For critical and high-tier vendors, evidence beats self-description. Ask for independent assurance first, and use questionnaires to fill gaps rather than as the main source.",
      },
      {
        type: "h3",
        text: "Evidence worth asking for",
      },
      {
        type: "ul",
        items: [
          "A current SOC 2 Type II report or ISO/IEC 27001 certificate covering the service you are buying.",
          "A recent penetration test summary and how findings were fixed.",
          "Their incident response and breach notification process.",
          "Where your data is stored and processed, and the list of subprocessors.",
          "Business continuity arrangements and recovery times for the service.",
        ],
      },
      {
        type: "h3",
        text: "Reading the evidence properly",
      },
      {
        type: "p",
        text: "A certificate or report is only useful if it covers what you are buying. Check the scope statement, the dates, any exceptions the auditor found and any parts of the service run by another company and excluded from the report. SOC 2 reports also list complementary user entity controls: things the vendor expects you to do, such as reviewing who has access. If you don't do them, the assurance doesn't fully apply.",
      },
      {
        type: "h2",
        text: "Step 4: Put security into the contract",
      },
      {
        type: "p",
        text: "Assessment tells you the risk today; the contract is what protects you later. For critical and high-tier vendors, make sure the agreement covers:",
      },
      {
        type: "ul",
        items: [
          "Specific security requirements or a commitment to maintain an agreed certification.",
          "Breach notification within a defined time, with the information you will need.",
          "Approval or notice before new subprocessors are added.",
          "Data location, especially where regulators or customers require it.",
          "Your right to assess, audit or receive updated reports.",
          "Return and secure deletion of data when the contract ends.",
        ],
      },
      {
        type: "p",
        text: "Data protection laws such as GDPR, the UAE PDPL and the DIFC and ADGM regimes also expect written terms with processors that handle personal data, so these clauses do double duty.",
      },
      {
        type: "h2",
        text: "Step 5: Monitor, don't just onboard",
      },
      {
        type: "p",
        text: "Vendors change. They get acquired, move data, add subprocessors and occasionally get breached. A program that only assesses at onboarding is out of date within a year.",
      },
      {
        type: "ul",
        items: [
          "Reassess critical vendors annually and high-tier vendors every one to two years.",
          "Watch for vendor breach announcements and have a playbook for responding to one.",
          "Review vendor access to your systems at least quarterly.",
          "Re-tier vendors when their scope changes, for example when a tool starts holding customer data.",
          "At offboarding, revoke access, rotate shared credentials and confirm data deletion.",
        ],
      },
      {
        type: "h2",
        text: "How TPRM maps to common frameworks",
      },
      {
        type: "table",
        headers: [
          "Framework",
          "Where vendor risk appears",
        ],
        rows: [
          [
            "SOC 2",
            "CC9.2 covers assessing and managing risk from vendors and business partners",
          ],
          [
            "ISO/IEC 27001:2022",
            "Annex A controls 5.19 to 5.23 cover supplier relationships, agreements, the ICT supply chain, monitoring and cloud services",
          ],
          [
            "NIST CSF 2.0",
            "The GV.SC category covers cybersecurity supply chain risk management",
          ],
          [
            "UAE IA Regulation",
            "A dedicated third-party security control family",
          ],
        ],
      },
      {
        type: "p",
        text: "Because the frameworks overlap so much, one well-run program can produce evidence for all of them.",
      },
      {
        type: "h2",
        text: "Common mistakes",
      },
      {
        type: "ul",
        items: [
          "Sending the same long questionnaire to every vendor, so nobody reads the answers.",
          "Accepting a SOC 2 report without reading the scope and exceptions.",
          "Assessing vendors once and never again.",
          "Forgetting fourth parties: the subprocessors your vendors rely on.",
          "Leaving vendor accounts active long after the contract ends.",
        ],
      },
      {
        type: "h2",
        text: "Where to start this month",
      },
      {
        type: "ol",
        items: [
          "Pull your vendor list from finance and single sign-on.",
          "Identify your top ten vendors by data and access.",
          "Collect current security evidence from each.",
          "Check their contracts for breach notification and data deletion terms.",
          "Set a reassessment date for each one.",
        ],
      },
      {
        type: "p",
        text: "That small start covers most of your real exposure, and it gives you something concrete to show auditors and customers while the wider program takes shape.",
      },
    ],
  },
  {
    slug: "phishing-simulation-that-changes-behaviour",
    title: "Phishing Simulations That Actually Change Behaviour",
    excerpt: "Click rates are easy to measure and easy to game. Here is how to run phishing simulations that build a reporting habit, earn staff trust and give leadership numbers that mean something.",
    metaDescription: "How to run phishing simulations and security awareness training that change behaviour: realistic scenarios, just-in-time training, report-rate metrics and staff trust.",
    publishedAt: "2026-11-27",
    category: "Security Awareness",
    relatedService: "penetration-testing",
    relatedLocation: "united-kingdom",
    tags: [
      "phishing simulation",
      "phishing training",
      "security awareness training",
      "anti-phishing",
      "social engineering",
      "phishing test",
    ],
    readingTime: 7,
    faqs: [
      {
        q: "What is a phishing simulation?",
        a: "A phishing simulation is a safe, realistic phishing message sent to staff by their own organization to measure how they respond and to teach them to spot and report real attacks. Nobody's account or data is put at risk.",
      },
      {
        q: "What is a good phishing click rate?",
        a: "There is no universal target, because click rates depend heavily on how hard the scenario is. A rising report rate and a falling time-to-first-report are better signs of progress than any single click rate.",
      },
      {
        q: "Should people who click be disciplined?",
        a: "Generally no. Punishment discourages reporting, including reporting your own mistakes, which is exactly what you need during a real attack. Short, private coaching works better.",
      },
      {
        q: "How long should security awareness training be?",
        a: "Short and frequent beats long and annual. A few minutes of relevant training at the moment someone is caught out is more memorable than an hour-long course once a year.",
      },
      {
        q: "Is phishing training enough on its own?",
        a: "No. Training works alongside email filtering, MFA, limited admin rights and fast incident response. The aim is that one person's click doesn't become a breach.",
      },
    ],
    sources: [
      {
        title: "NCSC: Phishing attacks, defending your organisation",
        url: "https://www.ncsc.gov.uk/guidance/phishing",
      },
      {
        title: "UK Government: Cyber Security Breaches Survey",
        url: "https://www.gov.uk/government/collections/cyber-security-breaches-survey",
      },
      {
        title: "CISA: Recognize and report phishing",
        url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing",
      },
    ],
    body: [
      {
        type: "p",
        text: "Phishing remains one of the most common ways attacks begin. The UK government's Cyber Security Breaches Survey has found it to be the most common type of attack businesses identify year after year, and AI has made convincing, well-written lures cheap to produce in any language.",
      },
      {
        type: "p",
        text: "Most organizations respond with phishing simulations. Many of those programs measure the wrong thing, annoy staff and stall after a few months. This article covers what separates the programs that change behaviour from the ones that only produce a click-rate chart.",
      },
      {
        type: "blockquote",
        text: "The most valuable person in a phishing attack is not the one who didn't click. It is the one who reported it first.",
      },
      {
        type: "h2",
        text: "Measure reporting, not just clicking",
      },
      {
        type: "p",
        text: "Click rate is the default metric because it is easy to count. But it mostly measures how hard the scenario was: send an obvious lure and the rate falls; send a targeted one and it rises. A program can look like it's improving simply by getting easier.",
      },
      {
        type: "p",
        text: "Reporting tells you something more useful. Every report is a person actively defending the organization, and during a real campaign the first report is what lets your security team pull the message from every other inbox.",
      },
      {
        type: "table",
        headers: [
          "Metric",
          "Why it matters",
          "Watch out for",
        ],
        rows: [
          [
            "Report rate",
            "Shows an active security culture",
            "Make reporting one click, or the rate will stay low",
          ],
          [
            "Time to first report",
            "How quickly you could respond to a real attack",
            "Needs a reporting tool that timestamps reports",
          ],
          [
            "Credential submissions",
            "How many people would have given away access",
            "More meaningful than clicks alone",
          ],
          [
            "Click rate",
            "How convincing a scenario was",
            "Varies with difficulty, so compare like with like",
          ],
          [
            "Repeat clickers",
            "Who needs more support",
            "Handle privately and supportively",
          ],
        ],
      },
      {
        type: "h2",
        text: "Make scenarios realistic",
      },
      {
        type: "p",
        text: "Simulations work best when they look like what your people really receive. Generic \"you've won a prize\" emails teach very little. Base scenarios on your own environment instead:",
      },
      {
        type: "ul",
        items: [
          "Shared-document and voicemail notifications that lead to a fake login page.",
          "Invoice and payment-change requests aimed at finance.",
          "Delivery notifications and tax or government themes relevant to your country.",
          "Messages that appear to come from a known supplier or a senior leader.",
          "Unexpected MFA prompts and requests to read out a code.",
        ],
      },
      {
        type: "p",
        text: "Increase difficulty gradually. Start with lures that have clear warning signs, then move to more targeted ones as reporting improves.",
      },
      {
        type: "h2",
        text: "Train at the moment it matters",
      },
      {
        type: "p",
        text: "When someone clicks a simulated phish, they are paying attention in a way they never are during an annual course. Use that moment. A short page explaining the warning signs they missed, specific to the message they just clicked, is far more memorable than generic training.",
      },
      {
        type: "p",
        text: "Keep the longer sessions for the roles attackers target most, such as finance, HR, executive assistants and IT help desks, and make them practical: real examples, call-back rules for payment changes and what to do when something feels wrong.",
      },
      {
        type: "h2",
        text: "Protect trust",
      },
      {
        type: "p",
        text: "A phishing program depends on goodwill. If staff feel tricked or humiliated, they stop reporting, and they may even hide real mistakes. A few rules keep trust intact:",
      },
      {
        type: "ul",
        items: [
          "Explain the program openly before it starts, including why it exists.",
          "Avoid themes that cause real distress, such as fake bonuses, pay cuts, redundancies or health scares.",
          "Keep individual results private, and never name people publicly.",
          "Thank people who report, including when they report a simulation.",
          "Make it safe to admit a real click quickly; speed matters more than blame.",
        ],
      },
      {
        type: "h2",
        text: "Go beyond email",
      },
      {
        type: "p",
        text: "Attackers don't limit themselves to email, so training shouldn't either. Include text messages, voice calls aimed at the help desk, QR codes on printed material and MFA fatigue attacks, where an attacker sends push prompts until someone approves one. The core lesson is the same in every channel: pause, verify through a channel you trust and report.",
      },
      {
        type: "h2",
        text: "Back it up with technical controls",
      },
      {
        type: "p",
        text: "The NCSC's phishing guidance recommends layered defences and warns against relying on users alone. Training works best alongside:",
      },
      {
        type: "ul",
        items: [
          "Email filtering and domain authentication (SPF, DKIM and DMARC).",
          "Phishing-resistant MFA for email, remote access and admin accounts.",
          "Limited admin rights, so one compromised account can't reach everything.",
          "A fast way to remove a reported phish from every mailbox.",
          "Monitoring that spots unusual sign-ins after a successful phish.",
        ],
      },
      {
        type: "h2",
        text: "A simple 90-day plan",
      },
      {
        type: "ol",
        items: [
          "<strong>Weeks 1 to 2:</strong> announce the program, set up one-click reporting and run a baseline simulation.",
          "<strong>Weeks 3 to 6:</strong> deliver short training to people who clicked and a briefing for finance and leadership.",
          "<strong>Weeks 7 to 10:</strong> run a second, slightly harder campaign tailored to real lures.",
          "<strong>Weeks 11 to 13:</strong> report trends in reporting, time-to-report and credential submissions, and plan the next quarter.",
        ],
      },
      {
        type: "p",
        text: "After a few cycles, the goal is a workforce that treats reporting as normal and fast, which is the habit that matters most when the real thing arrives.",
      },
    ],
  },
  {
    slug: "agentic-mdr-ai-agents-in-the-soc",
    title: "Agentic MDR: What AI Agents Should Do in a SOC",
    excerpt: "Agentic MDR promises AI agents that investigate and respond on their own. Here is what that means in practice, where autonomy is safe, where a person must decide, and what to ask a provider.",
    metaDescription: "What is agentic MDR? How AI agents investigate and respond in a SOC, which actions are safe to automate, where humans must decide, and questions to ask a provider.",
    publishedAt: "2026-11-27",
    category: "Detection & Response",
    relatedService: "managed-detection-response",
    tags: [
      "agentic MDR",
      "AI SOC",
      "agentic SOC",
      "AI-powered MDR",
      "autonomous SOC",
      "managed detection and response",
    ],
    readingTime: 8,
    faqs: [
      {
        q: "What is agentic MDR?",
        a: "Agentic MDR is managed detection and response in which AI agents carry out investigation and response steps themselves: gathering evidence, querying logs, correlating events and, within agreed limits, taking containment actions, with the provider's analysts accountable for the outcome.",
      },
      {
        q: "How is agentic MDR different from AI-powered MDR?",
        a: "AI-powered MDR often means AI that assists analysts, for example by summarizing alerts. Agentic MDR goes further: the AI completes steps on its own. Because the labels are used loosely, ask providers exactly which steps their AI completes without a person.",
      },
      {
        q: "Is it safe to let AI contain threats automatically?",
        a: "For a limited set of well-understood, reversible actions, such as isolating a single laptop with clear ransomware behaviour, yes. Actions that could disrupt the business or affect customers should still need human approval.",
      },
      {
        q: "Can attackers manipulate AI agents in a SOC?",
        a: "They can try. AI agents read attacker-controlled content such as emails, file names and command lines, which makes prompt injection a real risk. Good designs treat that content as untrusted, limit agent permissions and require approval for high-impact actions.",
      },
      {
        q: "Will agentic MDR replace security analysts?",
        a: "It changes their work rather than removing it. Agents take on repetitive investigation, and analysts focus on judgement, threat hunting, tuning detections and communicating with the business.",
      },
    ],
    sources: [
      {
        title: "OWASP Top 10 for LLM Applications",
        url: "https://genai.owasp.org/llm-top-10/",
      },
      {
        title: "NIST AI Risk Management Framework",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
      {
        title: "MITRE ATT&CK",
        url: "https://attack.mitre.org/",
      },
    ],
    body: [
      {
        type: "p",
        text: "Security operations centres have always had more alerts than people. For years the answer was more automation in the form of fixed playbooks: if this alert fires, run these steps. Agentic MDR is the next step. Instead of following a fixed script, AI agents decide which questions to ask, gather the evidence, reach a conclusion and, within limits, act on it.",
      },
      {
        type: "p",
        text: "That is a real change, and it can cut the time from alert to containment from hours to minutes. It also raises a fair question for any buyer: what exactly is the AI allowed to do on its own?",
      },
      {
        type: "blockquote",
        text: "The useful question is not whether a provider uses AI agents. It is which actions those agents can take without a person, and who is accountable when they get it wrong.",
      },
      {
        type: "h2",
        text: "What \"agentic\" actually means",
      },
      {
        type: "p",
        text: "The term is used loosely, so it helps to separate three levels:",
      },
      {
        type: "table",
        headers: [
          "Level",
          "What the AI does",
          "Who decides",
        ],
        rows: [
          [
            "AI-assisted",
            "Summarizes alerts, suggests next steps, drafts reports",
            "An analyst at every step",
          ],
          [
            "Agentic investigation",
            "Runs the investigation itself: queries logs, pulls context, builds a timeline, reaches a verdict",
            "An analyst reviews verdicts and approves responses",
          ],
          [
            "Agentic response",
            "Also takes containment actions within pre-approved limits",
            "People set the limits and review actions afterwards",
          ],
        ],
      },
      {
        type: "p",
        text: "Many services marketed as agentic MDR sit somewhere between the second and third levels. None of them is automatically better; what matters is that the level is clear and appropriate for each type of action.",
      },
      {
        type: "h2",
        text: "What agents do well",
      },
      {
        type: "p",
        text: "Most of an analyst's time on an alert goes into gathering context: who is this user, what else happened on this device, has this file been seen before, what did the account do next. That work is repetitive, follows a recognizable pattern and benefits from speed, which makes it a strong fit for agents.",
      },
      {
        type: "ul",
        items: [
          "Enriching every alert with identity, device, asset and threat-intelligence context.",
          "Grouping related alerts into one incident instead of fifty tickets.",
          "Querying endpoint, identity, email and cloud logs to build a timeline.",
          "Mapping activity to MITRE ATT&CK techniques to show where an attacker is in the attack chain.",
          "Closing clear false positives with the evidence attached, so a person can check the reasoning.",
          "Drafting incident summaries for both technical teams and leadership.",
        ],
      },
      {
        type: "h2",
        text: "Where autonomy is safe",
      },
      {
        type: "p",
        text: "Some response actions are low-risk, well-understood and easy to reverse. For these, waiting for a person mostly gives an attacker more time:",
      },
      {
        type: "ul",
        items: [
          "Isolating a single workstation that shows clear ransomware behaviour.",
          "Revoking sessions and forcing a password reset after a confirmed account takeover.",
          "Blocking a known-malicious hash, domain or IP address.",
          "Removing a confirmed phishing email from every mailbox that received it.",
        ],
      },
      {
        type: "p",
        text: "Even here, every action should be logged, explained and reversible, and the list of automatic actions should be agreed with the customer in advance.",
      },
      {
        type: "h2",
        text: "Where a person must decide",
      },
      {
        type: "p",
        text: "Other actions carry business consequences that an AI can't fully weigh. These should wait for an analyst, and often for the customer as well:",
      },
      {
        type: "ul",
        items: [
          "Disabling executive, service or break-glass accounts.",
          "Isolating production servers or anything customer-facing.",
          "Actions with legal, regulatory or contractual consequences, such as decisions about breach notification.",
          "Anything in an environment or situation the agents haven't seen before.",
          "Any case where the agent's confidence is low or the evidence conflicts.",
        ],
      },
      {
        type: "h2",
        text: "The new risk: attacking the AI itself",
      },
      {
        type: "p",
        text: "A SOC agent reads attacker-controlled content all day: email bodies, file names, command lines, web pages. That makes it a target for prompt injection, where text is crafted to change the AI's behaviour, for example an email that tells the agent the message is safe and should be closed. The OWASP Top 10 for LLM applications lists prompt injection as the leading risk for exactly this reason.",
      },
      {
        type: "p",
        text: "Sensible designs assume some injection attempts will succeed and limit the damage:",
      },
      {
        type: "ul",
        items: [
          "Treat all content from alerts and evidence as data, never as instructions.",
          "Give agents the narrowest permissions they need, with no direct access to high-impact actions.",
          "Require human approval for anything outside the pre-approved list.",
          "Log every agent decision with its evidence, so reviewers can spot manipulation.",
          "Test the agents against injection attempts as part of normal quality checks.",
        ],
      },
      {
        type: "h2",
        text: "Questions to ask an agentic MDR provider",
      },
      {
        type: "ol",
        items: [
          "Which investigation and response steps does your AI complete without a person?",
          "Can we see and change the list of automatic actions?",
          "How is each agent decision logged, explained and reversed?",
          "How do you defend the agents against prompt injection and manipulation?",
          "What happens when the AI is unsure or the evidence conflicts?",
          "Which of our own detections and data sources will the agents use?",
          "What measured results can you share, such as time to respond and false-positive rates?",
          "Who is accountable when an automated action causes disruption?",
        ],
      },
      {
        type: "p",
        text: "Clear, specific answers are a good sign. Vague references to \"autonomous AI\" without detail on limits and oversight are not.",
      },
      {
        type: "h2",
        text: "The bottom line",
      },
      {
        type: "p",
        text: "Agentic MDR is most valuable when it is fast where speed is safe and careful where judgement matters. AI agents do the evidence-gathering at machine speed, pre-approved containment happens in seconds, and people stay accountable for decisions that affect the business. That balance, rather than the amount of AI, is what to look for.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-penetration-testing-company-uae",
    title: "How to Choose a Penetration Testing Company in the UAE",
    excerpt: "Searching for a penetration testing company in Dubai or the UAE turns up dozens of names and many self-published top-ten lists. Here are the questions that separate a real test from a rebadged scan.",
    metaDescription: "How to choose a penetration testing company in Dubai and the UAE: accreditations, DESC requirements, scoping, methodology, report quality, retesting and red flags.",
    publishedAt: "2026-11-27",
    category: "Penetration Testing",
    relatedService: "penetration-testing",
    relatedLocation: "uae",
    tags: [
      "penetration testing companies UAE",
      "penetration testing Dubai",
      "pentest company Dubai",
      "VAPT UAE",
      "choose a pentest provider",
      "DESC Cyber Force",
    ],
    readingTime: 7,
    faqs: [
      {
        q: "What certifications should a penetration testing company in the UAE have?",
        a: "Look for organizational accreditations such as CREST, individual tester certifications such as OSCP, OSWE or CREST registered tester, and, if you are a Dubai government entity or critical entity, DESC Cyber Force certification. Ask for proof rather than relying on logos.",
      },
      {
        q: "What is the difference between VAPT and a penetration test?",
        a: "VAPT combines a vulnerability assessment, which is largely automated scanning, with penetration testing, which is manual exploitation by a tester. Some VAPT offers are mostly scanning, so ask how much of the time is manual testing.",
      },
      {
        q: "How long does a penetration test take?",
        a: "It depends on scope. A single web application often takes one to two weeks of testing, while a larger engagement across applications, APIs, cloud and internal networks can take several weeks. Reporting and retesting add time after that.",
      },
      {
        q: "Should we always use the same penetration testing company?",
        a: "Not necessarily. Using the same provider builds context, while rotating providers every few years brings fresh eyes. Many companies keep one main provider and occasionally bring in another for a second opinion.",
      },
      {
        q: "Do Dubai government suppliers need a particular pentest provider?",
        a: "Requirements depend on the entity and the contract. Dubai government and critical entities are covered by DESC rules, and cybersecurity providers working for them need DESC Cyber Force certification. Suppliers should check the requirements in their own contracts.",
      },
    ],
    sources: [
      {
        title: "CREST: Accredited companies and testers",
        url: "https://www.crest-approved.org/",
      },
      {
        title: "Dubai Electronic Security Center (DESC)",
        url: "https://www.desc.gov.ae/",
      },
      {
        title: "OWASP Web Security Testing Guide",
        url: "https://owasp.org/www-project-web-security-testing-guide/",
      },
    ],
    body: [
      {
        type: "p",
        text: "Search for a penetration testing company in Dubai or the UAE and you will find dozens of providers, plus a long list of \"top 10\" and \"top 30\" articles, many of them published by one of the companies on the list. That makes it hard to compare providers fairly.",
      },
      {
        type: "p",
        text: "This guide sets out the questions that matter, so you can judge any provider, including us, on the things that affect the quality of the test you receive.",
      },
      {
        type: "blockquote",
        text: "A good penetration test tells you how an attacker would really get in and what to fix first. A poor one is a scanner report with a new cover page.",
      },
      {
        type: "h2",
        text: "1. Check accreditations properly",
      },
      {
        type: "p",
        text: "Accreditations don't guarantee a good test, but they show a provider has passed independent checks on its methods and people.",
      },
      {
        type: "table",
        headers: [
          "Type",
          "Examples",
          "How to check",
        ],
        rows: [
          [
            "Company accreditation",
            "CREST",
            "Look the company up on the accrediting body's own directory",
          ],
          [
            "Tester certifications",
            "OSCP, OSWE, CREST registered or certified tester",
            "Ask which testers will work on your engagement, and for their certifications",
          ],
          [
            "UAE government requirements",
            "DESC Cyber Force certification for providers working with Dubai government and critical entities",
            "Check your contract and the provider's current certification",
          ],
          [
            "Management systems",
            "ISO/IEC 27001 for the provider's own security",
            "Ask for the certificate and its scope",
          ],
        ],
      },
      {
        type: "p",
        text: "Logos on a website are easy to add. Verify anything that matters to your decision.",
      },
      {
        type: "h2",
        text: "2. Ask how much of the test is manual",
      },
      {
        type: "p",
        text: "Automated scanners find known weaknesses quickly, and every good test uses them. What separates a penetration test from a scan is a skilled tester chaining issues together, testing business logic and proving real impact. Ask:",
      },
      {
        type: "ul",
        items: [
          "How many tester-days are included, and how many of those are manual testing?",
          "Will you test business logic, such as one customer accessing another customer's data?",
          "Do you test authenticated as well as unauthenticated access?",
          "Which methodology do you follow, such as the OWASP testing guides for web applications and APIs?",
        ],
      },
      {
        type: "p",
        text: "If a quote is very cheap and very fast for a complex application, it is probably mostly scanning.",
      },
      {
        type: "h2",
        text: "3. Get the scope right",
      },
      {
        type: "p",
        text: "A well-scoped test focuses on what an attacker would actually target. A good provider will ask about your applications, APIs, cloud accounts, internal networks and recent changes before quoting, rather than sending a fixed price for an undefined test.",
      },
      {
        type: "ul",
        items: [
          "Which internet-facing systems hold the most sensitive data?",
          "What changed recently, such as a new release, a cloud migration or an acquisition?",
          "Which compliance requirements drive the test, such as ISO 27001, PCI DSS, SOC 2 or a client contract?",
          "Are there AI features, LLM integrations or MCP servers that need specialist testing?",
        ],
      },
      {
        type: "h2",
        text: "4. Ask to see a sample report",
      },
      {
        type: "p",
        text: "The report is what you are really paying for. Ask for a redacted sample and check that it includes:",
      },
      {
        type: "ul",
        items: [
          "An executive summary that leadership can understand without technical knowledge.",
          "Findings ranked by real risk to your business, not only by a generic score.",
          "Clear steps to reproduce each finding, with evidence.",
          "Specific remediation advice developers can act on.",
          "Attack chains showing how smaller issues combine into serious ones.",
        ],
      },
      {
        type: "h2",
        text: "5. Confirm retesting and support",
      },
      {
        type: "p",
        text: "Finding problems is only half the job. Ask whether a retest of fixed findings is included, how long you have to use it and whether testers are available to answer developers' questions while they fix issues. An updated report showing closed findings is often what auditors and enterprise customers want to see.",
      },
      {
        type: "h2",
        text: "6. Check practical fit for the UAE",
      },
      {
        type: "ul",
        items: [
          "Can the provider work within UAE working hours and test windows that suit your operations?",
          "How will they handle your data during the test, and where will reports and evidence be stored?",
          "Do they understand the frameworks you answer to, such as the UAE IA Regulation, Dubai ISR, PDPL, DIFC or ADGM rules?",
          "Can they test in Arabic-language interfaces if your applications have them?",
        ],
      },
      {
        type: "h2",
        text: "Red flags",
      },
      {
        type: "ul",
        items: [
          "A fixed price before anyone has asked about your systems.",
          "No named testers or no evidence of their certifications.",
          "Reports that are mostly scanner output with little explanation.",
          "No retesting, or retesting charged as a full new test.",
          "Pressure to sign a long-term contract before a first engagement.",
        ],
      },
      {
        type: "h2",
        text: "Questions to send every shortlisted provider",
      },
      {
        type: "ol",
        items: [
          "Which accreditations does your company hold, and which certifications do the assigned testers hold?",
          "How many tester-days does this quote include, and how much is manual?",
          "Which methodology will you follow for our applications and APIs?",
          "Can we see a redacted sample report?",
          "Is a retest included, and within what period?",
          "How do you handle and store our data and findings?",
        ],
      },
      {
        type: "p",
        text: "Comparing two or three providers on the same questions will tell you far more than any ranking article, and it ensures the test you buy is the one your business actually needs.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
