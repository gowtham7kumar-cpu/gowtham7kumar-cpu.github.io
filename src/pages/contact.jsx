import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();              // prevent full page reload
    setStatus("sending");

    try {
      // Example: send form to an API endpoint
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form), headers: {"Content-Type":"application/json"} });

      // For now just simulate success:
      await new Promise(res => setTimeout(res, 600));
      setStatus("success");
      setForm({ name: "", contact: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
      <div className="h-[3px] w-12 mt-3 bg-[#d7263d]" />

      <form className="mt-6 grid gap-4 max-w-xl" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Your name"
          required
        />

        <label className="sr-only" htmlFor="contact">Email or phone</label>
        <input
          id="contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Email or phone"
          type="text"
          required
          aria-describedby="contactHelp"
        />
        <div id="contactHelp" className="text-xs text-gray-500">We’ll only contact you about this inquiry.</div>

        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          placeholder="Tell us about your project…"
          required
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full text-white bg-[#d7263d] w-fit disabled:opacity-60"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "success" && <span className="text-sm text-green-600">Message sent — we’ll be in touch!</span>}
          {status === "error" && <span className="text-sm text-red-600">Something went wrong. Try again.</span>}
        </div>
      </form>
    </main>
  );
}
