import type { TopicContent } from "../components/topic-page";

/*
 * Service deep-dive pages, e.g. /services/penetration-testing/api-penetration-testing.
 *
 * Each answers a cluster of buyer-intent searches seen in Search Console with
 * a sub-service the parent service page already lists, so nothing here
 * promises a service EclipticLink does not offer.
 */

export type ServiceTopic = TopicContent;

export const serviceTopics: ServiceTopic[] = [
  {
    serviceId: "penetration-testing",
    slug: "api-penetration-testing",
    seoTitle: "API Penetration Testing Services",
    metaDescription:
      "API penetration testing for REST, GraphQL and gRPC against the OWASP API Security Top 10: broken object-level authorization, mass assignment and more.",
    h1: "API penetration testing services",
    eyebrow: "API pentest · Penetration testing",
    intro:
      "APIs carry your most valuable data and sit behind many modern breaches. We test REST, GraphQL and gRPC APIs the way attackers do, and give your developers fixes they can ship.",
    answer:
      "API penetration testing is a manual security test of your application programming interfaces: the endpoints your web and mobile apps, partners and integrations call. Testers look for the flaws behind many modern breaches, such as one user reading another user's data, and prove which ones are exploitable, with steps to reproduce and fix each one.",
    sections: [
      {
        title: "What we test for: the OWASP API Security Top 10",
        items: [
          "<strong>Broken object-level authorization:</strong> changing an ID in a request returns someone else's data.",
          "<strong>Broken authentication:</strong> weak tokens, missing expiry and credential-stuffing paths.",
          "<strong>Broken object property-level authorization:</strong> mass assignment and responses that expose more fields than the user should see.",
          "<strong>Unrestricted resource consumption:</strong> missing rate limits that enable abuse and runaway costs.",
          "<strong>Broken function-level authorization:</strong> ordinary users reaching admin functions.",
          "<strong>Unrestricted access to sensitive business flows:</strong> automating purchases, sign-ups or transfers at scale.",
          "<strong>Server-side request forgery,</strong> security misconfiguration, improper inventory of old and shadow endpoints, and unsafe consumption of third-party APIs.",
        ],
      },
      {
        title: "Why scanners miss API flaws",
        paragraphs: [
          "Most serious API flaws are authorization mistakes, and to a scanner they look like perfectly valid requests. A typical example: an invoicing API returns another customer's invoice when the invoice number in the request is changed. Finding that takes a tester with two accounts and an understanding of what each user should be allowed to see.",
        ],
      },
      {
        title: "REST, GraphQL and gRPC",
        items: [
          "<strong>REST:</strong> object and function authorization, input validation and rate limiting across every endpoint and method.",
          "<strong>GraphQL:</strong> introspection exposure, query depth and batching abuse, and field-level authorization.",
          "<strong>gRPC:</strong> service reflection, authentication on every method and message validation.",
        ],
      },
      {
        title: "What you get",
        items: [
          "CVSS-scored, prioritized findings, each validated by a tester.",
          "A technical report with proof-of-concept steps and fix guidance developers can act on.",
          "An executive summary for leadership.",
          "A retest and attestation letter you can share with customers.",
        ],
      },
      {
        title: "API penetration testing vs automated API scanning",
        table: {
          headers: [
            "",
            "Automated API scanner",
            "Manual API penetration test",
          ],
          rows: [
            [
              "Finds authorization flaws between users",
              "Rarely",
              "Yes, using accounts in different roles",
            ],
            [
              "Understands business logic",
              "No",
              "Yes",
            ],
            [
              "Chains small issues into a breach",
              "No",
              "Yes",
            ],
            [
              "False positives",
              "Common",
              "Removed before reporting",
            ],
            [
              "Best used for",
              "Frequent checks for known issues",
              "Proving what is actually exploitable",
            ],
          ],
        },
        after: [
          "The two work well together: scanning in your pipeline between releases, and a manual test before major launches and at least once a year.",
        ],
      },
      {
        title: "Before the test: a checklist for your team",
        items: [
          "Export your OpenAPI specification or Postman collection, even if it is incomplete.",
          "Create test accounts for every role, with at least two users per role.",
          "Seed the test environment with realistic data so authorization checks can be tested.",
          "List any endpoints that move money, change permissions or delete data; they get the closest attention.",
          "Agree rate limits and any endpoints that must not be load-tested.",
        ],
      },
      {
        title: "How we report API findings",
        paragraphs: [
          "Each finding shows the endpoint, the exact request and response that prove it, the impact in business terms, a CVSS score, and a fix your developers can apply, often down to the middleware or query that needs to change. Findings are grouped by root cause, so fixing one authorization pattern can close several issues at once.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "API docs or collections, environments, and test accounts for each user role." },
      { title: "Test", body: "AI-assisted discovery, then manual testing of authorization and business logic." },
      { title: "Report", body: "Validated findings with proof-of-concept steps and fix guidance." },
      { title: "Retest", body: "Confirm the fixes work and issue an attestation letter." },
    ],
    faqs: [
      {
        q: "What do you need from us to test an API?",
        a: "API documentation, an OpenAPI specification or a Postman collection if you have one, a test environment, and test accounts for at least two users in each role, so we can check whether one user can reach another's data.",
      },
      {
        q: "Can you test an API without documentation?",
        a: "Yes. We can map endpoints from the traffic of your web and mobile apps, which also shows how much of your API is undocumented.",
      },
      {
        q: "Do you test in production?",
        a: "We prefer a staging environment that mirrors production. If testing must happen in production, we agree rules of engagement, timing and limits with you in writing first.",
      },
      {
        q: "How long does an API penetration test take?",
        a: "It depends on the number of endpoints and roles. A focused API test commonly takes one to two weeks of testing, plus reporting and a retest after fixes.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at your APIs, agree a sensible scope, and outline the plan.",
      },
    ],
    guides: ["penetration-testing-vs-vulnerability-scanning"],
    keywords: [
      "API penetration testing",
      "API penetration testing services",
      "API security testing",
      "OWASP API Security Top 10",
      "GraphQL security testing",
      "REST API pentest",
    ],
    updatedAt: "2026-11-27",
  },
  {
    serviceId: "ai-security",
    slug: "llm-penetration-testing",
    seoTitle: "LLM Penetration Testing & AI Red Teaming",
    metaDescription:
      "LLM penetration testing and AI red teaming for chatbots, copilots, RAG apps and AI agents: prompt injection, data leakage and excessive agency.",
    h1: "LLM penetration testing and AI red teaming",
    eyebrow: "LLM pentest · AI security",
    intro:
      "Before attackers test your AI assistant, we do. We red-team chatbots, copilots, RAG applications and AI agents, then help you put guardrails in place that hold up in production.",
    answer:
      "LLM penetration testing is a security test of an application built on a large language model. Testers try to make it ignore its instructions, leak data or take actions it shouldn't, using direct prompts and malicious content hidden in the documents, emails and web pages it reads. Findings are mapped to the OWASP Top 10 for LLM Applications and MITRE ATLAS.",
    sections: [
      {
        title: "What we test",
        items: [
          "<strong>Prompt injection,</strong> direct and indirect, including instructions hidden in files, emails and web pages.",
          "<strong>Jailbreaks and system-prompt extraction.</strong>",
          "<strong>Sensitive information disclosure:</strong> personal data, secrets or other users' data in responses.",
          "<strong>Improper output handling:</strong> model output rendered or executed without validation.",
          "<strong>Excessive agency:</strong> agents and tools that can act beyond what the user is allowed to do.",
          "<strong>RAG permission bypass:</strong> retrieval that ignores who is asking.",
          "<strong>Model and tool supply chain:</strong> third-party models, plugins and MCP servers.",
        ],
      },
      {
        title: "How we test",
        paragraphs: [
          "We use AI to attack AI: automated adversarial prompt generation and mutation run thousands of jailbreak and injection variants, and experienced testers take the promising ones further by hand.",
          "Every finding comes with the exact prompts to reproduce it, so your team can confirm the fix. We walk your engineers through the defenses that work, so the next AI feature ships safer.",
        ],
      },
      {
        title: "What you get",
        items: [
          "An AI threat model for your application.",
          "A red-team report with reproducible prompts.",
          "Guardrail and architecture recommendations: permission-aware retrieval, tool sandboxing and output handling.",
          "An AI governance policy pack, if you need one, aligned to NIST AI RMF and ISO/IEC 42001.",
        ],
      },
      {
        title: "Example attack scenarios we test",
        items: [
          "A support assistant summarizes an uploaded file that contains hidden instructions, and starts revealing other customers' tickets.",
          "An internal copilot's retrieval returns HR or finance documents to an employee who should never see them.",
          "An agent with a refund tool is talked into issuing refunds outside policy.",
          "Model output containing script is rendered in a web page and runs in the user's browser.",
          "The system prompt, with internal rules and tool names, is extracted and used to plan further attacks.",
        ],
      },
      {
        title: "LLM testing vs a traditional penetration test",
        table: {
          headers: [
            "",
            "Traditional pentest",
            "LLM penetration test",
          ],
          rows: [
            [
              "Targets",
              "Code, infrastructure and access control",
              "Model behaviour, tools, retrieval and output handling",
            ],
            [
              "Attack inputs",
              "Crafted requests and payloads",
              "Prompts and poisoned content the model reads",
            ],
            [
              "Typical findings",
              "Injection, broken authorization, misconfiguration",
              "Prompt injection, data leakage, excessive agency",
            ],
            [
              "Frameworks",
              "OWASP Top 10, OWASP API Top 10",
              "OWASP Top 10 for LLM Applications, MITRE ATLAS",
            ],
          ],
        },
      },
      {
        title: "Guardrails that work, and ones that don't",
        items: [
          "<strong>Doesn't work alone:</strong> a strongly worded system prompt. Models can be talked out of instructions.",
          "<strong>Works:</strong> least-privilege tools, so even a fooled model can't do much damage.",
          "<strong>Works:</strong> permission-aware retrieval that only returns what the user is allowed to see.",
          "<strong>Works:</strong> human confirmation for high-impact actions such as payments or deletions.",
          "<strong>Works:</strong> treating model output as untrusted input before rendering or executing it.",
          "<strong>Works:</strong> logging prompts and tool calls so abuse can be spotted and investigated.",
        ],
      },
    ],
    steps: [
      { title: "Scope", body: "The AI features, models, tools and data sources in play." },
      { title: "Model threats", body: "Map how an attacker could reach and abuse each one." },
      { title: "Attack", body: "Automated variants plus manual red teaming, with reproducible prompts." },
      { title: "Guard", body: "Prioritized fixes and guardrails, then confirm they hold." },
    ],
    faqs: [
      {
        q: "Is LLM penetration testing different from a normal pentest?",
        a: "Yes. A normal pentest looks for flaws in code and infrastructure. An LLM test also attacks the model's behaviour: what it can be talked into, what it leaks, and what its tools let it do. We usually test both together, because many AI findings are ordinary access-control problems exposed through the model.",
      },
      {
        q: "Do you test AI agents and MCP integrations?",
        a: "Yes. Agents with tool access are a priority, because excessive agency turns a prompt injection into real-world actions. We also run dedicated MCP security assessments.",
      },
      {
        q: "Which frameworks do you map findings to?",
        a: "The OWASP Top 10 for LLM Applications and MITRE ATLAS. We can also align recommendations to NIST AI RMF and ISO/IEC 42001 if you need governance evidence.",
      },
      {
        q: "Do you need access to our model?",
        a: "No. We test through the same interfaces your users and integrations use. Architecture details and system prompts help us go deeper, but they are optional.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at your AI features and outline a test plan.",
      },
    ],
    guides: ["prompt-injection-attacks-how-to-secure-llm-applications", "how-to-secure-ai-agents-with-tool-access"],
    keywords: [
      "LLM penetration testing",
      "AI red teaming",
      "LLM security testing",
      "prompt injection testing",
      "AI application security",
      "OWASP LLM Top 10",
    ],
    updatedAt: "2026-11-27",
  },
  {
    serviceId: "ai-security",
    slug: "mcp-security-assessment",
    seoTitle: "MCP Security Assessment for AI Agents",
    metaDescription:
      "MCP security assessment: we review MCP servers and AI agent integrations for tool poisoning, prompt injection, over-privileged tokens and supply chain risk.",
    h1: "MCP security assessment",
    eyebrow: "MCP security · AI security",
    intro:
      "Your AI assistants connect to tools through the Model Context Protocol. We review those MCP servers and integrations before they become a path into your data.",
    answer:
      "Are MCP servers safe? Only as safe as the code, permissions and data behind them. An MCP security assessment reviews the MCP servers your AI agents use, third-party or your own, for tool poisoning, rug pulls, prompt injection through tool results, over-privileged tokens, unsafe local execution and supply chain risk, then tells you what to fix, restrict or remove.",
    sections: [
      {
        title: "Why MCP needs its own review",
        paragraphs: [
          "Every MCP server you connect is code you are trusting, with access to whatever its tokens allow. Tool descriptions and results flow straight into the model's context, so a malicious or compromised server can steer the model without the user noticing. Traditional application testing doesn't look at these paths.",
        ],
      },
      {
        title: "What we assess",
        items: [
          "<strong>Tool poisoning:</strong> hidden instructions in tool descriptions.",
          "<strong>Rug pulls:</strong> tool definitions that change after you approve them.",
          "<strong>Cross-server interference:</strong> one server shadowing or overriding another's tools.",
          "<strong>Prompt injection through tool results:</strong> data the model reads that tells it what to do.",
          "<strong>Over-privileged tokens and credential exposure.</strong>",
          "<strong>Command injection and unsafe local execution.</strong>",
          "<strong>Supply chain and impersonation:</strong> packages that aren't what they claim to be.",
        ],
      },
      {
        title: "For teams building MCP servers",
        items: [
          "Authorization checked on every tool call, not only when the client connects.",
          "Least-privilege tokens scoped to the user, not one shared admin key.",
          "Validation of model-supplied arguments, and no shell execution of them.",
          "Pinned, versioned releases with clear change notes, so clients can review updates.",
        ],
      },
      {
        title: "What you get",
        items: [
          "An inventory of the MCP servers and tools in use, and what each can reach.",
          "A risk rating for each server, with findings and evidence.",
          "Clear fix, restrict or remove recommendations.",
          "A simple process for approving new MCP servers in future.",
        ],
      },
      {
        title: "How tool poisoning works",
        paragraphs: [
          "When an AI assistant connects to an MCP server, it reads each tool's name and description to decide when to use it. A malicious server can hide instructions inside a description, such as telling the model to read a local file and include it in its next request. The user sees a harmless tool; the model sees a command. Because descriptions can change after you first approve a server, a server that was clean last month may not be clean today.",
        ],
      },
      {
        title: "How we rate MCP server risk",
        table: {
          headers: [
            "Factor",
            "Lower risk",
            "Higher risk",
          ],
          rows: [
            [
              "Publisher",
              "Known vendor, verified source",
              "Unknown author, copied or forked package",
            ],
            [
              "Access",
              "Read-only, narrowly scoped token",
              "Broad write access or admin tokens",
            ],
            [
              "Updates",
              "Pinned version, reviewed changes",
              "Auto-updates with no review",
            ],
            [
              "Untrusted content",
              "Never reads external content",
              "Reads emails, web pages or user files",
            ],
            [
              "Execution",
              "Calls a remote API",
              "Runs local commands on the user's machine",
            ],
          ],
        },
        after: [
          "Each server gets a rating from these factors, so you can see at a glance which to keep, restrict or remove.",
        ],
      },
      {
        title: "Local vs remote MCP servers",
        paragraphs: [
          "Local servers run on the user's own machine and often have access to files, credentials and the command line, so a compromise can reach far beyond the AI tool. Remote servers run elsewhere and are reached over the network, so the main risks shift to authentication, token scope and what data leaves your environment. We review each type against the risks that apply to it.",
        ],
      },
    ],
    steps: [
      { title: "Inventory", body: "Find every MCP server, tool and token your agents use." },
      { title: "Review", body: "Source, permissions, publisher and update path for each one." },
      { title: "Test", body: "Attempt poisoning and injection paths in a safe environment." },
      { title: "Govern", body: "Fix, restrict or remove, and an approval process for new servers." },
    ],
    faqs: [
      {
        q: "Are MCP servers safe to use?",
        a: "Many are, but each one is code with access to your data and to your model's context. Treat a new MCP server like a new third-party integration: check where it comes from, what it can reach, and what happens if it is compromised.",
      },
      {
        q: "Can you assess third-party MCP servers we don't control?",
        a: "Yes. We review their source or package where available, the permissions and tokens you grant, and how your agents use their tools, then recommend whether to keep, restrict or replace each one.",
      },
      {
        q: "Do you pentest MCP servers we build ourselves?",
        a: "Yes. We test authorization on every tool, input handling, token scope, and how tool results could be used to inject instructions into the model.",
      },
      {
        q: "What is MCP supply chain risk?",
        a: "The risk that an MCP server or package you install is malicious, impersonates a trusted one, or changes after you approve it. Pinning versions, verifying publishers and reviewing changes before updating all reduce it.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at the agents and MCP servers you use and outline a review plan.",
      },
    ],
    guides: ["mcp-security-risks", "how-to-secure-ai-agents-with-tool-access"],
    keywords: [
      "MCP security assessment",
      "MCP server security",
      "MCP security risks",
      "Model Context Protocol security",
      "AI agent security",
      "MCP pentest",
    ],
    updatedAt: "2026-11-27",
  },
  {
    serviceId: "vulnerability-management",
    slug: "attack-surface-management",
    seoTitle: "Attack Surface Management & Monitoring",
    metaDescription:
      "External attack surface management: continuous discovery of your internet-facing assets, exposure alerts and risk-ranked fixes, with testing to prove what matters.",
    h1: "Attack surface management and monitoring",
    eyebrow: "Attack surface · Vulnerability management",
    intro:
      "You can't protect what you don't know you have. We continuously discover your internet-facing assets, including the ones nobody remembers launching, and tell you which exposures matter.",
    answer:
      "Attack surface management (ASM) is the continuous discovery and monitoring of everything you expose to the internet: domains, subdomains, IP addresses, certificates, cloud services and login pages. It finds forgotten or risky assets before attackers do and ranks what to fix first. Paired with penetration testing, it shows not just what is exposed but what is exploitable.",
    sections: [
      {
        title: "What we discover",
        items: [
          "Domains and subdomains, including ones registered long ago and forgotten.",
          "IP ranges, open ports and exposed services.",
          "TLS certificates that are expiring, misconfigured or issued for unknown hosts.",
          "Cloud storage and services exposed to the public internet.",
          "Login pages, admin panels and remote-access gateways.",
          "Staging and test environments that were never taken down.",
        ],
      },
      {
        title: "From exposure to action",
        items: [
          "Prioritized by known exploitation (CISA KEV), exploit prediction (EPSS), exposure and business criticality, not CVSS alone.",
          "Alerts when something risky appears, such as a newly exposed admin panel or database.",
          "Fix steps routed to the right owner.",
          "Trend reporting that shows whether your exposure is going down.",
        ],
      },
      {
        title: "Attack surface monitoring and continuous penetration testing",
        paragraphs: [
          "Monitoring tells you what is exposed; testing tells you what an attacker could do with it. Rather than waiting for an annual test, we can pair continuous monitoring with targeted penetration testing whenever something significant appears.",
        ],
      },
      {
        title: "Choosing an attack surface management provider",
        items: [
          "Discovery that starts from your domains and finds what you didn't list.",
          "Findings validated before they reach you, so you aren't buried in false positives.",
          "Prioritization based on real-world exploitability and business context.",
          "People who can test and help fix, not just a dashboard.",
          "Coverage of cloud and third-party hosted assets, not only your IP ranges.",
        ],
      },
      {
        title: "Exposures we commonly find",
        items: [
          "Staging sites left online with debug mode or test credentials enabled.",
          "Databases and search clusters reachable from the internet.",
          "Subdomains still pointing at deleted cloud resources, which an attacker can take over.",
          "Expired, self-signed or mismatched TLS certificates.",
          "Admin panels and remote-access portals without multi-factor authentication.",
          "Exposed source-control folders and backup files on web servers.",
        ],
      },
      {
        title: "Attack surface management vs scanning vs penetration testing",
        table: {
          headers: [
            "",
            "Attack surface management",
            "Vulnerability scanning",
            "Penetration testing",
          ],
          rows: [
            [
              "Question",
              "What do we expose?",
              "What known weaknesses do we have?",
              "What could an attacker actually do?",
            ],
            [
              "Starts from",
              "Your domains and brands",
              "A list of known assets",
              "An agreed scope",
            ],
            [
              "Frequency",
              "Continuous",
              "Weekly or continuous",
              "Periodic and after major changes",
            ],
            [
              "Finds unknown assets",
              "Yes",
              "No",
              "Sometimes",
            ],
          ],
        },
      },
      {
        title: "What happens when we find something",
        items: [
          "We confirm it is really yours and really exposed, so you don't chase false alarms.",
          "We rate it by exploitability and business impact.",
          "You get an alert with the asset, the risk and the fix, routed to the right owner.",
          "For serious exposures, we can test whether they are exploitable straight away.",
          "We track it until it's fixed, and it shows up in your trend report.",
        ],
      },
      {
        title: "Who benefits most",
        items: [
          "Companies that have grown through acquisitions and inherited unknown infrastructure.",
          "Organizations with many marketing sites, campaign pages and regional domains.",
          "Engineering teams that create cloud resources quickly across several accounts.",
          "Businesses preparing for an audit, a funding round or due diligence, where unknown exposure is a red flag.",
        ],
      },
    ],
    steps: [
      { title: "Seed", body: "Your domains, brands and cloud accounts as starting points." },
      { title: "Discover", body: "Map everything connected to them that faces the internet." },
      { title: "Prioritize", body: "Rank exposures by exploitability and business impact." },
      { title: "Monitor", body: "Continuous checks, alerts on risky changes, regular trend reports." },
    ],
    faqs: [
      {
        q: "What is the difference between attack surface management and vulnerability scanning?",
        a: "Vulnerability scanning checks assets you already know about for known weaknesses. Attack surface management first finds what you have, including assets you didn't know about, then watches them for risky changes. Most organizations need both.",
      },
      {
        q: "How often is the attack surface checked?",
        a: "Continuously, with alerts when something risky appears and a regular summary of how your exposure is trending.",
      },
      {
        q: "Do you need to install agents?",
        a: "No. External attack surface discovery works from the outside, the way an attacker sees you.",
      },
      {
        q: "Can you cover cloud and third-party hosted assets?",
        a: "Yes. Internet-facing cloud services and assets hosted with third parties are part of discovery.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. Tell us your main domains and we'll outline what discovery would cover.",
      },
    ],
    guides: ["penetration-testing-vs-vulnerability-scanning", "common-cloud-security-misconfigurations"],
    keywords: [
      "attack surface management",
      "external attack surface management",
      "attack surface monitoring",
      "EASM",
      "continuous penetration testing",
      "attack surface management provider",
    ],
    updatedAt: "2026-11-27",
  },
  {
    serviceId: "incident-response",
    slug: "dfir-retainer",
    seoTitle: "Incident Response Retainer & DFIR Services",
    metaDescription:
      "Incident response and digital forensics (DFIR) retainer: pre-agreed terms and priority response for ransomware, business email compromise and data breaches.",
    h1: "Incident response retainer and digital forensics",
    eyebrow: "DFIR retainer · Incident response",
    intro:
      "When ransomware hits or an account is taken over, the worst time to negotiate a contract is during the incident. With a retainer, you call and we start.",
    answer:
      "A digital forensics and incident response (DFIR) retainer is an agreement made before an incident: pre-negotiated terms and priority response, so when something happens you call and the response starts straight away. It covers containment, forensic investigation and recovery support, and unused hours can go toward readiness work such as an incident response plan or a tabletop exercise.",
    sections: [
      {
        title: "What a retainer covers",
        items: [
          "<strong>Emergency response</strong> to ransomware, account takeover, data theft and insider threats.",
          "<strong>Digital forensics</strong> across endpoints, cloud and mailboxes, with chain of custody.",
          "<strong>Documentation</strong> for insurers and regulators.",
          "<strong>A post-incident hardening roadmap</strong> so it doesn't happen again.",
          "<strong>Readiness work</strong> with unused hours: IR plans, playbooks and tabletop exercises.",
        ],
      },
      {
        title: "Ransomware response",
        paragraphs: [
          "In a ransomware attack, speed and evidence both matter. We contain the attack, preserve forensic evidence, work out how the attackers got in and what they accessed or took, support recovery from clean backups, and prepare the documentation insurers and regulators ask for.",
          "<strong>Under attack right now?</strong> Disconnect affected machines from the network rather than powering them off, so memory evidence survives, and don't coordinate through email accounts that may be compromised.",
        ],
      },
      {
        title: "Forensics that hold up",
        paragraphs: [
          "Evidence is collected and preserved with chain of custody, then analyzed to establish scope, entry point and data impact. AI-assisted forensics turns large volumes of logs, mailbox data and endpoint artifacts into a timeline in hours instead of days, and responders verify every conclusion before it goes into the report.",
        ],
      },
      {
        title: "Working with your insurer and lawyers",
        paragraphs: [
          "Many cyber insurers have panel requirements, so check your policy. We work alongside your insurer and legal counsel and provide the documentation they need.",
        ],
      },
      {
        title: "Retainer vs finding help during an incident",
        table: {
          headers: [
            "",
            "With a retainer",
            "Without a retainer",
          ],
          rows: [
            [
              "Contract",
              "Agreed in advance",
              "Negotiated during the incident",
            ],
            [
              "Response",
              "Priority, as agreed",
              "Depends on availability",
            ],
            [
              "Knowledge of your systems",
              "Contacts, access and plans prepared",
              "Learned under pressure",
            ],
            [
              "Unused time",
              "Goes to readiness work",
              "Not applicable",
            ],
          ],
        },
      },
      {
        title: "The first 24 hours with us",
        items: [
          "<strong>First call:</strong> we understand what happened and give immediate containment advice.",
          "<strong>Containment:</strong> isolate affected systems, revoke compromised accounts and block attacker access.",
          "<strong>Evidence:</strong> collect memory, disk, cloud and mailbox evidence before it is lost.",
          "<strong>Scope:</strong> work out the entry point, what was accessed and whether data left your environment.",
          "<strong>Communication:</strong> regular, plain-language updates for leadership, legal counsel and your insurer.",
        ],
      },
      {
        title: "What to have ready before an incident",
        items: [
          "Contact details for your decision-makers, legal counsel and insurer.",
          "An up-to-date list of critical systems and who administers them.",
          "Logs kept long enough to investigate, ideally months rather than days.",
          "Backups that have actually been restored in a test.",
          "An out-of-band way to communicate if email is compromised.",
        ],
      },
      {
        title: "Business email compromise investigations",
        paragraphs: [
          "In a business email compromise, attackers take over a mailbox and use it to redirect payments or steal data, often for weeks before anyone notices. We trace how the account was taken over, find mailbox rules and forwarding the attacker set up, identify which messages and attachments they accessed, and help you work out who needs to be told.",
        ],
      },
    ],
    steps: [
      { title: "Agree", body: "Terms, contacts and response expectations, before anything happens." },
      { title: "Prepare", body: "Access, escalation paths and an incident response plan." },
      { title: "Respond", body: "Contain, investigate and recover when an incident hits." },
      { title: "Learn", body: "Root-cause report and a hardening roadmap." },
    ],
    faqs: [
      {
        q: "How fast do you respond under a retainer?",
        a: "Response expectations are agreed in the retainer, and retainer clients get priority. Without a retainer we still help as fast as we can, but terms have to be agreed first.",
      },
      {
        q: "Do you only handle ransomware?",
        a: "No. We also handle business email compromise, account takeover, data theft and insider incidents, across endpoints, cloud and email.",
      },
      {
        q: "What happens to unused retainer hours?",
        a: "They can go toward readiness work, such as an incident response plan, playbooks or a tabletop exercise.",
      },
      {
        q: "Can you help with breach notification?",
        a: "We provide the evidence and documentation regulators and insurers need and support your legal counsel, who decides on notification. The rules differ by country and sector.",
      },
      {
        q: "We think we are under attack right now. What should we do?",
        a: "Contact us immediately. Don't power off affected machines, because memory evidence is lost. Disconnect them from the network instead, and avoid coordinating through compromised email accounts.",
      },
    ],
    guides: ["incident-response-plan-first-24-hours"],
    keywords: [
      "incident response retainer",
      "DFIR retainer",
      "digital forensics retainer services",
      "ransomware response",
      "ransomware forensics",
      "digital forensics services",
    ],
    updatedAt: "2026-11-27",
  },
  {
    serviceId: "application-security",
    slug: "cicd-security-devsecops-compliance",
    seoTitle: "CI/CD Security & DevSecOps Compliance Services",
    metaDescription:
      "CI/CD pipeline security and DevSecOps compliance: SAST, SCA, secrets and container scanning, SBOMs and build provenance, with evidence for SOC 2 and ISO 27001.",
    h1: "CI/CD security and DevSecOps compliance",
    eyebrow: "CI/CD security · Application security",
    intro:
      "Security checks in your pipeline that developers trust, plus the change-management evidence auditors ask for, without slowing releases down.",
    answer:
      "CI/CD security means building security checks into the pipeline that builds and ships your code: scanning for vulnerable code and dependencies, leaked secrets and insecure containers, and protecting the pipeline itself from tampering. DevSecOps compliance adds the evidence auditors look for, such as reviewed and approved changes and traceable releases, for frameworks like SOC 2 and ISO 27001.",
    sections: [
      {
        title: "What we add to your pipeline",
        items: [
          "<strong>SAST:</strong> static analysis tuned to report reachable issues.",
          "<strong>SCA:</strong> vulnerable and malicious dependencies.",
          "<strong>Secrets scanning:</strong> keys and tokens caught before they reach the repository.",
          "<strong>Container and infrastructure-as-code scanning.</strong>",
          "<strong>SBOMs, signing and build provenance,</strong> aligned to SLSA practices.",
          "<strong>Branch protection</strong> and required reviews before merge.",
        ],
      },
      {
        title: "Security developers actually keep",
        paragraphs: [
          "Tooling is selected for your stack and tuned so the build only fails on issues worth stopping for. AI-assisted review suppresses findings that aren't reachable and proposes fixes as pull requests your developers review, not a PDF they have to translate.",
        ],
      },
      {
        title: "Compliance evidence from the pipeline",
        items: [
          "<strong>Change management:</strong> every production change reviewed, approved and traceable, which is what SOC 2's change-management criteria and ISO 27001 auditors look for.",
          "<strong>Separation of duties:</strong> nobody merges and deploys their own unreviewed code.",
          "<strong>Vulnerability management:</strong> scan results and fixes tracked over time.",
          "<strong>Software supply chain:</strong> SBOMs and provenance for what you ship.",
        ],
      },
      {
        title: "Securing the pipeline itself",
        items: [
          "Least-privilege CI credentials and short-lived tokens instead of long-lived cloud keys.",
          "Secrets stored in a secrets manager, not in pipeline files.",
          "Pinned third-party actions and build images.",
          "Audit logs for who changed the pipeline and when.",
        ],
      },
      {
        title: "A secure pipeline, stage by stage",
        table: {
          headers: [
            "Stage",
            "Checks we add",
          ],
          rows: [
            [
              "Before commit",
              "Secrets scanning in pre-commit hooks",
            ],
            [
              "Pull request",
              "SAST, dependency checks and required reviews",
            ],
            [
              "Build",
              "Container and infrastructure-as-code scanning",
            ],
            [
              "Release",
              "SBOM generation, artifact signing and provenance",
            ],
            [
              "Deploy",
              "Policy checks, protected environments and approvals",
            ],
          ],
        },
      },
      {
        title: "Common CI/CD weaknesses",
        items: [
          "Long-lived cloud keys stored as pipeline secrets instead of short-lived, federated credentials.",
          "Third-party actions and images referenced by tag rather than pinned to a specific version.",
          "Workflows that run untrusted pull request code with access to secrets, such as risky uses of GitHub's pull_request_target trigger.",
          "Pipeline tokens with far more permissions than the job needs.",
          "Secrets printed into build logs.",
        ],
      },
      {
        title: "Mapping pipeline controls to SOC 2 and ISO 27001",
        table: {
          headers: [
            "Control area",
            "SOC 2",
            "ISO 27001:2022",
          ],
          rows: [
            [
              "Change management",
              "CC8.1",
              "A.8.32 Change management",
            ],
            [
              "Secure development",
              "CC8.1",
              "A.8.25 Secure development life cycle, A.8.28 Secure coding",
            ],
            [
              "Vulnerability management",
              "CC7.1",
              "A.8.8 Management of technical vulnerabilities",
            ],
          ],
        },
        after: [
          "The pipeline then produces evidence for these controls as a side effect of normal work, instead of a scramble before each audit.",
        ],
      },
      {
        title: "Rolling it out without slowing developers down",
        items: [
          "Start new checks in report-only mode, so nobody's build breaks on day one.",
          "Fix or formally accept the existing backlog, then fail builds only on new critical issues.",
          "Give each check an owner, so findings don't pile up unread.",
          "Show results inside pull requests, where developers already work.",
          "Review noise monthly, and tune or remove checks that nobody acts on.",
        ],
      },
    ],
    steps: [
      { title: "Review", body: "Your repositories, pipelines and release process." },
      { title: "Integrate", body: "Add the right checks for your stack, in pull requests." },
      { title: "Tune", body: "Cut false positives so developers trust the results." },
      { title: "Evidence", body: "Map pipeline controls to SOC 2 and ISO 27001 requirements." },
    ],
    faqs: [
      {
        q: "Will security scanning slow our builds down?",
        a: "It shouldn't. We tune tools so the build fails only on issues worth stopping for, run heavier scans in parallel or on a schedule, and suppress findings that aren't reachable.",
      },
      {
        q: "Which CI/CD platforms do you work with?",
        a: "Common platforms such as GitHub Actions, GitLab CI, Bitbucket Pipelines, Azure DevOps and Jenkins.",
      },
      {
        q: "Do we need DevSecOps for SOC 2?",
        a: "SOC 2 doesn't require specific tools, but auditors look for controlled, reviewed changes and vulnerability management. A secure pipeline produces much of that evidence automatically.",
      },
      {
        q: "Can you secure mobile app builds?",
        a: "Yes. We add static analysis and dependency checks to iOS and Android builds and review how secrets and signing keys are handled.",
      },
      {
        q: "How do we get started?",
        a: "Book a free 30-minute assessment. We'll look at your pipeline and outline the quickest wins.",
      },
    ],
    guides: ["soc-2-compliance-checklist-for-startups"],
    keywords: [
      "CI/CD security",
      "DevSecOps services",
      "DevSecOps compliance",
      "pipeline security",
      "SAST SCA",
      "software supply chain security",
      "CI/CD compliance",
    ],
    updatedAt: "2026-11-27",
  },
];

export function getServiceTopic(serviceId: string, slug: string) {
  return serviceTopics.find((p) => p.serviceId === serviceId && p.slug === slug);
}
