export default function TestimonialsSection() {
  const reviews = [
    {
      quote: "Selling our home after 18 years felt overwhelming. Kirill made every step clear and stress-free. His pricing plan brought four strong offers in our first weekend. We sold for $45,000 above asking price. We felt supported the whole time.",
      author: "David & Sarah K.",
      location: "Sold Home in Fairfax City",
      stars: 5
    },
    {
      quote: "In Northern Virginia, good homes sell fast. Kirill gave us a real edge. We texted him on Saturday morning, toured the home at 11 AM, and had our offer accepted before dinner. Fast, honest, and smooth.",
      author: "Marcus & Evelyn T.",
      location: "Purchased Home in Mosaic District",
      stars: 5
    },
    {
      quote: "Kirill gave us practical tips to prepare our home for the market. We made simple updates, staged each room, and received a clean cash offer in two days. Working with him was easy and transparent.",
      author: "Dr. Rebecca Lin",
      location: "Sold Home in Oakton, VA",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="content-section" style={{ background: "var(--bg-page)" }}>
      <div className="container">
        <div className="section-head-clean">
          <span className="section-pretitle">Client Experiences</span>
          <h2 className="section-title-bold">Stories of Trust Across Fairfax County</h2>
          <p className="section-lead-text">
            Buying or selling a home is a big life move. Read how local families reached their goals with Kirill's guidance, honest advice, and strong negotiation.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {reviews.map((r, i) => (
            <div 
              key={i} 
              style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-md)",
                padding: "32px",
                border: "1px solid var(--ink-200)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--shadow-card)"
              }}
            >
              <div style={{ color: "var(--accent-gold)", fontSize: "1.1rem", marginBottom: "14px", letterSpacing: "2px" }}>
                {"★".repeat(r.stars)}
              </div>
              <p style={{ fontSize: "0.94rem", color: "var(--ink-700)", fontStyle: "italic", marginBottom: "22px", flexGrow: 1, lineHeight: "1.65" }}>
                "{r.quote}"
              </p>
              <div style={{ borderTop: "1px solid var(--ink-100)", paddingTop: "14px" }}>
                <strong style={{ display: "block", color: "var(--ink-950)", fontSize: "0.94rem" }}>{r.author}</strong>
                <span style={{ fontSize: "0.82rem", color: "var(--accent-gold-hover)", fontWeight: 600 }}>{r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
