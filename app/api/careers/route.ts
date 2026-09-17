import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Ektar Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "customer@ektar.com";
const MAX_RESUME_BYTES = 8 * 1024 * 1024;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send careers form emails.");
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
    const resend = new Resend(apiKey);
    const attachments = [];
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({ filename: resume.name, content: buffer });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
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
    if (error) {
      console.error("Resend rejected the careers form email:", error);
      return NextResponse.json({ error: "Could not send your application. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers form email failed:", err);
    return NextResponse.json({ error: "Could not send your application. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
