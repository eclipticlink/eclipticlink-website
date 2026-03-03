import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "";
const HIRE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_HIRE_TEMPLATE_ID ?? "";

let initialized = false;

function ensureInit() {
  if (!initialized) {
    emailjs.init(PUBLIC_KEY);
    initialized = true;
  }
}

export type ContactTemplateParams = {
  from_name: string;
  from_email: string;
  message: string;
};

export type HireConsultationTemplateParams = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
};

/**
 * Send the contact page form via EmailJS.
 * Template should use variables: {{from_name}}, {{from_email}}, {{message}}
 */
export async function sendContactEmail(params: ContactTemplateParams): Promise<void> {
  ensureInit();
  if (!SERVICE_ID || !CONTACT_TEMPLATE_ID) {
    throw new Error("EmailJS: set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID");
  }
  await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, params);
}

/**
 * Send the hire-team consultation form via EmailJS.
 * Template variables: {{name}}, {{company}}, {{email}}, {{phone}}, {{message}}
 */
export async function sendHireConsultationEmail(params: HireConsultationTemplateParams): Promise<void> {
  ensureInit();
  const templateId = HIRE_TEMPLATE_ID || CONTACT_TEMPLATE_ID;
  if (!SERVICE_ID || !templateId) {
    throw new Error("EmailJS: set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_HIRE_TEMPLATE_ID (or CONTACT_TEMPLATE_ID)");
  }
  await emailjs.send(SERVICE_ID, templateId, {
    name: params.name,
    company: params.company ?? "",
    email: params.email,
    phone: params.phone ?? "",
    message: params.message ?? "",
  });
}
