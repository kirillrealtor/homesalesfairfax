import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeValuationTool from "../components/HomeValuationTool";
import Link from "next/link";

export const metadata = {
  title: "Fairfax Real Estate Assessment & Home Valuation | Property Value Guide",
  description: "Understand your Fairfax real estate assessment vs true market value. Access instant property search and valuation based on settled Bright MLS comps and tax records.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/home-valuation",
  },
};

export default function HomeValuationPage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>
      
      <section className="container" style={{ padding: "40px 20px 20px", textAlign: "center", maxWidth: "860px" }}>
        <span className="section-pretitle">Fairfax County Home Equity &amp; Property Search</span>
        <h1 className="hero-title-main" style={{ fontSize: "3.2rem", margin: "10px auto 16px" }}>
          Fairfax Real Estate Assessment &amp; Home Valuation
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "700px" }}>
          Discover how your official Fairfax real estate assessment compares to actual sold market value. Get a precision micro-market valuation based on Bright MLS settled comps.
        </p>
      </section>

      <HomeValuationTool />

      <section className="content-section" style={{ background: "var(--bg-page)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <h2 className="section-title-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>
            Fairfax Real Estate Assessment vs. True Market Value
          </h2>
          <p style={{ marginBottom: "16px", color: "var(--ink-700)", lineHeight: "1.7" }}>
            When homeowners conduct a <strong>property search Fairfax</strong> or review their annual <strong>Fairfax county tax records</strong>, they often notice that the county assessment lags behind real-time buyer demand. Official <strong>Fairfax real estate assessments</strong> are calculated en masse for tax purposes and do not account for interior architectural finishes, finished basements, luxury landscaping, or tight school boundary premiums.
          </p>
          <p style={{ marginBottom: "28px", color: "var(--ink-700)", lineHeight: "1.7" }}>
            Elena Gorbounova and Kirill analyze micro-level Bright MLS settled comps and multi-offer escalation addenda, giving you an accurate fiduciary price estimate that maximizes your net seller equity.
          </p>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/" className="btn-capsule-black" style={{ padding: "12px 28px" }}>
              ← Return to Full Fairfax Portal
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Fairfax Real Estate Assessment & Home Valuation Tool",
            "url": "https://www.homesalesfairfax.com/home-valuation",
            "description": "Instant online home valuation and property search for Fairfax County homeowners.",
            "provider": {
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
