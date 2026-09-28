export default function TrustStats() {
  const stats = [
    {
      number: "$320M+",
      label: "Northern Virginia Sales",
      sub: "Proven Local Track Record"
    },
    {
      number: "Top 1%",
      label: "Brokerage Network",
      sub: "RE/MAX Allegiance & YSC"
    },
    {
      number: "15+ Yrs",
      label: "Fairfax Experience",
      sub: "Local Market Authority"
    },
    {
      number: "100%",
      label: "Fairfax MLS Coverage",
      sub: "Updated Every 15 Minutes"
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
      </div>
    </section>
  );
}
