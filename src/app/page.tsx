import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import CustomCursor from "@/components/CustomCursor";

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

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-visual">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/images/hero-truck.mp4"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="container hero-content">
          <div className="hero-badge reveal">
            <span className="hero-badge-dot"></span>
            ELEPHANT CARGO LLC
          </div>
          <h1 className="hero-title reveal">
            Your Trusted<br />
            <span className="hero-gold">Supply Chain</span> &<br />
            <span className="hero-gold">Transportation</span> Partner
          </h1>
          <p className="hero-desc reveal">
            Delivering unparalleled logistics solutions with experienced professionals
            dedicated to your freight success across all 48 states.
          </p>
          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-gold btn-lg">
              Get a Free Quote <ArrowIcon />
            </a>
            <a href="#shippers" className="btn btn-white-outline btn-lg">
              Learn More <ArrowIcon />
            </a>
          </div>
          <div className="hero-scroll-indicator reveal">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* THREE COLUMN CTA */}
      <section className="trio section" id="shippers">
        <div className="container">
          <div className="trio-grid">
            <div className="trio-card reveal">
              <div className="trio-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3>SHIPPERS</h3>
              <p>
                Need reliable capacity at competitive rates? Our team provides full truckload,
                LTL, flatbed, reefer, and expedited services tailored to your supply chain needs.
              </p>
              <a href="#services" className="btn btn-gold-outline">
                LEARN MORE <ArrowIcon />
              </a>
            </div>
            <div className="trio-card featured reveal">
              <div className="trio-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>CARRIERS</h3>
              <p>
                Looking for consistent loads and quick pay? Join our trusted carrier network
                and keep your trucks moving with steady freight and professional support.
              </p>
              <a href="#carriers" className="btn btn-gold">
                JOIN OUR NETWORK <ArrowIcon />
              </a>
            </div>
            <div className="trio-card reveal">
              <div className="trio-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>COMPANY</h3>
              <p>
                Licensed and bonded freight brokerage based in Lancaster, Ohio. Built on trust,
                driven by results, and committed to exceptional service every shipment.
              </p>
              <a href="#company" className="btn btn-gold-outline">
                ABOUT US <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <div className="container">
          <h3 className="trusted-heading">TRUSTED BY</h3>
        </div>
        <div className="trusted-marquee">
          <div className="trusted-track">
            {/* Duplicate logos twice for seamless infinite scroll */}
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

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">OUR SERVICES</span>
            <h2 className="heading-lg">
              Comprehensive Freight<br />Solutions
            </h2>
            <p className="body-text">
              From full truckloads to temperature-controlled shipments,
              we match every load with the right carrier.
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: "fa-truck-moving",
                title: "Full Truckload (FTL)",
                desc: "Dedicated truck capacity for your full shipments. Direct point-to-point delivery with maximum efficiency.",
              },
              {
                icon: "fa-boxes-stacked",
                title: "Less Than Truckload",
                desc: "Cost-effective shipping for smaller loads without compromising delivery timelines.",
              },
              {
                icon: "fa-trailer",
                title: "Flatbed & Open Deck",
                desc: "Heavy equipment, steel, lumber — we handle oversized and irregularly shaped cargo.",
              },
              {
                icon: "fa-snowflake",
                title: "Refrigerated (Reefer)",
                desc: "Strict cold-chain compliance for perishable goods from pickup to delivery.",
              },
              {
                icon: "fa-bolt",
                title: "Expedited Freight",
                desc: "Time-critical shipments with dedicated team-drivers and direct routes for fastest delivery.",
              },
              {
                icon: "fa-ship",
                title: "Drayage & Intermodal",
                desc: "Seamless port-to-door container transport across rail, truck, and port.",
              },
            ].map((s) => (
              <div className="service-card reveal" key={s.title}>
                <div className="service-icon">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRIERS SECTION */}
      <section className="carriers-section section" id="carriers">
        <div className="container">
          <div className="carriers-layout">
            <div className="carriers-copy reveal">
              <span className="label">FOR CARRIERS</span>
              <h2 className="heading-lg">
                Partner With<br />Elephant Cargo
              </h2>
              <p className="body-text">
                We value our carrier partners. Join our network and benefit from consistent
                freight, quick pay options, and a professional team that respects your time.
              </p>
              <div className="carriers-benefits">
                {[
                  ["fa-dollar-sign", "Quick Pay Options", "Get paid faster with our flexible payment terms."],
                  ["fa-route", "Consistent Freight", "Steady loads across your preferred lanes."],
                  ["fa-headset", "24/7 Support", "Round-the-clock dispatch and operations support."],
                  ["fa-shield-alt", "Professional Service", "Transparent communication and fair rates."],
                ].map(([icon, title, desc]) => (
                  <div className="carrier-benefit reveal" key={title}>
                    <div className="benefit-icon">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <div>
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn btn-gold btn-lg">
                Join Our Network <ArrowIcon />
              </a>
            </div>
            <div className="carriers-media reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/cta-carriers.jpg" alt="Carrier partner" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY / ABOUT */}
      <section className="company section" id="company">
        <div className="container">
          <div className="company-layout">
            <div className="company-media reveal">
              <div className="company-img-stack">
                <div className="company-img-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/about-primary.jpg" alt="Freight logistics fleet" />
                </div>
                <div className="company-img-float">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/about-float.jpg" alt="Cargo containers at port" />
                </div>
              </div>
            </div>
            <div className="company-copy">
              <span className="label reveal">ABOUT OUR COMPANY</span>
              <h2 className="heading-lg reveal">
                Built on Trust.<br />Driven by Results.
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
              <div className="company-stats reveal">
                <div className="stat">
                  <span className="stat-num">48</span>
                  <span className="stat-label">States Covered</span>
                </div>
                <div className="stat">
                  <span className="stat-num">500+</span>
                  <span className="stat-label">Carrier Partners</span>
                </div>
                <div className="stat">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHY ELEPHANT CARGO</span>
            <h2 className="heading-lg">
              The Power Behind<br />Your Supply Chain
            </h2>
          </div>
          <div className="why-grid">
            {[
              ["fa-dollar-sign", "Competitive Rates", "Our carrier network and market expertise deliver the best rates without compromising service."],
              ["fa-satellite-dish", "Real-Time Tracking", "Full visibility on every shipment with live GPS tracking and proactive status updates."],
              ["fa-headset", "24/7 Support", "Round-the-clock operations team. You're never left in the dark about your shipment."],
              ["fa-user-check", "Vetted Carriers", "Every carrier is thoroughly checked for safety records, insurance, authority, and history."],
              ["fa-file-invoice", "Quick Pay", "Fast payment for carriers. Flexible billing for shippers. Cash flows, freight moves."],
              ["fa-handshake", "Dedicated Broker", "A single point of contact who knows your business — a relationship, not a transaction."],
            ].map(([icon, title, desc]) => (
              <div className="why-card reveal" key={title}>
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

      {/* TESTIMONIALS */}
      <section className="reviews section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">TESTIMONIALS</span>
            <h2 className="heading-lg">
              What Our Partners Say
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
              <span className="label">GET IN TOUCH</span>
              <h2 className="heading-lg">
                Ready to Move<br />Your Freight?
              </h2>
              <p className="body-text">
                Whether you&apos;re shipping a single load or need ongoing logistics support,
                our team is ready to help.
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
                  <span className="logo-name">ELEPHANT CARGO</span>
                  <span className="logo-tagline">SUPPLY CHAIN & TRANSPORTATION</span>
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
                <li><a href="#shippers">Shippers</a></li>
                <li><a href="#carriers">Carriers</a></li>
                <li><a href="#company">Company</a></li>
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
