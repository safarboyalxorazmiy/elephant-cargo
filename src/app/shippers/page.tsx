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

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const metadata: Metadata = {
  title: "Shipper Solutions — Capacity You Can Count On",
  description:
    "Freight brokerage built for shippers. Vetted carriers, live visibility, real people on the phone, and a team that treats your supply chain like it matters.",
};

const INDUSTRIES = [
  { icon: "fa-industry", title: "Manufacturing", desc: "Raw materials in, finished goods out. Consistent capacity for production schedules that can&apos;t miss a beat." },
  { icon: "fa-carrot", title: "Food & Beverage", desc: "Temperature-controlled and FSMA-compliant freight. Produce, protein, dairy, frozen, and dry goods." },
  { icon: "fa-hammer", title: "Construction", desc: "Flatbed, heavy haul, and project freight. Jobsite delivery, permits, and oversized equipment specialists." },
  { icon: "fa-pills", title: "Pharmaceuticals", desc: "Temperature-critical pharma freight with chain-of-custody documentation and validated cold storage carriers." },
  { icon: "fa-car", title: "Automotive", desc: "Production-line-critical freight, JIT delivery windows, and tier-1 supplier experience across the Midwest." },
  { icon: "fa-shirt", title: "Retail & Consumer", desc: "Distribution-center deliveries, appointment scheduling, and retailer routing guide compliance." },
  { icon: "fa-leaf", title: "Agriculture", desc: "Grain, feed, fertilizer, and equipment. Seasonal capacity and rural pickup/delivery capability." },
  { icon: "fa-flask", title: "Chemicals", desc: "Hazmat-certified carriers, placarded loads, and SDS documentation handled correctly every time." },
];

const PROBLEMS = [
  "Broker doesn&apos;t return calls until the load is already late",
  "Quote comes back 24 hours later with three asterisks",
  "No tracking — you call the driver, driver calls dispatch, dispatch calls you",
  "Cheapest carrier on the load, surprise breakdown on delivery day",
  "A different rep every load, re-explaining your business each time",
  "Damage claims turn into weeks of finger-pointing",
];

const SOLUTIONS = [
  "Dedicated broker who answers the phone on the first ring — every time",
  "Real quote in 60 minutes or less with no hidden fees",
  "Live GPS tracking and proactive updates before problems happen",
  "Every carrier vetted for insurance, safety, and service history",
  "One point of contact who learns your lanes, rates, and preferences",
  "Claims handled in-house with same-day response and resolution",
];

