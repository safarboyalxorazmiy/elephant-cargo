import type { Metadata } from "next";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const metadata: Metadata = {
  title: "Carrier Network — Quick Pay, Consistent Freight, Fair Rates",
  description:
    "Haul for a broker that treats carriers like partners. Same-day quick pay, fair negotiation, 24/7 dispatch, and steady freight on the lanes you actually run.",
};

const PAY_OPTIONS = [
  {
    name: "Same-Day Quick Pay",
    speed: "Same day",
    fee: "3%",
    highlight: true,
    features: [
      "Paid same day we receive signed POD",
      "ACH direct deposit to your account",
      "No minimums, no enrollment fees",
      "Submit POD via email or mobile app",
    ],
  },
  {
    name: "2-Day Quick Pay",
    speed: "48 hours",
    fee: "1.5%",
    highlight: false,
    features: [
      "Funds in account within 48 hours",
      "Lower fee than same-day",
      "ACH direct deposit",
      "Standard POD submission",
    ],
  },
  {
    name: "Standard Net-30",
    speed: "30 days",
    fee: "0%",
    highlight: false,
    features: [
      "Zero fees — traditional 30-day terms",
      "Paid on clean paperwork",
      "Check or ACH — your choice",
      "Factoring friendly",
    ],
  },
];

const FAQ = [
  {
    q: "What documents do I need to set up as a carrier?",
    a: "We need your MC authority letter, current certificate of insurance ($1M auto / $100K cargo minimum), W-9 form, and voided check or direct deposit form. Our team reviews everything within one business day.",
  },
  {
    q: "How quickly can I get approved?",
    a: "Most carriers are approved within 24 hours of submitting a complete packet. Rush approvals available — just let us know when you send the paperwork and we&apos;ll prioritize it.",
  },
  {
    q: "Do you work with new authorities?",
    a: "Absolutely. We work with carriers whose authority is less than 6 months old. Our onboarding team will guide you through any additional verification steps and help you start running loads quickly.",
  },
  {
    q: "What are your insurance requirements?",
    a: "Minimum $1M auto liability and $100K cargo coverage. Hazmat and high-value freight may require higher limits — we&apos;ll let you know before dispatch if a specific load has stricter requirements.",
  },
  {
    q: "How do I submit invoices and get paid?",
    a: "Email a signed BOL/POD and your invoice to accounting@elephantcargo.com, or upload them through our carrier portal. Quick pay is processed the same day we receive clean paperwork.",
  },
  {
    q: "Can I decline a load offer?",
    a: "Always. You&apos;re an independent partner — we offer, you decide. No pressure, no penalties, no getting cut out of future freight for passing on a load that doesn&apos;t work for you.",
  },
  {
    q: "Do you accept factoring companies?",
    a: "Yes — we&apos;re set up with all the major factoring companies and happy to work with new ones. Send us a Notice of Assignment during onboarding and we&apos;ll take care of the rest.",
  },
  {
    q: "What kind of freight do you typically move?",
    a: "Dry van, reefer, flatbed, step-deck, RGN, sprinter vans, and power-only. We cover all 48 continental states with strong volume in the Midwest, Southeast, and along I-70/I-80 corridors.",
  },
];

