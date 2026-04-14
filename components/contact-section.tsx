"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

// Environment variables
// These public keys are safe to read client-side because EmailJS is designed for browser use.
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
};

// This destination email is used as the default recipient in the EmailJS template variables.
// It can be changed later for the actual client.
// TODO: Replace sairaammbharadwaj@gmail.com with the final business email before production deployment.
const DEFAULT_DESTINATION_EMAIL = "sairaammbharadwaj@gmail.com";

const hasPlaceholderConfig = Object.values(EMAILJS_CONFIG).some(
  (value) => !value || value.startsWith("your_emailjs_")
);

type EmailJsErrorLike = {
  status?: number;
  text?: string;
  message?: string;
};

/*
  EmailJS setup guide
  1. Create an EmailJS account at https://www.emailjs.com/ and verify your email.
  2. Create a service in the EmailJS dashboard and connect the mailbox that should send notifications.
  3. Create an email template that uses variables like {{name}}, {{email}}, {{subject}}, {{message}}, and {{to_email}}.
  4. Copy the public key from EmailJS Account > General.
  5. Paste the service id, template id, and public key into `.env.local` using `.env.local.example` as the reference.
  6. Run `npm install`, start the app with `npm run dev`, submit the form locally, and confirm the message arrives in sairaammbharadwaj@gmail.com.
*/

// Contact form
// This section combines studio details, a map placeholder, and a client-side EmailJS submission flow.
export function ContactSection() {
  // Form state management keeps the fields controlled so success resets and validation stay predictable.
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value
    }));
  };

  // EmailJS initialization
  // A small guard gives a clearer error if env variables were not added to `.env.local`.
  const hasEmailJsConfig = !hasPlaceholderConfig;

  // EmailJS can reject with a sparse object, so this helper extracts the fields that are most useful while debugging.
  const getEmailJsErrorMessage = (error: unknown) => {
    if (typeof error === "string") {
      return error;
    }

    if (error && typeof error === "object") {
      const emailJsError = error as EmailJsErrorLike;

      if (emailJsError.text) {
        return emailJsError.status
          ? `EmailJS error ${emailJsError.status}: ${emailJsError.text}`
          : emailJsError.text;
      }

      if (emailJsError.message) {
        return emailJsError.message;
      }
    }

    return "Unknown EmailJS error";
  };

  // Submit handler
  // The try/catch keeps the UX calm by surfacing a friendly status instead of a raw runtime error.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!hasEmailJsConfig) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet. Add your real keys in .env.local and restart the dev server."
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
          to_email: DEFAULT_DESTINATION_EMAIL
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey
        }
      );

      // Success handling clears the form immediately so visitors know the enquiry was accepted.
      setFormValues(initialFormValues);
      setStatus({
        type: "success",
        message: "Thank you for contacting Demo. We will get back to you shortly."
      });
    } catch (error) {
      const errorMessage = getEmailJsErrorMessage(error);
      console.error("EmailJS submission failed:", {
        error,
        details: errorMessage
      });

      // Error handling stays polished for visitors but still gives setup hints during development.
      setStatus({
        type: "error",
        message:
          process.env.NODE_ENV === "development"
            ? `EmailJS send failed. ${errorMessage}`
            : "Something went wrong. Please try again later."
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="group rounded-[24px] border border-border bg-white/60 p-8 transition-colors duration-300 hover:border-accent hover:bg-white/80">
            <MapPin size={18} strokeWidth={1.5} className="mb-4 text-accent" />
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Address</p>
            <p className="mt-3 max-w-xs text-lg leading-8">27 Mercer Street, New York, NY 10013</p>
          </div>
          <div className="group rounded-[24px] border border-border bg-white/60 p-8 transition-colors duration-300 hover:border-accent hover:bg-white/80">
            <Phone size={18} strokeWidth={1.5} className="mb-4 text-accent" />
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Phone</p>
            <Link href="tel:+12125550188" className="mt-3 block text-lg">
              +1 (212) 555-0188
            </Link>
          </div>
          <div className="group rounded-[24px] border border-border bg-white/60 p-8 transition-colors duration-300 hover:border-accent hover:bg-white/80">
            <Mail size={18} strokeWidth={1.5} className="mb-4 text-accent" />
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Email</p>
            <Link href="mailto:hello@demostudio.com" className="mt-3 block text-lg">
              hello@demostudio.com
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="overflow-hidden rounded-[28px] border border-border bg-white/60"
        >
          {/* Placeholder map embed so the layout is ready before a final Google Maps configuration is chosen. */}
          <iframe
            title="Demo Studio location map"
            src="https://www.google.com/maps?q=SoHo%2C%20New%20York&z=13&output=embed"
            loading="lazy"
            className="h-[420px] w-full grayscale"
          />
        </motion.div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="mt-16 grid gap-8 rounded-[28px] border border-border bg-white/55 px-6 py-10 backdrop-blur-sm md:px-10"
      >
        {/* Underline-only inputs keep the form visually light and aligned with the editorial design direction. */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { label: "Name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Subject", type: "text", name: "subject" }
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">
                {field.label}
              </span>
              <input
                // Some browser extensions inject temporary attributes into form fields before hydration.
                suppressHydrationWarning
                required
                name={field.name}
                type={field.type}
                value={formValues[field.name as keyof FormValues]}
                onChange={handleChange}
                className="mt-4 w-full border-0 border-b border-border bg-transparent px-0 pb-4 pt-1 text-base outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-accent"
                placeholder={`Enter your ${field.label.toLowerCase()}`}
              />
            </label>
          ))}
          <label className="block md:col-span-2">
            <span className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">Message</span>
            <textarea
              // Matching suppression here avoids noisy hydration warnings from extension-modified form controls.
              suppressHydrationWarning
              required
              name="message"
              rows={5}
              value={formValues.message}
              onChange={handleChange}
              className="mt-4 w-full resize-none border-0 border-b border-border bg-transparent px-0 pb-4 pt-1 text-base outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-accent"
              placeholder="Tell us about your space"
            />
          </label>
        </div>

        {/* Success and error handling is shown inline so feedback stays close to the form action. */}
        {status ? (
          <p
            className={`text-sm leading-7 ${
              status.type === "success" ? "text-accent" : "text-[#8b5e5e]"
            }`}
          >
            {status.message}
          </p>
        ) : null}

        <div>
          <button
            type="submit"
            suppressHydrationWarning
            disabled={isSending}
            className="rounded-full border border-border px-7 py-3 text-[0.78rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Inquiry"}
          </button>
        </div>
      </motion.form>

      {/* WhatsApp acts as a quick-contact shortcut without competing with the main form. */}
      <Link
        href="https://wa.me/12125550188"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} strokeWidth={1.8} />
      </Link>
    </>
  );
}
