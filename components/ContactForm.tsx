"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(
      form.subject || `Speaking / Collaboration enquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-[15px] text-paper placeholder:text-paper-faint/70 transition-colors duration-300 focus:border-vermilion focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-10" aria-label="Send a message">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
            Name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
            Email
          </span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
          Subject
        </span>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Speaking, collaboration, or something else"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me the actual problem — the better the context, the faster the answer."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 bg-vermilion px-8 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-vermilion-deep hover:text-ink"
        >
          Send message
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p className="font-mono text-[11px] text-paper-faint">
          Opens your email app. No databases, no spam.
        </p>
      </div>
    </form>
  );
}
