import Link from "next/link";
import { FAIRFAX_COMMUNITIES } from "../data/communities";
import { VIRGINIA_DIVISIONS, VIRGINIA_SUBDIVISIONS } from "../data/virginiaDivisions";

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
            <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
              HOMESALES FAIRFAX
            </div>
            <p style={{ color: "#64748B", fontSize: "0.88rem", marginTop: "6px", maxWidth: "560px", lineHeight: "1.55" }}>
              Elena Gorbounova (LL.M., MCNE®) &amp; Kirill • Associate Brokers • RE/MAX Allegiance &amp; YSC Real Estate Group. Over 400 properties closed with 21+ years of local mastery across Fairfax County, Arlington, and Northern Virginia.
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

        {/* 4 Balanced Categorized Columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "36px",
          marginBottom: "44px"
        }}>
          {/* Column 1: Featured Communities */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Featured Communities
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/communities/clifton" style={{ color: "#475569", textDecoration: "none" }}>
                  Clifton &amp; Wine Country
                </Link>
              </li>
              <li>
                <Link href="/communities/mclean" style={{ color: "#475569", textDecoration: "none" }}>
                  McLean &amp; Gold Coast
                </Link>
              </li>
              <li>
                <Link href="/communities/country-club-hills" style={{ color: "#475569", textDecoration: "none" }}>
                  Country Club Hills (Fairfax)
                </Link>
              </li>
              <li>
                <Link href="/communities/mantua" style={{ color: "#475569", textDecoration: "none" }}>
                  Mantua (22031)
                </Link>
              </li>
              <li>
                <Link href="/communities/mosby-woods" style={{ color: "#475569", textDecoration: "none" }}>
                  Mosby Woods (22030)
                </Link>
              </li>
              <li>
                <Link href="/communities/franklin-farm" style={{ color: "#475569", textDecoration: "none" }}>
                  Franklin Farm (22033)
                </Link>
              </li>
              <li>
                <Link href="/communities/kings-park-west" style={{ color: "#475569", textDecoration: "none" }}>
                  Kings Park West (22032)
                </Link>
              </li>
              <li>
                <Link href="/communities" style={{ color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  View All 16 Communities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Regional Divisions & Counties */}
          <div>
            <h4 style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A", marginBottom: "16px" }}>
              Virginia Divisions &amp; Counties
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/divisions/fairfax-county" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax County Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/arlington-county" style={{ color: "#475569", textDecoration: "none" }}>
                  Arlington County Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/city-of-fairfax" style={{ color: "#475569", textDecoration: "none" }}>
                  City of Fairfax Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/loudoun-county" style={{ color: "#475569", textDecoration: "none" }}>
                  Loudoun County Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/prince-william-county" style={{ color: "#475569", textDecoration: "none" }}>
                  Prince William County Division
                </Link>
              </li>
              <li>
                <Link href="/divisions/city-of-alexandria" style={{ color: "#475569", textDecoration: "none" }}>
                  City of Alexandria Division
                </Link>
              </li>
              <li>
                <Link href="/divisions" style={{ color: "var(--accent-gold)", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  All Virginia Divisions &rarr;
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
                <Link href="/sell" style={{ color: "#475569", textDecoration: "none" }}>
                  Sell Your Home for Top Dollar
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" style={{ color: "#475569", textDecoration: "none" }}>
                  Request Bright MLS Valuation
                </Link>
              </li>
              <li>
                <Link href="/market-report" style={{ color: "#475569", textDecoration: "none" }}>
                  Fairfax Market Intel Report
                </Link>
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
                <Link href="/contact" style={{ color: "#475569", textDecoration: "none" }}>
                  Contact Our Real Estate Team
                </Link>
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
          {/* All 16 Communities Strip */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-500)", display: "block", marginBottom: "8px" }}>
              Northern Virginia Communities &amp; Enclaves:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", fontSize: "0.82rem" }}>
              {FAIRFAX_COMMUNITIES.map((c) => (
                <Link
                  key={c.id}
                  href={`/communities/${c.slug}`}
                  style={{ color: "#64748B", textDecoration: "none", transition: "color 0.15s ease" }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* All 6 Divisions Strip */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-500)", display: "block", marginBottom: "8px" }}>
              Virginia Regional Divisions &amp; Jurisdictions:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", fontSize: "0.82rem" }}>
              {VIRGINIA_DIVISIONS.map((d) => (
                <Link
                  key={d.id}
                  href={`/divisions/${d.slug}`}
                  style={{ color: "#64748B", textDecoration: "none", transition: "color 0.15s ease" }}
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>

          {/* All 16 Subdivisions Strip */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-500)", display: "block", marginBottom: "8px" }}>
              High-Turnover Virginia Subdivisions:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", fontSize: "0.82rem" }}>
              {VIRGINIA_SUBDIVISIONS.map((s) => (
                <Link
                  key={s.id}
                  href={`/subdivisions/${s.slug}`}
                  style={{ color: "#64748B", textDecoration: "none", transition: "color 0.15s ease" }}
                >
                  {s.name}
                </Link>
              ))}
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
            © 2026 Elena Gorbounova &amp; Kirill • homesalesfairfax.com • RE/MAX Allegiance. All Rights Reserved.
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
            <span>Virginia Licensed REALTORS®</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
