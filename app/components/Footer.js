import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="footer-top-grid">
          <div>
            <div className="nav-brand-group" style={{ marginBottom: "12px" }}>
              <div className="brand-cross-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                </svg>
              </div>
              <span className="brand-name">
                HomesalesFairfax
              </span>
            </div>
            <p style={{ color: "var(--ink-600)", fontSize: "0.88rem", maxWidth: "320px", marginBottom: "16px", lineHeight: "1.6" }}>
              Your trusted guide to Fairfax County real estate. Led by Kirill at RE/MAX Allegiance. We help local buyers and sellers make confident moves with honest advice and fast service.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a href="tel:5712760986" className="btn-capsule-black" style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
                Call Us: (571) 276-0986
              </a>
              <a href="sms:+15712760986" className="btn-card-ask" style={{ padding: "8px 14px", fontSize: "0.82rem" }}>
                Text Us
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "var(--ink-950)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Fairfax Submarkets</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem", color: "var(--ink-600)" }}>
              <li><Link href="/fairfax-city-homes-for-sale" className="nav-item-link">Fairfax City (22030)</Link></li>
              <li><Link href="/mosaic-district-homes" className="nav-item-link">Mosaic District (22031)</Link></li>
              <li><Link href="/oakton-homes-for-sale" className="nav-item-link">Oakton Estates (22124)</Link></li>
              <li><Link href="/burke-va-homes-for-sale" className="nav-item-link">Burke &amp; Lake Braddock</Link></li>
              <li><Link href="/#listings" className="nav-item-link">Fair Lakes &amp; Fair Oaks</Link></li>
              <li><Link href="/#listings" className="nav-item-link">Skyline / Falls Church</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--ink-950)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Seller &amp; Buyer Hub</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem", color: "var(--ink-600)" }}>
              <li><Link href="/sell" className="nav-item-link"><strong>Book In-Home Consultation</strong></Link></li>
              <li><Link href="/home-valuation" className="nav-item-link">Instant Home Valuation</Link></li>
              <li><Link href="/market-report" className="nav-item-link">Fairfax Market Report</Link></li>
              <li><Link href="/mortgage-calculator" className="nav-item-link">Mortgage Calculator</Link></li>
              <li><Link href="/contact" className="nav-item-link">Direct Office &amp; Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--ink-950)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "14px" }}>Office &amp; Direct Line</h4>
            <p style={{ color: "var(--ink-600)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "8px" }}>
              <strong>RE/MAX Allegiance</strong><br />
              5100 Leesburg Pike, Suite 200<br />
              Alexandria / Fairfax County, VA 22302
            </p>
            <p style={{ color: "var(--ink-600)", fontSize: "0.88rem", lineHeight: "1.6" }}>
              Direct: <strong>(571) 276-0986</strong><br />
              Office: <strong>(703) 824-4800</strong><br />
              Email: <a href="mailto:kirillysc@gmail.com" style={{ color: "var(--ink-950)", fontWeight: 700 }}>kirillysc@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom-line">
          <div>
            © {new Date().getFullYear()} homesalesfairfax.com • Kirill | RE/MAX Allegiance. All Rights Reserved.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>Equal Housing Opportunity</span>
            <span>Bright MLS IDX Participant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
