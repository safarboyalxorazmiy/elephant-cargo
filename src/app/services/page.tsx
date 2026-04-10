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
  title: "Logistics Services — FTL, LTL, Flatbed, Reefer, Expedited, Drayage",
  description:
    "End-to-end freight brokerage across every mode and every lane. FTL, LTL, flatbed, refrigerated, expedited, and drayage — one call, one team, one invoice.",
};

const SERVICES = [
  {
    id: "ftl",
    icon: "fa-truck-moving",
    tagline: "DEDICATED CAPACITY",
    title: "Full Truckload",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Full truckload semi truck on highway",
    intro:
      "When your shipment fills a trailer — or when your freight simply can&apos;t share space with anything else — our FTL service delivers dedicated capacity straight from origin to destination. One truck. One driver. One set of hands. Zero cross-docks, zero intermediate stops, zero handling risk.",
    features: [
      "Dry van, 53&apos; trailers with air-ride suspension",
      "Point-to-point direct delivery, no consolidation",
      "Team drivers on request for 1,500+ mile runs",
      "Live GPS tracking and milestone alerts",
      "Drop-and-hook programs for high-volume lanes",
      "Dedicated account management with a single point of contact",
    ],
    tags: ["Dry Van", "High Value", "Time Sensitive", "Dedicated"],
  },
  {
    id: "ltl",
    icon: "fa-boxes-stacked",
    tagline: "COST EFFECTIVE",
    title: "LTL & Partial",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "LTL shipment in warehouse",
    intro:
      "Not every shipment needs 53 feet of trailer. Our Less-Than-Truckload service combines your freight with compatible loads from other shippers, so you only pay for the space you actually use. We handle freight class consultation, BOL preparation, and carrier selection across our vetted LTL network of national, regional, and specialty providers.",
    features: [
      "Standard, volume, and guaranteed LTL options",
      "Freight class consultation and NMFC support",
      "Liftgate, inside delivery, and residential services",
      "Pallet-level tracking and proof of delivery",
      "Consolidation and distribution programs",
      "Damage claims handled in-house — no runaround",
    ],
    tags: ["Less Than Truckload", "Palletized", "Regional", "National"],
  },
  {
    id: "flatbed",
    icon: "fa-trailer",
    tagline: "OVERSIZED & HEAVY HAUL",
    title: "Flatbed & Open Deck",
    image: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Flatbed with heavy equipment",
    intro:
      "Steel coils, construction machinery, lumber, pipe, prefab structures — anything that can&apos;t squeeze inside a dry van. Our flatbed and open-deck network includes step-decks, RGNs, Conestogas, and stretch trailers, backed by carriers who know how to secure, tarp, and permit your freight to every state in the country.",
    features: [
      "Standard flatbed, step-deck, double-drop, and RGN equipment",
      "Conestoga and curtain-side for weather-sensitive freight",
      "Oversized and overweight permit coordination",
      "Pilot car and escort arrangement for super-loads",
      "Tarping, chaining, and strapping expertise on every load",
      "Project freight and multi-drop construction delivery",
    ],
    tags: ["Heavy Haul", "Machinery", "Steel", "Construction", "Oversized"],
  },
  {
    id: "reefer",
    icon: "fa-snowflake",
    tagline: "TEMPERATURE CONTROL",
    title: "Refrigerated",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Refrigerated trailer loading",
    intro:
      "Cold-chain freight is unforgiving — one temperature excursion and the whole load is gone. Our reefer program runs on FSMA-compliant carriers with continuous temperature monitoring, pre-cool verification, and real-time alerts if anything drifts out of spec. Produce, protein, dairy, frozen, pharma — we move it all.",
    features: [
      "Continuous temperature monitoring and data logging",
      "Pre-cool verification before every pickup",
      "Frozen, chilled, and multi-temp capability",
      "FSMA-compliant carriers with sanitary trailer inspection",
      "Multi-stop produce and protein distribution",
      "Pharma-grade cold-chain for regulated products",
    ],
    tags: ["Frozen", "Chilled", "Produce", "Protein", "Dairy", "Pharma"],
  },
  {
    id: "expedited",
    icon: "fa-bolt",
    tagline: "TIME CRITICAL",
    title: "Expedited Freight",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Expedited delivery truck",
    intro:
      "When the line is about to go down, when the jobsite is waiting, when the customer needs it yesterday — expedited freight is the call. We activate sprinter vans, straight trucks, and team-driver dry vans with guaranteed pickup and delivery windows. 24/7 dispatch. Zero stops. Maximum hustle.",
    features: [
      "Cargo vans, sprinters, straight trucks, and team dry vans",
      "Guaranteed pickup and delivery windows",
      "Non-stop team-driver runs for cross-country emergencies",
      "24/7 live dispatch and load monitoring",
      "Same-day and next-day service available",
      "Production-line and automotive plant experience",
    ],
    tags: ["Same Day", "Next Day", "Team Drivers", "Sprinter", "Emergency"],
  },
  {
    id: "drayage",
    icon: "fa-ship",
    tagline: "PORT & RAIL",
    title: "Drayage & Intermodal",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Port shipping containers",
    intro:
      "Moving containers from port to warehouse or rail yard to customer takes more than a truck — it takes chassis management, customs coordination, and someone watching the demurrage clock. Our drayage and intermodal service covers every major US port and rail ramp, with rate programs that blend truck and rail for the best possible total cost.",
    features: [
      "Port-to-door and rail-to-door container transport",
      "Chassis pools and container tracking",
      "Customs coordination and bond support",
      "Demurrage and detention monitoring",
      "Intermodal rail/truck combination pricing",
      "Cross-dock and transload programs at major ports",
    ],
    tags: ["Containers", "Port", "Rail", "Intermodal", "Transload"],
  },
];

