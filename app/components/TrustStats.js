export default function TrustStats() {
  const stats = [
    {
      number: "400+",
      label: "Properties Sold",
      sub: "Lifetime NVAR Top Producer"
    },
    {
      number: "Top 1%",
      label: "Nationwide Ranking",
      sub: "America's Top 100 & Five Star"
    },
    {
      number: "Since 2006",
      label: "Local Market Authority",
      sub: "Associate Broker & LL.M."
    },
    {
      number: "5.0 ★",
      label: "325+ Client Reviews",
      sub: "Zillow & Google 5-Star Rated"
    }
  ];

  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-row">
          {stats.map((s, idx) => (
            <div key={idx} className="trust-col">
              <span className="trust-big-num">{s.number}</span>
              <span className="trust-sub-label">{s.label}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--ink-400)" }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Verified Industry Accolades Badge Strip - Prominent & Prestigious */}
        <div style={{
          marginTop: "24px",
          padding: "20px 32px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
          border: "1.5px solid rgba(197, 168, 128, 0.45)",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
          textAlign: "left"
        }}>
          <img 
            src="/images/elena-accolades.png" 
            alt="2026 Five Star Real Estate Agent & America's Top 100 Real Estate Agents Top 1% - Elena Gorbounova"
            style={{ height: "66px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))" }}
          />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.8rem", background: "rgba(197, 168, 128, 0.22)", color: "#856404", padding: "3px 10px", borderRadius: "9999px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                ★ Elite Producer Network
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--status-active)", fontWeight: 700 }}>
                Lifetime NVAR Top Producer • RE/MAX Allegiance
              </span>
            </div>
            <div style={{ fontSize: "1.08rem", fontWeight: 800, color: "var(--ink-950)", lineHeight: "1.4" }}>
              Elena Gorbounova: <span style={{ fontWeight: 600, color: "var(--ink-700)" }}>2026 Five Star Real Estate Agent (6 Consecutive Years) • America's Top 100 Real Estate Agents (Top 1% Nationwide)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
