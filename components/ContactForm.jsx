"use client";

import { useState } from "react";

// Replace with your business inbox, or swap this handler for a form service
// (Formspree, Resend, or a Next.js API route) once the site is deployed.
const CONTACT_EMAIL = "contact@nnsenterprises.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(
      "Business Inquiry — " + f.name.value + (f.company.value ? " (" + f.company.value + ")" : "")
    );
    const body = encodeURIComponent(
      "Name: " + f.name.value + "\n" +
      "Company: " + (f.company.value || "—") + "\n" +
      "Email: " + f.email.value + "\n" +
      "Phone: " + (f.phone.value || "—") + "\n\n" +
      "Project Details:\n" + f.details.value
    );
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
    setSent(true);
  };

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
      <button type="submit" className="btn magnetic">
        <i>Send Inquiry</i>
      </button>
      <p className={`form-note${sent ? " show" : ""}`} id="formNote">
        Inquiry drafted — your email app will open with the details filled in.
      </p>
    </form>
  );
}
