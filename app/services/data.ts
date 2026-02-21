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
    id: "ai",
    title: "Artificial Intelligence",
    summary:
      "Intelligent solutions powered by machine learning and AI to automate processes, integrate smart systems, and unlock insights.",
    details:
      "We build AI-powered applications, integrations, and intelligent automation to help you make data-driven decisions and scale operations. From chatbots and virtual assistants to full AI SaaS products, we deliver end-to-end AI solutions tailored to your business.",
    metaDescription:
      "EclipticLink AI services: integrations, automation, chatbots, virtual assistants, and AI SaaS development. Unlock insights and scale operations.",
    subServices: [
      {
        id: "ai-integrations",
        title: "AI Integrations",
        summary: "Connect your systems and workflows with AI-powered integrations.",
        details:
          "We integrate AI models and APIs into your existing software—CRMs, ERPs, internal tools—so you can automate decisions, enrich data, and add intelligence without rebuilding from scratch. Secure, scalable, and tailored to your stack.",
      },
      {
        id: "ai-automations",
        title: "AI Automations",
        summary: "Automate repetitive tasks and workflows with intelligent automation.",
        details:
          "From document processing and classification to workflow orchestration and decision automation, we design and implement AI-driven automations that reduce manual work, cut errors, and free your team for higher-value tasks.",
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
    ],
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    summary:
      "Tailored software solutions—from enterprise applications to SaaS—built to fit your business and scale with you.",
    details:
      "We design and build custom software that solves your specific problems: enterprise applications, SaaS products, workflow tools, and integrations. Our solutions are scalable, maintainable, and aligned with your goals from day one.",
    metaDescription:
      "Custom software development: enterprise apps, SaaS, workflow tools. Scalable, maintainable solutions from EclipticLink.",
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
      "Native and cross-platform mobile apps that deliver great experiences on iOS, Android, and beyond.",
    details:
      "We build mobile applications that users love—native or cross-platform, from MVP to App Store launch. Whether you need a consumer app, B2B tool, or companion to an existing product, we deliver performant, maintainable solutions.",
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
      "Seamless CI/CD, cloud-native infrastructure, and DevOps practices so you ship faster and more reliably.",
    details:
      "We design and implement CI/CD pipelines, infrastructure as code, and cloud strategies so your team can deploy frequently, recover quickly, and scale on demand. From migration to day-two operations, we help you build a robust DevOps culture.",
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
      "Store, process, and derive value from large-scale data with pipelines, analytics, and AI-ready infrastructure.",
    details:
      "We help you handle terabytes of data with efficient storage, fast retrieval, and clear analytics. From data pipelines and warehouses to BI and ML integration, we build the foundation for data-driven decisions and AI at scale.",
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
      "User-first design that increases engagement, clarity, and conversion—from research and wireframes to high-fidelity UI and design systems.",
    details:
      "We create interfaces and experiences that users love. Through user research, wireframing, prototyping, and polished UI design, we deliver consistent, accessible, and scalable design systems that align with your brand and business goals.",
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
