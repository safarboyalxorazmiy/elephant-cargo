import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedCounter } from "@/components/CounterAnimation";

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
  title: "About Elephant Cargo | Lancaster, OH Freight Brokerage",
  description:
    "Licensed and bonded freight brokerage from Lancaster, Ohio. Meet the team, the story, and the values that drive every load we move across the 48 states.",
};

const IMG = {
  aboutPrimary: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
  aboutFloat: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
};

const VALUES = [
  {
    icon: "fa-handshake",
    title: "Integrity First",
    desc: "We do what we say. Every quote, every commitment, every conversation. If we can&apos;t deliver, we say so before it becomes your problem.",
  },
  {
    icon: "fa-users",
    title: "Partnership Over Profit",
    desc: "Short-term wins kill long-term relationships. We build for the next five years of freight together, not the cheapest load this week.",
  },
  {
    icon: "fa-bolt",
    title: "Urgency Is Our Default",
    desc: "The phone gets answered. The email gets returned. The problem gets solved. Nothing sits on a desk overnight at Elephant Cargo.",
  },
  {
    icon: "fa-shield-halved",
    title: "We Own It",
    desc: "When something goes sideways, and in freight something always does, we don&apos;t blame the carrier, the shipper, or the weather. We own it and we fix it.",
  },
  {
    icon: "fa-eye",
    title: "Transparent by Default",
    desc: "Honest rates, clear breakdowns, no hidden fees, no surprise invoices. You always know exactly where your freight is and exactly what you&apos;re paying for.",
  },
  {
    icon: "fa-heart",
    title: "Care Like It&apos;s Ours",
    desc: "Every load represents someone&apos;s business, someone&apos;s customer, someone&apos;s paycheck. We treat it like our own, because in our heads, it is.",
  },
];

const TIMELINE = [
  {
    year: "2019",
    title: "Founded in Lancaster",
    desc: "Elephant Cargo opens its doors with a simple mission: do brokerage the way we wished we were treated when we worked on the shipper side.",
  },
  {
    year: "2021",
    title: "48-State Coverage",
    desc: "Carrier network expands to cover every continental state with dedicated capacity on key Midwest, Southeast, and cross-country lanes.",
  },
  {
    year: "2023",
    title: "Specialty Divisions",
    desc: "Dedicated reefer, flatbed, and expedited teams launch to serve cold-chain, heavy-haul, and time-critical freight customers.",
  },
  {
    year: "2025",
    title: "500+ Carrier Network",
    desc: "Vetted carrier partners surpass 500, with same-day quick pay and 24/7 dispatch becoming the standard for every load.",
  },
  {
    year: "2026",
    title: "Next Chapter",
    desc: "New office, growing team, expanded technology. Still the same phone number, same people, same commitment to every shipper and every driver.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          ["--hero-bg" as string]:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="container">
          <span className="label reveal">ABOUT ELEPHANT CARGO</span>
          <h1 className="heading-xl reveal">
            Built on Trust.<br />
            <span className="hero-gold-solid">Driven by Results.</span>
          </h1>
          <p className="page-hero-desc reveal">
            We&apos;re a Lancaster, Ohio-based freight brokerage running on an old-school
            idea: if you treat shippers and carriers like people, they&apos;ll stick around
            for the long haul. That idea has carried us for seven years and counting.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="company section">
        <div className="container">
          <div className="company-layout">
            <div className="company-media reveal">
              <div className="company-img-stack">
                <div className="company-img-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.aboutPrimary} alt="Elephant Cargo team at work" />
                </div>
                <div className="company-img-float">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.aboutFloat} alt="Warehouse operations" />
                </div>
              </div>
            </div>
            <div className="company-copy">
              <span className="label reveal">OUR STORY</span>
              <h2 className="heading-lg reveal">
                A Freight Broker<br />You Can Actually Call
              </h2>
              <p className="body-text reveal">
                Elephant Cargo was founded by freight people who spent too many years on
                the other side of the desk. Chasing down lost trucks, re-explaining
                lanes to the fourth rep in four months, and waiting on quotes that
                never came. We knew brokerage didn&apos;t have to work like that.
              </p>
              <p className="body-text reveal">
                So we built something different. A brokerage where the phone actually
                gets answered. Where carriers get paid fast and treated fair. Where
                shippers get a real human who learns their business and sticks with
                them. No sales scripts. No mystery fees. No hiding when things go wrong.
              </p>
              <p className="body-text reveal">
                Today, Elephant Cargo connects shippers with a vetted carrier network
                covering all 48 continental states, and the team keeps growing because
                the mission hasn&apos;t changed: freight done the right way, every load,
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-card reveal">
            <div className="mission-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <h2>
              We exist to prove that freight brokerage can still be a handshake business.
              That speed and honesty aren&apos;t opposites. And that treating people like
              people is still the best competitive advantage in logistics.
            </h2>
            <div className="mission-sig">
              <div className="mission-sig-line"></div>
              <span>THE ELEPHANT CARGO TEAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal">
              <AnimatedCounter target={48} />
              <span className="stat-label">States Covered</span>
            </div>
            <div className="stat-card reveal">
              <AnimatedCounter target={500} suffix="+" />
              <span className="stat-label">Carrier Partners</span>
            </div>
            <div className="stat-card reveal">
              <span className="metric-num">
                24<span className="metric-plus">/7</span>
              </span>
              <span className="stat-label">Operations</span>
            </div>
            <div className="stat-card reveal">
              <AnimatedCounter target={98} suffix="%" />
              <span className="stat-label">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">OUR JOURNEY</span>
            <h2 className="heading-lg">
              Seven Years of<br />Moving Forward
            </h2>
            <p className="body-text">
              From a single desk in Lancaster to a 48-state network. Here&apos;s how
              Elephant Cargo has grown, one handshake at a time.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className={`timeline-item reveal ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`} key={t.year}>
                <div className="timeline-dot"></div>
                <div className="timeline-card tilt-card">
                  <span className="timeline-year">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="why section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">OUR VALUES</span>
            <h2 className="heading-lg">What We Stand For</h2>
            <p className="body-text">
              Six principles that shape every call, every quote, and every load we move.
            </p>
          </div>
          <div className="why-grid">
            {VALUES.map((v) => (
              <div className="why-card tilt-card reveal" key={v.title}>
                <div className="why-icon">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: v.title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: v.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BADGES */}
      <section className="trusted">
        <div className="container">
          <h3 className="trusted-heading">CERTIFICATIONS &amp; PARTNERSHIPS</h3>
        </div>
        <div className="trusted-marquee">
          <div className="trusted-track">
            {[0, 1].map((set) =>
              [
                { src: "/images/trusted-premier.png", alt: "Premier Carrier" },
                { src: "/images/trusted-smartway.png", alt: "SmartWay Transport Partner" },
                { src: "/images/trusted-bbb.jpg", alt: "BBB Accredited Business" },
                { src: "/images/trusted-500.png", alt: "Top Work Places 2023" },
                { src: "/images/trusted-tia.jpg", alt: "TIA Performance Certified" },
                { src: "/images/trusted-bb.jpg", alt: "Blue Book Since 1901" },
              ].map((badge) => (
                <div className="trusted-logo" key={`${set}-${badge.alt}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={badge.src} alt={badge.alt} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner reveal">
            <div>
              <h2 className="heading-lg">Let&apos;s Work Together</h2>
              <p className="body-text">
                Whether you&apos;re moving freight or hauling it, we&apos;d love the chance
                to earn your business. Give us a load and let us show you what freight
                brokerage is supposed to feel like.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
                Get in Touch <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
