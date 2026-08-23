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
    title: "AI Automations",
    summary:
      "Automate leads, follow-ups, pipelines, and CRM workflows with GoHighLevel, n8n, Make, Zapier, HubSpot, and Zoho.",
    details:
      "We design and implement AI-powered business automations that capture leads, nurture prospects, and keep your pipeline moving—without manual follow-up. From GoHighLevel and HubSpot to n8n, Make, Zapier, and Zoho, we connect the tools you already use and add intelligent automation so your team focuses on closing, not chasing.",
    metaDescription:
      "AI automation services for leads, follow-ups & CRM workflows. GoHighLevel, n8n, Make, Zapier, HubSpot & Zoho specialists at EclipticLink.",
    subServices: [
      {
        id: "lead-follow-up-automation",
        title: "Lead & Follow-Up Automation",
        summary: "Instant response, multi-touch follow-ups, and no-lead-left-behind sequences.",
        details:
          "We build automated lead capture and follow-up systems that respond in seconds, run multi-channel nurture sequences, and escalate hot leads to your team. Missed calls, form fills, and chat inquiries trigger the right next step every time—so conversion does not depend on someone remembering to follow up.",
      },
      {
        id: "crm-sales-pipeline-automation",
        title: "CRM & Sales Pipeline Automation",
        summary: "HubSpot, Zoho, and GoHighLevel pipelines that update and move deals automatically.",
        details:
          "We configure and automate CRM pipelines in HubSpot, Zoho CRM, and GoHighLevel (GHL): stage updates, task creation, deal scoring, and handoffs between marketing and sales. Your CRM stays accurate, and your team always knows what to do next.",
      },
      {
        id: "workflow-automation-n8n-make-zapier",
        title: "Workflow Automation (n8n, Make, Zapier)",
        summary: "Connect apps and orchestrate complex workflows across your stack.",
        details:
          "We build reliable automations in n8n, Make (Integromat), and Zapier that sync data, trigger actions across tools, and reduce copy-paste work. From simple two-step zaps to multi-branch workflows with error handling and logging, we design automations that scale with your operations.",
      },
      {
        id: "ai-outreach-nurture-sequences",
        title: "AI-Powered Outreach & Nurture",
        summary: "Personalized email, SMS, and messaging sequences powered by AI.",
        details:
          "We design outreach and nurture campaigns that use AI to personalize messaging, segment audiences, and time follow-ups. Combined with your CRM and marketing tools, these sequences keep prospects warm and re-engage cold leads without sounding robotic.",
      },
      {
        id: "omnichannel-booking-automation",
        title: "Omnichannel & Booking Automation",
        summary: "Appointments, reminders, and multi-channel customer journeys on autopilot.",
        details:
          "We automate appointment booking, reminders, no-show recovery, and omnichannel journeys across email, SMS, chat, and voice—often inside GoHighLevel or connected via n8n/Make. Fewer no-shows, faster bookings, and a consistent customer experience.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI Development",
    summary:
      "Custom AI applications, chatbots, LLM integrations, and intelligent products built for your business.",
    details:
      "We build AI-powered products and features: conversational assistants, RAG systems, model integrations, and AI-native SaaS. Whether you need to embed intelligence into an existing product or launch a new AI application, we deliver end-to-end AI development tailored to your stack and goals.",
    metaDescription:
      "AI development services — custom chatbots, LLM integrations, RAG, and AI SaaS. Build intelligent products with EclipticLink.",
    subServices: [
      {
        id: "ai-integrations",
        title: "AI Integrations",
        summary: "Connect your systems and products with AI models and APIs.",
        details:
          "We integrate AI models and APIs into your existing software—CRMs, ERPs, internal tools, and customer-facing apps—so you can automate decisions, enrich data, and add intelligence without rebuilding from scratch. Secure, scalable, and tailored to your stack.",
      },
      {
        id: "ai-chatbots-virtual-assistants",
        title: "AI Chatbots & Virtual Assistants",
        summary: "Conversational AI for support, sales, and internal productivity.",
        details:
          "We build custom chatbots and virtual assistants for customer support, lead qualification, internal knowledge bases, and task automation. Powered by LLMs and your data, they deliver consistent, on-brand conversations at scale.",
      },
      {
        id: "ai-saas-development",
        title: "AI SaaS Development",
        summary: "Build and scale AI-first SaaS products and platforms.",
        details:
          "From MVP to scale, we design and develop AI-native SaaS applications—embedding, fine-tuning, or building on top of foundation models. We handle architecture, security, and scalability so you can focus on product and growth.",
      },
      {
        id: "custom-llm-rag-solutions",
        title: "Custom LLM & RAG Solutions",
        summary: "Retrieval-augmented generation and LLM apps grounded in your data.",
        details:
          "We design RAG pipelines, agent workflows, and custom LLM applications that answer from your documents, knowledge bases, and systems of record. Accurate, auditable, and production-ready—not generic chatbot demos.",
      },
    ],
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    summary:
      "Full-stack web apps, SaaS, and enterprise software that support your automations and products.",
    details:
      "When off-the-shelf tools are not enough, we design and build custom software—enterprise applications, SaaS products, workflow tools, and APIs—that integrate with your AI automations and scale with your business.",
    metaDescription:
      "Custom software development for enterprise apps, SaaS products, APIs, and integrations. Scalable full-stack solutions from EclipticLink.",
    subServices: [
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        summary: "Custom business applications for internal operations and workflows.",
        details:
          "We build enterprise-grade applications tailored to your processes—resource planning, workflow automation, reporting dashboards, and internal tools. Secure, role-based, and designed to grow with your organization.",
      },
      {
        id: "saas-product-development",
        title: "SaaS Product Development",
        summary: "End-to-end SaaS product design, development, and scaling.",
        details:
          "From concept to launch and scale, we build multi-tenant SaaS products with subscription billing, analytics, and admin tooling. We focus on performance, security, and a great user experience so you can acquire and retain customers.",
      },
      {
        id: "system-integration",
        title: "System Integration",
        summary: "Connect your systems, APIs, and third-party services seamlessly.",
        details:
          "We integrate your software with CRMs, payment gateways, identity providers, and internal systems via APIs, webhooks, and event-driven architecture. Reliable, documented, and built for maintainability.",
      },
      {
        id: "custom-api-development",
        title: "Custom API Development",
        summary: "REST, GraphQL, and event-driven APIs that power your ecosystem.",
        details:
          "We design and implement APIs that serve your web and mobile apps, partners, and internal services. REST and GraphQL APIs with clear contracts, versioning, and documentation so your ecosystem can evolve safely.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Native and cross-platform mobile apps that complement your AI and automation stack.",
    details:
      "We build mobile applications—native or cross-platform—from MVP to App Store launch. Consumer apps, B2B tools, and companions to your automated workflows and web products.",
    metaDescription:
      "Mobile app development: native iOS/Android, cross-platform, PWA. End-to-end design and development from EclipticLink.",
    subServices: [
      {
        id: "native-ios-development",
        title: "Native iOS Development",
        summary: "High-performance iOS apps built with Swift and native frameworks.",
        details:
          "We develop native iOS applications using Swift and the latest Apple frameworks. From UI/UX to App Store submission and updates, we deliver apps that feel at home on iPhone and iPad and leverage platform capabilities fully.",
      },
      {
        id: "native-android-development",
        title: "Native Android Development",
        summary: "Native Android apps with Kotlin and modern Android SDK.",
        details:
          "We build native Android apps with Kotlin and Jetpack, optimized for a wide range of devices and form factors. Material Design, offline support, and Play Store readiness are standard in our delivery.",
      },
      {
        id: "cross-platform-development",
        title: "Cross-Platform Development",
        summary: "One codebase for iOS and Android with React Native or Flutter.",
        details:
          "We use React Native or Flutter to ship iOS and Android apps from a single codebase, reducing cost and time to market while keeping quality high. Ideal for MVPs, B2B tools, and apps where code reuse matters.",
      },
      {
        id: "progressive-web-apps",
        title: "Progressive Web Apps (PWA)",
        summary: "Web apps that install like native and work offline.",
        details:
          "We build PWAs that run in the browser, install on home screens, and work offline. Perfect when you need reach across devices without maintaining separate app store listings, or as a companion to native apps.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "CI/CD, cloud infrastructure, and DevOps so your automations and apps run reliably.",
    details:
      "We design CI/CD pipelines, infrastructure as code, and cloud strategies so your automations, AI services, and products deploy frequently, recover quickly, and scale on demand.",
    metaDescription:
      "Cloud & DevOps: CI/CD, infrastructure as code, cloud migration, monitoring. Ship faster and more reliably with EclipticLink.",
    subServices: [
      {
        id: "ci-cd-pipelines",
        title: "CI/CD Pipelines",
        summary: "Automated build, test, and deployment pipelines.",
        details:
          "We set up and tune CI/CD pipelines so every commit can be built, tested, and deployed automatically. From GitHub Actions and GitLab CI to Jenkins and cloud-native tools, we reduce manual steps and deployment risk.",
      },
      {
        id: "infrastructure-as-code",
        title: "Infrastructure as Code",
        summary: "Manage cloud infrastructure with Terraform, Pulumi, or CloudFormation.",
        details:
          "We define your servers, networks, and services as code so infrastructure is repeatable, versioned, and reviewable. Terraform, Pulumi, or CloudFormation on AWS, GCP, or Azure—you get consistency and fewer surprises.",
      },
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        summary: "Move workloads to the cloud with minimal disruption.",
        details:
          "We plan and execute cloud migrations—lift-and-shift or refactor—with clear phases, rollback options, and cost visibility. We help you choose the right cloud and services and leave you with a maintainable setup.",
      },
      {
        id: "monitoring-reliability",
        title: "Monitoring & Reliability",
        summary: "Observability, alerting, and incident response practices.",
        details:
          "We implement logging, metrics, tracing, and alerting so you know when something breaks and why. From APM and dashboards to runbooks and on-call practices, we help you improve reliability and mean time to recovery.",
      },
    ],
  },
  {
    id: "big-data",
    title: "Big Data",
    summary:
      "Data pipelines, analytics, and AI-ready infrastructure that feed your automations.",
    details:
      "We help you store, process, and derive value from large-scale data—pipelines, warehouses, BI, and ML-ready foundations that power smarter automations and AI products.",
    metaDescription:
      "Big Data solutions: data pipelines, analytics, warehousing, ML integration. Store, process, and derive value from large-scale data.",
    subServices: [
      {
        id: "data-pipelines",
        title: "Data Pipeline Development",
        summary: "Reliable ingestion, transformation, and delivery of data at scale.",
        details:
          "We design and build batch and streaming data pipelines that ingest from multiple sources, transform and clean data, and load into warehouses or lakes. With fault tolerance and monitoring, your data stays fresh and trustworthy.",
      },
      {
        id: "analytics-business-intelligence",
        title: "Analytics & Business Intelligence",
        summary: "Dashboards, reports, and self-service analytics for your teams.",
        details:
          "We implement BI solutions—dashboards, reports, and self-service analytics—so stakeholders can explore data and make decisions. Integrated with your data warehouse or lake, with attention to performance and governance.",
      },
      {
        id: "data-warehouse-solutions",
        title: "Data Warehouse Solutions",
        summary: "Centralized, queryable data stores for analytics and AI.",
        details:
          "We design and build data warehouses and lakehouses (e.g. Snowflake, BigQuery, Redshift, Databricks) so you have a single source of truth for reporting and ML. Schema design, optimization, and access controls included.",
      },
      {
        id: "ml-ai-data-integration",
        title: "ML & AI Data Integration",
        summary: "Data infrastructure and pipelines that feed ML and AI models.",
        details:
          "We connect your big data systems to ML pipelines—feature stores, training pipelines, and inference. Clean, consistent data for training and production so your models stay accurate and your AI initiatives scale.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "User-first design for automation dashboards, AI products, and customer-facing apps.",
    details:
      "We create interfaces and experiences that users love—research, wireframes, prototypes, and polished UI for automation tools, AI products, and full-stack applications.",
    metaDescription:
      "UI/UX design: user research, wireframes, prototypes, visual design, design systems. User-first interfaces from EclipticLink.",
    subServices: [
      {
        id: "user-research-discovery",
        title: "User Research & Discovery",
        summary: "Understand your users and validate product direction.",
        details:
          "We run interviews, surveys, and usability studies to uncover user needs, pain points, and behaviors. Discovery workshops and journey mapping help align stakeholders and set a clear direction before design and build.",
      },
      {
        id: "wireframing-prototyping",
        title: "Wireframing & Prototyping",
        summary: "Low- and high-fidelity prototypes for validation and development handoff.",
        details:
          "We produce wireframes and interactive prototypes so you can test flows and get feedback early. From quick low-fidelity sketches to high-fidelity prototypes, we bridge the gap between idea and implementation with clear, developer-ready specs.",
      },
      {
        id: "ui-visual-design",
        title: "UI & Visual Design",
        summary: "Pixel-perfect interfaces with consistent typography, color, and components.",
        details:
          "We design screens and components that are clear, accessible, and on-brand. Using established design systems and best practices, we deliver high-fidelity UI with specs and assets that development teams can implement with confidence.",
      },
      {
        id: "ux-experience-design",
        title: "UX & Experience Design",
        summary: "Information architecture, flows, and interaction design for better outcomes.",
        details:
          "We structure information and design flows so users can complete tasks efficiently. From IA and navigation to interaction patterns and microcopy, we focus on usability, accessibility, and measurable improvements in engagement and conversion.",
      },
      {
        id: "design-systems",
        title: "Design Systems & Component Libraries",
        summary: "Scalable, consistent design systems for products and brands.",
        details:
          "We build and document design systems—tokens, components, and patterns—so your product stays consistent as it scales. Component libraries and style guides ensure design and development stay aligned and reduce redundancy across teams.",
      },
      {
        id: "branding-visual-identity",
        title: "Branding & Visual Identity",
        summary: "Logo, brand guidelines, and visual identity that reflect your positioning.",
        details:
          "We define or refine your visual identity: logo, color palette, typography, and brand guidelines. From startup branding to refresh of existing assets, we ensure your product and marketing present a coherent, professional face to the world.",
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
