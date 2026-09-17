import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Ektar Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.INVESTORS_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "customer@ektar.com";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send investor form emails.");
    return NextResponse.json({ error: "Email sending isn't configured yet. Please contact us directly." }, { status: 500 });
  }

  const body = await req.json();
  const { name, email, number, description } = body as Record<string, string>;

  if (!name || !email || !number || !description) {
    return NextResponse.json({ error: "Name, email, phone number and description are required." }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New investor inquiry from ${name}`,
      html: `
        <h2>New investor inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(number)}</p>
        <p><strong>Description:</strong></p>
        <p>${escapeHtml(description).replace(/\n/g, "<br />")}</p>
      `,
    });
    if (error) {
      console.error("Resend rejected the investor form email:", error);
      return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Investor form email failed:", err);
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
