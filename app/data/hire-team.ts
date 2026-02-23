/**
 * Single source of truth for Hire Team categories, positions, slugs, and role metadata.
 * Used by header dropdown, hire page, and role detail pages.
 */

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const HIRE_TEAM_CATEGORIES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Mobile Application",
  "Automation",
  "Backend",
  "Frontend",
  "DevOps",
  "Cloud",
] as const;

export type HireTeamCategory = (typeof HIRE_TEAM_CATEGORIES)[number];

export const HIRE_TEAM_POSITIONS: Record<HireTeamCategory, readonly string[]> = {
  "Artificial Intelligence": [
    "AI Engineer",
    "Generative AI Engineer",
    "Prompt Engineer",
    "AI Solutions Architect",
  ],
  "Machine Learning": [
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "MlOps",
  ],
  "Mobile Application": [
    "Flutter Developer",
    "React Native Developer",
    "Ionic Developer",
    "Android Developer",
    "iOS Developer",
  ],
  Automation: [
    "Automation Engineer",
    "GHL Specialist",
    "n8n automation Developer",
    "Zapier automation Expert",
    "make automation Specialist",
  ],
  Backend: [
    "Nodejs Developer",
    "Golang Developer",
    "Python Developer",
    "PHP Developer",
    "C# Developer",
  ],
  Frontend: [
    "Reactjs Developer",
    "Angular Developer",
    "Vuejs Developer",
    "UI/UX Developer",
    "Wordpress Developer",
  ],
  DevOps: [
    "DevOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Platform Engineer",
    "Infrastructure Engineer",
    "CI/CD Engineer",
    "Cloud DevOps Engineer",
  ],
  Cloud: [
    "Cloud Engineer",
    "Cloud Architect",
    "Cloud Solutions Architect",
    "Cloud Developer",
    "Cloud Security Engineer",
    "AWS Cloud Engineer",
    "Cloud Infrastructure Engineer",
  ],
};

export type RoleSlug = string;

export interface HireRole {
  title: string;
  slug: RoleSlug;
  category: HireTeamCategory;
  shortDescription: string;
  longDescription: string;
}