const VALUE_ADDS = [
  {
    icon: "fa-satellite-dish",
    title: "Real-Time Tracking",
    desc: "GPS visibility on every load with automated milestone alerts to your inbox.",
  },
  {
    icon: "fa-shield-halved",
    title: "Cargo Insurance",
    desc: "$100K minimum on every load, higher limits available for high-value freight.",
  },
  {
    icon: "fa-file-contract",
    title: "Carrier Vetting",
    desc: "Authority, insurance, safety scores, and service history checked before every dispatch.",
  },
  {
    icon: "fa-chart-line",
    title: "Custom Reporting",
    desc: "Lane analytics, cost breakdowns, and on-time performance reports built to your spec.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          ["--hero-bg" as string]:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="mesh-orb mesh-orb-1"></div>
        <div className="mesh-orb mesh-orb-2"></div>
        <div className="container">
          <span className="label reveal">OUR SERVICES</span>
          <h1 className="heading-xl reveal">
            Every Mode. Every Lane.<br />
            <span className="hero-gold-solid">One Brokerage.</span>
          </h1>
          <p className="page-hero-desc reveal">
            From a single pallet in Columbus to coast-to-coast project freight, Elephant
            Cargo delivers the right equipment, the right carrier, and the right result —
            every single load.
          </p>
          <div className="page-hero-actions reveal">
            <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
              Request a Quote <ArrowIcon />
            </Link>
            <a href="tel:+17404759647" className="btn btn-gold-outline btn-lg">
              <i className="fas fa-phone-alt"></i> (740) 475-9647
            </a>
          </div>
        </div>

        {/* Quick mode chips */}
        <div className="container">
          <div className="mode-chips reveal">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="mode-chip">
                <i className={`fas ${s.icon}`}></i>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {SERVICES.map((s, i) => (
        <section
          className={`service-detail ${i % 2 === 1 ? "service-detail-alt" : ""}`}
          id={s.id}
          key={s.id}
        >
          <div className="container">
            <div className={`service-detail-layout ${i % 2 === 1 ? "reverse" : ""}`}>
              <div className="service-detail-copy reveal">
                <span className="service-tagline">
                  <i className={`fas ${s.icon}`}></i> {s.tagline}
                </span>
                <h2 className="heading-lg">{s.title}</h2>
                <p
                  className="body-text"
                  dangerouslySetInnerHTML={{ __html: s.intro }}
                />
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className="service-feature-check">
                        <CheckIcon />
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: f }}></span>
                    </li>
                  ))}
                </ul>
                <div className="tag-cloud">
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-gold">
                  Quote This Service <ArrowIcon />
                </Link>
              </div>
              <div className="service-detail-media reveal">
                <div className="media-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.imageAlt} />
                  <div className="media-ring"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* VALUE ADDS */}
      <section className="value-adds section">
        <div className="container">
          <div className="section-intro reveal">
            <span className="label">INCLUDED WITH EVERY LOAD</span>
            <h2 className="heading-lg">
              More Than Just<br />A Truck
            </h2>
            <p className="body-text">
              Every shipment we move comes standard with visibility, insurance, vetting,
              and reporting — no upcharges, no asterisks.
            </p>
          </div>
          <div className="value-grid">
            {VALUE_ADDS.map((v) => (
              <div className="value-card tilt-card reveal" key={v.title}>
                <div className="value-icon">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
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
              <h2 className="heading-lg">Don&apos;t See Your Service?</h2>
              <p className="body-text">
                Specialized freight, project work, white-label brokerage, custom programs —
                we build solutions around what you actually need. Tell us what you&apos;re
                moving.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link href="/contact" className="btn btn-gold btn-lg glow-btn">
                Talk to Our Team <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
