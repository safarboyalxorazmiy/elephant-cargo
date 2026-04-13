import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Freight Quote in Under an Hour",
  description:
    "Contact Elephant Cargo for a free freight quote. 24/7 dispatch, one-hour response, licensed and bonded. Call (740) 475-9647 or submit our quote form.",
};

const MINI_FAQ = [
  {
    q: "How fast will I get a quote back?",
    a: "Most quotes are back in under 60 minutes during business hours, and within two hours overnight. Emergency and same-day requests are prioritized.",
  },
  {
    q: "Do I need an account to get a quote?",
    a: "Nope. Submit the form, call, or email. We&apos;ll quote your load whether you&apos;re a first-time shipper or a long-time partner.",
  },
  {
    q: "Can I call after hours?",
    a: "Yes. Our dispatch line runs 24/7/365. For emergency freight or in-transit issues, call anytime and a real person will pick up.",
  },
  {
    q: "Do you work with carriers too?",
    a: "Absolutely. Carriers can call the same number, send setup paperwork to bilol@elephantcargollc.com, or visit the carriers page to get started.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          ["--hero-bg" as string]:
            "url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="container">
          <span className="label reveal">CONTACT US</span>
          <h1 className="heading-xl reveal">
            Let&apos;s Move Your<br />
            <span className="hero-gold-solid">Freight Forward.</span>
          </h1>
          <p className="page-hero-desc reveal">
            Need a quote? Setting up as a carrier? Got a 3 AM emergency? Pick the channel
            that works for you. A real human responds within one business hour, usually
            much faster.
          </p>
          <div className="contact-quick-actions reveal">
            <a href="tel:+17404759647" className="quick-action">
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Call Dispatch</strong>
                <span>(740) 475-9647</span>
              </div>
            </a>
            <a href="mailto:bilol@elephantcargollc.com" className="quick-action">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <span>bilol@elephantcargollc.com</span>
              </div>
            </a>
            <div className="quick-action">
              <i className="fas fa-clock"></i>
              <div>
                <strong>24/7 Dispatch</strong>
                <span>Office Mon-Fri 8a-6p EST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="contact section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info reveal">
              <span className="label">GET IN TOUCH</span>
              <h2 className="heading-lg">
                We&apos;re Here<br />When You Need Us
              </h2>
              <p className="body-text">
                Pick the channel that works for you: form, phone, or email. Every
                message lands on a real desk at our Lancaster office and gets a response
                from a real person.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Our Office</strong>
                    <p>2318 E Main St</p>
                    <p className="info-small">Lancaster, OH 43130</p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>24/7 Dispatch</strong>
                    <p><a href="tel:+17404759647">(740) 475-9647</a></p>
                    <p className="info-small">Real humans, every call, every hour</p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:bilol@elephantcargollc.com">bilol@elephantcargollc.com</a></p>
                    <p className="info-small">Quotes, carrier setup, questions</p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Hours</strong>
                    <p>Operations: 24/7/365</p>
                    <p className="info-small">Office: Mon-Fri 8AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-panel reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">VISIT US</span>
            <h2 className="heading-lg">Our Lancaster, Ohio HQ</h2>
            <p className="body-text">
              We&apos;re based in the heart of Fairfield County, just minutes from I-70
              and easy drive from Columbus, Cleveland, Cincinnati, and Pittsburgh.
            </p>
          </div>
          <div className="map-wrap reveal">
            <iframe
              src="https://maps.google.com/maps?q=Elephant+Cargo+LLC,+2318+E+Main+St,+Lancaster,+OH+43130&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elephant Cargo Office Location"
            />
            <div className="map-overlay">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Elephant Cargo LLC</strong>
                <p>2318 E Main St, Lancaster, OH 43130</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="credentials section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">CREDENTIALS</span>
            <h2 className="heading-lg">Licensed &amp; Bonded</h2>
            <p className="body-text">
              Fully compliant freight brokerage authorized by the FMCSA. The paperwork
              that matters, on file and in good standing.
            </p>
          </div>
          <div className="credentials-grid">
            <div className="credential tilt-card reveal">
              <i className="fas fa-id-badge"></i>
              <strong>MC# 1375669</strong>
              <span>Motor Carrier Authority</span>
            </div>
            <div className="credential tilt-card reveal">
              <i className="fas fa-truck"></i>
              <strong>USDOT# 3811403</strong>
              <span>US DOT Registration</span>
            </div>
            <div className="credential tilt-card reveal">
              <i className="fas fa-shield-halved"></i>
              <strong>BMC-84 Bonded</strong>
              <span>$75,000 Surety Bond</span>
            </div>
            <div className="credential tilt-card reveal">
              <i className="fas fa-certificate"></i>
              <strong>FMCSA Registered</strong>
              <span>Property Broker Authority</span>
            </div>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">QUICK ANSWERS</span>
            <h2 className="heading-lg">Before You Reach Out</h2>
          </div>
          <div className="faq-grid">
            {MINI_FAQ.map((f) => (
              <div className="faq-card tilt-card reveal" key={f.q}>
                <div className="faq-q-icon">
                  <i className="fas fa-question"></i>
                </div>
                <h3>{f.q}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.a }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
