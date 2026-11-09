export type IconName =
  | "radar"
  | "target"
  | "brain"
  | "cloud"
  | "scan"
  | "shield-check"
  | "siren"
  | "code";

export type SubService = {
  id: string;
  title: string;
  summary: string;
  details: string;
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  id: string;
  /** Short label for nav and cards */
  title: string;
  /** SEO title tag (≤ 60 chars, brand appended by template) */
  seoTitle: string;
  /** Page H1 */
  h1: string;
  icon: IconName;
  summary: string;
  details: string;
  metaDescription: string;
  keywords: string[];
  /** How AI is used in this service, stated plainly */
  aiEdge: string;
  outcomes: string[];
  deliverables: string[];
  subServices: SubService[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    id: "managed-detection-response",
    title: "AI-Powered MDR & SOC",
    seoTitle: "AI-Powered MDR & Managed SOC Services",
    h1: "AI-powered managed detection and response",
    icon: "radar",
    summary:
      "Continuous threat monitoring where AI triages the noise and analysts act on what matters.",
    details:
      "We connect to the telemetry you already have (endpoint, identity, cloud, email, and network logs) and run it through AI-assisted correlation and triage. Low-value alerts are suppressed with an audit trail, real threats are enriched with context, and a security analyst validates every escalation before anyone is paged.",
    metaDescription:
      "AI-powered MDR and managed SOC: continuous monitoring, AI-assisted alert triage, threat hunting, and analyst-validated response across endpoint and cloud.",
    keywords: [
      "managed detection and response",
      "AI-powered MDR",
      "managed SOC services",
      "SOC as a service",
      "AI threat detection",
      "24/7 security monitoring",
      "threat hunting services",
      "XDR managed service",
    ],
    aiEdge:
      "Machine-learning models baseline normal behavior per user, host, and workload, then score deviations. An LLM-assisted triage layer summarizes each alert, maps it to MITRE ATT&CK, and drafts the investigation notes, so analysts spend their time deciding rather than collecting.",
    outcomes: [
      "Far fewer false positives reaching your team",
      "Faster mean time to detect and respond",
      "Every escalation reviewed by a human analyst",
      "Clear monthly reporting your board can read",
    ],
    deliverables: [
      "Onboarding and log-source coverage map",
      "Detection rules tuned to your environment",
      "Escalation runbooks and contact matrix",
      "Monthly threat and coverage report",
    ],
    subServices: [
      {
        id: "continuous-monitoring",
        title: "Continuous monitoring",
        summary: "Endpoint, identity, cloud, email, and network telemetry watched around the clock.",
        details:
          "We integrate with your EDR, SIEM, identity provider, and cloud audit logs, or deploy lightweight collectors where there are gaps, so detection coverage is measured, not assumed.",
      },
      {
        id: "ai-alert-triage",
        title: "AI-assisted alert triage",
        summary: "Correlation, enrichment, and prioritization before a human looks.",
        details:
          "Related events are grouped into a single incident, enriched with asset, user, and threat-intel context, and ranked by likely impact, which cuts alert fatigue without hiding anything.",
      },
      {
        id: "threat-hunting",
        title: "Proactive threat hunting",
        summary: "Hypothesis-driven hunts mapped to MITRE ATT&CK techniques.",
        details:
          "Analysts hunt for attacker behavior that signatures miss, such as living-off-the-land binaries, token theft, and unusual OAuth grants, and turn findings into new detections.",
      },
      {
        id: "guided-response",
        title: "Guided and active response",
        summary: "Isolate hosts, disable accounts, and contain threats with pre-agreed playbooks.",
        details:
          "You decide in advance which actions we can take automatically and which need your approval. Containment happens in minutes, with every action logged.",
      },
    ],
    faqs: [
      {
        q: "Do we need to replace our existing security tools?",
        a: "Usually not. We integrate with common EDR, SIEM, identity, and cloud platforms and only recommend new tooling where there is a measurable coverage gap.",
      },
      {
        q: "Does AI make the final call on incidents?",
        a: "No. AI handles correlation, enrichment, summarization, and prioritization. A security analyst validates every escalation and any response action that has not been pre-approved.",
      },
      {
        q: "What does onboarding look like?",
        a: "We map your assets and log sources, connect telemetry, tune detections against a baseline period, and agree escalation paths with you before monitoring goes live.",
      },
    ],
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    seoTitle: "Penetration Testing Services | Web, API, Cloud",
    h1: "Penetration testing that finds what scanners miss",
    icon: "target",
    summary:
      "Manual, adversary-minded testing of web apps, APIs, mobile, networks, and cloud, sped up by AI-assisted recon.",
    details:
      "Automated scanners find known issues. Attackers chain small weaknesses into real breaches. Our testers combine AI-assisted reconnaissance and attack-surface mapping with manual exploitation to show you exactly how an attacker would get in, and how to stop them.",
    metaDescription:
      "Penetration testing for web apps, APIs, mobile, networks, and cloud. Manual testing aligned to OWASP and PTES, with clear remediation guidance and retesting.",
    keywords: [
      "penetration testing services",
      "web application penetration testing",
      "API penetration testing",
      "network penetration testing",
      "cloud penetration testing",
      "mobile app pentest",
      "red team assessment",
      "ethical hacking services",
    ],
    aiEdge:
      "AI speeds up the slow parts: enumerating subdomains, endpoints, and parameters, clustering similar findings, and drafting reproducible write-ups. That leaves more of the engagement for the manual, creative exploitation that tools cannot do.",
    outcomes: [
      "Proven, exploitable findings instead of scanner noise",
      "Risk-ranked remediation your developers can act on",
      "Evidence for SOC 2, ISO 27001, and PCI DSS audits",
      "A retest that confirms fixes actually work",
    ],
    deliverables: [
      "Executive summary for leadership",
      "Technical report with proof-of-concept steps",
      "CVSS-scored, prioritized findings",
      "Retest and attestation letter",
    ],
    subServices: [
      {
        id: "web-application-pentest",
        title: "Web application testing",
        summary: "OWASP Top 10, business-logic flaws, and authentication bypasses.",
        details:
          "Authenticated and unauthenticated testing of your web apps, covering access control, injection, session handling, and the business-logic abuse that automated tools cannot reason about.",
      },
      {
        id: "api-pentest",
        title: "API security testing",
        summary: "REST, GraphQL, and gRPC tested against the OWASP API Security Top 10.",
        details:
          "We test for broken object-level authorization, mass assignment, excessive data exposure, and rate-limit abuse, the API flaws behind many modern breaches.",
      },
      {
        id: "network-pentest",
        title: "Internal and external network",
        summary: "Perimeter exposure, lateral movement, and Active Directory attack paths.",
        details:
          "From an external foothold or an assumed-breach position, we map how far an attacker could move and which identity misconfigurations make it easy.",
      },
      {
        id: "red-teaming",
        title: "Red team and social engineering",
        summary: "Objective-based campaigns that test people, process, and technology together.",
        details:
          "Scenario-driven exercises, including phishing simulations, that measure whether your detection and response actually work under realistic pressure.",
      },
    ],
    faqs: [
      {
        q: "How is a penetration test different from a vulnerability scan?",
        a: "A scan lists potential weaknesses automatically. A penetration test has skilled testers manually exploit and chain those weaknesses to prove real-world impact, and removes false positives.",
      },
      {
        q: "Will testing disrupt production?",
        a: "We agree scope, timing, and rules of engagement up front, avoid destructive techniques by default, and can test against staging when production risk is a concern.",
      },
      {
        q: "Is retesting included?",
        a: "Yes. After you remediate, we retest the reported findings and update the report so you have evidence the fixes hold.",
      },
    ],
  },
  {
    id: "ai-security",
    title: "AI & LLM Security",
    seoTitle: "AI & LLM Security | Prompt Injection Testing",
    h1: "Security for the AI systems you are shipping",
    icon: "brain",
    summary:
      "Red-teaming, secure architecture, and governance for LLM apps, AI agents, and RAG pipelines.",
    details:
      "Chatbots, copilots, and autonomous agents add an attack surface traditional testing does not cover. We assess your AI applications against the OWASP Top 10 for LLM Applications and MITRE ATLAS, covering prompt injection, data leakage, insecure tool use, and model supply-chain risk, then help you build guardrails that hold up.",
    metaDescription:
      "AI and LLM security: prompt injection testing, AI red teaming, secure RAG and agent design, and governance aligned to OWASP LLM Top 10 and NIST AI RMF.",
    keywords: [
      "AI security services",
      "LLM security",
      "prompt injection testing",
      "AI red teaming",
      "OWASP Top 10 for LLM",
      "AI agent security",
      "RAG security",
      "AI governance",
      "NIST AI RMF",
      "ISO 42001",
    ],
    aiEdge:
      "We use AI to attack AI: automated adversarial prompt generation and mutation run thousands of jailbreak and injection variants, and experienced testers take the promising ones further by hand.",
    outcomes: [
      "Confidence that your assistant will not leak data or follow hostile instructions",
      "Agents and tools scoped to least privilege",
      "Guardrails and monitoring that catch abuse in production",
      "Documentation for customers, auditors, and AI regulation",
    ],
    deliverables: [
      "AI threat model for your application",
      "Red-team report with reproducible prompts",
      "Guardrail and architecture recommendations",
      "AI governance policy pack",
    ],
    subServices: [
      {
        id: "llm-red-teaming",
        title: "LLM and AI red teaming",
        summary: "Direct and indirect prompt injection, jailbreaks, and system-prompt extraction.",
        details:
          "We test chatbots, copilots, and agents with direct attacks and with poisoned content hidden in documents, emails, and web pages your model reads.",
      },
      {
        id: "secure-rag-agents",
        title: "Secure RAG and agent design",
        summary: "Permission-aware retrieval, tool sandboxing, and output handling.",
        details:
          "Architecture reviews that make sure retrieval respects user permissions, agents cannot take high-impact actions without confirmation, and model output is treated as untrusted input.",
      },
      {
        id: "ai-supply-chain",
        title: "Model and data supply chain",
        summary: "Third-party models, datasets, plugins, and MCP servers assessed for risk.",
        details:
          "We review where your models, embeddings, plugins, and tool servers come from, how they are versioned, and what they can access.",
      },
      {
        id: "ai-governance",
        title: "AI governance and compliance",
        summary: "Policies and controls aligned to NIST AI RMF, ISO/IEC 42001, and the EU AI Act.",
        details:
          "Acceptable-use policies, an AI system inventory, risk assessments, and vendor reviews that let you adopt AI quickly without losing control.",
      },
    ],
    faqs: [
      {
        q: "What is prompt injection?",
        a: "Prompt injection is when an attacker crafts input, either typed directly or hidden in content the model reads, that overrides the application's instructions. It can cause data leakage, unauthorized actions, or harmful output.",
      },
      {
        q: "We use a major model provider. Isn't security their job?",
        a: "Providers secure the model. You are responsible for how your application uses it: what data it can see, what tools it can call, and how its output is handled. Most AI incidents happen at that layer.",
      },
      {
        q: "Can you test AI agents that call tools or APIs?",
        a: "Yes. Agentic systems are a priority because excessive agency turns a prompt injection into real-world actions. We test tool permissions, confirmation flows, and blast radius.",
      },
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    seoTitle: "Cloud Security Services | AWS, Azure, GCP",
    h1: "Cloud security posture you can actually see",
    icon: "cloud",
    summary:
      "Posture management, misconfiguration fixes, and Kubernetes hardening across AWS, Azure, and GCP.",
    details:
      "Most cloud breaches start with a misconfiguration: an exposed bucket, an over-privileged role, a forgotten access key. We assess your cloud accounts against CIS Benchmarks, map toxic combinations of risk, and fix them in infrastructure-as-code so they stay fixed.",
    metaDescription:
      "Cloud security for AWS, Azure, and GCP: posture assessments, IAM hardening, Kubernetes security, and infrastructure-as-code scanning aligned to CIS Benchmarks.",
    keywords: [
      "cloud security services",
      "AWS security assessment",
      "Azure security",
      "GCP security",
      "CSPM",
      "cloud security posture management",
      "Kubernetes security",
      "IAM security review",
      "infrastructure as code security",
    ],
    aiEdge:
      "AI-assisted attack-path analysis connects findings across identity, network, and data to show which combinations are actually exploitable, so you fix the five issues that matter before the five hundred that don't.",
    outcomes: [
      "A complete inventory of cloud assets and exposure",
      "Least-privilege IAM without breaking deployments",
      "Guardrails that stop misconfigurations before deploy",
      "Continuous posture tracking instead of point-in-time audits",
    ],
    deliverables: [
      "Cloud security assessment report",
      "Prioritized attack-path findings",
      "Terraform and IaC fixes or pull requests",
      "Posture dashboard and monthly review",
    ],
    subServices: [
      {
        id: "cloud-posture-assessment",
        title: "Cloud posture assessment",
        summary: "CIS Benchmark and best-practice review across all accounts and subscriptions.",
        details:
          "Storage exposure, logging gaps, encryption, network rules, and identity configuration reviewed and ranked by real exploitability.",
      },
      {
        id: "iam-hardening",
        title: "Identity and access hardening",
        summary: "Least-privilege roles, key hygiene, and federated access.",
        details:
          "We remove standing admin access, rotate or eliminate long-lived keys, and enforce MFA and conditional access across your cloud and SaaS estate.",
      },
      {
        id: "kubernetes-security",
        title: "Container and Kubernetes security",
        summary: "Cluster hardening, image scanning, and runtime protection.",
        details:
          "RBAC review, network policies, admission controls, secrets management, and image provenance for EKS, AKS, GKE, and self-managed clusters.",
      },
      {
        id: "iac-security",
        title: "Infrastructure-as-code security",
        summary: "Policy-as-code checks in CI so insecure changes never ship.",
        details:
          "Terraform, CloudFormation, Bicep, and Helm scanned in your pipeline, with policies tuned to your environment to avoid alert fatigue for developers.",
      },
    ],
    faqs: [
      {
        q: "Which cloud providers do you cover?",
        a: "AWS, Microsoft Azure, and Google Cloud, plus Kubernetes and the major SaaS platforms that hold your data.",
      },
      {
        q: "Do you need admin access to our cloud?",
        a: "No. Assessments use read-only roles that you create and can revoke at any time. Remediation happens through your own change process or pull requests.",
      },
    ],
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    seoTitle: "Vulnerability & Attack Surface Management",
    h1: "Vulnerability management prioritized by real risk",
    icon: "scan",
    summary:
      "Continuous scanning and external attack-surface monitoring, with AI ranking what to patch first.",
    details:
      "Scanners produce thousands of findings; teams can patch dozens. We run continuous internal and external scanning, discover forgotten internet-facing assets, and rank vulnerabilities by exploitability, exposure, and business impact so your patch effort goes where it reduces the most risk.",
    metaDescription:
      "Risk-based vulnerability management and attack surface monitoring. Continuous scanning with AI prioritization by exploitability and business context.",
    keywords: [
      "vulnerability management services",
      "risk-based vulnerability management",
      "attack surface management",
      "external attack surface monitoring",
      "vulnerability scanning",
      "patch prioritization",
      "continuous threat exposure management",
    ],
    aiEdge:
      "Our prioritization combines CVSS with known-exploited status (CISA KEV), exploit-prediction scores (EPSS), asset exposure, and business criticality. AI groups duplicate findings and writes fix guidance specific to your stack.",
    outcomes: [
      "A short, ranked fix list instead of a 5,000-row spreadsheet",
      "Shadow IT and forgotten assets discovered",
      "Measurable reduction in exposure over time",
      "Patch SLAs tracked and reported",
    ],
    deliverables: [
      "Asset inventory and exposure map",
      "Risk-ranked remediation queue",
      "Ticketing integration (Jira, Linear, ServiceNow)",
      "Monthly trend reporting",
    ],
    subServices: [
      {
        id: "external-attack-surface",
        title: "External attack surface monitoring",
        summary: "Discover every domain, IP, certificate, and exposed service you own.",
        details:
          "Continuous discovery of internet-facing assets, including the ones nobody remembers launching, with alerts when something risky appears.",
      },
      {
        id: "continuous-scanning",
        title: "Continuous scanning",
        summary: "Authenticated internal, external, and cloud workload scanning.",
        details:
          "Scheduled and on-change scans across servers, endpoints, containers, and cloud workloads, with results de-duplicated and normalized.",
      },
      {
        id: "risk-prioritization",
        title: "Risk-based prioritization",
        summary: "Known-exploited, internet-facing, and business-critical first.",
        details:
          "Findings are scored on real-world exploitability and context, then routed to the right owner with clear fix steps.",
      },
    ],
    faqs: [
      {
        q: "How is this different from buying a scanner?",
        a: "A scanner gives you data. We run, tune, and triage it, discover assets the scanner was never pointed at, and turn the results into a prioritized, owned remediation plan.",
      },
    ],
  },
  {
    id: "compliance-grc",
    title: "Compliance & GRC",
    seoTitle: "SOC 2, ISO 27001 & HIPAA Compliance Services",
    h1: "Compliance readiness without the spreadsheet chaos",
    icon: "shield-check",
    summary:
      "SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR readiness, with AI-assisted evidence collection.",
    details:
      "Customers and investors want proof that you take security seriously. We run gap assessments, write policies that match how you actually operate, implement the missing controls, and automate evidence collection so audits are an export, not a fire drill.",
    metaDescription:
      "SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR compliance readiness. Gap assessments, policies, control implementation, and AI-assisted audit evidence collection.",
    keywords: [
      "SOC 2 compliance services",
      "ISO 27001 consulting",
      "HIPAA compliance",
      "PCI DSS compliance",
      "GDPR compliance",
      "virtual CISO",
      "vCISO services",
      "GRC consulting",
      "NIST CSF assessment",
    ],
    aiEdge:
      "AI maps your existing controls across frameworks so one control satisfies SOC 2, ISO 27001, and HIPAA at once. It also drafts policies from your real practices and pre-fills security questionnaires from your approved answers.",
    outcomes: [
      "Audit-ready in a defined, predictable timeline",
      "Policies your team will actually follow",
      "Security questionnaires answered in hours, not weeks",
      "A security program that keeps working after the audit",
    ],
    deliverables: [
      "Gap assessment and remediation roadmap",
      "Policy and procedure set",
      "Control implementation support",
      "Evidence library and auditor liaison",
    ],
    subServices: [
      {
        id: "soc-2-readiness",
        title: "SOC 2 readiness",
        summary: "Type I and Type II preparation for SaaS and service companies.",
        details:
          "Scoping, Trust Services Criteria mapping, control design, and evidence automation through to your auditor's fieldwork.",
      },
      {
        id: "iso-27001",
        title: "ISO 27001 and ISO 42001",
        summary: "ISMS and AI management system design and certification support.",
        details:
          "Risk assessment, Statement of Applicability, internal audit, and management review, including ISO/IEC 42001 for organizations building AI.",
      },
      {
        id: "regulated-industries",
        title: "HIPAA, PCI DSS, and GDPR",
        summary: "Controls for health, payment, and personal data.",
        details:
          "Data-flow mapping, safeguard implementation, and documentation for regulated data, without slowing product teams down.",
      },
      {
        id: "vciso",
        title: "Virtual CISO",
        summary: "Fractional security leadership for growing teams.",
        details:
          "Strategy, board reporting, vendor risk, and program ownership from an experienced security leader at a fraction of a full-time hire.",
      },
    ],
    faqs: [
      {
        q: "How long does SOC 2 readiness take?",
        a: "It depends on your starting point and scope. After the gap assessment we give you a realistic timeline. Type II also requires an observation period during which controls must operate.",
      },
      {
        q: "Are you an auditor?",
        a: "No. We prepare you for the audit and work alongside your independent auditor. Keeping those roles separate protects the integrity of your report.",
      },
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    seoTitle: "Incident Response & Forensics Services",
    h1: "Incident response when every minute counts",
    icon: "siren",
    summary:
      "Rapid containment, forensic investigation, and recovery from ransomware, BEC, and breaches.",
    details:
      "When something goes wrong, you need calm, experienced responders, fast. We contain the threat, preserve evidence, investigate root cause and scope, and guide recovery and communication. Retainers mean pre-agreed terms and faster response when you need it most.",
    metaDescription:
      "Incident response and digital forensics: ransomware response, business email compromise, breach investigation, and IR retainers with pre-agreed response times.",
    keywords: [
      "incident response services",
      "ransomware response",
      "digital forensics",
      "DFIR services",
      "incident response retainer",
      "business email compromise investigation",
      "breach response",
      "tabletop exercise",
    ],
    aiEdge:
      "AI-assisted forensics parses large volumes of logs, mailbox data, and endpoint artifacts into a timeline in hours instead of days. Responders verify every conclusion before it goes into the report.",
    outcomes: [
      "Threat contained and attacker access removed",
      "A clear, evidence-backed account of what happened",
      "Defensible documentation for insurers and regulators",
      "Hardening steps so it does not happen again",
    ],
    deliverables: [
      "Containment and eradication plan",
      "Forensic timeline and root-cause report",
      "Regulatory and insurer documentation support",
      "Post-incident hardening roadmap",
    ],
    subServices: [
      {
        id: "emergency-response",
        title: "Emergency incident response",
        summary: "Ransomware, account takeover, data theft, and insider threats.",
        details:
          "Triage, containment, and eradication with clear communication to leadership throughout.",
      },
      {
        id: "forensics",
        title: "Digital forensics",
        summary: "Endpoint, cloud, and mailbox investigations that hold up to scrutiny.",
        details:
          "Evidence is collected and preserved with chain of custody, then analyzed to establish scope, entry point, and data impact.",
      },
      {
        id: "ir-readiness",
        title: "IR plans and tabletop exercises",
        summary: "Be ready before the call comes.",
        details:
          "Incident response plans, playbooks, and realistic tabletop exercises for technical teams and executives.",
      },
      {
        id: "ir-retainer",
        title: "IR retainer",
        summary: "Pre-negotiated terms and priority response.",
        details:
          "Skip contract negotiation during a crisis. Unused retainer hours can go toward proactive readiness work.",
      },
    ],
    faqs: [
      {
        q: "We think we are under attack right now. What should we do?",
        a: "Call us immediately. Don't power off affected machines, because memory evidence is lost. Disconnect them from the network instead, and avoid alerting the attacker through compromised email accounts.",
      },
      {
        q: "Do we need cyber insurance approval before engaging?",
        a: "Check your policy. Many insurers have panel requirements. We can work alongside your insurer and legal counsel and provide the documentation they need.",
      },
    ],
  },
  {
    id: "application-security",
    title: "Application Security & DevSecOps",
    seoTitle: "Application Security & DevSecOps Services",
    h1: "Application security built into how you ship",
    icon: "code",
    summary:
      "Secure code review, threat modeling, and security checks in CI/CD that developers won't hate.",
    details:
      "The cheapest vulnerability to fix is the one that never ships. We bring security into your SDLC with threat modeling, secure code review, software composition analysis, and pipeline checks tuned to keep false positives low and developer velocity high.",
    metaDescription:
      "Application security and DevSecOps: secure code review, threat modeling, SAST, DAST, SCA, secrets scanning, and supply chain security in your CI/CD.",
    keywords: [
      "application security services",
      "DevSecOps consulting",
      "secure code review",
      "threat modeling",
      "SAST DAST",
      "software composition analysis",
      "software supply chain security",
      "secure SDLC",
      "SBOM",
    ],
    aiEdge:
      "AI-assisted code review flags risky patterns in context and suppresses findings that are not reachable. For real issues, it proposes fixes as pull requests that your developers review, not a PDF they have to translate.",
    outcomes: [
      "Fewer vulnerabilities reaching production",
      "Security checks in CI that developers trust",
      "A software bill of materials and dependency hygiene",
      "Secure-by-design architecture for new features",
    ],
    deliverables: [
      "Threat models for critical systems",
      "Secure code review findings with fixes",
      "CI/CD security pipeline configuration",
      "Developer secure-coding training",
    ],
    subServices: [
      {
        id: "secure-code-review",
        title: "Secure code review",
        summary: "Manual and AI-assisted review of high-risk code paths.",
        details:
          "Authentication, authorization, cryptography, and data handling reviewed by engineers who also build software.",
      },
      {
        id: "threat-modeling",
        title: "Threat modeling",
        summary: "Find design flaws before they are written.",
        details:
          "Lightweight STRIDE-based sessions with your engineers for new features and critical systems.",
      },
      {
        id: "pipeline-security",
        title: "CI/CD pipeline security",
        summary: "SAST, SCA, secrets scanning, and container checks in your pipeline.",
        details:
          "Tooling selected for your stack and tuned so the build only fails on issues worth stopping for.",
      },
      {
        id: "supply-chain-security",
        title: "Software supply chain security",
        summary: "SBOMs, dependency pinning, and build provenance.",
        details:
          "Protect against malicious packages and compromised builds with SBOM generation, signing, and SLSA-aligned practices.",
      },
    ],
    faqs: [
      {
        q: "Will this slow down our developers?",
        a: "It shouldn't. We tune tools to cut noise, put findings where developers already work, and focus blocking checks on high-confidence, high-impact issues.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.id === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.id);
}
