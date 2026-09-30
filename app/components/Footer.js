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
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
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
              Northern Virginia Luxury Real Estate
            </span>
            <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
              HOMESALES FAIRFAX
            </div>
            <p style={{ color: "#64748B", fontSize: "0.88rem", marginTop: "6px", maxWidth: "520px", lineHeight: "1.55" }}>
              Elena Gorbounova &amp; Kirill • Associate Brokers • RE/MAX Allegiance &amp; Your Skyline Connection. Over 400 properties closed with 21+ years of local mastery.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "14px" }}>
            <Link
              href="/sell"
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

        {/* 3 Balanced Minimalist Columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
          marginBottom: "44px"
        }}>
          {/* Column 1: Featured Regions & Subdivisions */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Featured Northern VA Areas
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              <li>
                <Link href="/divisions/fairfax-county" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}>
                  Fairfax County Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/city-of-fairfax" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}>
                  City of Fairfax Division
                </Link>
              </li>
              <li>
                <Link href="/subdivisions/mantua" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}>
                  Mantua (22031)
                </Link>
              </li>
              <li>
                <Link href="/subdivisions/mosby-woods" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}>
                  Mosby Woods (22030)
                </Link>
              </li>
              <li>
                <Link href="/subdivisions/franklin-farm" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s ease" }}>
                  Franklin Farm (22033)
                </Link>
              </li>
              <li>
                <Link href="/divisions" style={{ color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Explore All Virginia Divisions &amp; Subdivisions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Seller & Client Advisory */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Seller &amp; Buyer Advisory
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              <li>
                <Link href="/sell" style={{ color: "#475569", textDecoration: "none" }}>
                  List Your Property with Elena &amp; Kirill
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" style={{ color: "#475569", textDecoration: "none" }}>
                  Request Bright MLS Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/testimonials" style={{ color: "#475569", textDecoration: "none" }}>
                  325+ Client Reviews &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: "#475569", textDecoration: "none" }}>
                  About Elena Gorbounova (Associate Broker, LL.M.)
                </Link>
              </li>
              <li>
                <Link href="/market-report" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax County Market Intel Report
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#475569", textDecoration: "none" }}>
                  Schedule Private Property Showing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brokerage & Representation */}
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
                ★ Lifetime NVAR Top Producer
              </div>
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
            <span>Virginia Licensed REALTOR®</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
