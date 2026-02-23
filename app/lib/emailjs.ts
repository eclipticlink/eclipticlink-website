import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "XVtXQiGCa0KNZDRZ-";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_akfr8ll";
const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "template_v1yj75d";
const HIRE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_HIRE_TEMPLATE_ID ?? "template_v1yj75d";

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
  from_name: string;
  company?: string;
  from_email: string;
  help?: string;
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
 * Template should use variables: {{from_name}}, {{company}}, {{from_email}}, {{help}}, {{phone}}, {{message}}
 */
export async function sendHireConsultationEmail(params: HireConsultationTemplateParams): Promise<void> {
  ensureInit();
  const templateId = HIRE_TEMPLATE_ID || CONTACT_TEMPLATE_ID;
  if (!SERVICE_ID || !templateId) {
    throw new Error("EmailJS: set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_HIRE_TEMPLATE_ID (or CONTACT_TEMPLATE_ID)");
  }
  await emailjs.send(SERVICE_ID, templateId, {
    from_name: params.from_name,
    company: params.company ?? "",
    from_email: params.from_email,
    help: params.help ?? "",
    phone: params.phone ?? "",
    message: params.message ?? "",
  });
}
