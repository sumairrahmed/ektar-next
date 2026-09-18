import { NextResponse } from "next/server";
import { getMailTransporter, MAIL_FROM, MAIL_TO } from "@/lib/mailer";

const MAX_RESUME_BYTES = 8 * 1024 * 1024;

export async function POST(req: Request) {
  const transporter = getMailTransporter();
  if (!transporter) {
    console.error("SMTP credentials are not set — cannot send careers form emails.");
    return NextResponse.json({ error: "Email sending isn't configured yet. Please contact us directly." }, { status: 500 });
  }

  const form = await req.formData();
  const name = (form.get("name") as string | null)?.trim();
  const email = (form.get("email") as string | null)?.trim();
  const phone = (form.get("phone") as string | null)?.trim();
  const role = (form.get("role") as string | null)?.trim();
  const linkedin = (form.get("linkedin") as string | null)?.trim();
  const message = (form.get("message") as string | null)?.trim();
  const resume = form.get("resume") as File | null;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (resume && resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume must be under 8MB." }, { status: 400 });
  }

  try {
    const attachments = [];
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({ filename: resume.name, content: buffer });
    }

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New job application from ${name}${role ? ` — ${role}` : ""}`,
      html: `
        <h2>New job application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Role interested in:</strong> ${escapeHtml(role || "—")}</p>
        <p><strong>LinkedIn / portfolio:</strong> ${escapeHtml(linkedin || "—")}</p>
        <p><strong>Resume attached:</strong> ${resume && resume.size > 0 ? escapeHtml(resume.name) : "No file attached"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? escapeHtml(message).replace(/\n/g, "<br />") : "—"}</p>
      `,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers form email failed:", err);
    return NextResponse.json({ error: "Could not send your application. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
