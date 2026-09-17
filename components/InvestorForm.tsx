"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function InvestorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
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
        <label htmlFor="i-name">Name</label>
        <input className="input" id="i-name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="i-email">Email</label>
        <input className="input" id="i-email" name="email" type="email" placeholder="jane@fund.com" required />
      </div>
      <div className="field full">
        <label htmlFor="i-number">Phone Number</label>
        <input className="input" id="i-number" name="number" type="tel" placeholder="+971 00 000 0000" required />
      </div>
      <div className="field full">
        <label htmlFor="i-description">Description</label>
        <textarea
          className="input"
          id="i-description"
          name="description"
          rows={5}
          placeholder="Tell us about your fund and what you're looking to explore."
          required
        />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        {status === "success" && <p className="form-note ok">Thanks — we'll be in touch within 24 hours.</p>}
        {status === "error" && <p className="form-note error">{errorMsg}</p>}
      </div>
    </form>
  );
}
