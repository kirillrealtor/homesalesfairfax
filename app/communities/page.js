import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import CommunitiesDirectory from "../components/CommunitiesDirectory";

export const metadata = {
  title: "Fairfax County & Northern Virginia Communities | Elena Gorbounova",
  description: "Explore premier communities and subdivisions across Fairfax County, VA. Settled comps, market reports, and luxury residences in Mantua, Mosby Woods, Franklin Farm, Oakton, and beyond.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/communities",
  },
  openGraph: {
    title: "Fairfax County & Northern Virginia Communities | Elena Gorbounova",
    description: "Discover high-turnover subdivisions, luxury acreage estates, and vibrant town centers across Fairfax County.",
    url: "https://www.homesalesfairfax.com/communities",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function CommunitiesPage() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Hero Header: Chris Cortazzo Inspired Minimalist Elegance */}
      <section style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--ink-200)",
        padding: "64px 20px 48px"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "#B45309",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px"
          }}>
            Fairfax County &amp; Northern Virginia
          </span>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "18px"
          }}>
            Fairfax Communities
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: "var(--ink-700)",
            lineHeight: 1.7,
            maxWidth: "740px",
            margin: "0 auto 32px auto"
          }}>
            Elena Gorbounova represents premier single-family residences, historic village homes, and luxury estates across Fairfax County's most desirable subdivisions, school pyramids, and zip codes.
          </p>

          {/* Quick Action Badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/market-report" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Monthly Market Reports (22030–22033) &rarr;</span>
            </Link>
            <Link href="/sell" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Book In-Home Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Communities Directory Grid */}
      <section className="container" style={{ padding: "50px 20px 90px" }}>
        <CommunitiesDirectory />
      </section>

      {/* Cortazzo Luxury Bottom Consultation Banner */}
      <section style={{
        background: "var(--ink-950)",
        color: "#FFFFFF",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{
            fontSize: "0.8rem",
            color: "var(--accent-gold)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 700,
            display: "block",
            marginBottom: "12px"
          }}>
            Subdivision-Level Expertise • Bright MLS IDX
          </span>

          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, marginBottom: "16px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            Considering Selling in One of These Communities?
          </h2>

          <p style={{ fontSize: "1.1rem", color: "var(--ink-300)", lineHeight: 1.7, marginBottom: "32px" }}>
            Sellers want an agent who knows their exact subdivision, school boundaries, and settled comp history. Get a custom property dossier tailored specifically to your home.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a 
              href="tel:7036257888" 
              className="btn btn-primary" 
              style={{ background: "var(--accent-gold-hover)", borderColor: "var(--accent-gold-hover)", color: "#FFFFFF", padding: "14px 28px", fontWeight: 700 }}
            >
              Call Elena Direct: (703) 625-7888
            </a>

            <Link 
              href="/home-valuation" 
              className="btn btn-outline" 
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)", padding: "14px 28px", fontWeight: 600 }}
            >
              Instant Home Valuation &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
