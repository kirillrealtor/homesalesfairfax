"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const displayPhone = "(703) 625-7888";
  const internationalPhone = "17036257888";
  const email = "ElenaYSC@gmail.com";
  
  const smsUrl = `sms:+${internationalPhone}?body=Hi%20Elena,%20I'm%20interested%20in%20connecting%20regarding%20Fairfax%20real%20estate.`;
  const whatsappUrl = `https://wa.me/${internationalPhone}?text=Hi%20Elena,%20I'm%20interested%20in%20connecting%20regarding%20Fairfax%20real%20estate.`;
  const mailUrl = `mailto:${email}?subject=Fairfax%20Real%20Estate%20Inquiry&body=Hi%20Elena,%0A%0AI%20would%20like%20to%20connect%20regarding%20my%20Fairfax%20property%20or%20a%20showing%20tour.`;

  return (
    <main>
      <div className="page-wrapper" style={{ paddingBottom: 0 }}>
        <Navbar />
      </div>

      <section className="container" style={{ padding: "40px 20px 80px" }}>
        <div className="section-head-clean">
          <span className="section-pretitle">Connect Directly</span>
          <h1 className="section-title-bold">Contact Our Fairfax Real Estate Team</h1>
          <p className="section-lead-text">
            Direct access for seller listing appointments, private showing tours, and local market insight.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", maxWidth: "1080px", margin: "0 auto" }}>
          {/* Left: Office & Brokerage Credentials */}
          <div>
            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "20px", color: "var(--ink-950)" }}>
                Direct Contact Lines
              </h3>
              
              <div style={{ marginBottom: "20px" }}>
                <span style={{ display: "block", fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Direct Call</span>
                <a href={`tel:${internationalPhone}`} style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ink-950)" }}>
                  Call Us: {displayPhone}
                </a>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <span style={{ display: "block", fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>SMS / iMessage</span>
                <a href={smsUrl} style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--accent-gold)" }}>
                  Text Us: {displayPhone}
                </a>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <span style={{ display: "block", fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Official Email</span>
                <a href={mailUrl} style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink-800)" }}>
                  {email}
                </a>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "0.8rem", color: "var(--ink-500)", textTransform: "uppercase", fontWeight: 700 }}>Brokerage Line</span>
                <a href="tel:7038244800" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--ink-800)" }}>
                  (703) 824-4800
                </a>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", padding: "32px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px", color: "var(--ink-950)" }}>
                Brokerage Location
              </h3>
              <p style={{ color: "var(--ink-700)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                <strong>RE/MAX Allegiance • YSC Real Estate Group</strong><br />
                5100 Leesburg Pike, Suite 200<br />
                Alexandria / Fairfax County, VA 22302
              </p>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "12px" }}>
                Serving Fairfax City, Mosaic District, Oakton, Burke, Falls Church &amp; Northern Virginia.
              </span>
            </div>
          </div>

          {/* Right: Instant Direct Action Hub (Zero Dead Forms) */}
          <div style={{ background: "#FFFFFF", padding: "36px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-200)", boxShadow: "var(--shadow-card)" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ⚡ Immediate Connection
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "6px 0 8px", color: "var(--ink-950)" }}>
              Reach Elena Direct
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-600)", marginBottom: "28px", lineHeight: "1.6" }}>
              Skip automated form delays. Tap any option below to connect with Elena right now on her mobile phone:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Text Us */}
              <a 
                href={smsUrl}
                className="btn-capsule-black"
                style={{ padding: "16px 24px", fontSize: "1.05rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Text Us: {displayPhone}</span>
                </div>
                <span style={{ fontSize: "0.85rem", opacity: 0.85 }}>Direct Mobile SMS &rarr;</span>
              </a>

              {/* Call Us */}
              <a 
                href={`tel:${internationalPhone}`}
                className="btn-card-ask"
                style={{ padding: "15px 24px", fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call Us: {displayPhone}</span>
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Direct Phone &rarr;</span>
              </a>

              {/* WhatsApp Us */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-ask"
                style={{ padding: "15px 24px", fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Chat &amp; Photos &rarr;</span>
              </a>

              {/* Email Us */}
              <a 
                href={mailUrl}
                className="btn-card-ask"
                style={{ padding: "15px 24px", fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FFFFFF" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Email Us: {email}</span>
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Detailed Inquiries &rarr;</span>
              </a>
            </div>

            <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--ink-200)", fontSize: "0.86rem", color: "var(--ink-600)", lineHeight: "1.6" }}>
              🔒 <strong>Direct agent guarantee:</strong> You communicate straight with top producer Elena Gorbounova. No third-party lead routers or automated sales call centers.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
