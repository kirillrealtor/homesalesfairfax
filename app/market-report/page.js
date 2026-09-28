import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Fairfax VA Real Estate Market Report | Recent Closed Home Sales",
  description: "Live 2026 Fairfax County real estate trends, median sales prices, days on market, and recently sold home comparables.",
  alternates: {
    canonical: "https://homesalesfairfax.com/market-report",
  },
};

export default function MarketReportPage() {
  const marketMetrics = [
    { label: "Median Sales Price", value: "$795,000", change: "+4.6% YoY" },
    { label: "Average Days on Market", value: "14 Days", change: "Fast Absorption" },
    { label: "Sale-to-List Ratio", value: "101.2%", change: "Competitive Offers" },
    { label: "Fairfax Active Inventory", value: "1.3 Months", change: "Seller Favored" },
  ];

  const recentClosedSales = [
    { address: "10412 Main Street", submarket: "Fairfax City", soldPrice: "$1,385,000", days: "6 Days", beds: 5, baths: 4.5 },
    { address: "2840 Mosaic Way", submarket: "Mosaic District", soldPrice: "$910,000", days: "9 Days", beds: 4, baths: 3.5 },
    { address: "3310 Jermantown Rd", submarket: "Oakton", soldPrice: "$1,825,000", days: "12 Days", beds: 6, baths: 6 },
    { address: "9720 Burke Lake Rd", submarket: "Burke", soldPrice: "$795,000", days: "8 Days", beds: 4, baths: 3 },
  ];

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        <div className="section-head-clean">
          <span className="section-pretitle">Fairfax County Market Intel</span>
          <h1 className="section-title-bold">Fairfax Real Estate Market Report</h1>
          <p className="section-lead-text">
            Key pricing metrics, closed sales velocity, and inventory absorption rates across Northern Virginia.
          </p>
        </div>

        {/* 4 Metrics Strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "48px" }}>
          {marketMetrics.map((m, idx) => (
            <div key={idx} style={{ background: "#FFFFFF", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", textAlign: "center" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>{m.label}</span>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", margin: "6px 0" }}>{m.value}</div>
              <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>{m.change}</span>
            </div>
          ))}
        </div>

        {/* Recent Closed Sales Table */}
        <div style={{ background: "#FFFFFF", padding: "36px", borderRadius: "var(--radius-card)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ink-950)" }}>Recent Closed Sales in Fairfax</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-500)" }}>Representative transactions recently settled via Bright MLS.</p>
            </div>
            <Link href="/sell" className="btn-capsule-black" style={{ padding: "8px 20px", fontSize: "0.85rem" }}>
              Book Listing Appointment
            </Link>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid var(--ink-200)", color: "var(--ink-500)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                  <th style={{ padding: "12px 16px" }}>Address</th>
                  <th style={{ padding: "12px 16px" }}>Submarket</th>
                  <th style={{ padding: "12px 16px" }}>Closed Price</th>
                  <th style={{ padding: "12px 16px" }}>Days on Market</th>
                  <th style={{ padding: "12px 16px" }}>Beds / Baths</th>
                </tr>
              </thead>
              <tbody>
                {recentClosedSales.map((sale, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--ink-100)" }}>
                    <td style={{ padding: "16px", fontWeight: 700, color: "var(--ink-950)" }}>{sale.address}</td>
                    <td style={{ padding: "16px", color: "var(--ink-600)" }}>{sale.submarket}</td>
                    <td style={{ padding: "16px", fontWeight: 800, color: "var(--ink-950)" }}>{sale.soldPrice}</td>
                    <td style={{ padding: "16px", color: "var(--status-active)", fontWeight: 600 }}>{sale.days}</td>
                    <td style={{ padding: "16px", color: "var(--ink-600)" }}>{sale.beds} Beds • {sale.baths} Baths</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Callout */}
        <div style={{ background: "var(--bg-subtle)", padding: "36px", borderRadius: "var(--radius-card)", textAlign: "center", border: "1px solid var(--ink-200)" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "8px" }}>
            Curious What Your Home Would Command Today?
          </h3>
          <p style={{ color: "var(--ink-600)", maxWidth: "560px", margin: "0 auto 20px", fontSize: "0.95rem" }}>
            Get a comprehensive 15-page CMA comparing active buyer absorption rates in your specific neighborhood.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/home-valuation" className="btn-capsule-black">
              Instant Valuation
            </Link>
            <a href="tel:5712760986" className="btn-card-ask" style={{ fontWeight: 700 }}>
              Call Us: (571) 276-0986
            </a>
            <a href="sms:+15712760986?body=Hi%20Kirill,%20please%20send%20me%20the%20Fairfax%20market%20report." className="btn-card-ask" style={{ fontWeight: 700 }}>
              Text Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
