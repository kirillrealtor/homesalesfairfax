"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AlexandriaTownhomesClient({ alexandriaListings }) {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "900px" }}>
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)", marginBottom: "16px" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Alexandria Townhomes</span>
        </div>

        <span className="section-pretitle">Historic Potomac Waterfront &amp; Urban Living</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Alexandria Townhomes For Sale
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "750px" }}>
          Explore luxury <strong>Alexandria townhomes for sale</strong>, historic Old Town rowhouses, and premier waterfront communities including <strong>Porto Vecchio condominiums</strong> and Kingstowne townhouses.
        </p>
      </section>

      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto 48px" }}>
            <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Discover Townhomes &amp; Condos For Sale in Alexandria, VA
            </h2>
            <p style={{ marginBottom: "18px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              Seeking <strong>alexandria townhomes for sale</strong> or looking for <strong>alexandria va condos for sale</strong>? Alexandria combines 18th-century cobblestone maritime heritage with high-velocity urban connectivity. Located just minutes from Ronald Reagan Washington National Airport (DCA), the Pentagon, Amazon HQ2, and downtown Washington D.C., Alexandria offers an unmatched lifestyle for professionals, military officers, and growing families.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--ink-700)", lineHeight: "1.7", fontSize: "1.02rem" }}>
              From historic multi-story brick brownstones in Old Town to waterfront gems like the <strong>Porto Vecchio condominiums alexandria va</strong> situated right along the Potomac River, and master-planned enclaves in Kingstowne and Cameron Station, buyers enjoy private garage parking, courtyards, and immediate access to dining along the King Street Mile.
            </p>

            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--accent-gold)", margin: "32px 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px", color: "var(--ink-950)" }}>
                Alexandria VA Townhome &amp; Condo Market Highlights
              </h3>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px", color: "var(--ink-700)" }}>
                <li><strong>Coveted Communities:</strong> Old Town, Porto Vecchio, Cameron Station, Kingstowne, Del Ray</li>
                <li><strong>Property Types:</strong> Historic 1800s Rowhomes, Waterfront Luxury Condos, Garage Townhouses</li>
                <li><strong>Average Days on Market:</strong> 6 - 9 Days</li>
                <li><strong>Commuter Transit:</strong> King St-Old Town Metro, VRE, George Washington Parkway, I-495</li>
                <li><strong>Dining &amp; Recreation:</strong> King Street Mile, Torpedo Factory, Mount Vernon Trail</li>
                <li><strong>Proximity to DC:</strong> 10 to 15 Minutes to Capitol Hill &amp; Pentagon</li>
              </ul>
            </div>
          </div>



          {/* FAQ Section */}
          <div style={{ maxWidth: "860px", margin: "60px auto 0", borderTop: "1px solid var(--ink-200)", paddingTop: "40px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
              Frequently Asked Questions About Alexandria VA Townhomes &amp; Condos
            </h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                What makes Porto Vecchio condominiums in Alexandria VA unique?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                <strong>Porto Vecchio condominiums</strong> is an Italianate waterfront community located along the Potomac River in south Alexandria. Featuring private boat slips, riverfront balconies, tennis courts, and immediate access to the George Washington Parkway, it is one of the most distinctive condominium enclaves in Northern Virginia.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                How do condo and HOA fees work in Old Town Alexandria?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                In historic Old Town, many classic rowhomes are fee-simple with zero HOA fees, while newer townhome developments and condo buildings include reserves for historic brick exterior maintenance, landscaping, common courtyard upkeep, and master insurance.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                Can I find townhouses for sale in Alexandria VA with garage parking?
              </h4>
              <p style={{ color: "var(--ink-700)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Yes! While early 1800s historic rowhomes often utilize street parking permits, communities such as Cameron Station, Kingstowne, Potomac Greens, and Ford’s Landing feature dedicated 1-car and 2-car garage townhomes.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid var(--ink-200)", paddingTop: "36px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              Explore Neighboring Northern Virginia Markets
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              <Link href="/falls-church-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Falls Church &rarr;
              </Link>
              <Link href="/arlington-va-condos-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Arlington Condos &rarr;
              </Link>
              <Link href="/fairfax-condos-townhomes" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Fairfax Townhomes &rarr;
              </Link>
              <Link href="/springfield-va-homes-for-sale" className="btn btn-outline" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
                Springfield VA Homes &rarr;
              </Link>
            </div>
            <Link href="/" className="btn-card-ask" style={{ display: "inline-block", padding: "12px 24px" }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
