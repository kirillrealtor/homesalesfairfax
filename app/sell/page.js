import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerAppointmentSection from "../components/SellerAppointmentSection";
import HomeValuationTool from "../components/HomeValuationTool";
import AgentAuthority from "../components/AgentAuthority";
import Link from "next/link";
import { VIRGINIA_DIVISIONS, VIRGINIA_SUBDIVISIONS } from "../data/virginiaDivisions";

export const metadata = {
  title: "Hire Northern Virginia Top Listing Agents | Sell for Top Dollar | homesalesfairfax.com",
  description: "Hire Elena Gorbounova & Kirill to list your Northern Virginia home. 400+ properties sold, 102.8% average list-to-sale ratio, 5.2 days DOM. Book your in-home listing consultation today.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/sell",
  },
  openGraph: {
    title: "Hire Northern Virginia's Top Listing Team | Elena & Kirill",
    description: "Sell your home for top dollar with professional staging, 4K HDR media, pre-approved buyer matching, and seasoned contract defense.",
    url: "https://www.homesalesfairfax.com/sell",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function SellPage() {
  const sellerFaqs = [
    {
      q: "Why should I hire Elena Gorbounova & Kirill instead of a discount brokerage or mega-team?",
      a: "Discount brokerages cut corners on marketing, professional staging, and negotiation—costing sellers tens of thousands of dollars in lost equity. Mega-teams pass you off to junior assistants with little contract experience. With Elena and Kirill, you work directly with top 1% producers who have closed over 400 properties and average a 102.8% sale-to-list ratio."
    },
    {
      q: "What is included in your listing marketing package?",
      a: "Our full-service listing package includes: in-home pricing strategy, professional interior staging consultation, 4K architectural HDR photography, FAA-licensed drone footage, 3D Matterport virtual tour, full-color direct-mail postcards to 1,000+ neighbors, targeted social media & Google relocation campaigns, and Bright MLS maximum syndication."
    },
    {
      q: "How do you handle multiple offers and bidding wars?",
      a: "We implement an intentional offer deadline strategy that builds competitive tension over the opening weekend. When multiple offers arrive, we negotiate escalation addenda, waive appraisal contingencies, eliminate inspection renegotiations, and secure complimentary seller rent-backs."
    },
    {
      q: "What should I repair or upgrade before listing my home?",
      a: "During our initial in-home walkthrough, we provide a prioritized 'Do This, Skip That' checklist. We focus strictly on high-ROI cosmetic improvements (paint touch-ups, light fixtures, landscape curb appeal, floor refinishing) while preventing you from overspending on low-return capital projects."
    }
  ];

  return (
    <main style={{ background: "#FFFFFF", color: "var(--ink-950)" }}>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Hero Header */}
      <section style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--ink-200)",
        padding: "68px 20px 48px",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px"
          }}>
            ✦ Northern Virginia Premier Home Sellers
          </span>
          <h1 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            margin: "0 auto 18px"
          }}>
            Hire Northern Virginia's Top Listing Team to Sell for Top Dollar
          </h1>
          <p style={{
            fontSize: "1.18rem",
            color: "var(--ink-700)",
            lineHeight: 1.7,
            maxWidth: "760px",
            margin: "0 auto 32px"
          }}>
            400+ closed transactions and 21+ years of local experience across Northern Virginia. We connect your property with active pre-approved buyers, provide professional staging and 4K cinema media, and defend your equity through every contract clause.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="#sell" className="btn btn-primary" style={{ padding: "14px 28px", fontWeight: 800 }}>
              Book In-Home Listing Consultation &rarr;
            </a>
            <a href="tel:7036257888" className="btn btn-outline" style={{ padding: "14px 28px", fontWeight: 700 }}>
              Call Direct: (703) 625-7888
            </a>
          </div>

          {/* Official Trust & Accolades Card */}
          <div style={{
            marginTop: "36px",
            display: "inline-flex",
            alignItems: "center",
            gap: "20px",
            background: "#FFFFFF",
            border: "1px solid var(--ink-200)",
            borderRadius: "16px",
            padding: "16px 28px",
            boxShadow: "var(--shadow-card)",
            textAlign: "left",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "2.5px solid var(--accent-gold)", flexShrink: 0, background: "#E2E8F0" }}>
              <img 
                src="/images/elena-portrait.jpg" 
                alt="Elena Gorbounova - RE/MAX Allegiance" 
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} 
              />
            </div>
            <img 
              src="/images/elena-accolades.png" 
              alt="2026 Five Star Real Estate Agent & America's Top 100 Real Estate Agents Top 1%" 
              style={{ height: "46px", width: "auto", objectFit: "contain" }}
            />
            <div>
              <strong style={{ fontSize: "0.95rem", color: "var(--ink-950)", display: "block" }}>
                Elena Gorbounova &amp; Kirill • RE/MAX Allegiance
              </strong>
              <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>
                2026 Five Star Agent (6 Consecutive Years) • America's Top 100 (Top 1% Nationwide)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Representation Authority */}
      <AgentAuthority />

      {/* In-Home Listing Appointment Suite */}
      <SellerAppointmentSection />

      {/* Benchmark Valuations */}
      <HomeValuationTool />

      {/* Subdivision & Division Quick Navigator for Sellers */}
      <section style={{ background: "var(--bg-page)", borderTop: "1px solid var(--ink-200)", padding: "64px 20px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              ✦ Micro-Market Expertise
            </span>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginTop: "6px" }}>
              Subdivision-Specific Seller Guides
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "1.02rem" }}>
              Sellers want an agent who knows their exact subdivision comps, school boundaries, and buyer appeal. Explore our dedicated seller reports:
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "18px",
            marginBottom: "36px"
          }}>
            {VIRGINIA_SUBDIVISIONS.slice(0, 8).map((sub) => (
              <Link 
                key={sub.id}
                href={`/subdivisions/${sub.slug}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--ink-200)",
                  borderRadius: "12px",
                  padding: "18px 20px",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "var(--shadow-card)",
                  transition: "transform 0.15s ease"
                }}
              >
                <div>
                  <strong style={{ fontSize: "1.05rem", color: "var(--ink-950)", display: "block" }}>
                    {sub.name}
                  </strong>
                  <span style={{ fontSize: "0.82rem", color: "var(--ink-500)" }}>
                    {sub.avgDOM} DOM • High Seller Demand
                  </span>
                </div>
                <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}>&rarr;</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/subdivisions" className="btn btn-outline" style={{ fontWeight: 700, padding: "12px 24px" }}>
              View All Virginia Subdivisions Directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Seller FAQs */}
      <section className="container" style={{ maxWidth: "860px", padding: "64px 20px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            ✦ Clarity &amp; Transparency
          </span>
          <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginTop: "6px" }}>
            Frequently Asked Questions by Home Sellers
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sellerFaqs.map((faq, idx) => (
            <details 
              key={idx}
              style={{
                background: "#F8FAFC",
                border: "1px solid var(--ink-200)",
                borderRadius: "12px",
                padding: "20px 24px"
              }}
            >
              <summary style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink-950)", cursor: "pointer" }}>
                {faq.q}
              </summary>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.75, marginTop: "14px", marginBottom: 0 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
