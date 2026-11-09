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
  tags: string[];
  readingTime: number;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mcp-security-risks",
    title: "MCP Security Risks: What to Check Before You Connect",
    excerpt:
      "The Model Context Protocol makes it easy to give AI assistants new tools. It also makes it easy to give an attacker a path into your data. Here are the risks, and a checklist to use before you connect.",
    metaDescription:
      "Model Context Protocol (MCP) security risks explained: tool poisoning, rug pulls, prompt injection, token theft, and a checklist to vet MCP servers safely.",
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
    title: "AI-Powered MDR: What It Is and How It Actually Works",
    excerpt:
      "Every security vendor now says “AI.” Here is what AI genuinely improves in managed detection and response, where humans are still essential, and what to ask a provider.",
    metaDescription:
      "What AI-powered MDR really means, how AI triage reduces alert fatigue, where human analysts still matter, and how to evaluate MDR providers.",
    publishedAt: "2026-10-14",
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
    title: "Penetration Testing vs. Vulnerability Scanning: Which Do You Need?",
    excerpt:
      "They sound similar and are often confused, even in RFPs. Here is the real difference, what each costs you in time and effort, and how to combine them.",
    metaDescription:
      "Penetration testing vs. vulnerability scanning explained: how they differ, when you need each, compliance requirements, and how to combine them effectively.",
    publishedAt: "2026-09-30",
    category: "Offensive Security",
    relatedService: "penetration-testing",
    tags: ["penetration testing", "vulnerability scanning", "pentest", "vulnerability management", "PCI DSS", "SOC 2"],
    readingTime: 6,
    body: [
      {
        type: "p",
        text: "A vulnerability scan and a penetration test both look for security weaknesses, but they answer different questions. A scan asks <em>what known issues might exist?</em> A penetration test asks <em>what could an attacker actually do?</em>",
      },
      { type: "h2", text: "Vulnerability scanning" },
      {
        type: "p",
        text: "Scanning is automated. Tools probe systems for missing patches, outdated software, weak configurations, and known vulnerabilities (CVEs). Scans are fast, repeatable, and should run continuously.",
      },
      {
        type: "ul",
        items: [
          "<strong>Strengths:</strong> broad coverage, frequent, relatively low cost.",
          "<strong>Limitations:</strong> false positives, no business-logic testing, and no proof of real-world impact.",
        ],
      },
      { type: "h2", text: "Penetration testing" },
      {
        type: "p",
        text: "A penetration test is performed by skilled security testers who think like attackers. They use scanners as a starting point, then manually exploit weaknesses, chain low-severity issues into high-impact attacks, and test logic that no tool understands, such as whether one customer can see another customer's invoices by changing an ID.",
      },
      {
        type: "ul",
        items: [
          "<strong>Strengths:</strong> proves impact, finds logic flaws and chained attacks, removes false positives.",
          "<strong>Limitations:</strong> point-in-time, more effort, scoped to specific targets.",
        ],
      },
      {
        type: "table",
        headers: ["", "Vulnerability scan", "Penetration test"],
        rows: [
          ["Performed by", "Automated tools", "Security testers, assisted by tools"],
          ["Frequency", "Continuous / weekly", "Annually and after major changes"],
          ["Finds logic flaws", "Rarely", "Yes"],
          ["Proves exploitability", "No", "Yes"],
          ["Output", "List of potential issues", "Validated findings with attack narrative"],
        ],
      },
      { type: "h2", text: "What compliance frameworks expect" },
      {
        type: "p",
        text: "PCI DSS explicitly requires both regular vulnerability scans and periodic penetration testing. SOC 2 and ISO 27001 do not prescribe a pentest by name, but auditors and enterprise customers routinely expect one as evidence that controls work. Always confirm specifics with your auditor.",
      },
      { type: "h2", text: "How to combine them" },
      {
        type: "ol",
        items: [
          "Run continuous vulnerability scanning and fix issues by risk, not just CVSS score.",
          "Commission a penetration test at least annually and after significant changes such as a new product, major release, or cloud migration.",
          "Feed pentest findings back into your scanning and detection so the same class of issue is caught automatically next time.",
          "Retest after remediation to prove fixes work.",
        ],
      },
      {
        type: "p",
        text: "See EclipticLink's <a href=\"/services/penetration-testing\">penetration testing</a> and <a href=\"/services/vulnerability-management\">vulnerability management</a> services.",
      },
    ],
  },
  {
    slug: "soc-2-compliance-checklist-for-startups",
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
          "Annual penetration test",
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
        text: "EclipticLink's <a href=\"/services/compliance-grc\">compliance and GRC team</a> runs gap assessments, implements missing controls, and automates evidence so your audit is predictable.",
      },
    ],
  },
  {
    slug: "common-cloud-security-misconfigurations",
    title: "8 Cloud Security Misconfigurations Attackers Look for First",
    excerpt:
      "Most cloud breaches are not sophisticated zero-days. They are simple misconfigurations. Here are the ones attackers check first in AWS, Azure, and GCP, and how to fix them.",
    metaDescription:
      "The most common cloud misconfigurations in AWS, Azure, and GCP, from public storage and over-privileged IAM to leaked keys, and how to fix them.",
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
        text: "EclipticLink's <a href=\"/services/cloud-security\">cloud security</a> assessments cover AWS, Azure, GCP, and Kubernetes, with fixes delivered as infrastructure-as-code.",
      },
    ],
  },
  {
    slug: "incident-response-plan-first-24-hours",
    title: "Incident Response: What to Do in the First 24 Hours of a Breach",
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
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