export default function ShippersPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          ["--hero-bg" as string]:
            "url('https://73f3e7d5672db1849e6c-6434aaf008a29447cc424990bc6a54a7.ssl.cf2.rackcdn.com/stories/202305250117/1140x_a10-7_cTC/TRUCKPARKING0530-6_1759733871.jpg')",
        }}
      >
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="container">
          <span className="label reveal">FOR SHIPPERS</span>
          <h1 className="heading-xl reveal">
            Your Freight Deserves<br />
            <span className="hero-gold-solid">A Broker That Gives A Damn.</span>
          </h1>
          <p className="page-hero-desc reveal">
            Tired of chasing down quotes, losing trucks, and explaining your lanes to a
            new rep every month? Elephant Cargo is the freight brokerage that treats your
            shipments like they&apos;re the only ones that matter — because to us, they
            are.
          </p>
          <div className="page-hero-actions reveal">
            <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
              Request a Quote <ArrowIcon />
            </Link>
            <Link href="/services" className="btn btn-gold-outline btn-lg">
              Browse Services <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="problem-solution section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">THE BROKER PROBLEM</span>
            <h2 className="heading-lg">
              You&apos;ve Had Bad Brokers.<br />We Get It.
            </h2>
            <p className="body-text">
              We started Elephant Cargo because we&apos;ve been on the shipper side of
              every one of these horror stories. Here&apos;s how we fix them.
            </p>
          </div>
          <div className="ps-grid">
            <div className="ps-col ps-problem reveal">
              <div className="ps-col-header">
                <span className="ps-badge ps-badge-bad">
                  <XIcon /> THE OLD WAY
                </span>
                <h3>Most brokers treat you like inventory.</h3>
              </div>
              <ul className="ps-list">
                {PROBLEMS.map((p) => (
                  <li key={p}>
                    <span className="ps-bullet ps-bullet-bad">
                      <XIcon />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: p }}></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ps-col ps-solution reveal">
              <div className="ps-col-header">
                <span className="ps-badge ps-badge-good">
                  <CheckIcon /> THE ELEPHANT WAY
                </span>
                <h3>We treat you like our only customer.</h3>
              </div>
              <ul className="ps-list">
                {SOLUTIONS.map((s) => (
                  <li key={s}>
                    <span className="ps-bullet ps-bullet-good">
                      <CheckIcon />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="why section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">WHY SHIPPERS STAY</span>
            <h2 className="heading-lg">
              Built Around Your<br />Supply Chain
            </h2>
          </div>
          <div className="why-grid">
            {[
              ["fa-dollar-sign", "Rates That Make Sense", "We price loads based on actual market conditions, not padded margins. Fair rates, transparent breakdowns, no games."],
              ["fa-satellite-dish", "Real-Time Visibility", "Live GPS tracking, automated milestone alerts, and proactive updates the moment anything deviates from the plan."],
              ["fa-user-check", "Vetted Carriers Only", "Authority, insurance, CSA scores, and service history — every carrier passes our vetting before they touch your load."],
              ["fa-headset", "24/7 Operations", "Our dispatch team never sleeps. Emergencies, after-hours pickups, weekend runs, holidays — we&apos;re always on."],
              ["fa-file-contract", "Flexible Billing", "Net-30, EDI, consolidated invoicing, or custom terms to match how your accounting team works."],
              ["fa-user-tie", "Dedicated Broker", "One point of contact who knows your business by heart. No pass-offs, no re-explaining, no stranger answering your calls."],
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

      {/* INDUSTRIES */}
      <section className="industries section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">INDUSTRIES WE SERVE</span>
            <h2 className="heading-lg">
              Specialists in Your<br />Kind of Freight
            </h2>
            <p className="body-text">
              From food plants to factories, we&apos;ve moved freight for just about every
              vertical. Here&apos;s where we bring deep experience and strong carrier
              relationships.
            </p>
          </div>
          <div className="industries-grid">
            {INDUSTRIES.map((ind) => (
              <div className="industry-card tilt-card reveal" key={ind.title}>
                <div className="industry-icon">
                  <i className={`fas ${ind.icon}`}></i>
                </div>
                <h3>{ind.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: ind.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">HOW IT WORKS</span>
            <h2 className="heading-lg">
              From Quote to Delivered<br />in Four Simple Steps
            </h2>
          </div>
          <div className="process-grid process-grid-4">
            {[
              { step: "01", icon: "fa-paper-plane", title: "Tell Us the Load", desc: "Shoot us a quote request — lanes, commodity, equipment, pickup window. Web form, email, or phone. You pick." },
              { step: "02", icon: "fa-magnifying-glass-chart", title: "We Shop the Market", desc: "Our team sources the best carrier at the right price from our vetted network. You get a real quote in under 60 minutes." },
              { step: "03", icon: "fa-truck", title: "Carrier Dispatched", desc: "We book the load, send you tracking details, and hand off the driver&apos;s direct line. No blind handoffs." },
              { step: "04", icon: "fa-box-check", title: "Delivered + Invoiced", desc: "Live tracking from pickup to POD. Proactive updates on any issues. Automated invoicing and reporting." },
            ].map((p) => (
              <div className="process-card tilt-card reveal" key={p.step}>
                <div className="process-step">{p.step}</div>
                <div className="process-icon">
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <h3>{p.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: p.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="tech-section section">
        <div className="container">
          <div className="tech-layout">
            <div className="tech-copy reveal">
              <span className="label">TECHNOLOGY</span>
              <h2 className="heading-lg">
                Human Touch<br />Meets Modern Tech
              </h2>
              <p className="body-text">
                The brokerage business is still a people business — but the right
                technology makes every person on our team ten times more effective. Here&apos;s
                what&apos;s working behind the scenes on every one of your loads.
              </p>
              <div className="tech-list">
                {[
                  ["fa-route", "TMS Integration", "Direct EDI and API connections into your existing transportation management system."],
                  ["fa-location-dot", "Live Load Tracking", "GPS tracking, geofencing, and automated milestone notifications."],
                  ["fa-chart-column", "Custom Reporting", "Lane analytics, cost breakdowns, and KPI dashboards built to your specification."],
                  ["fa-mobile-screen", "Mobile Document Capture", "Drivers photograph and submit PODs in real-time from our mobile app."],
                ].map(([icon, title, desc]) => (
                  <div className="tech-item reveal" key={title}>
                    <div className="tech-icon">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <div>
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tech-media reveal">
              <div className="tech-visual">
                <div className="tech-stat">
                  <span className="tech-stat-num">98.4<span className="tech-stat-suffix">%</span></span>
                  <span className="tech-stat-label">On-Time Delivery</span>
                </div>
                <div className="tech-stat">
                  <span className="tech-stat-num">&lt; 1<span className="tech-stat-suffix">hr</span></span>
                  <span className="tech-stat-label">Quote Response</span>
                </div>
                <div className="tech-stat">
                  <span className="tech-stat-num">24<span className="tech-stat-suffix">/7</span></span>
                  <span className="tech-stat-label">Live Dispatch</span>
                </div>
                <div className="tech-stat">
                  <span className="tech-stat-num">500<span className="tech-stat-suffix">+</span></span>
                  <span className="tech-stat-label">Carrier Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner reveal">
            <div>
              <h2 className="heading-lg">Ready for a Broker That Gets It?</h2>
              <p className="body-text">
                Get a real quote from a real person in under an hour. No sales scripts, no
                obligations — just a straight answer on what it takes to move your freight.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
                Get Free Quote <ArrowIcon />
              </Link>
              <a href="tel:+17404759647" className="btn btn-white-outline btn-lg">
                <i className="fas fa-phone-alt"></i> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
