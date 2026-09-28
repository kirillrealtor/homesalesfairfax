import { NEIGHBORHOOD_GUIDES } from "../data/listings";

export default function NeighborhoodsSection({ onFilterNeighborhood }) {
  return (
    <section id="neighborhoods" className="content-section" style={{ background: "var(--bg-page)" }}>
      <div className="container">
        <div className="section-head-clean">
          <span className="section-pretitle">Explore Communities</span>
          <h2 className="section-title-bold">Life Across Fairfax County</h2>
          <p className="section-lead-text">
            Fairfax County offers great neighborhoods for every lifestyle. Explore historic town centers, walkable shopping districts, and quiet wooded streets. Find the right community for you below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "24px" }}>
          {NEIGHBORHOOD_GUIDES.map((nh) => (
            <div 
              key={nh.slug}
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--ink-200)",
                background: "#FFFFFF",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ height: "190px", position: "relative", overflow: "hidden", background: "#E5E7EB" }}>
                <img 
                  src={nh.image} 
                  alt={nh.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "rgba(11, 15, 25, 0.88)",
                  backdropFilter: "blur(4px)",
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  ZIP: {nh.zip}
                </div>
              </div>

              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "4px", color: "var(--ink-950)", letterSpacing: "-0.01em" }}>
                  {nh.name}
                </h3>

                <div style={{ fontSize: "0.85rem", color: "var(--accent-gold-hover)", fontWeight: 700, marginBottom: "10px" }}>
                  Benchmark Value: {nh.avgPrice}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", marginBottom: "16px", fontStyle: "italic", lineHeight: "1.5" }}>
                  "{nh.vibe}"
                </p>

                <ul style={{ listStyle: "none", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "7px" }}>
                  {nh.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: "0.84rem", color: "var(--ink-700)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onFilterNeighborhood(nh.name.split(" ")[0])}
                  className="btn-card-ask" 
                  style={{ width: "100%", textAlign: "center", marginTop: "auto", fontWeight: 700 }}
                >
                  Explore {nh.name.split(" ")[0]} Residences &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "32px", textAlign: "center", padding: "18px 24px", background: "rgba(255,255,255,0.75)", borderRadius: "14px", border: "1px solid var(--ink-200)" }}>
          <span style={{ fontSize: "0.9rem", color: "var(--ink-700)", lineHeight: "1.6" }}>
            Considering Vienna, McLean, Great Falls, Reston, or Falls Church? Kirill represents clients across all of Northern Virginia.{" "}
            <a href="sms:+15712760986?body=Hi%20Kirill,%20I'm%20exploring%20homes%20in%20" style={{ color: "var(--ink-950)", fontWeight: 700, textDecoration: "underline" }}>
              Text Us at (571) 276-0986 for private off-market insight &rarr;
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
