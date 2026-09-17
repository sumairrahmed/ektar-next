"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function JoinForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="j-name">Name</label>
        <input className="input" id="j-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="j-email">Email</label>
        <input className="input" id="j-email" name="email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="field">
        <label htmlFor="j-phone">Phone Number</label>
        <input className="input" id="j-phone" name="phone" type="tel" placeholder="+971 00 000 0000" />
      </div>
      <div className="field">
        <label htmlFor="j-role">Role you're interested in</label>
        <input className="input" id="j-role" name="role" type="text" placeholder="e.g. Backend Engineer, Chennai" />
      </div>
      <div className="field full">
        <label htmlFor="j-linkedin">LinkedIn / portfolio URL</label>
        <input className="input" id="j-linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/you" />
      </div>
      <div className="field full">
        <label htmlFor="j-file">Attach your resume</label>
        <input className="input" id="j-file" name="resume" type="file" accept=".pdf,.doc,.docx" />
      </div>
      <div className="field full">
        <label htmlFor="j-message">Why Ektar?</label>
        <textarea className="input" id="j-message" name="message" rows={4} placeholder="Tell us what you'd bring." />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "success" && <p className="form-note ok xl:[color:white]!">Application received — we'll reach out if a role fits.</p>}
        {status === "error" && <p className="form-note error">{errorMsg}</p>}
      </div>
    </form>
  );
}
