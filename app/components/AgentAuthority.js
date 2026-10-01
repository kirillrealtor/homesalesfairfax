export default function AgentAuthority({ onOpenTourModal }) {
  return (
    <section id="agents" className="content-section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--ink-200)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "50px",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              position: "relative",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--ink-200)",
              background: "#F8FAFC"
            }}>
              <div style={{ height: "440px", overflow: "hidden", position: "relative", background: "#F1F5F9" }}>
                <img 
                  src="/images/elena-portrait.jpg"
                  alt="Elena Gorbounova - Top 1% REALTOR® in Northern Virginia"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.94) 100%)",
                  padding: "24px 22px",
                  color: "#FFFFFF"
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Leadership &amp; Client Representation
                  </span>
                  <h4 style={{ color: "#FFFFFF", fontSize: "1.45rem", margin: "4px 0", fontWeight: 800 }}>Elena Gorbounova</h4>
                  <p style={{ color: "#E2E8F0", fontSize: "0.86rem", margin: 0 }}>
                    RE/MAX Allegiance • Your Skyline Connection • 400+ Properties Sold
                  </p>
                </div>
              </div>

              {/* Accolades Badge Strip beneath portrait */}
              <div style={{
                background: "#FFFFFF",
                padding: "16px 20px",
                borderTop: "1px solid var(--ink-200)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap"
              }}>
                <img 
                  src="/images/elena-accolades.png" 
                  alt="2026 Five Star Real Estate Agent & America's Top 100 Real Estate Agents Top 1%" 
                  style={{ height: "54px", width: "auto", objectFit: "contain" }}
                />
                <div style={{ textAlign: "right" }}>
                  <strong style={{ fontSize: "0.82rem", color: "var(--ink-950)", display: "block" }}>
                    Top 1% Nationwide
                  </strong>
                  <span style={{ fontSize: "0.76rem", color: "var(--status-active)", fontWeight: 700 }}>
                    Lifetime NVAR Top Producer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-pretitle">Direct Local Representation</span>
            <h2 className="section-title-bold">
              Why Sellers Hire Elena <br />to List Their Properties.
            </h2>
            <p style={{ marginBottom: "16px", color: "var(--ink-600)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Selling a property in Northern Virginia is a major financial milestone. Achieving top dollar comes down to strategic pricing, high-end 4K HDR presentation, and aggressive fiduciary negotiation.
            </p>
            <p style={{ marginBottom: "26px", color: "var(--ink-600)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              When you hire Elena Gorbounova, you work directly with a veteran top producer who has closed over 400 transactions, serving Northern Virginia since 2006. You will never deal with call centers or junior assistants. From initial in-home pricing walkthrough to the closing table, your net proceeds always come first.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
              <div style={{ borderLeft: "3px solid var(--accent-gold)", paddingLeft: "14px" }}>
                <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1rem" }}>Cinema 4K Marketing</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Architectural drone footage and professional interior staging</span>
              </div>
              <div style={{ borderLeft: "3px solid var(--accent-gold)", paddingLeft: "14px" }}>
                <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1rem" }}>Fierce Contract Defense</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Defending your equity with tight contingency waivers</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#sell" className="btn-capsule-black" style={{ padding: "12px 24px" }}>
                Book In-Home Listing Appointment
              </a>
              <a href="tel:7036257888" className="btn-card-ask">
                Call Us: (703) 625-7888
              </a>
              <a href="sms:+17036257888" className="btn-card-ask">
                Text Us
              </a>
              <a href="mailto:ElenaYSC@gmail.com" className="btn-card-ask">
                ElenaYSC@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
