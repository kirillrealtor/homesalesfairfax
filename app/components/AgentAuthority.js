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
              minHeight: "420px",
              background: "var(--ink-950)"
            }}>
              <img 
                src="/images/hero-estate.jpg"
                alt="Fairfax County Luxury Real Estate - Elena Gorbounova"
                style={{ width: "100%", height: "100%", minHeight: "420px", objectFit: "cover", display: "block", opacity: 0.88 }}
                loading="lazy"
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, transparent 0%, rgba(11, 15, 25, 0.94) 100%)",
                padding: "26px",
                color: "#FFFFFF"
              }}>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Leadership &amp; Client Representation
                </span>
                <h4 style={{ color: "#FFFFFF", fontSize: "1.45rem", margin: "4px 0", fontWeight: 800 }}>Elena Gorbounova</h4>
                <p style={{ color: "#E5E7EB", fontSize: "0.86rem", margin: 0 }}>
                  RE/MAX Allegiance • YSC Real Estate Group • Northern Virginia
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="section-pretitle">Direct Local Representation</span>
            <h2 className="section-title-bold">
              Real Estate Built on Trust, <br />Not Sales Pressure.
            </h2>
            <p style={{ marginBottom: "16px", color: "var(--ink-600)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Buying or selling a home is a major step. You deserve clear guidance at every stage. Elena brings deep Northern Virginia experience, honest pricing, and fast answers.
            </p>
            <p style={{ marginBottom: "26px", color: "var(--ink-600)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              When you reach out, you speak directly with Elena. You will never deal with call centers, pushy sales reps, or junior assistants. From your first private showing to the closing table, your goals always come first.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
              <div style={{ borderLeft: "3px solid var(--ink-950)", paddingLeft: "14px" }}>
                <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1rem" }}>Private Home Tours</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Tour on your schedule with zero sales pressure</span>
              </div>
              <div style={{ borderLeft: "3px solid var(--ink-950)", paddingLeft: "14px" }}>
                <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "1rem" }}>Strong Negotiation</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>Protecting your equity with clean contract terms</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#sell" className="btn-capsule-black" style={{ padding: "12px 24px" }}>
                Plan Your Sale
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
