import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
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
            </Link>
            <p>
              Licensed and bonded freight brokerage providing reliable transportation
              solutions across the continental United States.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/shippers">Shippers</Link></li>
              <li><Link href="/carriers">Carriers</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#ftl">Full Truckload</Link></li>
              <li><Link href="/services#ltl">LTL Shipping</Link></li>
              <li><Link href="/services#flatbed">Flatbed &amp; Open Deck</Link></li>
              <li><Link href="/services#reefer">Refrigerated</Link></li>
              <li><Link href="/services#expedited">Expedited Freight</Link></li>
              <li><Link href="/services#drayage">Drayage &amp; Intermodal</Link></li>
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
          <span>&copy; 2026 Elephant Cargo LLC. All rights reserved.</span>
          <span>MC# XXXXXX &middot; USDOT# XXXXXX</span>
        </div>
      </div>
    </footer>
  );
}
