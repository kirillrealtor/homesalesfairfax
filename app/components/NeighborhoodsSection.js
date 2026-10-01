import Link from "next/link";
import { NEIGHBORHOOD_GUIDES } from "../data/listings";

export default function NeighborhoodsSection({ onFilterNeighborhood }) {
  const hyperLocalReports = [
    {
      name: "Oakton Estates",
      zip: "22124",
      path: "/oakton-homes-for-sale",
      velocity: "Luxury Equity Premium",
      dom: "7 Days DOM",
      pyramid: "Oakton High School",
      tagline: "Custom acreage estates & 10 mins to Tysons Corner"
    },
    {
      name: "Burke & Lake Braddock",
      zip: "22015",
      path: "/burke-va-homes-for-sale",
      velocity: "Fast Family Absorption",
      dom: "6 Days DOM",
      pyramid: "Lake Braddock Secondary",
      tagline: "Lakeside trails & Burke Centre VRE direct to DC"
    },
    {
      name: "Chantilly & Oak Hill",
      zip: "22033",
      path: "/chantilly-va-homes-for-sale",
      velocity: "Multiple Offer Pace",
      dom: "7 Days DOM",
      pyramid: "Chantilly High School",
      tagline: "Tech corridor access & expansive residential enclaves"
    },
    {
      name: "Fairfax Station",
      zip: "22039",
      path: "/fairfax-station-homes-for-sale",
      velocity: "High Seller Favor",
      dom: "8 Days DOM",
      pyramid: "Robinson / South County",
      tagline: "Wooded 5-acre custom manors & equestrian charm"
    },
  ];

  const featuredRegionalMarkets = [
    {
      name: "Great Falls Luxury Estates",
      slug: "/great-falls-va-homes-for-sale",
      desc: "Potomac River corridor, Langley pyramid & multi-acre private compounds",
      zip: "22066",
      badge: "Estate Luxury"
    },
    {
      name: "Falls Church Houses",
      slug: "/falls-church-va-homes-for-sale",
      desc: "Historic tree-lined walkability, Metro transit, and top school pyramids",
      zip: "22046",
      badge: "Metro Luxury"
    },
    {
      name: "Reston Town Center",
      slug: "/reston-va-townhomes-condos",
      desc: "Executive townhomes, Silver Line Metro, and Dulles tech hub dining",
      zip: "20190",
      badge: "Urban Tech Hub"
    },
    {
      name: "Arlington Luxury Condos",
      slug: "/arlington-va-condos-for-sale",
      desc: "High-rise luxury condos, Potomac skyline views, and Amazon HQ2 corridor",
      zip: "22209",
      badge: "Urban Tower"
    }
  ];

  return (
    <section id="neighborhoods" className="content-section" style={{ background: "var(--bg-page)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head-clean">
          <span className="section-pretitle">Hyper-Local Neighborhood Authority</span>
          <h2 className="section-title-bold">Featured Northern Virginia Markets &amp; Enclaves</h2>
          <p className="section-lead-text">
            Sellers want a true micro-market specialist with verified comps. Explore live pricing benchmarks, recent closed sales, and active listings across Northern Virginia&apos;s most desirable school pyramids and commuter corridors.
          </p>
        </div>

        {/* Hyper-Local Neighborhood Reports Strip */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ✦ High-Demand Communities &amp; School Pyramids
            </span>
            <a href="/#sell" style={{ fontSize: "0.88rem", color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
              Schedule Consultation &rarr;
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {hyperLocalReports.map((nh) => (
              <Link 
                key={nh.name}
                href={nh.path}
                style={{ 
                  background: "#FFFFFF", 
                  borderRadius: "var(--radius-md)", 
                  padding: "24px", 
                  border: "1.5px solid var(--ink-200)", 
                  boxShadow: "var(--shadow-card)", 
                  textDecoration: "none", 
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.15s ease, border-color 0.15s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.75rem", background: "rgba(197, 168, 128, 0.15)", color: "var(--accent-gold)", padding: "2px 8px", borderRadius: "9999px", fontWeight: 800 }}>
                      ZIP {nh.zip}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--status-active)", fontWeight: 700 }}>
                      {nh.dom}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                    {nh.name}
                  </h3>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, marginBottom: "8px" }}>
                    {nh.pyramid}
                  </span>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-600)", lineHeight: "1.45", margin: "0 0 16px" }}>
                    {nh.tagline}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--ink-100)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 700, display: "block" }}>Market Velocity</span>
                    <strong style={{ fontSize: "1.05rem", color: "var(--accent-gold)" }}>{nh.velocity}</strong>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-950)", fontWeight: 700 }}>
                    Guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured High-Equity Regional Enclaves */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ✦ Premier Regional Markets &amp; Enclaves
            </span>
            <div style={{ display: "flex", gap: "14px" }}>
              <a href="/#sell" style={{ fontSize: "0.88rem", color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
                Consult with Elena &rarr;
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {featuredRegionalMarkets.map((c) => (
              <Link
                key={c.name}
                href={c.slug}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  padding: "22px",
                  border: "1.5px solid var(--ink-200)",
                  boxShadow: "var(--shadow-card)",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.15s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.72rem", background: "var(--ink-950)", color: "#FFFFFF", padding: "3px 8px", borderRadius: "9999px", fontWeight: 700 }}>
                      {c.badge}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", fontWeight: 600 }}>
                      {c.zip}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.22rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0 6px" }}>
                    {c.name}
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--ink-600)", lineHeight: "1.5", margin: 0 }}>
                    {c.desc}
                  </p>
                </div>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--ink-100)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700 }}>
                    Explore Guide &amp; Comps
                  </span>
                  <span style={{ fontSize: "0.88rem", color: "var(--ink-950)", fontWeight: 800 }}>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Established Submarket Communities */}
        <div style={{ marginTop: "32px", marginBottom: "18px" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Fairfax Submarket Exploration
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "24px" }}>
          {NEIGHBORHOOD_GUIDES.map((nh) => (
            <div 
              key={nh.slug}
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--ink-200)",
                background: "#FFFFFF",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ height: "190px", position: "relative", overflow: "hidden", background: "#E5E7EB" }}>
                <img 
                  src={nh.image} 
                  alt={nh.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "rgba(11, 15, 25, 0.88)",
                  backdropFilter: "blur(4px)",
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  ZIP: {nh.zip}
                </div>
              </div>

              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "4px", color: "var(--ink-950)", letterSpacing: "-0.01em" }}>
                  {nh.name}
                </h3>

                <div style={{ fontSize: "0.85rem", color: "var(--accent-gold-hover)", fontWeight: 700, marginBottom: "10px" }}>
                  Market Pace: {nh.marketVelocity || "High Seller Favor"}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", marginBottom: "16px", fontStyle: "italic", lineHeight: "1.5" }}>
                  &ldquo;{nh.vibe}&rdquo;
                </p>

                <ul style={{ listStyle: "none", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "7px" }}>
                  {nh.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: "0.84rem", color: "var(--ink-700)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "auto" }}>
                  <Link 
                    href={
                      nh.slug === "fairfax-station" ? "/fairfax-station-homes-for-sale" :
                      nh.slug === "mosaic-district" ? "/mosaic-district-homes" :
                      nh.slug === "oakton" ? "/oakton-homes-for-sale" :
                      "/burke-va-homes-for-sale"
                    }
                    className="btn-card-ask" 
                    style={{ textAlign: "center", fontWeight: 700, fontSize: "0.82rem", padding: "10px 4px", textDecoration: "none" }}
                  >
                    Area Guide &rarr;
                  </Link>
                  <button 
                    onClick={() => onFilterNeighborhood(nh.name.split(" ")[0])}
                    className="btn-card-ask" 
                    style={{ textAlign: "center", fontWeight: 700, fontSize: "0.82rem", padding: "10px 4px", background: "var(--ink-950)", color: "#FFFFFF", borderColor: "var(--ink-950)" }}
                  >
                    Filter Homes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hyper-Linked Regional Authority Navigation Banner */}
        <div style={{ marginTop: "36px", padding: "24px 28px", background: "rgba(255,255,255,0.85)", borderRadius: "16px", border: "1px solid var(--ink-200)", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: "0.95rem", color: "var(--ink-800)", lineHeight: "1.7" }}>
            <strong>Northern Virginia Regional Coverage:</strong> Elena represents luxury sellers and buyers across{" "}
            <Link href="/oakton-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Oakton</Link>,{" "}
            <Link href="/burke-va-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Burke</Link>,{" "}
            <Link href="/great-falls-va-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Great Falls</Link>,{" "}
            <Link href="/falls-church-va-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Falls Church</Link>,{" "}
            <Link href="/fairfax-station-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Fairfax Station</Link>,{" "}
            <Link href="/chantilly-va-homes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Chantilly</Link>,{" "}
            <Link href="/mosaic-district-homes" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Mosaic District</Link>,{" "}
            <Link href="/arlington-va-condos-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Arlington</Link>, and{" "}
            <Link href="/alexandria-va-townhomes-for-sale" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>Alexandria</Link>.
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", borderTop: "1px solid var(--ink-100)", paddingTop: "12px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>
              Need confidential, off-market pricing advisory for your neighborhood?
            </span>
            <a href="sms:+17036257888?body=Hi%20Elena,%20I'm%20exploring%20homes%20in%20" style={{ color: "var(--accent-gold-hover)", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
              Text Elena Direct at (703) 625-7888 &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
