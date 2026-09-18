import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

export const MAIL_FROM = process.env.SMTP_FROM || process.env.SMTP_USER || "Ektar Website <ektar@troutinc.net>";
export const MAIL_TO = process.env.CONTACT_TO_EMAIL || "customer@ektar.com";
export const INVESTORS_MAIL_TO = process.env.INVESTORS_TO_EMAIL || MAIL_TO;
