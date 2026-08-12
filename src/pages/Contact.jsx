import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon, YouTubeIcon } from "../components/SocialIcons.jsx";
import PageHero from "../components/PageHero.jsx";
import { services } from "../data/services.js";

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
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Consultation Request — ${form.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:msvtechhub@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={40} strokeWidth={1.5} />
                <h3>Your email app should be open now</h3>
                <p>
                  Finish sending the message to <strong>msvtechhub@gmail.com</strong> and our team will
                  reach out within 1–2 business days. Prefer to call? Reach us directly at
                  <strong> +91 96524 38545</strong>.
                </p>
                <button className="btn btn-ghost" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Request your free consultation</h2>
                <p className="contact-form__sub">Fields marked * are required.</p>

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

                <button type="submit" className="btn btn-primary contact-form__submit">
                  Request Free Consultation <Send size={16} />
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
