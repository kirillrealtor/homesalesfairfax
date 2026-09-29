"use client";

import Link from "next/link";

export default function SkylineFeaturedSection() {
  return (
    <section className="skyline-showcase-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)" }}>
      {/* 1. Screenshot 3: Luxury Living Room Hero Banner */}
      <div style={{
        position: "relative",
        minHeight: "440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden"
      }}>
        {/* Living room couch background */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/living-room-couch.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: "scale(1.02)",
          filter: "brightness(0.92)"
        }} />

        {/* Semi-transparent gradient overlay for pristine legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.72) 100%)"
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "60px 24px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            padding: "6px 18px",
            borderRadius: "9999px",
            color: "#FFFFFF",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "16px",
            border: "1px solid rgba(255, 255, 255, 0.25)"
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-gold)" }}></span>
            RE/MAX Allegiance • YSC Real Estate Group
          </div>

          <h2 style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            margin: "0 0 14px",
            textShadow: "0 4px 20px rgba(0,0,0,0.6)"
          }}>
            Elena Gorbounova
          </h2>

          <p style={{
            fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            margin: "0 auto 18px",
            maxWidth: "920px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            RE/MAX Chairman Club • Lifetime NVAR Top Producer
          </p>

          <p style={{
            color: "#E2E8F0",
            fontSize: "1.05rem",
            maxWidth: "760px",
            margin: "0 auto 28px",
            lineHeight: 1.6,
            textShadow: "0 1px 6px rgba(0,0,0,0.5)"
          }}>
            Master of Laws (LL.M.) • Master Certified Negotiation Expert (MCNE®) • 20+ Years Northern Virginia &amp; Fairfax County Authority
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="btn-capsule-black" style={{ background: "#FFFFFF", color: "var(--ink-950)", padding: "14px 28px" }}>
              About Elena&apos;s Practice
            </Link>
            <a href="tel:7036257888" className="btn-card-ask" style={{ background: "rgba(15, 23, 42, 0.8)", borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF", padding: "14px 28px" }}>
              Direct: (703) 625-7888
            </a>
          </div>
        </div>
      </div>

      {/* 2. Screenshot 4 Top: 100's of Satisfied Buyers and Sellers Social Proof Bar */}
      <div style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "56px 24px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{
            fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
            fontWeight: 800,
            color: "var(--ink-950)",
            marginBottom: "18px"
          }}>
            100&apos;s of Satisfied Buyers and Sellers
          </h3>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            color: "#F59E0B",
            fontSize: "1.2rem",
            marginBottom: "16px"
          }}>
            {"★★★★★"}
          </div>

          <p style={{
            fontSize: "1.08rem",
            lineHeight: 1.75,
            color: "var(--ink-700)",
            fontStyle: "italic",
            marginBottom: "28px"
          }}>
            &ldquo;Elena is a masterclass in professional real estate representation. She is exceptionally knowledgeable, proactive, effective, and fiercely loyal to her clients&apos; interests. She went above and beyond to navigate complex transaction hurdles and deliver a smooth closing well beyond our expectations. We recommend Elena highly and without hesitation.&rdquo;
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/testimonials"
              style={{
                background: "#C53030",
                color: "#FFFFFF",
                padding: "13px 26px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s ease"
              }}
            >
              Elena&apos;s Testimonials (325+)
            </Link>
            <Link
              href="/testimonials"
              style={{
                background: "#006AFF",
                color: "#FFFFFF",
                padding: "13px 26px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s ease"
              }}
            >
              Elena&apos;s Verified Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Screenshot 4 Middle: Skyline Condominiums & Northampton Place Condominiums */}
      <div className="container" style={{ padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Northern Virginia High-Rise Living
          </span>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--ink-950)", marginTop: "6px" }}>
            Featured Condominium Residences
          </h2>
          <p style={{ color: "var(--ink-500)", maxWidth: "680px", margin: "10px auto 0", fontSize: "0.98rem" }}>
            Elena&apos;s signature vertical communities featuring full-service concierge luxury, resort pools, and rapid transit to the Pentagon and Downtown Washington D.C.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          gap: "40px"
        }}>
          {/* Card 1: Skyline Condominiums */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E2E8F0",
            overflow: "hidden",
            boxShadow: "0 6px 24px -4px rgba(15, 23, 42, 0.08)",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ position: "relative", height: "300px", overflow: "hidden", background: "#F1F5F9" }}>
              <img
                src="/images/skyline-condominiums.jpg"
                alt="Skyline Condominiums - Falls Church, VA"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                background: "rgba(15, 23, 42, 0.88)",
                color: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              }}>
                Falls Church, VA • 22041
              </div>
            </div>

            <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "12px" }}>
                Skyline Condominiums
              </h3>

              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.7, marginBottom: "14px" }}>
                Welcome to the landmark Skyline Subdivision in Falls Church, Virginia—conveniently situated across the Potomac River from Washington D.C., only 5 miles from the Pentagon and 7 miles from Reagan National Airport.
              </p>

              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.7, marginBottom: "24px", flexGrow: 1 }}>
                Envisioned by developer Charles E. Smith in the early 1970s, Skyline offers an idyllic resort-style vertical village comprising Skyline Plaza, Skyline Square, and Skyline House. Residents enjoy 24-hour concierge service, rooftop terraces, pools, fitness centers, and direct express buses to the Pentagon.
              </p>

              <Link
                href="/communities/skyline"
                style={{
                  background: "#C53030",
                  color: "#FFFFFF",
                  padding: "12px 22px",
                  borderRadius: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  transition: "background 0.2s ease"
                }}
              >
                View Floorplans and Listings →
              </Link>
            </div>
          </div>

          {/* Card 2: Northampton Place Condominiums */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E2E8F0",
            overflow: "hidden",
            boxShadow: "0 6px 24px -4px rgba(15, 23, 42, 0.08)",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ position: "relative", height: "300px", overflow: "hidden", background: "#F1F5F9" }}>
              <img
                src="/images/northampton-place.jpg"
                alt="Northampton Place Condominiums - Alexandria, VA"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                background: "rgba(15, 23, 42, 0.88)",
                color: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase"
              }}>
                Alexandria, VA • 22302
              </div>
            </div>

            <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "12px" }}>
                Northampton Place Condominiums
              </h3>

              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.7, marginBottom: "14px" }}>
                Northampton Place is a distinguished 16-story, 275-unit luxury condominium residence in Alexandria, Virginia. Situated in the Baileys Crossroads corridor, NHP features an elegant marble and granite lobby, 24-hour executive concierge, and meticulous management.
              </p>

              <p style={{ fontSize: "0.94rem", color: "var(--ink-600)", lineHeight: 1.7, marginBottom: "24px", flexGrow: 1 }}>
                Perfectly located just minutes outside Historic Old Town Alexandria, the Pentagon, and Washington D.C., amenities include a heated swimming pool, fitness center, billiards parlor, party room, gated private courtyard with charcoal grills, and underground parking.
              </p>

              <Link
                href="/communities/northampton-place"
                style={{
                  background: "#C53030",
                  color: "#FFFFFF",
                  padding: "12px 22px",
                  borderRadius: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  transition: "background 0.2s ease"
                }}
              >
                View Floorplans and Listings →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Screenshot 4 Bottom: Elena's Personal Ally Invitation Section */}
      <div style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", padding: "64px 24px" }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: "56px",
          alignItems: "center"
        }}>
          {/* Elena Photo in Black Dress */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              position: "relative",
              maxWidth: "340px",
              margin: "0 auto",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 32px -8px rgba(15, 23, 42, 0.16)",
              border: "1px solid #E2E8F0",
              background: "#FFFFFF"
            }}>
              <img
                src="/images/elena-portrait.jpg"
                alt="Elena Gorbounova - RE/MAX Allegiance"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Personal Narrative & Ally Invitation */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--ink-950)",
              lineHeight: 1.25,
              marginBottom: "18px"
            }}>
              New Home, New Adventure, New Memories, New Beginnings. Elena is Ready to Champion All Your Real Estate Needs.
            </h3>

            <p style={{ fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.8, marginBottom: "14px" }}>
              I would be honored to place my 20+ years of local market knowledge, Master of Laws (LL.M.) legal foundation, and Master Certified Negotiation expertise at your service. Working with an advisor who possesses hyper-local mastery of your exact subdivision is essential to your equity and peace of mind.
            </p>

            <p style={{ fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.8, marginBottom: "28px" }}>
              I am dedicated to guiding you through every phase of the transaction with energy, enthusiasm, persistence, and determination. As a results-oriented professional, I balance aggressive marketing strategies, comprehensive market data, and seasoned negotiation skills to satisfy each and every client. My commitment is paramount because I want to be your real estate ally, not only for one transaction, but for many years to come. You can count on me whenever you need guidance.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href="/about"
                style={{
                  background: "#C53030",
                  color: "#FFFFFF",
                  padding: "14px 30px",
                  borderRadius: "6px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.2s ease"
                }}
              >
                Learn More About Elena →
              </Link>
              <a
                href="tel:7036257888"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #CBD5E1",
                  color: "var(--ink-950)",
                  padding: "13px 24px",
                  borderRadius: "6px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call: (703) 625-7888
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
