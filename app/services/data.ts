export type SubService = {
  id: string;
  title: string;
  summary: string;
  details: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  details: string;
  metaDescription?: string;
  subServices: SubService[];
};

export const services: Service[] = [
  {
    id: "ai-automations",
    title: "Lead & CRM Systems",
    summary:
      "Follow-up, pipelines, and booking workflows on GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier.",
    details:
      "We design the systems that answer inbound interest, keep CRM stages honest, and carry nurture without someone living in the inbox. Whether you run GoHighLevel, HubSpot, Zoho, or a mix of n8n, Make, and Zapier, we connect the tools you already trust to how your team actually sells.",
    metaDescription:
      "Lead follow-up and CRM systems on GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier. Built for response time, pipeline hygiene, and booked conversations.",
    subServices: [
      {
        id: "lead-follow-up-automation",
        title: "Lead & Follow-Up Systems",
        summary: "Instant replies, multi-touch sequences, and no lead left waiting.",
        details:
          "Form fills, missed calls, and chat inquiries trigger the right next step: a fast reply, an owner, and a path that does not depend on someone remembering to follow up. Multi-channel nurture keeps interest warm until a human conversation makes sense.",
      },
      {
        id: "crm-sales-pipeline-automation",
        title: "CRM & Pipeline Workflows",
        summary: "HubSpot, Zoho, and GoHighLevel stages that update themselves.",
        details:
          "We configure pipelines so stage changes, tasks, scoring, and handoffs happen when they should. Marketing and sales see the same truth, and nobody has to babysit a spreadsheet to know what is next.",
      },
      {
        id: "workflow-automation-n8n-make-zapier",
        title: "Workflow Orchestration (n8n, Make, Zapier)",
        summary: "Connect the apps you already use and cut the copy-paste tax.",
        details:
          "From simple two-step connections to branched flows with logging and retries, we build n8n, Make, and Zapier workflows that sync data and trigger the right action without becoming a maintenance nightmare.",
      },
      {
        id: "ai-outreach-nurture-sequences",
        title: "Outreach & Nurture Sequences",
        summary: "Email, SMS, and messaging that stay personal at scale.",
        details:
          "Sequences that segment, personalize, and time follow-ups with care, wired into your CRM so cold leads get a second chance and warm ones are not ignored. Written to sound like your team, not a robot.",
      },
      {
        id: "omnichannel-booking-automation",
        title: "Booking & Omnichannel Journeys",
        summary: "Appointments, reminders, and recovery when someone no-shows.",
        details:
          "We automate booking, reminders, and no-show recovery across email, SMS, chat, and voice, often inside GoHighLevel or connected through n8n or Make. Fewer empty calendar slots, less coordinator busywork.",
      },
    ],
  },
  {
    id: "operations-automation",
    title: "Operations Automation",
    summary:
      "Workflows that remove repetitive ops work - approvals, handoffs, data sync, and internal process automation.",
    details:
      "We map how work actually moves through operations, then build systems that cut copy-paste, chase, and manual checks. Approvals, ticket routing, document handoffs, and cross-tool sync - designed so your team spends time on exceptions, not the routine.",
    metaDescription:
      "Operations automation for approvals, handoffs, data sync, and internal workflows. Built around your process, not a platform pitch.",
    subServices: [
      {
        id: "business-process-automation",
        title: "Business Process Automation",
        summary: "Turn repetitive ops steps into reliable, owned workflows.",
        details:
          "We document the process, remove dead ends, and automate the steps that should not need a human every time - with clear ownership when something needs judgment.",
      },
      {
        id: "ops-workflow-orchestration",
        title: "Workflow Orchestration",
        summary: "Multi-step flows across the tools your ops team already uses.",
        details:
          "Approvals, notifications, status updates, and retries wired through n8n, Make, Zapier, or custom glue - so handoffs do not die in inboxes.",
      },
      {
        id: "internal-data-sync",
        title: "Internal Data Sync",
        summary: "Keep systems of record aligned without spreadsheet babysitting.",
        details:
          "Sync customers, orders, tickets, and inventory between the apps ops relies on, with logging so you can see what moved and what failed.",
      },
      {
        id: "ops-exception-handling",
        title: "Exception & Escalation Paths",
        summary: "Automation that knows when to involve a human.",
        details:
          "Rules and alerts for the cases that should not auto-complete - so the system stays trusted and people focus on the work that matters.",
      },
    ],
  },
  {
    id: "ai",
    title: "Intelligent Products",
    summary:
      "Assistants, LLM features, and AI-native products grounded in your data and processes.",
    details:
      "When a workflow needs judgment, language, or retrieval, we build the product layer: conversational assistants, RAG systems, model integrations, and AI-native SaaS. Designed for production, not a demo that dies in a slide deck.",
    metaDescription:
      "Custom AI product development: assistants, LLM integrations, RAG systems, and AI-native SaaS built for production use.",
    subServices: [
      {
        id: "ai-integrations",
        title: "AI Integrations",
        summary: "Bring models and APIs into the systems you already run.",
        details:
          "We embed intelligence into CRMs, internal tools, and customer-facing apps so teams can enrich data, route work, and make decisions without rebuilding everything from scratch.",
      },
      {
        id: "ai-chatbots-virtual-assistants",
        title: "Assistants & Chatbots",
        summary: "Conversational help for support, sales, and internal knowledge.",
        details:
          "Assistants that qualify leads, answer from your knowledge base, or take routine work off your team. Powered by LLMs and your content, tuned to sound on-brand and stay useful after launch.",
      },
      {
        id: "ai-saas-development",
        title: "AI-Native SaaS",
        summary: "Products where intelligence is part of the core experience.",
        details:
          "From early MVP to a product that can scale, we design and build SaaS where models, embeddings, or agents sit at the center. Architecture, security, and cost discipline included.",
      },
      {
        id: "custom-llm-rag-solutions",
        title: "LLM & RAG Solutions",
        summary: "Answers and agents grounded in your documents and systems.",
        details:
          "RAG pipelines and agent workflows that pull from your documents and systems of record. Accurate enough for real work, auditable enough for stakeholders who care about where answers come from.",
      },
    ],
  },
  {
    id: "custom-software-development",
    title: "Custom Software",
    summary:
      "Web apps, SaaS, and enterprise tools when off-the-shelf stops fitting.",
    details:
      "When platforms and workflows are not enough, we design and build the software underneath: enterprise applications, SaaS products, APIs, and integrations that scale with how you operate.",
    metaDescription:
      "Custom software development for SaaS, enterprise apps, and APIs that fit how your business actually works.",
    subServices: [
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        summary: "Internal tools shaped around your processes.",
        details:
          "Applications for operations, reporting, and workflow that match how your organization already works, with role-based access and room to grow.",
      },
      {
        id: "saas-product-development",
        title: "SaaS Product Development",
        summary: "Multi-tenant products from concept through scale.",
        details:
          "Billing, analytics, admin tooling, and the performance and security work that comes with serving real customers, not just a prototype.",
      },
      {
        id: "system-integration",
        title: "System Integration",
        summary: "Connect CRMs, payments, identity, and internal services.",
        details:
          "APIs, webhooks, and event-driven links between the systems that matter, documented so the next engineer can maintain them.",
      },
      {
        id: "custom-api-development",
        title: "Custom API Development",
        summary: "REST, GraphQL, and event APIs with clear contracts.",
        details:
          "APIs that serve your apps, partners, and internal services with versioning and documentation so the ecosystem can evolve without breaking.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile Apps",
    summary:
      "Native and cross-platform apps that sit alongside your web and CRM stack.",
    details:
      "Consumer apps, B2B tools, and companions to the workflows you already run. Native or cross-platform, from early build to store launch.",
    metaDescription:
      "Mobile app development for iOS, Android, React Native, Flutter, and PWAs connected to your existing systems.",
    subServices: [
      {
        id: "native-ios-development",
        title: "Native iOS Development",
        summary: "Swift apps that feel at home on iPhone and iPad.",
        details:
          "Native iOS work with Swift and Apple frameworks, through App Store submission and ongoing updates.",
      },
      {
        id: "native-android-development",
        title: "Native Android Development",
        summary: "Kotlin apps built for the Android ecosystem.",
        details:
          "Native Android with Kotlin and Jetpack, Material Design, offline support, and Play Store readiness.",
      },
      {
        id: "cross-platform-development",
        title: "Cross-Platform Development",
        summary: "One codebase for iOS and Android with React Native or Flutter.",
        details:
          "Ship both platforms without doubling the team, with quality high enough for production use, not just an MVP demo.",
      },
      {
        id: "progressive-web-apps",
        title: "Progressive Web Apps (PWA)",
        summary: "Installable web apps that work offline.",
        details:
          "Reach across devices without separate store listings, or use a PWA as a companion to native apps.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "CI/CD, infrastructure, and reliability so releases stay boring in the best way.",
    details:
      "Pipelines, infrastructure as code, and cloud strategy so products and integrations deploy often, recover quickly, and scale when traffic asks for it.",
    metaDescription:
      "Cloud and DevOps: CI/CD, infrastructure as code, migration, and monitoring for reliable delivery.",
    subServices: [
      {
        id: "ci-cd-pipelines",
        title: "CI/CD Pipelines",
        summary: "Build, test, and deploy without the manual ritual.",
        details:
          "GitHub Actions, GitLab CI, Jenkins, or cloud-native tools wired so every commit can move safely toward production.",
      },
      {
        id: "infrastructure-as-code",
        title: "Infrastructure as Code",
        summary: "Repeatable cloud with Terraform, Pulumi, or CloudFormation.",
        details:
          "Servers, networks, and services defined as code so environments stay consistent and reviewable.",
      },
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        summary: "Move workloads with a plan, not a leap of faith.",
        details:
          "Phased migrations with rollback options and cost visibility, whether you lift-and-shift or reshape along the way.",
      },
      {
        id: "monitoring-reliability",
        title: "Monitoring & Reliability",
        summary: "Know when something breaks, and why.",
        details:
          "Logging, metrics, tracing, and alerting with runbooks that shorten recovery time when production misbehaves.",
      },
    ],
  },
  {
    id: "big-data",
    title: "Data & Analytics",
    summary:
      "Pipelines, warehouses, and BI that give teams numbers they can trust.",
    details:
      "We help you ingest, store, and explore data at scale, so reporting and intelligent features rest on a foundation that stays fresh and governable.",
    metaDescription:
      "Data pipelines, warehouses, analytics, and ML-ready infrastructure for teams that need trustworthy numbers.",
    subServices: [
      {
        id: "data-pipelines",
        title: "Data Pipeline Development",
        summary: "Ingest, transform, and deliver data you can rely on.",
        details:
          "Batch and streaming pipelines with monitoring and fault tolerance so downstream teams are not guessing.",
      },
      {
        id: "analytics-business-intelligence",
        title: "Analytics & Business Intelligence",
        summary: "Dashboards and self-service reporting for decision-makers.",
        details:
          "BI that stakeholders can explore without filing a ticket for every chart, with attention to performance and access control.",
      },
      {
        id: "data-warehouse-solutions",
        title: "Data Warehouse Solutions",
        summary: "A single place for reporting and model training.",
        details:
          "Warehouses and lakehouses on platforms like Snowflake, BigQuery, Redshift, or Databricks, designed with schema and governance in mind.",
      },
      {
        id: "ml-ai-data-integration",
        title: "ML & AI Data Integration",
        summary: "Clean feeds for training and production inference.",
        details:
          "Feature stores, training pipelines, and production data paths so models stay useful after the pilot ends.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "Interfaces for dashboards, products, and customer-facing apps people can actually use.",
    details:
      "Research, wireframes, prototypes, and polished UI for the tools your teams and customers live in every day.",
    metaDescription:
      "UI/UX design for product interfaces, dashboards, and brand systems that stay clear as you scale.",
    subServices: [
      {
        id: "user-research-discovery",
        title: "User Research & Discovery",
        summary: "Learn what users need before you build the wrong thing.",
        details:
          "Interviews, surveys, and journey work that align stakeholders and set direction before design and engineering spend.",
      },
      {
        id: "wireframing-prototyping",
        title: "Wireframing & Prototyping",
        summary: "Test flows early with low- and high-fidelity prototypes.",
        details:
          "Prototypes that expose friction before code, with specs developers can implement without guessing.",
      },
      {
        id: "ui-visual-design",
        title: "UI & Visual Design",
        summary: "Clear screens with consistent type, color, and components.",
        details:
          "High-fidelity UI and assets that stay accessible, on-brand, and ready for handoff.",
      },
      {
        id: "ux-experience-design",
        title: "UX & Experience Design",
        summary: "Information architecture and flows that finish the job.",
        details:
          "Navigation, interaction patterns, and microcopy aimed at completion, not decoration.",
      },
      {
        id: "design-systems",
        title: "Design Systems & Component Libraries",
        summary: "Shared tokens and components as the product grows.",
        details:
          "Documented systems so design and engineering stay aligned and new screens do not reinvent the wheel.",
      },
      {
        id: "branding-visual-identity",
        title: "Branding & Visual Identity",
        summary: "Logo, palette, and guidelines that hold together in market.",
        details:
          "Identity work for new brands or refreshes, so product and marketing present one coherent face.",
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