export default function CarriersPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          ["--hero-bg" as string]:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="container">
          <span className="label reveal">FOR CARRIERS</span>
          <h1 className="heading-xl reveal">
            Haul for a Broker<br />
            <span className="hero-gold-solid">That Respects the Driver.</span>
          </h1>
          <p className="page-hero-desc reveal">
            We&apos;re not in the business of grinding carriers on rates or ghosting you
            when there&apos;s a problem. We&apos;re in the business of keeping your trailer
            loaded with freight that pays — on time, every time.
          </p>
          <div className="page-hero-actions reveal">
            <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
              Join Our Network <ArrowIcon />
            </Link>
            <a href="tel:+17404759647" className="btn btn-gold-outline btn-lg">
              <i className="fas fa-phone-alt"></i> Call Dispatch
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="why section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">CARRIER BENEFITS</span>
            <h2 className="heading-lg">
              Why Drivers Stay<br />With Elephant Cargo
            </h2>
            <p className="body-text">
              We&apos;ve heard every complaint about brokers — cheap rates, slow pay,
              dispatchers who ghost you. Here&apos;s how we do it differently.
            </p>
          </div>
          <div className="why-grid">
            {[
              ["fa-dollar-sign", "Same-Day Quick Pay", "Sign the POD, get paid today. ACH direct to your account with no minimums and no enrollment fees."],
              ["fa-route", "Lanes You Actually Run", "We build around your home base and preferred freight — not whatever cheap load we need covered this hour."],
              ["fa-headset", "24/7 Live Dispatch", "Breakdown at 3 AM? Weather delay on a Sunday? Our team is on the phone, helping you solve it."],
              ["fa-handshake", "Honest Negotiation", "We quote the rate we can pay and let you decide. No lowball games, no bait-and-switch, no wasted phone calls."],
              ["fa-file-signature", "Fast, Paperless Setup", "Digital carrier packet, e-signature rate cons, and same-day onboarding. Hauling your first load within 24 hours."],
              ["fa-user-shield", "Professional Treatment", "We respect your time, your equipment, and your expertise. You&apos;re a partner here, not a hired hand."],
            ].map(([icon, title, desc]) => (
              <div className="why-card tilt-card reveal" key={title}>
                <div className="why-icon">
                  <i className={`fas ${icon}`}></i>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK PAY COMPARISON */}
      <section className="pay-comparison section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">PAYMENT OPTIONS</span>
            <h2 className="heading-lg">
              Choose How Fast<br />You Get Paid
            </h2>
            <p className="body-text">
              Cash flow is everything when you&apos;re running a truck. Pick the payment
              speed that fits your operation.
            </p>
          </div>
          <div className="pay-grid">
            {PAY_OPTIONS.map((opt) => (
              <div
                className={`pay-card tilt-card reveal ${opt.highlight ? "pay-card-highlight" : ""}`}
                key={opt.name}
              >
                {opt.highlight && <div className="pay-badge">MOST POPULAR</div>}
                <h3>{opt.name}</h3>
                <div className="pay-speed">
                  <span className="pay-speed-num">{opt.speed}</span>
                </div>
                <div className="pay-fee">
                  <span className="pay-fee-num">{opt.fee}</span>
                  <span className="pay-fee-label">processing fee</span>
                </div>
                <ul className="pay-features">
                  {opt.features.map((f) => (
                    <li key={f}>
                      <i className="fas fa-check"></i> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${opt.highlight ? "btn-gold" : "btn-gold-outline"} btn-full`}
                >
                  Get Started <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE REQUIREMENTS */}
      <section className="requirements-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHAT WE REQUIRE</span>
            <h2 className="heading-lg">
              Insurance &amp;<br />Qualification Standards
            </h2>
            <p className="body-text">
              Simple, fair requirements to keep our network safe and reliable for
              everyone.
            </p>
          </div>
          <div className="requirements-grid">
            {[
              {
                icon: "fa-shield-halved",
                title: "Auto Liability",
                value: "$1,000,000",
                desc: "Minimum auto liability coverage on file with us as certificate holder.",
              },
              {
                icon: "fa-box-open",
                title: "Cargo Insurance",
                value: "$100,000",
                desc: "Minimum cargo coverage. Higher limits required for high-value freight.",
              },
              {
                icon: "fa-id-card",
                title: "Active MC Authority",
                value: "Required",
                desc: "Active operating authority in good standing with FMCSA — any age accepted.",
              },
              {
                icon: "fa-star",
                title: "Safety Rating",
                value: "Satisfactory",
                desc: "Satisfactory or unrated CSA score. We review on a case-by-case basis for others.",
              },
            ].map((req) => (
              <div className="requirement-card tilt-card reveal" key={req.title}>
                <div className="requirement-icon">
                  <i className={`fas ${req.icon}`}></i>
                </div>
                <div className="requirement-value">{req.value}</div>
                <h3>{req.title}</h3>
                <p>{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="process-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">GETTING STARTED</span>
            <h2 className="heading-lg">
              Three Steps to<br />Your First Load
            </h2>
          </div>
          <div className="process-grid">
            {[
              { step: "01", icon: "fa-file-lines", title: "Submit Carrier Packet", desc: "Send us your MC authority, W-9, COI, and voided check. Our team reviews within one business day — rush approvals on request." },
              { step: "02", icon: "fa-magnifying-glass-chart", title: "Tell Us Your Lanes", desc: "Share your preferred lanes, equipment, and home base. We match you with the loads that fit how you actually run." },
              { step: "03", icon: "fa-truck-fast", title: "Dispatch &amp; Deliver", desc: "Digital rate con, GPS tracking, 24/7 dispatch, and quick pay. Built to keep your wheels turning and your invoices paid." },
            ].map((p) => (
              <div className="process-card tilt-card reveal" key={p.step}>
                <div className="process-step">{p.step}</div>
                <div className="process-icon">
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: p.title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: p.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">CARRIER FAQ</span>
            <h2 className="heading-lg">Common Questions</h2>
            <p className="body-text">
              Straight answers to the questions we get most often. Don&apos;t see yours?
              Call us — we&apos;ll talk you through it.
            </p>
          </div>
          <div className="faq-grid">
            {FAQ.map((f) => (
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

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner reveal">
            <div>
              <h2 className="heading-lg">Ready to Roll With Us?</h2>
              <p className="body-text">
                Get set up in 24 hours and start hauling freight that fits your operation
                — with a broker that respects your time and pays you fast.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
                Get Started <ArrowIcon />
              </Link>
              <a href="tel:+17404759647" className="btn btn-white-outline btn-lg">
                <i className="fas fa-phone-alt"></i> (740) 475-9647
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