const roleDescriptions: Record<string, Omit<HireRole, "title" | "slug" | "category">> = {
  "AI Engineer": {
    shortDescription: "Design, build, and deploy AI systems and intelligent applications.",
    longDescription:
      "Our AI Engineers design, build, and deploy production-grade artificial intelligence systems. They combine strong software engineering with expertise in NLP, computer vision, and ML frameworks to deliver scalable, maintainable AI solutions. From model training and evaluation to API integration and monitoring, they ensure your AI initiatives align with business goals and perform reliably in production.",
  },
  "Generative AI Engineer": {
    shortDescription: "Specialists in LLMs, diffusion models, and generative applications.",
    longDescription:
      "Generative AI Engineers at EclipticLink specialize in large language models (LLMs), diffusion models, and agentic systems. They build RAG pipelines, fine-tune foundation models, and integrate generative capabilities into your products—from chatbots and copilots to content generation and code assistance. They stay current with leading providers and open-source tools to deliver secure, cost-effective generative solutions.",
  },
  "Prompt Engineer": {
    shortDescription: "Craft prompts and workflows that maximize LLM performance and reliability.",
    longDescription:
      "Prompt Engineers design, test, and optimize prompts and orchestration workflows for large language models. They combine linguistic clarity with systematic evaluation to improve accuracy, consistency, and safety of AI outputs. Whether you need structured outputs, few-shot patterns, or agent workflows, our Prompt Engineers help you get the most from your LLM investments while reducing brittleness and cost.",
  },
  "AI Solutions Architect": {
    shortDescription: "Define AI strategy, architecture, and roadmaps for enterprise adoption.",
    longDescription:
      "AI Solutions Architects translate business objectives into technical strategy and architecture for AI adoption. They assess feasibility, select models and platforms, design data and MLOps pipelines, and define governance and risk controls. Working with stakeholders and engineering teams, they deliver roadmaps and reference architectures that scale from pilot to production and align with your security and compliance requirements.",
  },
  "Machine Learning Engineer": {
    shortDescription: "Build and maintain ML pipelines, models, and data workflows.",
    longDescription:
      "Machine Learning Engineers develop end-to-end ML systems: data pipelines, feature stores, model training and evaluation, and deployment. They bridge data science and production engineering, ensuring models are reproducible, monitored, and performant. Our MLEs work across domains—recommendation, forecasting, classification, and more—using modern frameworks and cloud ML services to deliver reliable, scalable machine learning at scale.",
  },
  "Deep Learning Engineer": {
    shortDescription: "Implement and optimize neural networks and deep learning systems.",
    longDescription:
      "Deep Learning Engineers design and implement neural network architectures for vision, sequence, and multimodal tasks. They optimize training and inference (e.g., quantization, pruning, distillation) and deploy models on GPU infrastructure and edge devices. With experience in PyTorch, TensorFlow, and specialized hardware, they deliver high-performance deep learning solutions for computer vision, NLP, and other advanced AI applications.",
  },
  MlOps: {
    shortDescription: "Operationalize ML models with CI/CD, monitoring, and governance.",
    longDescription:
      "MLOps engineers operationalize machine learning at scale. They build and maintain CI/CD for models, feature pipelines, experiment tracking, and model registries; implement monitoring, drift detection, and retraining workflows; and ensure governance and compliance. By applying DevOps practices to the ML lifecycle, our MLOps specialists help you ship models faster and keep them accurate and reliable in production.",
  },
  "Flutter Developer": {
    shortDescription: "Build cross-platform mobile and desktop apps with Flutter.",
    longDescription:
      "Flutter Developers at EclipticLink deliver high-quality cross-platform applications for iOS, Android, web, and desktop using a single codebase. They leverage Dart and the Flutter framework to create performant, visually consistent UIs and integrate native APIs and backend services. From MVPs to enterprise apps, our Flutter developers help you reach multiple platforms efficiently without sacrificing quality or maintainability.",
  },
  "React Native Developer": {
    shortDescription: "Develop iOS and Android apps with React Native and JavaScript/TypeScript.",
    longDescription:
      "React Native Developers build native-feel mobile applications for iOS and Android using React and JavaScript or TypeScript. They design component architectures, integrate native modules when needed, and optimize performance and UX. Our React Native specialists help you ship faster, reuse web skills, and maintain one codebase while delivering a polished experience on both major mobile platforms.",
  },
  "Ionic Developer": {
    shortDescription: "Create hybrid and progressive web apps with Ionic and web technologies.",
    longDescription:
      "Ionic Developers build hybrid and progressive web applications that run on iOS, Android, and the web. Using Ionic with Angular, React, or Vue and Capacitor, they deliver installable, app-store-ready experiences with a strong focus on web standards and maintainability. Our Ionic developers are ideal for apps that prioritize reach, fast iteration, and a single codebase across mobile and web.",
  },
  "Android Developer": {
    shortDescription: "Native Android development with Kotlin and modern Android APIs.",
    longDescription:
      "Android Developers deliver native Android applications using Kotlin and the latest Android SDK and Jetpack libraries. They design clean architecture, implement responsive UIs with Material Design, and integrate with backend APIs and device capabilities. From consumer apps to enterprise solutions, our Android developers ensure high performance, security, and compatibility across the Android ecosystem.",
  },
  "iOS Developer": {
    shortDescription: "Native iOS development with Swift and SwiftUI.",
    longDescription:
      "iOS Developers build native applications for iPhone and iPad using Swift and SwiftUI or UIKit. They follow Apple's design and platform guidelines, implement smooth animations and accessibility, and integrate with backend services and system frameworks. Our iOS specialists deliver apps that excel on the App Store in performance, usability, and compliance with Apple's standards.",
  },
  "Automation Engineer": {
    shortDescription: "Design and implement end-to-end business and IT automation.",
    longDescription:
      "Automation Engineers design and implement end-to-end automation for business processes and IT operations. They analyze workflows, select tools and platforms, and build reliable, maintainable automations that reduce manual work and errors. Our automation engineers work across RPA, workflow engines, and scripting to deliver measurable efficiency gains and clear documentation for your teams.",
  },
  "GHL Specialist": {
    shortDescription: "Implement and optimize marketing and sales automation in GoHighLevel.",
    longDescription:
      "GHL Specialists implement and optimize marketing and sales automation within GoHighLevel. They configure funnels, CRMs, pipelines, calendars, and integrations to streamline lead capture, nurturing, and conversion. From setup to advanced workflows and reporting, our GHL specialists help you get the most from the platform and align it with your business processes and goals.",
  },
  "n8n automation Developer": {
    shortDescription: "Build workflow automations with n8n for integrations and process orchestration.",
    longDescription:
      "n8n automation Developers build and maintain workflow automations using the n8n platform. They connect apps, APIs, and databases with self-hosted or cloud n8n, design error handling and retries, and document workflows for your team. Our n8n developers help you automate repetitive tasks, sync data across systems, and create reliable, transparent workflows without lock-in to proprietary platforms.",
  },
  "Zapier automation Expert": {
    shortDescription: "Connect apps and automate workflows with Zapier.",
    longDescription:
      "Zapier automation Experts design and maintain Zaps and Zapier workflows to connect your critical apps and eliminate manual data entry. They structure multi-step Zaps, handle errors and filters, and recommend best practices for reliability and cost. Our Zapier experts help you scale automation across sales, marketing, support, and operations with clear documentation and minimal ongoing maintenance.",
  },
  "make automation Specialist": {
    shortDescription: "Design complex automations with Make (Integromat) for advanced workflows.",
    longDescription:
      "Make automation Specialists design and implement complex automations using Make (formerly Integromat). They build scenarios with multiple apps, branches, and error handling, and optimize for performance and cost. Our Make specialists help you automate sophisticated workflows—from multi-system syncs to conditional logic and data transformations—with clarity and maintainability.",
  },
  "Nodejs Developer": {
    shortDescription: "Backend and API development with Node.js and modern JavaScript/TypeScript.",
    longDescription:
      "Node.js Developers build scalable backends, APIs, and serverless functions using Node.js and TypeScript or JavaScript. They design REST and GraphQL APIs, integrate databases and message queues, and follow security and performance best practices. Our Node.js developers deliver fast, maintainable server-side applications and microservices for web and mobile products.",
  },
  "Golang Developer": {
    shortDescription: "High-performance services and APIs with Go.",
    longDescription:
      "Golang Developers build high-performance, concurrent services and APIs with Go. They design clean APIs, work with databases and gRPC, and deploy in containers and serverless environments. Our Go developers are ideal for low-latency systems, microservices, CLI tools, and infrastructure-related code where performance and simplicity matter.",
  },
  "Python Developer": {
    shortDescription: "Backend, APIs, and data pipelines with Python.",
    longDescription:
      "Python Developers deliver backends, APIs, and data pipelines using Python and frameworks such as FastAPI, Django, or Flask. They integrate with databases, caches, and message brokers and follow testing and deployment best practices. Our Python developers support web applications, internal tools, and data-heavy services with clean, maintainable code.",
  },
  "PHP Developer": {
    shortDescription: "Web applications and APIs with PHP and Laravel or modern frameworks.",
    longDescription:
      "PHP Developers build web applications and APIs using PHP and modern frameworks such as Laravel or Symfony. They design database schemas, implement business logic, and integrate with frontends and third-party services. Our PHP developers deliver secure, performant backends for content sites, e-commerce, and SaaS applications.",
  },
  "C# Developer": {
    shortDescription: "Enterprise applications and APIs with C# and .NET.",
    longDescription:
      "C# Developers build enterprise applications, APIs, and services using C# and the .NET platform. They work with ASP.NET Core, Entity Framework, and Azure or on-premises deployment targets. Our C# developers deliver robust, scalable backends for line-of-business applications, integrations, and cloud-native services.",
  },
  "Reactjs Developer": {
    shortDescription: "Modern web UIs with React and ecosystem tools.",
    longDescription:
      "React.js Developers build responsive, accessible web applications using React and the broader ecosystem (Next.js, state management, testing). They componentize UIs, integrate with APIs, and optimize for performance and SEO. Our React developers deliver maintainable frontends that align with your design system and business requirements.",
  },
  "Angular Developer": {
    shortDescription: "Enterprise web applications with Angular and TypeScript.",
    longDescription:
      "Angular Developers build enterprise-scale web applications using Angular and TypeScript. They structure modular, testable frontends with RxJS and Angular best practices and integrate with REST or GraphQL backends. Our Angular developers deliver consistent, maintainable applications for complex business workflows and large teams.",
  },
  "Vuejs Developer": {
    shortDescription: "Reactive UIs and SPAs with Vue.js and Nuxt.",
    longDescription:
      "Vue.js Developers create reactive, component-based UIs and single-page applications with Vue 3 and the Composition API. They use Pinia or Vuex, integrate with backends, and optionally leverage Nuxt for SSR and static sites. Our Vue developers deliver intuitive, performant frontends with a focus on developer experience and long-term maintainability.",
  },
  "UI/UX Developer": {
    shortDescription: "Implement designs and design systems with a focus on usability and code.",
    longDescription:
      "UI/UX Developers bridge design and implementation: they translate wireframes and high-fidelity designs into accessible, responsive interfaces and maintain design systems. They use HTML, CSS, and JavaScript or TypeScript and care about usability, performance, and consistency. Our UI/UX developers ensure that what you ship matches design intent and meets user and business goals.",
  },
  "Wordpress Developer": {
    shortDescription: "Custom themes, plugins, and WordPress-based sites and e-commerce.",
    longDescription:
      "WordPress Developers build and customize WordPress sites with custom themes, plugins, and integrations. They follow security and performance best practices and work with WooCommerce and page builders when needed. Our WordPress developers deliver content sites, blogs, and e-commerce solutions that are maintainable and aligned with your brand and goals.",
  },
  "DevOps Engineer": {
    shortDescription: "CI/CD, infrastructure, and reliability for modern software delivery.",
    longDescription:
      "DevOps Engineers design and maintain CI/CD pipelines, infrastructure as code, and monitoring and incident response practices. They work with cloud providers, containers, and orchestration to improve deployment frequency, reliability, and security. Our DevOps engineers help you ship faster while keeping systems stable and observable.",
  },
  "Site Reliability Engineer (SRE)": {
    shortDescription: "Reliability, observability, and operational excellence at scale.",
    longDescription:
      "Site Reliability Engineers focus on availability, latency, and operational excellence. They define SLOs and error budgets, implement observability and on-call practices, and automate toil. Our SREs work with development teams to build reliable, scalable systems and respond to incidents with clear post-mortems and preventive actions.",
  },
  "Platform Engineer": {
    shortDescription: "Internal platforms and developer experience for product teams.",
    longDescription:
      "Platform Engineers build and operate internal platforms that enable product teams to deploy and run applications with less friction. They provide paved paths for compute, storage, networking, and observability and improve developer experience through self-service and automation. Our platform engineers help you scale delivery without scaling operational overhead.",
  },
  "Infrastructure Engineer": {
    shortDescription: "Design and manage servers, networks, and cloud infrastructure.",
    longDescription:
      "Infrastructure Engineers design and manage servers, networks, storage, and cloud resources. They use infrastructure as code, implement security and compliance controls, and optimize for cost and performance. Our infrastructure engineers support stable, scalable foundations for your applications and data.",
  },
  "CI/CD Engineer": {
    shortDescription: "Build and optimize continuous integration and deployment pipelines.",
    longDescription:
      "CI/CD Engineers design and maintain continuous integration and deployment pipelines. They automate builds, tests, and deployments across environments and integrate security and quality gates. Our CI/CD engineers help you release frequently and reliably with clear audit trails and rollback capabilities.",
  },
  "Cloud DevOps Engineer": {
    shortDescription: "DevOps practices on AWS, Azure, or GCP with infrastructure as code.",
    longDescription:
      "Cloud DevOps Engineers combine DevOps practices with deep cloud expertise. They implement CI/CD on AWS, Azure, or GCP, manage infrastructure as code, and ensure security and cost optimization. Our Cloud DevOps engineers help you leverage the cloud for speed and scale while maintaining control and compliance.",
  },
  "Cloud Engineer": {
    shortDescription: "Design, build, and operate cloud-native infrastructure and services.",
    longDescription:
      "Cloud Engineers design, build, and operate workloads on public clouds. They provision and manage compute, storage, networking, and platform services using infrastructure as code and automation. Our cloud engineers help you migrate, optimize, and run secure, cost-effective solutions on AWS, Azure, or GCP.",
  },
  "Cloud Architect": {
    shortDescription: "Design cloud strategy, architecture, and migration roadmaps.",
    longDescription:
      "Cloud Architects define cloud strategy, reference architectures, and migration roadmaps. They align technical decisions with business goals, security, and compliance and guide teams through adoption. Our cloud architects help you choose the right services, patterns, and governance for long-term success in the cloud.",
  },
  "Cloud Solutions Architect": {
    shortDescription: "End-to-end cloud solutions aligned with business and technical requirements.",
    longDescription:
      "Cloud Solutions Architects design end-to-end solutions that combine cloud services, integration patterns, and operational models. They work with stakeholders to capture requirements and produce architectures that are scalable, secure, and cost-effective. Our solutions architects bridge business needs and technical implementation across the cloud lifecycle.",
  },
  "Cloud Developer": {
    shortDescription: "Build applications and serverless solutions on cloud platforms.",
    longDescription:
      "Cloud Developers build applications that leverage cloud-native services: serverless, managed databases, queues, and storage. They write infrastructure as code and optimize for scalability and cost. Our cloud developers deliver solutions that are native to AWS, Azure, or GCP and aligned with modern DevOps practices.",
  },
  "Cloud Security Engineer": {
    shortDescription: "Secure cloud environments, identity, and compliance.",
    longDescription:
      "Cloud Security Engineers implement and maintain security controls in cloud environments. They configure identity and access management, network security, encryption, and compliance frameworks and respond to security events. Our cloud security engineers help you build a strong security posture and meet regulatory and audit requirements.",
  },
  "AWS Cloud Engineer": {
    shortDescription: "Design and operate workloads on Amazon Web Services.",
    longDescription:
      "AWS Cloud Engineers design and operate solutions on Amazon Web Services. They use core and advanced services—EC2, Lambda, ECS/EKS, RDS, S3, and more—with best practices for security, cost, and performance. Our AWS engineers help you build and run scalable, reliable workloads on AWS.",
  },
  "Cloud Infrastructure Engineer": {
    shortDescription: "Manage and scale cloud infrastructure and platform services.",
    longDescription:
      "Cloud Infrastructure Engineers manage and scale the foundational layers of your cloud environment: compute, storage, networking, and platform services. They use automation and infrastructure as code to ensure consistency, security, and cost efficiency. Our cloud infrastructure engineers support stable, scalable foundations for your applications.",
  },
};

