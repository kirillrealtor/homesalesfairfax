import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-minimal-white">
      <div className="container">
        {/* Top Row: Brand Crest Object + Identity + Direct Contact */}
        <div className="footer-white-top">
          <div className="footer-white-brand-group">
            {/* Architectural Luxury Crest Object */}
            <div className="footer-emblem-seal" aria-hidden="true">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23" stroke="#E2E8F0" strokeWidth="1" fill="#FAFAF9" />
                <circle cx="24" cy="24" r="20" stroke="#C5A880" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M14 22L24 14L34 22" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 22V32M21.5 22V32M26.5 22V32M31 22V32" stroke="#0F172A" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M13 32H35" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 34H36" stroke="#C5A880" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="24" cy="11.5" r="1.5" fill="#C5A880" />
              </svg>
            </div>

            <div>
              <div className="footer-white-title">HOMESALES FAIRFAX</div>
              <div className="footer-white-brokerage">
                RE/MAX ALLEGIANCE • YSC REAL ESTATE GROUP
              </div>
              <p className="footer-white-tagline">
                Kirill Gorbounov • Licensed REALTOR® in Virginia • NVAR Top Producer
              </p>
            </div>
          </div>

          {/* Minimalist Direct Contact Links */}
          <div className="footer-white-contact-row">
            <a href="tel:5712760986" className="footer-white-btn" title="Call Kirill Direct">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call: (571) 276-0986</span>
            </a>

            <a href="sms:+15712760986" className="footer-white-btn" title="Text Kirill Direct">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Text: (571) 276-0986</span>
            </a>

            <a href="https://wa.me/15712760986" target="_blank" rel="noopener noreferrer" className="footer-white-btn" title="WhatsApp Message">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>

            <a href="mailto:kirillysc@gmail.com" className="footer-white-btn" title="Email Kirill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>kirillysc@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Middle Navigation Strip: Compact, Clean, Organized */}
        <div className="footer-white-nav-grid">
          {/* Submarkets */}
          <div>
            <h4 className="footer-white-heading">Fairfax Submarkets</h4>
            <ul className="footer-white-list">
              <li><Link href="/fairfax-city-homes-for-sale">Fairfax City (22030)</Link></li>
              <li><Link href="/mosaic-district-homes">Mosaic District (22031)</Link></li>
              <li><Link href="/oakton-homes-for-sale">Oakton Estates (22124)</Link></li>
              <li><Link href="/burke-va-homes-for-sale">Burke &amp; Lake Braddock</Link></li>
              <li><Link href="/#listings">Falls Church &amp; Skyline</Link></li>
            </ul>
          </div>

          {/* Seller & Buyer Advisory */}
          <div>
            <h4 className="footer-white-heading">Advisory &amp; Tools</h4>
            <ul className="footer-white-list">
              <li><Link href="/sell">Book In-Home Consultation</Link></li>
              <li><Link href="/home-valuation">Instant Home Valuation</Link></li>
              <li><Link href="/market-report">Fairfax Market Intel Report</Link></li>
              <li><Link href="/mortgage-calculator">Mortgage Payment Estimator</Link></li>
              <li><Link href="/contact">Schedule Private Showing</Link></li>
            </ul>
          </div>

          {/* Brokerage & Architectural Object */}
          <div className="footer-white-office-col">
            <h4 className="footer-white-heading">Brokerage &amp; Office</h4>
            <p className="footer-white-office-text">
              <strong>RE/MAX Allegiance</strong><br />
              5100 Leesburg Pike, Suite 200<br />
              Alexandria / Fairfax, VA 22302<br />
              <span className="footer-office-tel">Office: (703) 824-4800</span>
            </p>

            {/* Architectural Line-Drawing Object */}
            <div className="footer-architectural-sketch" aria-hidden="true">
              <svg width="180" height="42" viewBox="0 0 180 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="38" x2="175" y2="38" stroke="#E2E8F0" strokeWidth="1" />
                {/* Central Pavilion */}
                <polygon points="70,18 90,6 110,18" stroke="#C5A880" strokeWidth="1" fill="none" />
                <rect x="73" y="18" width="34" height="20" stroke="#94A3B8" strokeWidth="0.8" fill="none" />
                <rect x="85" y="26" width="10" height="12" stroke="#0F172A" strokeWidth="1" fill="none" />
                {/* Left wing */}
                <polygon points="30,22 50,12 70,22" stroke="#CBD5E1" strokeWidth="0.8" fill="none" />
                <rect x="34" y="22" width="36" height="16" stroke="#CBD5E1" strokeWidth="0.8" fill="none" />
                {/* Right wing */}
                <polygon points="110,22 130,12 150,22" stroke="#CBD5E1" strokeWidth="0.8" fill="none" />
                <rect x="110" y="22" width="36" height="16" stroke="#CBD5E1" strokeWidth="0.8" fill="none" />
                {/* Accent Star */}
                <circle cx="90" cy="4" r="1.2" fill="#C5A880" />
              </svg>
              <span className="footer-sketch-label">FAIRFAX LUXURY REAL ESTATE</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Equal Housing Strip */}
        <div className="footer-white-bottom">
          <div className="footer-white-copy">
            © {new Date().getFullYear()} homesalesfairfax.com • Kirill Gorbounov • RE/MAX Allegiance. All Rights Reserved.
          </div>
          
          <div className="footer-white-compliance">
            {/* Equal Housing Logo SVG */}
            <span className="compliance-badge-item" title="Equal Housing Opportunity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
              </svg>
              <span>Equal Housing Opportunity</span>
            </span>
            <span className="compliance-dot">•</span>
            <span>Bright MLS IDX</span>
            <span className="compliance-dot">•</span>
            <span>NVAR Top Producer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
