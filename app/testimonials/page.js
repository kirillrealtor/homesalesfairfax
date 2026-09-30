import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import TestimonialsDirectory from "../components/TestimonialsDirectory";
import { testimonials } from "../data/testimonials";

export const metadata = {
  title: "Client Testimonials & Reviews | Elena Gorbounova Realtor",
  description: "Read 325+ verified five-star client testimonials and real estate reviews for Elena Gorbounova across Fairfax County, Falls Church, Alexandria, and Northern Virginia.",
  alternates: {
    canonical: "https://www.homesalesfairfax.com/testimonials",
  },
  openGraph: {
    title: "325+ Verified Real Estate Client Reviews | Elena Gorbounova",
    description: "Authentic seller and buyer reviews across Fairfax County and Northern Virginia.",
    url: "https://www.homesalesfairfax.com/testimonials",
    siteName: "homesalesfairfax.com",
    locale: "en_US",
    type: "website",
  }
};

export default function TestimonialsPage() {
  // Aggregate rating schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Elena Gorbounova - RE/MAX Allegiance",
    "image": "https://www.homesalesfairfax.com/images/kirill.jpg",
    "telephone": "+17036257888",
    "email": "ElenaYSC@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5100 Leesburg Pike, Suite 200",
      "addressLocality": "Alexandria",
      "addressRegion": "VA",
      "postalCode": "22302",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": testimonials.length.toString(),
      "reviewCount": testimonials.length.toString()
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Hero Header */}
      <section style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--ink-200)",
        padding: "60px 20px 48px"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#ECFDF5",
            color: "#047857",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "0.82rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "16px"
          }}>
            <span>★ 5.0 Rated Across 325+ Transactions</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 2.9rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            marginBottom: "18px"
          }}>
            Client Testimonials &amp; Verified Reviews
          </h1>

          <p style={{
            fontSize: "1.1rem",
            color: "var(--ink-700)",
            lineHeight: 1.7,
            marginBottom: "32px"
          }}>
            Read authentic, uncensored experiences from 325+ home sellers and buyers who partnered with Elena Gorbounova for record sales, competitive negotiations, and seamless settlement experiences.
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="tel:7036257888" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Elena: (703) 625-7888</span>
            </a>

            <Link href="/sell" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Book In-Home Consultation →</span>
            </Link>

            <Link href="/home-valuation" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Instant Home Valuation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Accolades Hero Section (Exact Match to User Reference) */}
      <section className="container" style={{ maxWidth: "1100px", padding: "48px 20px 20px" }}>
        <div style={{
          background: "#FFFFFF",
          border: "1px solid var(--ink-200)",
          borderRadius: "16px",
          padding: "36px 32px",
          boxShadow: "var(--shadow-card)",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}>
          {/* Left Column: Transparency statement & Official Accolades Badges */}
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em", marginBottom: "8px" }}>
              I'm all ears / Full Transparency &amp; Accountability
            </h2>
            <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.65, marginBottom: "28px" }}>
              I welcome all of your feedback! This is an opportunity to tell the world about your experience working with me.
            </p>

            {/* Official 2026 Five Star & America's Top 100 Badge */}
            <div style={{
              background: "#F8FAFC",
              border: "1px solid var(--ink-200)",
              borderRadius: "12px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              <img 
                src="/images/elena-accolades.png" 
                alt="2026 Five Star Real Estate Agent and America's Top 100 Real Estate Agents Top 1% - Elena Gorbounova" 
                style={{
                  height: "90px",
                  width: "auto",
                  objectFit: "contain",
                  maxWidth: "100%"
                }}
              />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                  Verified Professional Excellence
                </span>
                <strong style={{ fontSize: "1rem", color: "var(--ink-950)", display: "block", marginTop: "2px" }}>
                  2026 Five Star Real Estate Agent
                </strong>
                <span style={{ fontSize: "0.84rem", color: "var(--ink-600)" }}>
                  Winner 2021 • 2022 • 2023 • 2024 • 2025 • 2026
                </span>
                <div style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700, marginTop: "4px" }}>
                  ★ America's Top 100 Top 1% Real Estate Agents
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Elena's Portrait Card */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid var(--ink-200)",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
            textAlign: "center",
            maxWidth: "340px",
            margin: "0 auto"
          }}>
            <div style={{ height: "340px", overflow: "hidden", background: "#F1F5F9", position: "relative" }}>
              <img 
                src="/images/elena-portrait.jpg" 
                alt="Elena Gorbounova - RE/MAX Allegiance"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            
            <div style={{ background: "#0F4C81", color: "#FFFFFF", padding: "16px 14px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0 0 4px", color: "#FFFFFF" }}>
                Elena Gorbounova
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#E0F2FE", margin: 0, fontWeight: 600 }}>
                Your Northern Virginia &amp; Skyline Expert
              </p>
            </div>

            <div style={{ padding: "14px 18px", background: "#0F172A", color: "#CBD5E1", fontSize: "0.82rem", lineHeight: 1.5 }}>
              400+ properties sold. 21+ years of local expertise. Hire Elena &amp; Kirill to list your property and command top dollar.
              <div style={{ marginTop: "10px" }}>
                <Link 
                  href="/sell"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "8px 12px", fontSize: "0.82rem", fontWeight: 700, background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#0F172A" }}
                >
                  Book Listing Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory Section */}
      <section className="container" style={{ padding: "30px 20px 90px" }}>
        <TestimonialsDirectory />
      </section>

      {/* Bottom CTA Banner */}
      <section style={{
        background: "var(--ink-950)",
        color: "#FFFFFF",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "14px", color: "#FFFFFF" }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--ink-300)", lineHeight: 1.65, marginBottom: "28px" }}>
            Whether you are preparing to list in Fairfax City, Oakton, Mantua, Mosby Woods, Franklin Farm, or across Northern Virginia, let Elena provide the strategy and dedication you deserve.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="tel:7036257888" className="btn btn-primary" style={{ background: "var(--accent-gold-hover)", borderColor: "var(--accent-gold-hover)", color: "#FFFFFF" }}>
              Direct: (703) 625-7888
            </a>
            <Link href="/contact" className="btn btn-outline" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
              Send Direct Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
