"use client";

export default function SellerAppointmentSection() {
  const internationalPhone = "15712760986";
  const displayPhone = "(571) 276-0986";
  const email = "kirillysc@gmail.com";

  const smsUrl = `sms:+${internationalPhone}?body=Hi%20Kirill,%20I%20would%20like%20to%20book%20an%20in-home%20listing%20consultation%20for%20my%20Fairfax%20home.`;
  const whatsappUrl = `https://wa.me/${internationalPhone}?text=Hi%20Kirill,%20I%20would%20like%20to%20book%20an%20in-home%20listing%20consultation%20for%20my%20Fairfax%20home.`;
  const mailUrl = `mailto:${email}?subject=Fairfax%20In-Home%20Listing%20Appointment&body=Hi%20Kirill,%0A%0AI%20would%20like%20to%20schedule%20an%20in-home%20listing%20consultation%20for%20my%20property%20in%20Fairfax%20County.`;

  return (
    <section id="sell" className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head-clean">
          <span className="section-pretitle">Fairfax County Home Sellers</span>
          <h2 className="section-title-bold">Book an In-Home Listing Appointment</h2>
          <p className="section-lead-text">
            Discover what active pre-approved buyers will pay for your home. We review recent sales, plan your pricing, and protect your equity.
          </p>
        </div>

        {/* Master Luxury Suite */}
        <div className="seller-luxury-suite">
          {/* Left: Fiduciary Leadership */}
          <div className="seller-left-dossier">
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "inline-block", marginBottom: "6px" }}>
                ✦ RE/MAX Allegiance • Proven Local Sales
              </span>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, margin: "4px 0 14px", color: "var(--ink-950)", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
                Protecting Your Equity <br />At Every Step.
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-700)", lineHeight: "1.7", marginBottom: "24px" }}>
                A home in Fairfax is often a family's top financial asset. Achieving top dollar comes down to three things: accurate pricing, high-end 4K presentation, and tough contract negotiation. You get all three, directly on Kirill's personal phone.
              </p>
            </div>

            <div className="seller-proof-grid">
              <div className="seller-proof-card">
                <div className="proof-icon-box">✓</div>
                <div>
                  <strong className="proof-title">Pre-Market Buyer Matching</strong>
                  <p className="proof-desc">
                    We match your home with pre-approved buyers who are actively searching in your school district before you list publicly.
                  </p>
                </div>
              </div>

              <div className="seller-proof-card">
                <div className="proof-icon-box">✓</div>
                <div>
                  <strong className="proof-title">Strong Contract Defense</strong>
                  <p className="proof-desc">
                    Kirill protects your equity, negotiates inspection repairs, and locks in the highest net price and tightest closing terms.
                  </p>
                </div>
              </div>

              <div className="seller-proof-card">
                <div className="proof-icon-box">✓</div>
                <div>
                  <strong className="proof-title">Professional 4K Media &amp; Staging</strong>
                  <p className="proof-desc">
                    High-definition architectural photography, aerial drone video, and 3D floor plans that attract serious luxury buyers.
                  </p>
                </div>
              </div>

              <div className="seller-proof-card">
                <div className="proof-icon-box">✓</div>
                <div>
                  <strong className="proof-title">Direct Personal Representation</strong>
                  <p className="proof-desc">
                    You work directly with Kirill. Fast answers on his personal cell with zero call-center delays or junior agent handoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 1-Tap Luxury Connect Concierge */}
          <div className="luxury-connect-suite">
            <div>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "inline-block", marginBottom: "4px" }}>
                ✦ Direct Personal Line • Kirill Gorbounov
              </span>
              <h4 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--ink-950)", margin: "4px 0 8px", letterSpacing: "-0.02em" }}>
                Connect Directly With Kirill
              </h4>
              <p style={{ fontSize: "0.98rem", color: "var(--ink-600)", margin: 0, lineHeight: "1.6" }}>
                No forms, no waiting. Choose your preferred channel to schedule an in-home listing consultation:
              </p>
            </div>

            {/* 4 Luxury Interactive Action Tiles (Clean, Large, Zero Clutter) */}
            <div className="luxury-action-grid">
              {/* Tile 1: Text SMS / iMessage */}
              <a href={smsUrl} className="luxury-action-tile" title="Text Us via SMS / iMessage">
                <div className="tile-top-row">
                  <div className="tile-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="tile-headline">Text Us</span>
                  <span className="tile-subline">{displayPhone}</span>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700, marginTop: "4px" }}>
                    ⚡ Direct mobile SMS
                  </span>
                </div>
                <span className="tile-arrow">&rarr;</span>
              </a>

              {/* Tile 2: WhatsApp Chat */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="luxury-action-tile" title="Chat Directly on WhatsApp">
                <div className="tile-top-row">
                  <div className="tile-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="tile-headline">WhatsApp Us</span>
                  <span className="tile-subline">{displayPhone}</span>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 600, marginTop: "4px" }}>
                    Direct chat &amp; file sharing
                  </span>
                </div>
                <span className="tile-arrow">&rarr;</span>
              </a>

              {/* Tile 3: Direct Phone Call */}
              <a href={`tel:${internationalPhone}`} className="luxury-action-tile" title="Call Us Direct">
                <div className="tile-top-row">
                  <div className="tile-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="tile-headline">Call Us</span>
                  <span className="tile-subline">{displayPhone}</span>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 600, marginTop: "4px" }}>
                    Direct phone line
                  </span>
                </div>
                <span className="tile-arrow">&rarr;</span>
              </a>

              {/* Tile 4: Official Email */}
              <a href={mailUrl} className="luxury-action-tile" title="Email Us">
                <div className="tile-top-row">
                  <div className="tile-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="tile-headline">Email Us</span>
                  <span className="tile-subline">{email}</span>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-500)", fontWeight: 600, marginTop: "4px" }}>
                    Digital market package
                  </span>
                </div>
                <span className="tile-arrow">&rarr;</span>
              </a>
            </div>

            {/* Reassuring Fiduciary Footnote */}
            <div style={{ background: "#FFFFFF", padding: "18px 22px", borderRadius: "14px", border: "1px solid var(--ink-200)", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "1.2rem" }}>🔒</span>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-700)", lineHeight: "1.5" }}>
                <strong>No forms to fill, zero sales pressure.</strong> You connect straight to Kirill's cell phone to plan your in-home appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