function buildRoles(): HireRole[] {
  const roles: HireRole[] = [];
  for (const category of HIRE_TEAM_CATEGORIES) {
    for (const title of HIRE_TEAM_POSITIONS[category]) {
      const slug = toSlug(title);
      const meta = roleDescriptions[title];
      if (!meta) {
        console.warn(`Missing role description for: ${title}`);
      }
      roles.push({
        title,
        slug,
        category,
        shortDescription: meta?.shortDescription ?? `Hire a dedicated ${title} for your team.`,
        longDescription:
          meta?.longDescription ??
          `EclipticLink provides experienced ${title} professionals who integrate seamlessly with your team. We help you scale capacity and deliver results with flexible engagement models.`,
      });
    }
  }
  return roles;
}

export const HIRE_TEAM_ROLES: HireRole[] = buildRoles();

const slugToRole = new Map<string, HireRole>();
for (const role of HIRE_TEAM_ROLES) {
  slugToRole.set(role.slug, role);
}

export function getRoleBySlug(slug: string): HireRole | undefined {
  return slugToRole.get(slug);
}

export function getAllRoleSlugs(): string[] {
  return HIRE_TEAM_ROLES.map((r) => r.slug);
}

export function getRolesByCategory(category: HireTeamCategory): HireRole[] {
  return HIRE_TEAM_ROLES.filter((r) => r.category === category);
}
