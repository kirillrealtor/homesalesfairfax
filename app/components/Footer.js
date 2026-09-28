import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-luxury-architectural">
      <div className="container">
        {/* Top Header: Brand Authority & Direct Line */}
        <div className="footer-pre-row">
          <div>
            <span className="footer-brand-primary">HOMESALES FAIRFAX</span>
            <span className="footer-brand-creds">
              RE/MAX ALLEGIANCE • YSC REAL ESTATE GROUP
            </span>
            <p className="footer-brand-mission">
              Dedicated in-home listing consultation, verified Bright MLS inventory, and top producer representation across Fairfax County, Virginia.
            </p>
          </div>

          <div className="footer-quick-connect-row">
            <a href="tel:5712760986" className="footer-pill-link" title="Call Us Direct">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call: (571) 276-0986</span>
            </a>

            <a href="sms:+15712760986" className="footer-pill-link" title="Text Us Direct">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Text: (571) 276-0986</span>
            </a>

            <a href="mailto:kirillysc@gmail.com" className="footer-pill-link" title="Official Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>kirillysc@gmail.com</span>
            </a>
          </div>
        </div>

        {/* 4 Architectural Navigation Columns */}
        <div className="footer-quad-grid">
          {/* Column 1: Submarkets */}
          <div>
            <h4 className="footer-column-title">Fairfax Submarkets</h4>
            <ul className="footer-nav-list">
              <li><Link href="/fairfax-city-homes-for-sale">Fairfax City (22030)</Link></li>
              <li><Link href="/mosaic-district-homes">Mosaic District (22031)</Link></li>
              <li><Link href="/oakton-homes-for-sale">Oakton Estates (22124)</Link></li>
              <li><Link href="/burke-va-homes-for-sale">Burke &amp; Lake Braddock</Link></li>
              <li><Link href="/#listings">Falls Church &amp; Skyline</Link></li>
              <li><Link href="/#listings">Browse Active Bright MLS</Link></li>
            </ul>
          </div>

          {/* Column 2: Seller Advisory */}
          <div>
            <h4 className="footer-column-title">Seller Advisory</h4>
            <ul className="footer-nav-list">
              <li><Link href="/sell">Book In-Home Consultation</Link></li>
              <li><Link href="/home-valuation">Instant Home Valuation</Link></li>
              <li><Link href="/market-report">Fairfax Market Intel Report</Link></li>
              <li><Link href="/sell">Comprehensive 15-Page CMA</Link></li>
              <li><Link href="/#referrals">25% Broker Referral Program</Link></li>
              <li><Link href="/market-report">Recent Closed Sales</Link></li>
            </ul>
          </div>

          {/* Column 3: Buyer & Relocation */}
          <div>
            <h4 className="footer-column-title">Buyer &amp; Relocation</h4>
            <ul className="footer-nav-list">
              <li><Link href="/#listings">Fairfax Single Family Homes</Link></li>
              <li><Link href="/mosaic-district-homes">Luxury Townhome Living</Link></li>
              <li><Link href="/mortgage-calculator">Mortgage Payment Estimator</Link></li>
              <li><Link href="/contact">Schedule Private Showing</Link></li>
              <li><Link href="/#neighborhoods">Top School Pyramids</Link></li>
              <li><Link href="/contact">Out-of-State Relocation</Link></li>
            </ul>
          </div>

          {/* Column 4: Brokerage & Direct Location */}
          <div>
            <h4 className="footer-column-title">Office &amp; Brokerage</h4>
            <ul className="footer-nav-list">
              <li style={{ color: "#F1F5F9", fontWeight: 700 }}>
                Kirill Gorbounov
              </li>
              <li style={{ color: "#94A3B8" }}>
                RE/MAX Allegiance
              </li>
              <li style={{ color: "#94A3B8" }}>
                5100 Leesburg Pike, Suite 200
              </li>
              <li style={{ color: "#94A3B8" }}>
                Alexandria / Fairfax, VA 22302
              </li>
              <li style={{ marginTop: "6px" }}>
                <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}>Office: (703) 824-4800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Clean Legal Bar */}
        <div className="footer-sub-legal">
          <div>
            © {new Date().getFullYear()} homesalesfairfax.com • Kirill Gorbounov • RE/MAX Allegiance. All Rights Reserved.
          </div>
          <div className="footer-compliance-tags">
            <span>Equal Housing Opportunity</span>
            <span>•</span>
            <span>Bright MLS IDX Participant</span>
            <span>•</span>
            <span>NVAR Top Producer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
