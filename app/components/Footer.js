import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#FAFAFA",
      borderTop: "1px solid #E2E8F0",
      color: "#0F172A",
      padding: "60px 0 32px",
      fontSize: "0.9rem"
    }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Header: Brand Identity & Direct Consultation Action */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "28px",
          paddingBottom: "36px",
          borderBottom: "1px solid #E2E8F0",
          marginBottom: "40px"
        }}>
          <div>
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
              Northern Virginia Luxury Real Estate &amp; Top Producer Advisory
            </span>
            <Link
              href="/"
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.02em",
                textDecoration: "none",
                display: "inline-block"
              }}
              aria-label="HomesalesFairfax Homepage"
            >
              HOMESALES FAIRFAX
            </Link>
            <p style={{ color: "#64748B", fontSize: "0.88rem", marginTop: "6px", maxWidth: "560px", lineHeight: "1.55" }}>
              Elena Gorbounova (LL.M., MCNE®) • Associate Broker • RE/MAX Allegiance &amp; YSC Real Estate Group. Over 400 properties closed, serving Northern Virginia since 2006 across Fairfax County and Arlington.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "14px" }}>
            <Link
              href="/#sell"
              className="btn-capsule-primary"
              style={{ padding: "12px 26px", fontSize: "0.9rem" }}
            >
              <span>Book In-Home Listing Appointment</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            {/* Direct Quick Channels */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.85rem", color: "#64748B", flexWrap: "wrap" }}>
              <a href="tel:7036257888" style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>
                📞 (703) 625-7888
              </a>
              <span>•</span>
              <a href="sms:+17036257888" style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>
                💬 Text Us
              </a>
              <span>•</span>
              <a href="mailto:ElenaYSC@gmail.com" style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>
                ✉️ ElenaYSC@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 4 Balanced Categorized Columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "36px",
          marginBottom: "44px"
        }}>
          {/* Column 1: Northern Virginia Markets */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Northern Virginia Markets
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/oakton-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Oakton Luxury Estates
                </Link>
              </li>
              <li>
                <Link href="/burke-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Burke &amp; Lake Braddock
                </Link>
              </li>
              <li>
                <Link href="/great-falls-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Great Falls Luxury Estates
                </Link>
              </li>
              <li>
                <Link href="/falls-church-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Falls Church Houses
                </Link>
              </li>
              <li>
                <Link href="/arlington-va-condos-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Arlington VA Condos
                </Link>
              </li>
              <li>
                <Link href="/alexandria-va-townhomes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Alexandria Townhomes &amp; Condos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Regional Property Guides */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Regional Property Guides
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/fairfax-station-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax Station Estates
                </Link>
              </li>
              <li>
                <Link href="/springfield-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Springfield VA Real Estate
                </Link>
              </li>
              <li>
                <Link href="/reston-va-townhomes-condos" style={{ color: "#475569", textDecoration: "none" }}>
                  Reston &amp; Herndon Townhomes
                </Link>
              </li>
              <li>
                <Link href="/chantilly-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none" }}>
                  Chantilly Homes &amp; Townhomes
                </Link>
              </li>
              <li>
                <Link href="/mosaic-district-homes" style={{ color: "#475569", textDecoration: "none" }}>
                  Mosaic District Real Estate
                </Link>
              </li>
              <li>
                <Link href="/fairfax-condos-townhomes" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax Condos &amp; Townhomes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Seller & Client Advisory */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Advisory &amp; Market Tools
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/" style={{ color: "#0F172A", fontWeight: 700, textDecoration: "none" }}>
                  Fairfax Real Estate Home
                </Link>
              </li>
              <li>
                <a href="/#sell" style={{ color: "#475569", textDecoration: "none" }}>
                  Schedule Listing Consultation
                </a>
              </li>
              <li>
                <Link href="/mortgage-calculator" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/testimonials" style={{ color: "#475569", textDecoration: "none" }}>
                  325+ Client Reviews &amp; Ratings
                </Link>
              </li>
              <li>
                <Link href="/about-elena" style={{ color: "#475569", textDecoration: "none" }}>
                  Meet Elena Gorbounova (LL.M.)
                </Link>
              </li>
              <li>
                <a href="tel:7036257888" style={{ color: "#475569", textDecoration: "none" }}>
                  Direct Phone: (703) 625-7888
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Brokerage & Representation */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Brokerage &amp; Office
            </h4>
            <div style={{ color: "#475569", lineHeight: "1.65", fontSize: "0.88rem" }}>
              <strong style={{ color: "#0F172A", display: "block" }}>RE/MAX Allegiance</strong>
              5100 Leesburg Pike, Suite 200<br />
              Alexandria / Fairfax, VA 22302<br />
              <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span>Direct: <a href="tel:7036257888" style={{ color: "#0F172A", fontWeight: 700, textDecoration: "none" }}>(703) 625-7888</a></span>
                <span>Office: <a href="tel:7038244800" style={{ color: "#64748B", textDecoration: "none" }}>(703) 824-4800</a></span>
              </div>
              <div style={{ marginTop: "14px", display: "inline-block", background: "#FFFFFF", padding: "6px 14px", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-gold)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                ★ Lifetime NVAR Top Producer • Top 1% in US
              </div>
            </div>
          </div>
        </div>

        {/* Hyper-Linked Northern Virginia SEO Knowledge Network Strip */}
        <div style={{
          borderTop: "1px solid #E2E8F0",
          paddingTop: "28px",
          paddingBottom: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}>
          {/* Featured Active MLS Properties Strip */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-gold)", display: "block", marginBottom: "8px" }}>
              Active Fairfax &amp; Northern Virginia Listings:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontSize: "0.82rem" }}>
              <Link href="/property/ffx-10820" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                10820 Judicial Dr, Fairfax VA (Oakridge Estate)
              </Link>
              <Link href="/property/ffx-2910" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                2910 District Ave, Fairfax VA (Mosaic District Townhome)
              </Link>
              <Link href="/property/ffx-5100" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                5100 Leesburg Pike, Falls Church VA (Skyline Penthouse)
              </Link>
              <Link href="/property/ffx-3412" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                3412 Jermantown Rd, Oakton VA (Oakton Colonial Manor)
              </Link>
              <Link href="/property/ffx-9805" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                9805 Braddock Rd, Burke VA (Lake Braddock Retreat)
              </Link>
              <Link href="/property/ffx-11700" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                11700 Fair Oaks Pkwy, Fairfax VA (Fair Lakes Townhome)
              </Link>
            </div>
          </div>

          {/* High-Intent Northern Virginia Property Guides Strip */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-gold)", display: "block", marginBottom: "8px" }}>
              Targeted MLS Property Guides:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontSize: "0.82rem" }}>
              <Link href="/fairfax-station-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Fairfax Station Homes For Sale
              </Link>
              <Link href="/springfield-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Springfield VA Homes For Sale
              </Link>
              <Link href="/falls-church-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Falls Church VA Houses For Sale
              </Link>
              <Link href="/great-falls-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Great Falls VA Luxury Estates
              </Link>
              <Link href="/chantilly-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Chantilly VA Homes For Sale
              </Link>
              <Link href="/fairfax-condos-townhomes" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Fairfax Condos &amp; Townhomes
              </Link>
              <Link href="/arlington-va-condos-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Arlington VA Condos For Sale
              </Link>
              <Link href="/reston-va-townhomes-condos" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Reston &amp; Herndon Townhomes
              </Link>
              <Link href="/alexandria-va-townhomes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Alexandria Townhomes &amp; Condos
              </Link>
              <Link href="/oakton-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Oakton Houses For Sale
              </Link>
              <Link href="/burke-va-homes-for-sale" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Burke VA Real Estate
              </Link>
              <Link href="/mosaic-district-homes" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>
                Mosaic District Real Estate
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar: Clean & Uncluttered */}
        <div style={{
          borderTop: "1px solid #E2E8F0",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "0.82rem",
          color: "#94A3B8"
        }}>
          <div>
            © 2026 Elena Gorbounova • homesalesfairfax.com • RE/MAX Allegiance. All Rights Reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#64748B", textDecoration: "none", fontWeight: 600 }}>Home</Link>

            <span>•</span>
            <Link href="/testimonials" style={{ color: "#64748B", textDecoration: "none" }}>Reviews</Link>

            <span>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
              </svg>
              <span>Equal Housing Opportunity</span>
            </span>
            <span>•</span>
            <span>Bright MLS IDX</span>
            <span>•</span>
            <span>Virginia Licensed REALTORS®</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
