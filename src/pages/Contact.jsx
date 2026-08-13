import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon, YouTubeIcon } from "../components/SocialIcons.jsx";
import PageHero from "../components/PageHero.jsx";
import { services } from "../data/services.js";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moeawred";

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
  { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { label: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { label: "X (Twitter)", icon: XIcon, href: "https://x.com" },
  { label: "YouTube", icon: YouTubeIcon, href: "https://youtube.com" },
];

const initialForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || "Not specified",
          message: form.message,
          _subject: `Free Consultation Request — ${form.service || "General Inquiry"}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start with a free consultation."
        description="Tell us a bit about your project and our team will get back to you to schedule a no-obligation consultation call."
      />

      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="card contact-form-card">
            {status === "success" ? (
              <div className="contact-success">
                <CheckCircle2 size={40} strokeWidth={1.5} />
                <h3>Request received</h3>
                <p>
                  Thanks, {form.name.split(" ")[0] || "there"} — your consultation request has been sent to our
                  team. We typically reply within 1–2 business days. Prefer to call? Reach us directly at
                  <strong> +91 96524 38545</strong>.
                </p>
                <button className="btn btn-ghost" onClick={() => { setForm(initialForm); setStatus("idle"); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Request your free consultation</h2>
                <p className="contact-form__sub">Fields marked * are required.</p>

                {status === "error" && (
                  <div className="contact-form__error">
                    <AlertCircle size={18} />
                    <span>
                      Something went wrong sending your request. Please try again, or email us directly at{" "}
                      <a href="mailto:msvtechhub@gmail.com">msvtechhub@gmail.com</a>.
                    </span>
                  </div>
                )}

                <div className="contact-form__row">
                  <label>
                    Full name *
                    <input required type="text" value={form.name} onChange={update("name")} placeholder="Your name" />
                  </label>
                  <label>
                    Email *
                    <input required type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label>
                    Phone number
                    <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+91 00000 00000" />
                  </label>
                  <label>
                    Service you're interested in
                    <select value={form.service} onChange={update("service")}>
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label>
                  Tell us about your project *
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Share your goals, timeline and any details that will help us prepare for the call."
                  />
                </label>

                <button type="submit" className="btn btn-primary contact-form__submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Request Free Consultation"} <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="contact-info">
            <div className="card contact-info__card">
              <h3>Contact details</h3>
              <ul className="contact-info__list">
                <li>
                  <Mail size={18} />
                  <div>
                    <span>Email</span>
                    <a href="mailto:msvtechhub@gmail.com">msvtechhub@gmail.com</a>
                  </div>
                </li>
                <li>
                  <Phone size={18} />
                  <div>
                    <span>Phone</span>
                    <a href="tel:+919652438545">+91 96524 38545</a>
                  </div>
                </li>
                <li>
                  <MapPin size={18} />
                  <div>
                    <span>Availability</span>
                    <p>Remote-first, working with clients globally</p>
                  </div>
                </li>
                <li>
                  <Clock size={18} />
                  <div>
                    <span>Response time</span>
                    <p>We typically reply within 1–2 business days</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card contact-info__card">
              <h3>Follow us</h3>
              <p className="contact-info__social-note">Social channels launching soon — follow along for updates.</p>
              <div className="footer__socials">
                {socials.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label={label} title={`${label} — updates coming soon`}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}