"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SkylineCondominiumsClient() {
  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      {/* Hero Header */}
      <section className="container" style={{ padding: "40px 20px 24px", textAlign: "center", maxWidth: "980px" }}>
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", fontSize: "0.85rem", color: "var(--ink-500)", marginBottom: "16px" }}>
          <Link href="/" style={{ color: "var(--ink-600)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--ink-950)", fontWeight: 600 }}>Skyline Condominiums</span>
        </div>

        <span className="section-pretitle">Falls Church, VA • Bailey&apos;s Crossroads Corridor</span>
        <h1 className="hero-title-main" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)", margin: "10px auto 16px" }}>
          Skyline Condominiums
        </h1>
        <p className="hero-subtitle-clean" style={{ maxWidth: "780px", margin: "0 auto" }}>
          Your definitive guide to Falls Church&apos;s landmark resort vertical community—comprising <strong>Skyline Plaza</strong>, <strong>Skyline Square</strong>, and <strong>Skyline House</strong>, just 5 miles from the Pentagon.
        </p>
      </section>

      {/* Main Video Tour Section */}
      <section className="container" style={{ padding: "0 20px 48px", maxWidth: "1160px" }}>
        <div style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          height: 0,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 12px 36px -8px rgba(15, 23, 42, 0.2)",
          border: "1px solid var(--ink-200)",
          background: "#0F172A"
        }}>
          <iframe
            title="Tour Skyline Subdivision Falls Church VA | Elena Gorbounova YourSkylineConnection RE/MAX Allegiance"
            src="https://www.youtube.com/embed/u6Kt4WmI9sA"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Two-Column Showcase Section: Image + Description */}
      <section className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)", padding: "64px 0" }}>
        <div className="container">
          <div className="condo-showcase-grid">
            {/* Left Column: Building Photo */}
            <div>
              <div style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px -6px rgba(15, 23, 42, 0.12)",
                border: "1px solid var(--ink-200)",
                background: "#F1F5F9"
              }}>
                <img
                  src="/images/skyline-condominiums.jpg"
                  alt="Skyline Condominiums - Falls Church, VA"
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  background: "rgba(15, 23, 42, 0.88)",
                  backdropFilter: "blur(6px)",
                  color: "#FFFFFF",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase"
                }}>
                  Falls Church, VA • 22041
                </div>
              </div>
            </div>

            {/* Right Column: Exact Monograph Text from Live Site */}
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                ✦ Resort-Style Vertical Community
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "18px", lineHeight: "1.25" }}>
                Welcome to Skyline Subdivision
              </h2>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "16px" }}>
                Welcome to the landmark Skyline Subdivision located in Falls Church, Virginia, directly across the Potomac River from Washington, D.C. Situated five miles from the Pentagon and seven miles from Reagan National Airport, Skyline delivers exceptional regional accessibility paired with peaceful residential surroundings.
              </p>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "16px" }}>
                Conceived by master builder Charles E. Smith in the early 1970s within the historic Bailey&apos;s Crossroads corridor, Skyline establishes a comprehensive vertical lifestyle village. Residents enjoy immediate proximity to Tysons Corner, Ballston, regional Metro lines, and primary Northern Virginia commuter routes, ensuring an effortless daily commute.
              </p>

              <p style={{ fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.75, marginBottom: "28px" }}>
                Residences feature expansive interior layouts, ample storage capacity, in-unit laundry accommodations, sweeping panoramic views of Northern Virginia and the capital skyline, 24-hour concierge security, and reserved garage parking.
              </p>

              {/* Three Red Enclave Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
                <Link
                  href="/skyline-condominiums/skyline-square"
                  style={{
                    backgroundColor: "#DC2830",
                    color: "#FFFFFF",
                    padding: "13px 22px",
                    borderRadius: "6px",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(220, 40, 48, 0.25)",
                    transition: "all 0.15s ease"
                  }}
                >
                  Skyline Square
                </Link>

                <Link
                  href="/skyline-condominiums/skyline-house"
                  style={{
                    backgroundColor: "#DC2830",
                    color: "#FFFFFF",
                    padding: "13px 22px",
                    borderRadius: "6px",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(220, 40, 48, 0.25)",
                    transition: "all 0.15s ease"
                  }}
                >
                  Skyline House
                </Link>

                <Link
                  href="/skyline-condominiums/skyline-plaza"
                  style={{
                    backgroundColor: "#DC2830",
                    color: "#FFFFFF",
                    padding: "13px 22px",
                    borderRadius: "6px",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(220, 40, 48, 0.25)",
                    transition: "all 0.15s ease"
                  }}
                >
                  Skyline Plaza
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
