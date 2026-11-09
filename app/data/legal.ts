import type { LegalSection } from "../components/legal-doc";
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_US_EMAIL } from "../lib/config";

/*
 * Legal copy for the website. Written for EclipticLink as operated by
 * TOPDEVELOPER INC. and for the regions the site serves. Have counsel review
 * before relying on it, and update LEGAL_UPDATED with every change.
 */

export const LEGAL_UPDATED = "November 9, 2026";

const MAIL = `<a href="mailto:${CONTACT_US_EMAIL}">${CONTACT_US_EMAIL}</a>`;
const OPERATOR = `EclipticLink is operated by ${COMPANY_LEGAL_NAME} (“EclipticLink”, “we”, “us”), ${COMPANY_ADDRESS}, United States.`;

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    blocks: [
      OPERATOR,
      "This policy explains how we handle personal information collected through eclipticlink.com and when you contact us. We act as the <strong>controller</strong> of that information. When we deliver cybersecurity services, we usually process our clients’ data as a <strong>processor</strong> (or service provider) on their instructions, under a written agreement. Section 7 covers that.",
      `Questions about privacy can be sent to ${MAIL}.`,
    ],
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    blocks: [
      {
        table: [
          ["Contact and assessment requests", "Name, work email, company, role, the service you are interested in, how urgent it is, and anything you write in the message."],
          ["Chat conversations", "Messages and contact details you share in the website chat, which is provided by HubSpot."],
          ["Email and calls", "The content of correspondence with us and the details you include."],
          ["Usage and device data", "IP address, approximate location derived from it, browser and device type, pages viewed, referring site and interaction events, collected through cookies and similar technologies (Google Analytics, HubSpot) and through our hosting and security provider (Cloudflare)."],
          ["Client engagement data", "Information we need to deliver a service, such as security telemetry, system details and contact lists for escalation, handled under the client’s agreement (see section 7)."],
        ],
      },
      "We do not ask for special category or sensitive personal information through the website. Please do not send it unless we have agreed a secure way to receive it.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use information",
    blocks: [
      {
        list: [
          "To respond to enquiries, scope assessments and provide quotes.",
          "To deliver, support and improve our services under a contract with you or your organization.",
          "To handle urgent incident-response requests quickly.",
          "To understand how the website is used and to keep it secure, including detecting abuse and attacks.",
          "To send service and security communications, and, where permitted, information about our services. You can opt out at any time.",
          "To meet legal, regulatory, audit and accounting obligations, and to establish or defend legal claims.",
        ],
      },
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    blocks: [
      "Where laws such as the UK GDPR, EU GDPR, Saudi PDPL or UAE PDPL require a legal basis, we rely on:",
      {
        list: [
          "<strong>Contract</strong>: to take steps you request before entering a contract and to perform it.",
          "<strong>Legitimate interests</strong>: to run, secure and improve our business and website, where those interests are not overridden by your rights.",
          "<strong>Consent</strong>: for non-essential cookies and certain marketing, where required. You can withdraw consent at any time.",
          "<strong>Legal obligation</strong>: where we must keep or disclose information by law.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    blocks: [
      "We use cookies and similar technologies for essential site operation, analytics (Google Analytics) and our chat and marketing tools (HubSpot). Where the law requires consent for non-essential cookies, we ask for it first.",
      "You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google’s browser add-on. Blocking some cookies may affect how the site works, including the chat.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    blocks: [
      "<strong>We do not sell personal information.</strong> We share it only with:",
      {
        list: [
          "<strong>Service providers</strong> that process it on our behalf under contract: Cloudflare (hosting, content delivery and security), Google (analytics), HubSpot (CRM and chat) and EmailJS (contact form delivery), plus our email and productivity providers.",
          "<strong>Professional advisers</strong> such as lawyers, auditors and insurers, under confidentiality.",
          "<strong>Authorities</strong> where we are legally required to, or to protect the rights, safety and security of our clients, our staff or others.",
          "<strong>A successor</strong> in a merger, acquisition or sale of assets, subject to this policy.",
        ],
      },
    ],
  },
  {
    id: "client-data",
    title: "Client data in our services",
    blocks: [
      "When we provide managed detection and response, penetration testing, AI security, cloud security, compliance or incident response, we process client data only on the client’s documented instructions and under a data processing agreement or equivalent terms. In those engagements:",
      {
        list: [
          "Access is limited to the people who need it, protected by multi-factor authentication and logged.",
          "Testing is carried out only within written scope and rules of engagement.",
          "Data is encrypted in transit and at rest where we store it.",
          "Personnel are bound by confidentiality obligations.",
          "Data is returned or deleted at the end of the engagement, unless the law requires us to keep it.",
        ],
      },
      "If you are an individual whose data a client shares with us, please contact that client first. We will help them respond.",
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      "We are based in the United States and work with clients and providers in other countries, so information may be processed outside the country where it was collected. Where the law requires safeguards for such transfers, we use them. Examples are the EU Standard Contractual Clauses, the UK International Data Transfer Addendum, and the transfer conditions of the Saudi and UAE data protection laws.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep information",
    blocks: [
      {
        table: [
          ["Enquiries and chat", "Up to 24 months after our last contact, unless we start working together."],
          ["Client records", "For the length of the engagement and as long afterwards as our contract, tax or legal obligations require."],
          ["Analytics", "According to the retention settings of the analytics provider, typically 14 months."],
          ["Security logs", "As long as needed to protect the website, generally no more than 12 months."],
        ],
      },
    ],
  },
  {
    id: "security",
    title: "How we protect information",
    blocks: [
      "Security is our business, and we hold ourselves to the standards we recommend: least-privilege access, multi-factor authentication, encryption in transit and at rest, monitoring and logging, vendor review, and staff confidentiality. No system is perfectly secure. If we become aware of a personal data breach that affects you, we will notify you and the relevant authorities as the law requires.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    blocks: [
      "Depending on where you live, you may have the right to access, correct, delete or receive a copy of your personal information. You may also be able to object to or restrict certain processing, withdraw consent, and complain to a data protection authority. Our <a href=\"/regional-privacy\">Regional Privacy Notice</a> sets out the specific rights in California, the United Kingdom and EU, Saudi Arabia, the United Arab Emirates and Pakistan.",
      `To make a request, email ${MAIL}. We will verify your identity before acting, and we will not treat you differently for exercising your rights.`,
    ],
  },
  {
    id: "children",
    title: "Children",
    blocks: ["Our website and services are for businesses and are not directed to children under 16. We do not knowingly collect their personal information."],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: ["We may update this policy from time to time. The date at the top shows when it last changed. If a change is significant, we will give additional notice where appropriate."],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [`${COMPANY_LEGAL_NAME}, ${COMPANY_ADDRESS}, United States. Email: ${MAIL}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    blocks: [
      `${OPERATOR} These terms govern your use of eclipticlink.com. By using the website, you agree to them. If you do not agree, please do not use the site.`,
    ],
  },
  {
    id: "services",
    title: "Our services and this website",
    blocks: [
      "The website describes our cybersecurity services. Any engagement is governed by a separate written agreement, such as a master services agreement and statement of work. If that agreement conflicts with these terms, the agreement prevails.",
      "Content on this site, including articles and guides, is general information. It is not legal, compliance or professional advice for your specific situation. Get advice tailored to your environment before you act on it.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    blocks: [
      "You agree not to:",
      {
        list: [
          "Scan, probe, penetration-test, fuzz or attempt to bypass the security of this website or our systems without our prior written authorization.",
          "Upload or transmit malware, or use the site to attack, harass or defraud anyone.",
          "Scrape or crawl the site in a way that degrades its performance, or use it to build a competing dataset.",
          "Submit false information, impersonate others, or use the site for any unlawful purpose.",
        ],
      },
    ],
  },
  {
    id: "disclosure",
    title: "Reporting a vulnerability",
    blocks: [
      "We welcome good-faith reports of security issues in our website. Please follow the contact details in our <a href=\"/.well-known/security.txt\">security.txt</a> file. Do not access or change data that is not yours. Do not degrade our service. Give us reasonable time to fix the issue before you disclose it publicly.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    blocks: [
      `The website and its content, including text, graphics, code and the EclipticLink name and logo, are owned by ${COMPANY_LEGAL_NAME} or its licensors. You may view the site and share links to it. You may quote short excerpts of articles with clear attribution and a link. Any other copying, modification or commercial use requires our written permission.`,
    ],
  },
  {
    id: "third-party",
    title: "Third-party links and tools",
    blocks: ["The site links to and embeds third-party services, such as chat and analytics. We are not responsible for their content or practices. Their own terms and privacy policies apply."],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      "The website is provided “as is” and “as available”. To the extent the law allows, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement. No security measure or guidance can guarantee that an incident will not happen.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      `To the extent the law allows, ${COMPANY_LEGAL_NAME} will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data or goodwill, arising from your use of the website. Our total liability for any claim about the website is limited to US$100. This does not limit liability that cannot be limited by law, and it does not affect the terms of any separate services agreement.`,
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: ["You agree to indemnify us against claims arising from your breach of these terms or your misuse of the website."],
  },
  {
    id: "law",
    title: "Governing law",
    blocks: [
      "These terms are governed by the laws of the State of California, United States, without regard to its conflict-of-law rules. The state and federal courts located in Alameda County, California have exclusive jurisdiction, except where mandatory local law where you live gives you other rights.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    blocks: ["We may update these terms. Continued use of the website after an update means you accept the new terms."],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [`${COMPANY_LEGAL_NAME}, ${COMPANY_ADDRESS}, United States. Email: ${MAIL}.`],
  },
];

export const regionalSections: LegalSection[] = [
  {
    id: "about",
    title: "About this notice",
    blocks: [
      "We serve clients in the United States, the United Kingdom, Saudi Arabia, the United Arab Emirates and Pakistan. This notice adds the region-specific information that local privacy laws require to our <a href=\"/privacy\">Privacy Policy</a>. Read the two together. Where they differ, this notice applies to people in the region concerned.",
    ],
  },
  {
    id: "california",
    title: "California (CCPA / CPRA)",
    blocks: [
      "This section applies to California residents under the California Consumer Privacy Act, as amended by the California Privacy Rights Act.",
      {
        table: [
          ["Categories collected (last 12 months)", "Identifiers (name, email, IP address); professional information (company, role); internet activity (pages viewed, interactions); approximate geolocation from IP; and the content of your communications with us."],
          ["Sources", "You directly, your device and browser, and our service providers."],
          ["Purposes", "The purposes in section 3 of our Privacy Policy."],
          ["Disclosed for a business purpose", "To the service providers listed in our Privacy Policy, under contracts that restrict their use of the information."],
          ["Sale or sharing", "We do not sell personal information. We do not share it for cross-context behavioral advertising. If that changes, we will update this notice and give you a way to opt out."],
          ["Sensitive personal information", "We do not use or disclose it to infer characteristics about you."],
        ],
      },
      "You have the right to know, access, correct and delete your personal information, the right to opt out of sale or sharing, and the right not to be discriminated against for using these rights. An authorized agent may make a request on your behalf with your signed permission. We will confirm receipt within 10 business days and respond within 45 days, extendable once by a further 45 days where permitted.",
    ],
  },
  {
    id: "uk-eu",
    title: "United Kingdom and European Economic Area",
    blocks: [
      `For people in the UK, the UK GDPR and the Data Protection Act 2018 apply. For people in the EEA, the EU GDPR applies. ${COMPANY_LEGAL_NAME} is the controller of website data. Our legal bases are listed in section 4 of the Privacy Policy.`,
      {
        list: [
          "You can access, correct, erase or port your data, restrict or object to processing (including direct marketing), and withdraw consent at any time.",
          "We respond within one month, extendable by two months for complex requests.",
          "Transfers outside the UK or EEA use the UK International Data Transfer Addendum or EU Standard Contractual Clauses, as applicable.",
          "You can complain to the UK Information Commissioner’s Office (ico.org.uk) or to your local EEA supervisory authority. We would appreciate the chance to resolve your concern first.",
        ],
      },
    ],
  },
  {
    id: "saudi-arabia",
    title: "Kingdom of Saudi Arabia",
    blocks: [
      "For people in Saudi Arabia, we process personal data in line with the Personal Data Protection Law (PDPL) and its Implementing and Transfer Regulations, overseen by the Saudi Data & AI Authority (SDAIA).",
      {
        list: [
          "You have the right to be informed about how your data is processed, to access and obtain a copy of it, to request correction, and to request its destruction when it is no longer needed.",
          "Where the PDPL requires consent, we obtain it, and you can withdraw it at any time.",
          "Transfers outside the Kingdom take place only where the PDPL and the Transfer Regulations allow, with appropriate safeguards.",
          "You can lodge a complaint with SDAIA.",
        ],
      },
      "For clients in regulated sectors, our services can also be aligned with the National Cybersecurity Authority’s Essential Cybersecurity Controls (NCA ECC) and SAMA requirements.",
    ],
  },
  {
    id: "uae",
    title: "United Arab Emirates",
    blocks: [
      "For people in the UAE, we process personal data in line with Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. Where the Dubai International Financial Centre (DIFC) or Abu Dhabi Global Market (ADGM) data protection laws apply, we follow those instead.",
      {
        list: [
          "You can request information about and access to your data, correction, erasure, restriction of processing, and data portability.",
          "You can object to processing for direct marketing and to decisions based solely on automated processing that significantly affect you.",
          "Transfers outside the UAE take place only to jurisdictions or under safeguards that the applicable law permits.",
          "You can complain to the UAE Data Office or, in DIFC or ADGM, to the relevant Commissioner.",
        ],
      },
    ],
  },
  {
    id: "pakistan",
    title: "Pakistan",
    blocks: [
      "For people in Pakistan, we comply with applicable Pakistani law, including the Prevention of Electronic Crimes Act, 2016, and we respect the constitutional right to privacy. We extend the rights described in our Privacy Policy to individuals in Pakistan: access, correction, deletion, and withdrawal of consent. We will update this section if new data protection legislation takes effect.",
    ],
  },
  {
    id: "requests",
    title: "How to make a request",
    blocks: [
      `Email ${MAIL} with the subject “Privacy request”. Tell us your region and what you are asking for. We will verify your identity using information we already hold before we act. We will not charge a fee unless a request is manifestly unfounded or excessive, where the law allows.`,
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [`${COMPANY_LEGAL_NAME}, ${COMPANY_ADDRESS}, United States. Email: ${MAIL}.`],
  },
];
