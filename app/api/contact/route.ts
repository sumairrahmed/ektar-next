import { NextResponse } from "next/server";
import { getMailTransporter, MAIL_FROM, MAIL_TO } from "@/lib/mailer";

export async function POST(req: Request) {
  const transporter = getMailTransporter();
  if (!transporter) {
    console.error("SMTP credentials are not set — cannot send contact form emails.");
    return NextResponse.json({ error: "Email sending isn't configured yet. Please contact us directly." }, { status: 500 });
  }

  const body = await req.json();
  const { name, email, phone, company, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New demo request from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
