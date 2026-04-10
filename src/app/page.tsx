import Link from "next/link";
import ContactForm from "@/components/ContactForm";
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

// Photo set — fresh imagery pulled from Unsplash
const IMG = {
  carriersCta: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
};

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="home">
        <div className="hero-visual">
          <video autoPlay muted loop playsInline src="/images/hero-truck.mp4" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="container hero-content">
          <h1 className="hero-title reveal">
            Freight That Moves<br />
            <span className="hero-gold">Like You&apos;re</span><br />
            <span className="hero-gold">Their Only</span> Customer
          </h1>
          <p className="hero-desc reveal">
            Elephant Cargo is the freight brokerage shippers call first and carriers stay
            loyal to — a 48-state network run by real dispatchers who answer the phone,
            solve the problem, and move your load.
          </p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
              Get a Free Quote <ArrowIcon />
            </Link>
            <Link href="/services" className="btn btn-white-outline btn-lg">
              Explore Services <ArrowIcon />
            </Link>
          </div>
          <div className="hero-scroll-indicator reveal">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-strip-grid">
            <div className="stat-strip-item reveal">
              <AnimatedCounter target={12000} suffix="+" />
              <span className="stat-strip-label">Loads Delivered</span>
            </div>
            <div className="stat-strip-item reveal">
              <AnimatedCounter target={500} suffix="+" />
              <span className="stat-strip-label">Carrier Partners</span>
            </div>
            <div className="stat-strip-item reveal">
              <AnimatedCounter target={48} />
              <span className="stat-strip-label">States Covered</span>
            </div>
            <div className="stat-strip-item reveal">
              <AnimatedCounter target={98} suffix="%" />
              <span className="stat-strip-label">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRIO CTA ============ */}
      <section className="trio section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHO WE SERVE</span>
            <h2 className="heading-lg">
              A Brokerage Built for<br />Both Sides of the Load
            </h2>
            <p className="body-text">
              Whether you&apos;re shipping freight or hauling it, you deserve a partner who
              treats your business like it matters — because it does.
            </p>
          </div>
          <div className="trio-grid">
            <div className="trio-card tilt-card reveal">
              <div className="trio-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3>SHIPPERS</h3>
              <p>
                Capacity you can count on, rates that respect your margins, and a single
                point of contact who actually knows your business by name.
              </p>
              <Link href="/shippers" className="btn btn-gold-outline">
                SHIPPER SOLUTIONS <ArrowIcon />
              </Link>
            </div>
            <div className="trio-card featured tilt-card reveal">
              <div className="trio-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>CARRIERS</h3>
              <p>
                Consistent freight on the lanes you run, quick pay when you need it, and
                dispatchers who pick up on the first ring — day, night, or weekend.
              </p>
              <Link href="/carriers" className="btn btn-gold">
                JOIN OUR NETWORK <ArrowIcon />
              </Link>
            </div>
            <div className="trio-card tilt-card reveal">
              <div className="trio-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>PARTNERS</h3>
              <p>
                3PLs, freight forwarders, and logistics companies turn to Elephant Cargo
                for overflow capacity, project freight, and white-label brokerage support.
              </p>
              <Link href="/about" className="btn btn-gold-outline">
                WHO WE ARE <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED MARQUEE ============ */}
      <section className="trusted">
        <div className="container">
          <h3 className="trusted-heading">CERTIFIED &middot; VETTED &middot; TRUSTED</h3>
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

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="services section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHAT WE MOVE</span>
            <h2 className="heading-lg">
              Every Mode.<br />Every Lane. One Call.
            </h2>
            <p className="body-text">
              From a single pallet in the Midwest to cross-country project freight, we
              match every load with the right equipment and the right driver.
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: "fa-truck-moving",
                title: "Full Truckload",
                desc: "Dedicated dry van and specialized capacity for point-to-point delivery — no stops, no delays, no surprises.",
                href: "/services#ftl",
              },
              {
                icon: "fa-boxes-stacked",
                title: "LTL & Partials",
                desc: "Pay for the space you use. Smart consolidation across our nationwide LTL network with guaranteed options available.",
                href: "/services#ltl",
              },
              {
                icon: "fa-trailer",
                title: "Flatbed & Heavy Haul",
                desc: "Step-decks, RGNs, Conestogas and permitted oversized loads. We handle machinery, steel, lumber, and project freight.",
                href: "/services#flatbed",
              },
              {
                icon: "fa-snowflake",
                title: "Refrigerated",
                desc: "FSMA-compliant cold-chain for produce, protein, dairy, and pharmaceuticals with live temperature monitoring.",
                href: "/services#reefer",
              },
              {
                icon: "fa-bolt",
                title: "Expedited",
                desc: "Sprinter vans to team-driver dry vans — when you absolutely have to be there yesterday. 24/7 dispatch on every load.",
                href: "/services#expedited",
              },
              {
                icon: "fa-ship",
                title: "Drayage & Intermodal",
                desc: "Port-to-door container transport and rail/truck combination pricing. Chassis management and demurrage avoidance included.",
                href: "/services#drayage",
              },
            ].map((s) => (
              <Link href={s.href} className="service-card tilt-card reveal" key={s.title}>
                <div className="service-icon">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
          <div className="section-cta reveal">
            <Link href="/services" className="btn btn-gold btn-lg">
              See All Services <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SPLIT BANNER ============ */}
      <section className="split-banner">
        <Link href="/shippers" className="split-half split-shippers reveal">
          <div className="split-content">
            <span className="label">FOR SHIPPERS</span>
            <h2 className="heading-lg">Ship With Confidence</h2>
            <p>Capacity, visibility, and accountability on every single load.</p>
            <span className="split-arrow">
              Shipper Solutions <ArrowIcon />
            </span>
          </div>
        </Link>
        <Link href="/carriers" className="split-half split-carriers reveal">
          <div className="split-content">
            <span className="label">FOR CARRIERS</span>
            <h2 className="heading-lg">Keep Wheels Moving</h2>
            <p>Steady freight, fair rates, and quick pay on every delivered load.</p>
            <span className="split-arrow">
              Join Our Network <ArrowIcon />
            </span>
          </div>
        </Link>
      </section>

      {/* ============ WHY US ============ */}
      <section className="why section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">THE ELEPHANT DIFFERENCE</span>
            <h2 className="heading-lg">
              Big Enough to Deliver.<br />Small Enough to Care.
            </h2>
            <p className="body-text">
              We&apos;re not the biggest broker in America — and that&apos;s the point. Every
              load gets the attention of a real human being who owns the outcome.
            </p>
          </div>
          <div className="why-grid">
            {[
              ["fa-phone-volume", "The Phone Gets Answered", "First ring, every time. Including 2 AM, weekends, and holidays. Real humans, not IVR menus or chatbots."],
              ["fa-satellite-dish", "Live Visibility", "GPS tracking on every load, automated milestone alerts, and a team that calls you before problems become problems."],
              ["fa-user-check", "Carriers We&apos;d Ride With", "Every carrier in our network is vetted for authority, insurance, safety scores, and service history — no exceptions."],
              ["fa-shield-halved", "Accountability Built In", "When something goes sideways, we own it. No blame-shifting, no excuses — just a phone call with the plan to make it right."],
              ["fa-bolt", "Fast Everything", "Quote in 60 minutes or less. Carrier dispatched within the hour. POD processed same day. Quick pay available."],
              ["fa-handshake", "Partnership, Not Transaction", "A single dedicated broker who learns your lanes, your rates, and your preferences — so you stop explaining yourself every load."],
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

      {/* ============ TESTIMONIALS ============ */}
      <section className="reviews section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHAT PARTNERS SAY</span>
            <h2 className="heading-lg">Don&apos;t Take Our Word For It</h2>
          </div>
          <div className="reviews-grid">
            {[
              {
                initials: "JM",
                name: "Jordan M.",
                role: "Logistics Manager, Midwest Steel Co.",
                quote:
                  "We&apos;ve tried bigger brokers and been treated like a number every time. With Elephant Cargo, I text my rep at 6 AM and have a truck dispatched before my coffee is cold. They just get it.",
              },
              {
                initials: "RT",
                name: "Ricky T.",
                role: "Owner-Operator, 2-Truck Fleet",
                quote:
                  "Quick pay is actually quick — I&apos;ve had money in my account the same day I sent in a POD. Fair rates, no haggling games, and dispatchers who remember my name. Hard to find that anymore.",
              },
              {
                initials: "SK",
                name: "Sasha K.",
                role: "Supply Chain Director, Cold Foods Inc.",
                quote:
                  "We moved three temperature-critical trucks coast-to-coast on zero notice when our regular broker dropped the ball. Elephant Cargo had drivers rolling in 90 minutes. Career-saver.",
              },
            ].map((r) => (
              <div className="review-card tilt-card reveal" key={r.initials}>
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <blockquote dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }} />
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

      {/* ============ CARRIER CTA IMAGE BANNER ============ */}
      <section className="carriers-section section">
        <div className="container">
          <div className="carriers-layout">
            <div className="carriers-copy reveal">
              <span className="label">CARRIER NETWORK</span>
              <h2 className="heading-lg">
                Haul With a Broker<br />That Has Your Back
              </h2>
              <p className="body-text">
                We treat carriers like the backbone of our business — because they are. If
                you run safe, deliver on time, and communicate like a pro, we&apos;ll keep
                your trailer loaded.
              </p>
              <div className="carriers-benefits">
                {[
                  ["fa-dollar-sign", "Same-Day Quick Pay", "Get paid the day we receive your POD. ACH direct to your account."],
                  ["fa-route", "Lanes You Actually Run", "We build relationships around your home base, not cheap one-off loads."],
                  ["fa-headset", "24/7 Live Dispatch", "Breakdown at 3 AM? We&apos;re on the phone helping you solve it."],
                  ["fa-handshake", "Honest Negotiation", "No games. We tell you the rate we can pay and let you decide."],
                ].map(([icon, title, desc]) => (
                  <div className="carrier-benefit reveal" key={title}>
                    <div className="benefit-icon">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <div>
                      <strong dangerouslySetInnerHTML={{ __html: title }}></strong>
                      <span dangerouslySetInnerHTML={{ __html: desc }}></span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/carriers" className="btn btn-gold btn-lg">
                See Carrier Benefits <ArrowIcon />
              </Link>
            </div>
            <div className="carriers-media reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.carriersCta} alt="Professional carrier partner" />
              <div className="media-badge">
                <i className="fas fa-star"></i> 4.9 / 5 Carrier Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info reveal">
              <span className="label">GET IN TOUCH</span>
              <h2 className="heading-lg">
                Let&apos;s Move Your<br />Freight Forward.
              </h2>
              <p className="body-text">
                Tell us about your load and we&apos;ll get a real quote back to you — with
                a real carrier lined up — in under an hour.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Our Office</strong>
                    <p>2318 E Main St, Lancaster, OH 43130</p>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>24/7 Dispatch</strong>
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
                    <p>Operations 24/7 &middot; Office Mon-Fri 8a-6p EST</p>
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
    </>
  );
}
