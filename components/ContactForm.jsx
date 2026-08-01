"use client";

import { useState } from "react";

// Submissions are sent through Formspree, which emails them to the inbox
// configured on the form — no email app needed on the visitor's device.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvgrvl";
const CONTACT_EMAIL = "admin@nns.enterprises";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <svg className="check" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="29" />
          <path d="M20 33.5 28.5 42 44 25" />
        </svg>
        <h3>Inquiry Sent</h3>
        <p>Thanks for reaching out — we&apos;ll get back to you shortly.</p>
        <button type="button" className="btn magnetic" onClick={() => setStatus("idle")}>
          <i>Send Another</i>
        </button>
      </div>
    );
  }

  return (
    <form className="reveal" onSubmit={handleSubmit}>
      <div className="two-col">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>
      <div className="two-col">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-details">Project Details</label>
        <textarea id="f-details" name="details" required />
      </div>
      <button type="submit" className="btn magnetic" disabled={status === "sending"}>
        <i>{status === "sending" ? "Sending…" : "Send Inquiry"}</i>
      </button>
      <p className={`form-note${status === "error" ? " show error" : ""}`} id="formNote">
        Something went wrong — please try again, or email us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </form>
  );
}
