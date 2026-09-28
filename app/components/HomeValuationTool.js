"use client";

export default function HomeValuationTool() {
  const internationalPhone = "15712760986";
  const displayPhone = "(571) 276-0986";

  const benchmarks = [
    {
      area: "Fairfax City & Old Town",
      zip: "22030",
      medianPrice: "$910,000",
      range: "$750,000 – $1,650,000",
      absorption: "12 Days on Market",
      keyFactor: "Woodson & Fairfax High Pyramids • Historic Walkability"
    },
    {
      area: "Mosaic District & Merrifield",
      zip: "22031",
      medianPrice: "$830,000",
      range: "$650,000 – $1,250,000",
      absorption: "9 Days on Market",
      keyFactor: "Walk to Metro & 50+ Shops • Luxury Rooftop Living"
    },
    {
      area: "Oakton Estates & Vienna",
      zip: "22124",
      medianPrice: "$1,450,000",
      range: "$1,150,000 – $3,500,000+",
      absorption: "14 Days on Market",
      keyFactor: "Top-Ranked Oakton High • 1-Acre Wooded Lots"
    },
    {
      area: "Burke & Lake Braddock",
      zip: "22015",
      medianPrice: "$760,000",
      range: "$620,000 – $1,050,000",
      absorption: "10 Days on Market",
      keyFactor: "Lake Braddock Secondary • Burke Centre VRE Rail"
    }
  ];

  return (
    <section id="valuation" className="content-section" style={{ background: "var(--bg-page)", borderTop: "1px solid var(--ink-200)", borderBottom: "1px solid var(--ink-200)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head-clean">
          <span className="section-pretitle">Fairfax County Home Equity</span>
          <h2 className="section-title-bold">What Is Your Fairfax Home Worth Today?</h2>
          <p className="section-lead-text">
            Online estimates often miss your kitchen remodel, finished basement, or quiet cul-de-sac lot. Explore verified neighborhood benchmarks below, or request an authentic Bright MLS pricing dossier.
          </p>
        </div>

        {/* 4 Spacious Submarket Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "44px"
        }}>
          {benchmarks.map((b) => (
            <div 
              key={b.zip} 
              style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-md)",
                padding: "32px 28px",
                border: "1px solid var(--ink-200)",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    ZIP: {b.zip}
                  </span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--status-active)", background: "rgba(16, 185, 129, 0.1)", padding: "3px 10px", borderRadius: "9999px" }}>
                    {b.absorption}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ink-950)", marginBottom: "12px", lineHeight: "1.25" }}>
                  {b.area}
                </h3>

                <div style={{ marginBottom: "16px" }}>
                  <span style={{ display: "block", fontSize: "0.82rem", color: "var(--ink-600)", textTransform: "uppercase", fontWeight: 700 }}>
                    Median Sold Benchmark
                  </span>
                  <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink-950)", letterSpacing: "-0.02em" }}>
                    {b.medianPrice}
                  </div>
                  <span style={{ fontSize: "0.92rem", color: "var(--ink-600)" }}>
                    Typical Closed Range: <strong>{b.range}</strong>
                  </span>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--ink-100)", paddingTop: "14px", marginTop: "12px" }}>
                <span style={{ display: "block", fontSize: "0.85rem", color: "var(--ink-700)", lineHeight: "1.5" }}>
                  ✦ {b.keyFactor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Spacious, Adult In-Depth Valuation Request Bar (Direct Action, No Forms) */}
        <div style={{
          background: "#FFFFFF",
          borderRadius: "var(--radius-card)",
          padding: "48px",
          border: "1.5px solid var(--ink-200)",
          boxShadow: "var(--shadow-card)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "36px",
          flexWrap: "wrap"
        }}>
          <div style={{ maxWidth: "720px" }}>
            <span style={{ fontSize: "0.84rem", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", display: "inline-block", marginBottom: "8px" }}>
              ✦ Personal Comparative Market Analysis (CMA)
            </span>
            <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink-950)", margin: "0 0 12px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
              Want the Exact Value of Your Address?
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--ink-700)", lineHeight: "1.7", margin: 0 }}>
              Don't trust inaccurate computer algorithms. Text your address directly to us. Kirill will pull the 5 most recent closed sales in your immediate school pyramid and text you the verified comps breakdown directly.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "260px" }}>
            <a 
              href={`sms:+${internationalPhone}?body=Hi%20Kirill,%20please%20send%20me%20a%20verified%20home%20valuation%20report%20for%20my%20Fairfax%20property%20at:`} 
              className="btn-capsule-black" 
              style={{ padding: "16px 28px", fontSize: "1rem", fontWeight: 700, textAlign: "center" }}
            >
              Text Us for Instant Comps &rarr;
            </a>

            <div style={{ display: "flex", gap: "10px" }}>
              <a 
                href={`https://wa.me/${internationalPhone}?text=Hi%20Kirill,%20please%20send%20me%20a%20verified%20home%20valuation%20report%20for%20my%20Fairfax%20property%20at:`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-ask"
                style={{ flex: 1, textAlign: "center", padding: "12px 16px", fontSize: "0.9rem" }}
              >
                WhatsApp Us
              </a>
              <a 
                href={`tel:${internationalPhone}`}
                className="btn-card-ask"
                style={{ flex: 1, textAlign: "center", padding: "12px 16px", fontSize: "0.9rem" }}
              >
                Call Us: {displayPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
