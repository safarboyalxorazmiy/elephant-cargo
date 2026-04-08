import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/CounterAnimation";
import ContactForm from "@/components/ContactForm";

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

const StepArrow = () => (
  <div className="step-connector reveal">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M12 24h24M30 18l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt="Dry van semi trucks on highway"
          />
        </div>
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="hero-tag reveal">Licensed &amp; Bonded Freight Broker</div>
            <h1 className="hero-title reveal">
              Move freight<br />
              with <span className="hero-highlight">elephant</span><br />
              strength.
            </h1>
            <p className="hero-desc reveal">
              We connect shippers with trusted carriers across all 48 continental states.
              Reliable capacity. Competitive rates. Every single time.
            </p>
            <div className="hero-actions reveal">
              <a href="#contact" className="btn btn-cta btn-lg">
                Get a Free Quote <ArrowIcon />
              </a>
              <a href="tel:+17404759647" className="btn btn-ghost btn-lg">
                <i className="fas fa-phone-alt"></i>
                (740) 475-9647
              </a>
            </div>
          </div>
          <div className="hero-right reveal">
            <div className="hero-metrics">
              <div className="metric">
                <AnimatedCounter target={48} />
                <span className="metric-label">States<br />Covered</span>
              </div>
              <div className="metric">
                <AnimatedCounter target={500} suffix="+" />
                <span className="metric-label">Carrier<br />Partners</span>
              </div>
              <div className="metric">
                <span className="metric-num">24</span>
                <span className="metric-plus">/7</span>
                <span className="metric-label">Always<br />Available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-row">
            {[
              ["fa-shield-alt", "FMCSA Licensed"],
              ["fa-file-contract", "Fully Bonded"],
              ["fa-certificate", "Fully Insured"],
              ["fa-check-circle", "Vetted Carriers"],
              ["fa-clock", "24/7 Dispatch"],
            ].map(([icon, text]) => (
              <div className="trust-chip reveal" key={text}>
                <i className={`fas ${icon}`}></i> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-media reveal">
              <div className="about-img-stack">
                <div className="about-img-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-primary.jpg"
                    alt="Freight logistics fleet"
                  />
                </div>
                <div className="about-img-float">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-float.jpg"
                    alt="Cargo containers at port"
                  />
                </div>
              </div>
              <div className="about-location-pill">
                <i className="fas fa-map-pin"></i>
                Lancaster, Ohio
              </div>
            </div>
            <div className="about-copy">
              <span className="label reveal">About Us</span>
              <h2 className="heading-lg reveal">
                Built on trust.<br />Driven by results.
              </h2>
              <p className="body-text reveal">
                Elephant Cargo LLC is a premier freight brokerage based in Lancaster, Ohio.
                We specialize in connecting shippers with reliable carriers across the continental
                United States. Our name reflects our values — strength, reliability, and an
                unforgettable commitment to service.
              </p>
              <p className="body-text reveal">
                Whether you need full truckload, LTL, flatbed, refrigerated, or specialized hauling,
                our team works around the clock to find the best capacity at competitive rates.
              </p>
              <div className="about-pills reveal">
                <div className="pill">
                  <i className="fas fa-route"></i>
                  <div>
                    <strong>Strategic Routing</strong>
                    <span>Optimized lanes for cost-effective delivery</span>
                  </div>
                </div>
                <div className="pill">
                  <i className="fas fa-user-tie"></i>
                  <div>
                    <strong>Dedicated Agents</strong>
                    <span>Personal broker assigned to every shipment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">Our Services</span>
            <h2 className="heading-lg">
              Everything your<br />freight needs.
            </h2>
            <p className="body-text muted">
              From full truckloads to temperature-controlled shipments, we match every load with the right carrier.
            </p>
          </div>
          <div className="bento">
            {[
              {
                wide: true,
                img: "/images/service-ftl.jpg",
                icon: "fa-truck-moving",
                title: "Full Truckload (FTL)",
                desc: "Dedicated truck capacity for your full shipments. Direct point-to-point delivery with maximum efficiency.",
              },
              {
                img: "/images/service-ltl.jpg",
                icon: "fa-boxes-stacked",
                title: "Less Than Truckload",
                desc: "Cost-effective shipping for smaller loads without compromising delivery timelines.",
              },
              {
                img: "/images/service-flatbed.jpg",
                icon: "fa-trailer",
                title: "Flatbed & Open Deck",
                desc: "Heavy equipment, steel, lumber — we handle oversized and irregularly shaped cargo.",
              },
              {
                img: "/images/service-reefer.jpg",
                icon: "fa-snowflake",
                title: "Refrigerated (Reefer)",
                desc: "Strict cold-chain compliance for perishable goods from pickup to delivery.",
              },
              {
                wide: true,
                img: "/images/service-expedited.jpg",
                icon: "fa-bolt",
                title: "Expedited Freight",
                desc: "Time-critical shipments with dedicated team-drivers and direct routes for fastest possible delivery.",
              },
              {
                img: "/images/service-drayage.jpg",
                icon: "fa-ship",
                title: "Drayage & Intermodal",
                desc: "Seamless port-to-door container transport across rail, truck, and port.",
              },
            ].map((s) => (
              <div
                className={`bento-card${s.wide ? " bento-wide" : ""} reveal`}
                key={s.title}
              >
                <div className="bento-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="bento-body">
                  <div className="bento-icon">
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why section" id="why-us">
        <div className="container">
          <div className="why-header">
            <div className="why-intro reveal">
              <span className="label light">Why Elephant Cargo</span>
              <h2 className="heading-lg light">
                The power behind<br />your supply chain.
              </h2>
            </div>
            <div className="why-desc reveal">
              <p>
                We don&apos;t just move freight — we build partnerships. Every shipment is backed by
                industry expertise, cutting-edge visibility, and a team that treats your cargo like
                their own.
              </p>
            </div>
          </div>
          <div className="why-grid">
            {[
              ["01", "fa-dollar-sign", "Competitive Rates", "Our carrier network and market expertise deliver the best rates without compromising service."],
              ["02", "fa-satellite-dish", "Real-Time Tracking", "Full visibility on every shipment with live GPS tracking and proactive status updates."],
              ["03", "fa-headset", "24/7 Support", "Round-the-clock operations team. You're never left in the dark about your shipment."],
              ["04", "fa-user-check", "Vetted Carriers", "Every carrier is thoroughly checked for safety records, insurance, authority, and history."],
              ["05", "fa-file-invoice", "Quick Pay", "Fast payment for carriers. Flexible billing for shippers. Cash flows, freight moves."],
              ["06", "fa-handshake", "Dedicated Broker", "A single point of contact who knows your business — a relationship, not a transaction."],
            ].map(([num, icon, title, desc]) => (
              <div className="why-card reveal" key={num}>
                <span className="why-num">{num}</span>
                <div className="why-icon">
                  <i className={`fas ${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section" id="process">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">How It Works</span>
            <h2 className="heading-lg">
              Three steps to<br />moving your freight.
            </h2>
          </div>
          <div className="steps-row">
            <div className="step reveal">
              <div className="step-visual">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/process-quote.jpg"
                  alt="Request quote"
                />
                <span className="step-badge">01</span>
              </div>
              <h3>Request a Quote</h3>
              <p>Share your shipment details — origin, destination, commodity, weight, timeline. We respond within minutes.</p>
            </div>
            <StepArrow />
            <div className="step reveal">
              <div className="step-visual">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/process-match.jpg"
                  alt="Match carrier"
                />
                <span className="step-badge">02</span>
              </div>
              <h3>We Match a Carrier</h3>
              <p>Our team sources capacity from vetted carriers, selecting the best match for your load requirements.</p>
            </div>
            <StepArrow />
            <div className="step reveal">
              <div className="step-visual">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/process-deliver.jpg"
                  alt="Track delivery"
                />
                <span className="step-badge">03</span>
              </div>
              <h3>Track &amp; Deliver</h3>
              <p>We monitor your shipment in real-time and keep you updated from pickup through proof of delivery.</p>
            </div>
          </div>
          <div className="process-cta reveal">
            <div className="process-cta-inner">
              <div>
                <h3>Ready to ship?</h3>
                <p>Get a quote in under 5 minutes. No obligations.</p>
              </div>
              <a href="#contact" className="btn btn-cta btn-lg">
                Get Started <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="dual-cta section">
        <div className="container">
          <div className="dual-grid">
            <div className="dual-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cta-shippers.jpg"
                alt="For Shippers"
                className="dual-bg"
              />
              <div className="dual-content">
                <i className="fas fa-warehouse"></i>
                <h3>For Shippers</h3>
                <p>Need reliable capacity at competitive rates? Let us handle the logistics while you focus on your business.</p>
                <a href="#contact" className="btn btn-cta">
                  Ship With Us <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="dual-card reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cta-carriers.jpg"
                alt="For Carriers"
                className="dual-bg"
              />
              <div className="dual-content">
                <i className="fas fa-truck"></i>
                <h3>For Carriers</h3>
                <p>Looking for consistent loads and quick pay? Join our carrier network and keep your trucks moving.</p>
                <a href="#contact" className="btn btn-light">
                  Haul With Us <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="reviews section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">Testimonials</span>
            <h2 className="heading-lg">
              Trusted by shippers<br />and carriers alike.
            </h2>
          </div>
          <div className="reviews-grid">
            {[
              {
                initials: "JM",
                name: "James Mitchell",
                role: "Logistics Manager, Midwest Manufacturing",
                quote:
                  "Elephant Cargo has been our go-to broker for over a year. Their rates are competitive and the communication is outstanding. Our freight always arrives on time.",
              },
              {
                initials: "RT",
                name: "Robert Thompson",
                role: "Owner-Operator, RT Trucking",
                quote:
                  "As an owner-operator, I appreciate how quickly Elephant Cargo pays and how professional their dispatchers are. They always have loads ready for my lanes.",
              },
              {
                initials: "SK",
                name: "Sarah Kim",
                role: "Supply Chain Director, FreshPack Foods",
                quote:
                  "Their team handled our expedited shipment flawlessly. From quote to delivery in under 12 hours across 3 states. That's the kind of service you can't find everywhere.",
              },
            ].map((r) => (
              <div className="review-card reveal" key={r.initials}>
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <div className="review-author">
                  <div className="review-avatar">{r.initials}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info reveal">
              <span className="label">Get in Touch</span>
              <h2 className="heading-lg">
                Ready to move<br />your freight?
              </h2>
              <p className="body-text muted">
                Whether you&apos;re shipping a single load or need ongoing logistics support, our team is ready to help.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Our Office</strong>
                    <p>2318 E Main St, Lancaster, OH, US</p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>Call Us</strong>
                    <p><a href="tel:+17404759647">(740) 475-9647</a></p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@elephantcargo.com">info@elephantcargo.com</a></p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Hours</strong>
                    <p>24/7 Operations — Office: Mon-Fri 8AM-6PM EST</p>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/74/74208.png"
                  alt="Elephant Cargo"
                  className="logo-icon"
                />
                <div className="logo-text">
                  <span className="logo-name">Elephant Cargo</span>
                  <span className="logo-tagline">Freight Brokerage</span>
                </div>
              </a>
              <p>
                Licensed and bonded freight brokerage providing reliable transportation solutions
                across the continental United States.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Full Truckload</a></li>
                <li><a href="#services">LTL Shipping</a></li>
                <li><a href="#services">Flatbed &amp; Open Deck</a></li>
                <li><a href="#services">Refrigerated</a></li>
                <li><a href="#services">Expedited Freight</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact-list">
                <li><i className="fas fa-map-marker-alt"></i> 2318 E Main St, Lancaster, OH</li>
                <li><i className="fas fa-phone-alt"></i> <a href="tel:+17404759647">(740) 475-9647</a></li>
                <li><i className="fas fa-envelope"></i> <a href="mailto:info@elephantcargo.com">info@elephantcargo.com</a></li>
              </ul>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2024 Elephant Cargo LLC. All rights reserved.</span>
            <span>MC# XXXXXX &middot; USDOT# XXXXXX</span>
          </div>
        </div>
      </footer>
    </>
  );
}
