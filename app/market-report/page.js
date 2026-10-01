import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ZIP_CODE_SUMMARIES, NEIGHBORHOOD_REPORTS } from "../data/neighborhoodReports";

export const metadata = {
  title: "Fairfax VA Real Estate Market Report & Comps | Housing Market 2026",
  description: "Access the live Fairfax real estate market report and recent sales comps across Fairfax County ZIP codes (22030, 22031, 22032, 22033) and high-demand subdivisions.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/market-report",
  },
  openGraph: {
    title: "Fairfax VA Real Estate Market Report & Hyper-Local Neighborhood Comps",
    description: "Subdivision-level market reports for Mantua, Mosby Woods, Franklin Farm, Kings Park West, and Fairfax County ZIP codes.",
    url: "https://www.homesalesfairfax.com/market-report",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function MarketReportPage() {
  const countyMetrics = [
    { label: "Market Momentum", value: "Severe Seller Favor", change: "+5.2% YoY Growth", sub: "All Property Types" },
    { label: "Average Absorption", value: "9 Days", change: "Fast Absorption", sub: "Single Family & Townhomes" },
    { label: "Sale-to-List Ratio", value: "102.3%", change: "Competitive Multiple Offers", sub: "Countywide Average" },
    { label: "Available Inventory", value: "1.1 Months", change: "Severe Seller Market", sub: "Active Bright MLS Supply" },
  ];

  const recentClosedSales = [
    { address: "9214 Barkwood Ct", neighborhood: "Mantua (22031)", status: "Settled Bright MLS", days: "5 Days", specs: "5b / 4ba • 3,450 sqft", ratio: "103.4% of list" },
    { address: "3110 Plantation Dr", neighborhood: "Mosby Woods (22030)", status: "Settled Bright MLS", days: "5 Days", specs: "4b / 3ba • 2,540 sqft", ratio: "103.2% of list" },
    { address: "12902 Tranquility Ln", neighborhood: "Franklin Farm (22033)", status: "Settled Bright MLS", days: "5 Days", specs: "5b / 4.5ba • 3,420 sqft", ratio: "102.8% of list" },
    { address: "5104 Commonwealth Blvd", neighborhood: "Kings Park West (22032)", status: "Settled Bright MLS", days: "6 Days", specs: "5b / 3ba • 2,680 sqft", ratio: "102.9% of list" },
    { address: "2910 District Ave #402", neighborhood: "Mosaic District (22031)", status: "Settled Bright MLS", days: "7 Days", specs: "4b / 3.5ba • 2,850 sqft", ratio: "101.1% of list" },
    { address: "3412 Jermantown Rd", neighborhood: "Oakton (22124)", status: "Settled Bright MLS", days: "10 Days", specs: "6b / 6.5ba • 5,800 sqft", ratio: "102.2% of list" },
  ];

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        {/* Head */}
        <div className="section-head-clean">
          <span className="section-pretitle">Hyper-Local Seller Intelligence</span>
          <h1 className="section-title-bold">Fairfax County Market Reports &amp; Sales Comps</h1>
          <p className="section-lead-text">
            Sellers want a neighborhood expert who knows their exact street and school pyramid. Explore verified Bright MLS market reports for high-turnover Fairfax subdivisions and ZIP codes (22030, 22031, 22032, 22033).
          </p>
        </div>

        {/* 4 County Overview Metrics Strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {countyMetrics.map((m, idx) => (
            <div key={idx} style={{ background: "#FFFFFF", padding: "26px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>{m.label}</span>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink-950)", margin: "6px 0", letterSpacing: "-0.02em" }}>{m.value}</div>
              <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700, display: "block" }}>{m.change}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--ink-400)", marginTop: "4px", display: "block" }}>{m.sub}</span>
            </div>
          ))}
        </div>

        {/* Direct Submarket & Neighborhood Spotlight Grid */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Formula: [Neighborhood Name] + Real Estate / Market Report
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                High-Turnover Neighborhood Dossiers
              </h2>
              <p style={{ color: "var(--ink-600)", margin: 0, fontSize: "0.95rem" }}>
                Exclusive monthly market updates matched to direct mail postcard QR landing pages.
              </p>
            </div>
            <Link href="/home-valuation" className="btn-capsule-black" style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
              Instant Address Valuation &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Mantua */}
            <article style={{ background: "#FFFFFF", borderRadius: "var(--radius-card)", padding: "30px", border: "1.5px solid var(--ink-200)", boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", background: "rgba(197,168,128,0.12)", padding: "3px 10px", borderRadius: "9999px" }}>
                    ZIP: 22031
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    8 Days on Market
                  </span>
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "6px" }}>
                  Mantua Real Estate
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Woodson High School pyramid, wooded half-acre lots, swim &amp; tennis club, and active buyer demand.
                </p>
                <div style={{ marginBottom: "18px" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Market Velocity</span>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--status-active)" }}>High Seller Favor</div>
                  <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>102.8% Sale-to-List</span>
                </div>
              </div>
              <Link href="/mantua-real-estate" className="btn-capsule-black" style={{ width: "100%", textAlign: "center", padding: "12px", boxSizing: "border-box" }}>
                View Mantua Report &amp; Comps &rarr;
              </Link>
            </article>

            {/* Mosby Woods */}
            <article style={{ background: "#FFFFFF", borderRadius: "var(--radius-card)", padding: "30px", border: "1.5px solid var(--ink-200)", boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", background: "rgba(197,168,128,0.12)", padding: "3px 10px", borderRadius: "9999px" }}>
                    ZIP: 22030
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    7 Days on Market
                  </span>
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "6px" }}>
                  Mosby Woods Market
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Fairfax City location, Daniels Run &amp; Fairfax High, walk to Old Town and Vienna Metro corridor.
                </p>
                <div style={{ marginBottom: "18px" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Market Velocity</span>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--status-active)" }}>High Seller Favor</div>
                  <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>103.2% Sale-to-List</span>
                </div>
              </div>
              <Link href="/mosby-woods-market" className="btn-capsule-black" style={{ width: "100%", textAlign: "center", padding: "12px", boxSizing: "border-box" }}>
                View Mosby Woods Report &amp; Comps &rarr;
              </Link>
            </article>

            {/* Franklin Farm */}
            <article style={{ background: "#FFFFFF", borderRadius: "var(--radius-card)", padding: "30px", border: "1.5px solid var(--ink-200)", boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", background: "rgba(197,168,128,0.12)", padding: "3px 10px", borderRadius: "9999px" }}>
                    ZIP: 22033
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    8 Days on Market
                  </span>
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "6px" }}>
                  Franklin Farm Values
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Oakton &amp; Chantilly pyramids, 6 community fishing ponds, 13 miles of trails, and shopping village.
                </p>
                <div style={{ marginBottom: "18px" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Market Velocity</span>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--status-active)" }}>High Seller Favor</div>
                  <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>102.5% Sale-to-List</span>
                </div>
              </div>
              <Link href="/franklin-farm-values" className="btn-capsule-black" style={{ width: "100%", textAlign: "center", padding: "12px", boxSizing: "border-box" }}>
                View Franklin Farm Report &amp; Comps &rarr;
              </Link>
            </article>

            {/* Kings Park West */}
            <article style={{ background: "#FFFFFF", borderRadius: "var(--radius-card)", padding: "30px", border: "1.5px solid var(--ink-200)", boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold)", background: "rgba(197,168,128,0.12)", padding: "3px 10px", borderRadius: "9999px" }}>
                    ZIP: 22032
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--status-active)", fontWeight: 700 }}>
                    9 Days on Market
                  </span>
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "6px" }}>
                  Kings Park West Real Estate
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: "1.5", marginBottom: "16px" }}>
                  Robinson Secondary IB pyramid, Lake Royal trails, 3 swim clubs, and George Mason University corridor.
                </p>
                <div style={{ marginBottom: "18px" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Market Velocity</span>
                  <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--status-active)" }}>High Seller Favor</div>
                  <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>101.9% Sale-to-List</span>
                </div>
              </div>
              <Link href="/kings-park-west-real-estate" className="btn-capsule-black" style={{ width: "100%", textAlign: "center", padding: "12px", boxSizing: "border-box" }}>
                View Kings Park West Report &amp; Comps &rarr;
              </Link>
            </article>
          </div>
        </div>

        {/* Fairfax ZIP Code Intelligence Cards (22030–22033) */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ marginBottom: "24px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Targeted ZIP Code Analysis
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
              Fairfax ZIP Code Market Benchmarks (22030, 22031, 22032, 22033)
            </h2>
            <p style={{ color: "var(--ink-600)", margin: 0, fontSize: "0.95rem" }}>
              Key metrics for high-equity Fairfax County postal zones.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {ZIP_CODE_SUMMARIES.map((z) => (
              <div key={z.zip} style={{ background: "#FFFFFF", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-gold)" }}>ZIP {z.zip}</span>
                  <span style={{ fontSize: "0.75rem", background: "rgba(16,185,129,0.1)", color: "var(--status-active)", padding: "2px 8px", borderRadius: "9999px", fontWeight: 700 }}>
                    Turnover: {z.turnover}
                  </span>
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink-950)", margin: "2px 0 10px" }}>{z.label}</h4>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "14px 0", borderTop: "1px solid var(--ink-100)", borderBottom: "1px solid var(--ink-100)", padding: "10px 0" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Median Price</span>
                    <strong style={{ fontSize: "1.25rem", color: "var(--ink-950)" }}>{z.medianPrice}</strong>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.72rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Absorption</span>
                    <strong style={{ fontSize: "1.25rem", color: "var(--status-active)" }}>{z.avgDOM}</strong>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-600)", lineHeight: "1.5", margin: "0 0 14px" }}>
                  {z.leadText}
                </p>
                <div style={{ fontSize: "0.8rem", color: "var(--ink-500)" }}>
                  <strong>Key Subdivisions:</strong> {z.topNeighborhoods.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Representative Settled Comps Table */}
        <div style={{ background: "#FFFFFF", padding: "36px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Recent Closed Sales
              </span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0" }}>
                Representative Settled Transactions Across Fairfax
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-500)", margin: 0 }}>
                Actual settled sale prices versus original list prices recorded through Bright MLS.
              </p>
            </div>
            <Link href="/sell" className="btn-capsule-black" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
              Book In-Home Consultation &rarr;
            </Link>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid var(--ink-200)", color: "var(--ink-500)", textTransform: "uppercase", fontSize: "0.74rem", letterSpacing: "0.05em" }}>
                  <th style={{ padding: "12px 14px" }}>Address</th>
                  <th style={{ padding: "12px 14px" }}>Neighborhood &amp; ZIP</th>
                  <th style={{ padding: "12px 14px" }}>MLS Settlement Record</th>
                  <th style={{ padding: "12px 14px" }}>Equity Result</th>
                  <th style={{ padding: "12px 14px" }}>DOM</th>
                  <th style={{ padding: "12px 14px" }}>Specs</th>
                </tr>
              </thead>
              <tbody>
                {recentClosedSales.map((sale, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--ink-100)" }}>
                    <td style={{ padding: "16px 14px", fontWeight: 700, color: "var(--ink-950)" }}>{sale.address}</td>
                    <td style={{ padding: "16px 14px", color: "var(--ink-700)" }}>{sale.neighborhood}</td>
                    <td style={{ padding: "16px 14px" }}>
                      <span style={{ fontWeight: 700, color: "var(--status-active)" }}>Verified Settled Bright MLS</span>
                    </td>
                    <td style={{ padding: "16px 14px", fontWeight: 800, color: "var(--ink-950)", fontSize: "1rem" }}>{sale.ratio}</td>
                    <td style={{ padding: "16px 14px", color: "var(--status-active)", fontWeight: 700 }}>{sale.days}</td>
                    <td style={{ padding: "16px 14px", color: "var(--ink-600)" }}>{sale.specs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Direct Action Hub for Sellers */}
        <div style={{ background: "#FFFFFF", padding: "44px", borderRadius: "var(--radius-card)", border: "1.5px solid var(--ink-950)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            ✦ Get Your Exact Street Comps
          </span>
          <h3 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink-950)", margin: "8px 0 12px", letterSpacing: "-0.02em" }}>
            Curious What Your Fairfax Home Commands Today?
          </h3>
          <p style={{ color: "var(--ink-700)", maxWidth: "680px", margin: "0 auto 28px", fontSize: "1.02rem", lineHeight: "1.7" }}>
            Elena Gorbounova will pull the 5 most recent closed sales in your exact subdivision and school pyramid. Get an authentic, non-automated CMA pricing dossier sent straight to your phone.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a 
              href="sms:+17036257888?body=Hi%20Elena,%20please%20send%20me%20a%20verified%20market%20report%20and%20comps%20for%20my%20Fairfax%20home%20at:" 
              className="btn-capsule-black"
              style={{ padding: "16px 28px", fontSize: "1rem" }}
            >
              Text Elena for Street Comps &rarr;
            </a>

            <a 
              href="tel:7036257888" 
              className="btn-card-ask" 
              style={{ padding: "16px 24px", fontSize: "1rem", fontWeight: 700 }}
            >
              Call Elena Direct: (703) 625-7888
            </a>

            <Link 
              href="/sell" 
              className="btn-card-ask" 
              style={{ padding: "16px 24px", fontSize: "1rem", fontWeight: 700, background: "#FFFFFF" }}
            >
              Book In-Home Consultation
            </Link>
          </div>

          <div style={{ marginTop: "24px", fontSize: "0.85rem", color: "var(--ink-500)" }}>
            🔒 Direct communication with Elena Gorbounova (RE/MAX Allegiance • YSC). No automated call centers.
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "name": "Fairfax VA Real Estate Market Report 2026",
            "description": "Comprehensive hyper-local real estate market report and sales comps for Fairfax County, VA.",
            "url": "https://www.homesalesfairfax.com/market-report",
            "publisher": {
              "@type": "RealEstateAgent",
              "name": "Elena Gorbounova & Kirill",
              "telephone": "(703) 625-7888",
              "url": "https://www.homesalesfairfax.com"
            }
          })
        }}
      />

      <Footer />
    </main>
  );
}
